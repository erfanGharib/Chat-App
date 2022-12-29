import Main from '../layout/main';
import ChatSideBar from '../layout/chat-sidebar';
import ProfileSideBar from '../layout/profile-sidebar';
import ReportBugModal from '../layout/reportBugModal';
import { useSelector } from 'react-redux';

export const screenWidth = window.screen.width <= 768;

const ChatApp = () => {
  /** 
   * setting and contacts part are in @PushSlide component
   * to display it, i used "transform_translate" on css
   * status define that wich slide must display
   * true = @Contacts , false = @Setting 
  */

  // const [pushSlideData, setPushSlideData] = useState({
  //   translate: 'translate-x-0',
  //   status: true
  // });
  // const [PROFILE_DISPLAY_STATUS, set_PROFILE_DISPLAY_STATUS] = useState(false);

  /** Similar structure from @PushSlide for displaying currentChat on mobile */
  // const [currentChat, setCurrentChat] = useState({
  //   translate: 'translate-x-full',
  //   id: 0,
  // });
  // display and hide reportBugModal
  // const [REPORT_BUG_MODAL_DISPLAY_STATUS, set_REPORT_BUG_MODAL_DISPLAY_STATUS] = useState(false);

  return (
    <>
      <ReportBugModal />
      <ChatSideBar />
      <Main />
      {/* <ProfileSideBar /> */}
    </>
  );
}

export default ChatApp;
export const AppData = '';