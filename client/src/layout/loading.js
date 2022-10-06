import React, { useContext } from "react";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppData } from '../App';

const Loading = () => {
    const {contentLoaded} = useContext(AppData);
    return (
        <>
            {
                contentLoaded ? 
                <></> :
                <div id="loading" className='bg-darkMode_darkC absolute w-full h-full f-center z-20 bg-opacity-95'>
                    <div className="f-center flex-col w-40">            
                        <FontAwesomeIcon icon={faCircleNotch} size='2x' className='animate-spin text-sky-500' />
                        <h3 className="mt-2 dark:text-darkMode_lightC text-lightMode_toLightC">Loading</h3>
                    </div>
                </div>
            }
        </>
    );
}

export default Loading;
