import { Container } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import RouterMaping from "./components/Router/RouterMaping";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container sx={{ color: "white" }}>
        <RouterMaping />
      </Container>
    </div>
  );
}

export default App;
