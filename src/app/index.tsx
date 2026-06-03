import * as React from 'react';
import '@patternfly/patternfly/patternfly.css';
import '@patternfly/chatbot/dist/css/main.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppLayout } from '@app/AppLayout/AppLayout';
import { AppRoutes } from '@app/routes';
import { ThemeProvider } from '@app/utils/ThemeContext';
import '@app/app.css';

const App: React.FunctionComponent = () => {
  React.useEffect(() => {
    document.documentElement.classList.add('pf-v6-theme-glass');
    return () => {
      document.documentElement.classList.remove('pf-v6-theme-glass');
    };
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
