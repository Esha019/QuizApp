import {createBrowserRouter, RouterProvider} from "react-router-dom";
import FinalScreen from "./components/FinalScreen";
import Questions from "./components/Questions";
import Settings from "./components/Settings";
import {Container, Typography} from "@mui/material";
import {Box} from "@mui/system";

function App() {
const router = createBrowserRouter([
{
  path:"/",
  element: <Settings/>
},
{
  path:"/questions",
  element: <Questions/>
},
{
  path:"/score",
  element: <FinalScreen/>
},
])
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Box textAlign="center">
          <RouterProvider router={router}/>
        </Box>
      </Container>
    </div>
  );
}

export default App;
