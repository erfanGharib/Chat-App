import Main from '../layout/main';
import ChatSideBar from '../layout/chat-sidebar';
import ProfileSideBar from '../layout/profile-sidebar';
import Loading from '../layout/loading';
import { createContext, useState } from 'react';
import ReportBugModal from '../layout/reportBugModal';

const AppData = createContext();
const ChatApp = () => {
  const [contentLoaded, setContentLoaded] = useState(false);
  const [PUSH_SLIDE_DISPLAY_STATUS, set_PUSH_SLIDE_DISPLAY_STATUS] = useState(false);
  const [PROFILE_DISPLAY_STATUS, set_PROFILE_DISPLAY_STATUS] = useState(false);
  const [REPORT_BUG_MODAL_DISPLAY_STATUS, set_REPORT_BUG_MODAL_DISPLAY_STATUS] = useState(false);

  return (
    <AppData.Provider 
      value={{
        contentLoaded, 
        setContentLoaded,
        PUSH_SLIDE_DISPLAY_STATUS, 
        set_PUSH_SLIDE_DISPLAY_STATUS,
        PROFILE_DISPLAY_STATUS, 
        set_PROFILE_DISPLAY_STATUS,
        REPORT_BUG_MODAL_DISPLAY_STATUS, 
        set_REPORT_BUG_MODAL_DISPLAY_STATUS
      }}
    >
      <Loading />
      <ReportBugModal />
      <ChatSideBar />
      <Main />
      <ProfileSideBar />
    </AppData.Provider>
  );
}

export default ChatApp;
export { AppData }
