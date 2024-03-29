import Head from "next/head";
import logoPng from '../../public/logo.png';
import logoSvg from '../../public/logo.svg';

interface T_Props {
    title?: string
    description?: string,
    robots?: 'noindex' | 'nofollow' | 'noindex,nofollow'
}

const MainHead = ({
    title = null,
    description = null,
    robots = null
}: T_Props) => {
    title = title ? 'ChatApp | ' + title : 'ChatApp';

    return (
        <Head>
            <title>{title}</title>
            {robots && <meta name="robots" content={robots} />}
            {description && <meta name="description" content={description} />}
            <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width, height=device-height, target-densitydpi=device-dpi" />
            <link rel="icon" href={logoSvg.src} />
            <link rel="apple-touch-icon" href={logoPng.src} />
            <link rel="manifest" href="manifest.json" />
            <meta
                name="format-detection"
                content="telephone=no, date=no, email=no, address=no"
            />
        </Head>
    )
};

export default MainHead;