import { ThemeProvider } from '@emotion/react';
import Support from './pages/support';
import Tickets from './pages/Tickets';
import { ContextProvider } from './state/globalContext';
import theme from './theme';
const App = () => {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <Support />
        <Tickets />
      </ThemeProvider>
    </ContextProvider>
  );
};

export default App;
