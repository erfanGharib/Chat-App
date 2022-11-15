import "typeface-vazir";
import "typeface-spartan";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatApp from "./pages/chatApp";
import SignIn from "./pages/signIn";
import { useEffect } from "react";

const App = () => {
  // useEffect(() => {
  //   const fetchResource = async () => {
  //     const response = await fetch("http://localhost:5000/");
  //     const responseVal = await response.text();
  //     console.log(responseVal);
  //   };
  
  //   fetchResource();
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ChatApp />} />
        <Route path='/signIn' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
