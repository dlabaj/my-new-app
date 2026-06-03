/* eslint-disable @typescript-eslint/no-var-requires */

import path from 'path';
import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import { getVirtualMachines } from './scripts/countVirtualMachines.mjs';
import { stylePaths } from './stylePaths.js';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '9000';

export default merge(common('development'), {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    host: HOST,
    port: PORT,
    historyApiFallback: true,
    open: true,
    static: {
      directory: path.resolve('./dist'),
    },
    client: {
      overlay: true,
    },
    setupMiddlewares: (middlewares, devServer) => {
      devServer.app.get('/api/virtual-machines/count', (_req, res) => {
        const virtualMachines = getVirtualMachines();
        res.json({ count: virtualMachines.length, virtualMachines });
      });

      return middlewares;
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [...stylePaths],
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});
