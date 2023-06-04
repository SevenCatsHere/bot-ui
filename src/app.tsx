import React, { FC } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme';
import PageLayout from './components/page-layout';
import Pages from './pages';

const App: FC = function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <PageLayout>
          <Pages />
        </PageLayout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
