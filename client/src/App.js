import "typeface-vazir";
import "typeface-spartan";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatApp from "./pages/chatApp";
import SignIn from "./pages/signIn";

const App = () => {
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
