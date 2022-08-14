import './App.css';
import Main from './layout/main';
import "typeface-vazir";
import "typeface-spartan";
import ChatSideBar from './layout/chat-sidebar';
import ProfileSideBar from './layout/profile-sidebar';

const App = () => {
  return (
    <>
      <ChatSideBar />
      <Main />
      <ProfileSideBar />
    </>
  );
}

export default App;
