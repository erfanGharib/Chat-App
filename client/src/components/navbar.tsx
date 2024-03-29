import { deleteCookie, getCookie } from "cookies-next";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { sharedConfigs } from "../../../shared/sharedConfigs";
import logo from '../../public/logo.svg';

type T_Links = Array<
    { title: string } & 
    ({ link?: string } | { onClick?: (e: Event) => void })
>

const Navbar = () => {
    const navCssClass = ['bg-blue-400', 'bg-opacity-95', 'shadow-lg'];

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        setIsLoggedIn(getCookie('token')?.startsWith(sharedConfigs.BEARER_KEYWORD) ?? false)
    }, [])
    // const navRef = useRef<HTMLInputElement>();

    // const scrollFunction = () => {
    //     if (document.documentElement.scrollTop >= 10) {
    //         navRef.current?.classList.add(...navCssClass);
    //     }
    //     else {
    //         navRef.current?.classList.remove(...navCssClass)
    //     }
    // }
    // useEffect(() => {
    //     scrollFunction();
    //     window.addEventListener('scroll', scrollFunction);
    // });

    const links: T_Links = [
        {
            title: 'App',
            link: '/app',
        }
    ]

    if (isLoggedIn) {
        links.push(
            {
                title: 'Logout',
                onClick: (e) => {
                    e.preventDefault()
                    deleteCookie('token');
                    location.reload()
                }
            }
        )
    } else {
        links.push(
            {
                title: 'Signup',
                link: '/auth/signup',
            },
            {
                title: 'Login',
                link: '/auth/login',
            },
        )
    }

    return (
        <nav className='z-40 md:h-24 h-20 duration-150 f-center filter w-full fixed top-0'>
            <div className='w-[88%] max-w-[1100px] mx-auto f-center-between'>
                <Link shallow passHref href='/' className='z-30 flex w-40 f-center gap-2'>
                    <img src={logo.src} alt='ChatApp Logo' width={35} />
                    <h1 className='whitespace-nowrap'>Chat App</h1>
                </Link>

                <div className='sm:w-11 w-full flex justify-end flex-row items-center md:gap-x-5 gap-x-3'>
                    {
                        links.map((val, index) => (
                            <Link
                                key={index}
                                shallow
                                href={val?.['link'] ?? '#'}
                                onClick={val?.['onClick']}
                                className='hover:underline'
                            >
                                {val.title}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;