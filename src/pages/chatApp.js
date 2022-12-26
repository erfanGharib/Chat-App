import Main from '../layout/main';
import ChatSideBar from '../layout/chat-sidebar';
import ProfileSideBar from '../layout/profile-sidebar';
import Loading from '../layout/loading';
import { createContext, useRef, useState } from 'react';
import ReportBugModal from '../layout/reportBugModal';

const AppData = createContext();
const ChatApp = () => {
  // when domContent loaded this became true - and stop showing loading page
  // const [contentLoaded, setContentLoaded] = useState(false);
  console.log('chatapp');
  /** 
   * setting and contacts part are in @PushSlide component
   * to display it, i used "transform_translate" on css
   * status define that wich slide must display
   * true = @Contacts , false = @Setting 
  */
  const [pushSlideData, setPushSlideData] = useState({
    translate: 'translate-x-0',
    status: true
  });
  const [PROFILE_DISPLAY_STATUS, set_PROFILE_DISPLAY_STATUS] = useState(false);

  /** Similar structure from @PushSlide for displaying currentChat on mobile */
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
        // contentLoaded,
        // setContentLoaded,
        pushSlideData,
        setPushSlideData,
        PROFILE_DISPLAY_STATUS,
        set_PROFILE_DISPLAY_STATUS,
        REPORT_BUG_MODAL_DISPLAY_STATUS,
        set_REPORT_BUG_MODAL_DISPLAY_STATUS,
        currentChat, setCurrentChat,
        screenWidth,
        // userData, setUserData
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
