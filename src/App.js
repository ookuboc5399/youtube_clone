import { BrowserRouter, Route, Routes } from "react-router-dom";
import Box from '@mui/material/Box';
import {Feed, Navbar} from "./components";

const App = () => (
  <BrowserRouter>
    <Box sx={{backgroundColor: '#000'}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App
