import { Provider } from 'react-redux';
import Main from '../layout/main';
import ProfileSideBar from '../layout/profileSidebar';
import ReportBugModal from '../layout/reportBugModal';
// import appStore from '@/stores/appStore';
import { getCookie } from 'cookies-next';
import { NextApiRequest, NextApiResponse } from 'next';
import Head from 'next/head';
import appStore from '../stores/appStore';

/** 
 * if userToken exist
 * pass 200 statusCode 
 * and render signin page content
 * else render 403 page
**/
const ChatApp = ({ statusCode }) => {
    // axios
    // .get(process.env.APP_URL)
    // .then(res => {
    //     console.log(res.data);
        
    // })

    return (
        <>
            <Head>
                <title>App</title>
                <meta name="description" content="Generated by create next app" />
            </Head>

            {
                // statusCode === 200 ?
                <Provider store={appStore}>
                    <ReportBugModal />
                    {/* <ChatSideBar /> */}
                    <Main />
                    <ProfileSideBar />
                </Provider>

                // <PermissionDenied />
            }
        </>
    );
}

ChatApp.getInitialProps = (
    { req, res }:
    { req: NextApiRequest, res: NextApiResponse }
) => {
    const userToken = getCookie('userToken', { req, res });

    // if (userToken) {
    //     axios.post(
    //         '/api/user',
    //         { userToken }
    //     )
    //     // req.statusCode = 200;
    //     return { statusCode: 200 }
    // }

    // req.statusCode = 403;
    return { statusCode: 403 }
}

export default ChatApp;