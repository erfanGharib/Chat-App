import Main from './layout/main';
import "typeface-vazir";
import "typeface-spartan";
import ChatSideBar from './layout/chat-sidebar';
import ProfileSideBar from './layout/profile-sidebar';
import Loading from './layout/loading';
import { createContext, useState } from 'react';

const ContentLoadedContext = createContext();
const App = () => {
  const [contentLoaded, setContentLoaded] = useState(false);
  return (
    <ContentLoadedContext.Provider value={{contentLoaded, setContentLoaded}}>
      <Loading />
      <ChatSideBar />
      <Main />
      <ProfileSideBar />
    </ContentLoadedContext.Provider>
  );
}

export default App;
export { ContentLoadedContext }
