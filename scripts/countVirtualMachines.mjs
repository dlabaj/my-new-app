import { execSync } from 'node:child_process';
import { existsSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import path from 'node:path';

/** @typedef {{ name: string, provider: string }} VirtualMachine */

/** @returns {VirtualMachine[]} */
export function getVirtualMachines() {
  /** @type {VirtualMachine[]} */
  const virtualMachines = [];

  const utmDir = path.join(homedir(), 'Library/Containers/com.utmapp.UTM/Data/Documents');
  if (existsSync(utmDir)) {
    readdirSync(utmDir)
      .filter((entry) => entry.endsWith('.utm'))
      .forEach((entry) => {
        virtualMachines.push({
          name: entry.replace(/\.utm$/, ''),
          provider: 'UTM',
        });
      });
  }

  try {
    const parallelsOutput = execSync('prlsctl list -a --no-header 2>/dev/null', { encoding: 'utf8' });
    parallelsOutput
      .trim()
      .split('\n')
      .filter(Boolean)
      .forEach((line) => {
        const name = line.replace(/^\s*\{[^}]+\}\s*/, '').trim();
        if (name) {
          virtualMachines.push({ name, provider: 'Parallels' });
        }
      });
  } catch {
    // Parallels not installed or unavailable
  }

  try {
    const virtualBoxOutput = execSync('VBoxManage list vms 2>/dev/null', { encoding: 'utf8' });
    virtualBoxOutput
      .trim()
      .split('\n')
      .filter(Boolean)
      .forEach((line) => {
        const match = line.match(/^"(.+?)"/);
        if (match) {
          virtualMachines.push({ name: match[1], provider: 'VirtualBox' });
        }
      });
  } catch {
    // VirtualBox not installed or unavailable
  }

  try {
    const libvirtOutput = execSync('virsh list --all --name 2>/dev/null', { encoding: 'utf8' });
    libvirtOutput
      .trim()
      .split('\n')
      .filter(Boolean)
      .forEach((name) => {
        virtualMachines.push({ name, provider: 'libvirt' });
      });
  } catch {
    // libvirt not installed or unavailable
  }

  return virtualMachines;
}

export function countVirtualMachines() {
  return getVirtualMachines().length;
}
