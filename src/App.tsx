import { Box } from "@mui/material";
import TopNavSupport from "./Components/TopNav/Support/TopNavSupport";
import "./App.css";
import Support from "./scene/Support/Support";
import TopNavTickets from "./Components/TopNav/Tickets/TopNavTickets";
import Table from "./Components/Table/Table";
import { ContextProvider } from "./Components/store/Ctx";
const App = () => {
  return (
    <ContextProvider>
      <Box>
        <Box>
          <TopNavSupport />
          <Support />
        </Box>
        <Box>
          <TopNavTickets />
          <Table />
        </Box>
      </Box>
    </ContextProvider>
  );
};

export default App;
