import Link from 'next/link'
import { useEffect, useRef } from 'react'

const Navbar = () => {
    const navCssClass = ['bg-blue-400', 'bg-opacity-95', 'shadow-lg'];
    const navRef = useRef<HTMLInputElement>();

    const scrollFunction = () => {
        if (document.documentElement.scrollTop >= 10) {
            navRef.current?.classList.add(...navCssClass);
        }
        else {
            navRef.current?.classList.remove(...navCssClass)
        }
    }
    useEffect(() => {
        scrollFunction();
        window.addEventListener('scroll', scrollFunction);
    });

    return (
        <nav ref={navRef} className='z-40 md:h-24 h-20 duration-150 f-center filter w-full fixed top-0'>
            <div className='w-[88%] max-w-[1100px] mx-auto f-center-between'>
                <Link shallow passHref href='/' className='z-30'>
                    <img src={'logo.src'} alt='ChatApp Logo' width={120} />
                </Link>
                
                <div className='sm:w-max w-full flex justify-end flex-row items-center'>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar;