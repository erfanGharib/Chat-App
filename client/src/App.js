import Main from './layout/main';
import "typeface-vazir";
import "typeface-spartan";
import ChatSideBar from './layout/chat-sidebar';
import ProfileSideBar from './layout/profile-sidebar';
import Loading from './layout/loading';
import { createContext, useState } from 'react';

const AppData = createContext();
const App = () => {
  const [contentLoaded, setContentLoaded] = useState(false);
  const [PUSH_SLIDE_DISPLAY_STATUS, set_PUSH_SLIDE_DISPLAY_STATUS] = useState(false);
  const [PROFILE_DISPLAY_STATUS, set_PROFILE_DISPLAY_STATUS] = useState(false);

  return (
    <AppData.Provider 
      value={{
        contentLoaded, 
        setContentLoaded,
        PUSH_SLIDE_DISPLAY_STATUS, 
        set_PUSH_SLIDE_DISPLAY_STATUS,
        PROFILE_DISPLAY_STATUS, 
        set_PROFILE_DISPLAY_STATUS
      }}
    >
      <Loading />
      <ChatSideBar />
      <Main />
      <ProfileSideBar />
    </AppData.Provider>
  );
}

export default App;
export { AppData }
