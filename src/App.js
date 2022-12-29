import "typeface-vazir";
import "typeface-spartan";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatApp from "./pages/chatApp";
import SignIn from "./pages/signIn";
import { Provider, useSelector } from 'react-redux';
import store from './store';

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
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<ChatApp />} />
          <Route path='/signIn' element={<SignIn />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
