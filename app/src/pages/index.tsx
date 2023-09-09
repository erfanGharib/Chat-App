import Btn from '@/components/btn';
import { getCookie } from 'cookies-next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useRef } from 'react';

export default function Home() {
    // make getStarted link dynamic based on userToken existence
    const router = useRouter();
    let link = useRef('/signIn');

    if (getCookie('userToken')) {
        link.current = '/app';
    }

    return (
        <>
            <Head>
                <title>Landing</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <div className='m-5 flex flex-col'>
                <h1>this is landing page</h1>
                <Btn
                    onBtnClick={() => {
                        router.push(link.current)
                    }}
                    className='mt-2 primary-btn'
                    text='get started'
                />
            </div>
        </>
    )
}
