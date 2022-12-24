import Main from '../layout/main';
import ChatSideBar from '../layout/chat-sidebar';
import ProfileSideBar from '../layout/profile-sidebar';
import Loading from '../layout/loading';
import { createContext, useState } from 'react';
import ReportBugModal from '../layout/reportBugModal';

const AppData = createContext();
const ChatApp = () => {
  // when domContent loaded this became true - and stop showing loading page
  const [contentLoaded, setContentLoaded] = useState(false);
  const [pushSlideData, setPushSlideData] = useState({
    translate: 'translate-x-0',
    status: true
  });
  const [PROFILE_DISPLAY_STATUS, set_PROFILE_DISPLAY_STATUS] = useState(false);
  const [currentChat, setCurrentChat] = useState({
    translate: 'translate-x-full',
    id: 0,
  });
  const screenWidth = window.screen.width <= 768; 
  // display and hide reportBugModal
  const [REPORT_BUG_MODAL_DISPLAY_STATUS, set_REPORT_BUG_MODAL_DISPLAY_STATUS] = useState(false);

  return (
    <AppData.Provider 
      value={{
        contentLoaded, 
        setContentLoaded,
        pushSlideData, 
        setPushSlideData,
        PROFILE_DISPLAY_STATUS, 
        set_PROFILE_DISPLAY_STATUS,
        REPORT_BUG_MODAL_DISPLAY_STATUS, 
        set_REPORT_BUG_MODAL_DISPLAY_STATUS,
        currentChat, setCurrentChat,
        screenWidth
      }}
    >
      {/* <Loading /> */}
      <ReportBugModal />
      <ChatSideBar />
      <Main />
      <ProfileSideBar />
    </AppData.Provider>
  );
}

export default ChatApp;
export { AppData }
