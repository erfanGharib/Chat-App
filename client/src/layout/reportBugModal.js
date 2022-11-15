import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { AppData } from '../pages/chatApp';
import axios from 'axios';
import { baseURL } from '..';
import sendFile from '../middleware/sendFile'; 

const ReportBugModal = () => {
    const { REPORT_BUG_MODAL_DISPLAY_STATUS, set_REPORT_BUG_MODAL_DISPLAY_STATUS } = useContext(AppData);
    const reportBugForm = React.createRef();
    // set file when user choosed one
    const [file, setFile] = useState('');

    /** 
     * send text data using @sendReportBugData
     * send file using @sendFile
     * two saparate api
    */
    const sendReportBugData = e => {
        axios.post(
            `${baseURL}/api/reportbug`,
            Object.values(reportBugForm.current).map(v => v.value).splice(0, 3)
        )
        .then(res => console.log(res));

        sendFile(e, file);
    }

    return (
        REPORT_BUG_MODAL_DISPLAY_STATUS ?
            <div className='overlay'>
                <div id='ReportBugModal' className='w-80 dark:bg-darkMode_lightC bg-lightMode_toLightC rounded-c'>
                    <div className='f-center-between w-full h-14 border-c border-b p-2'>
                        <h3 className='ml-2'>Report Bug</h3>
                        <button
                            className='default-btn'
                            onClick={() => set_REPORT_BUG_MODAL_DISPLAY_STATUS(false)}
                        >
                            <FontAwesomeIcon icon={faClose} size={'lg'} className='icon-c' />
                        </button>
                    </div>
                    
                    <form
                        className='py-2 px-3'
                        id='reportBugForm'
                        ref={reportBugForm}
                        encType='multipart/form-data'
                    >
                        <input className='shadow-sm' type="text" placeholder='Email' />
                        <input className='shadow-sm' type="text" placeholder='Subject' />
                        <textarea className='shadow-sm' cols="30" rows="10" placeholder='Describe bug..'></textarea>
                        <input
                            onChange={e => setFile(e.target.files[0])}
                            className="block w-full text-sm text-gray-900 rounded-c border-c border cursor-pointer dark:text-darkMode_lightC focus:outline-none dark:placeholder-gray-400"
                            type="file"
                            name="uploaded_file"
                            accept="image/png, image/gif, image/jpeg"
                        />

                        <input
                            className='primary-btn'
                            type='button'
                            value='Report'
                            onClick={sendReportBugData}
                        />
                    </form>
                </div>
            </div> :
            <></>
    );
}
export default ReportBugModal;