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
                    <div className='f-center-between w-full h-14 border-c p-2'>
                        <h3 className='ml-2'>Report Bug</h3>
                        <span
                            className='default-btn'
                            onClick={() => set_REPORT_BUG_MODAL_DISPLAY_STATUS(false)}
                        >
                            <FontAwesomeIcon icon={faClose} size={'lg'} className='icon-c' />
                        </span>
                    </div>
                    
                    <form
                        className='pb-2 px-3 f-start flex-col'
                        id='reportBugForm'
                        ref={reportBugForm}
                        encType='multipart/form-data'
                    >
                        <input type="text" placeholder='Email' />
                        <input type="text" placeholder='Subject' className='!mb-0 !rounded-b-none' />
                        <textarea cols="30" rows="10" placeholder='Describe bug..' className='!mt-0 !border-t-0 !rounded-t-none' ></textarea>
                        <input
                            onChange={e => setFile(e.target.files[0])}
                            className="block w-full text-sm text-gray-900 rounded-c border-c border cursor-pointer dark:text-darkMode_lightC focus:outline-none dark:placeholder-gray-400"
                            type="file"
                            name="uploaded_file"
                            accept="image/png, image/gif, image/jpeg"
                        />

                        <span
                            className='primary-btn w-full block text-center'
                            role='button'
                            onClick={sendReportBugData}
                        >
                            Report
                        </span>
                    </form>
                </div>
            </div> :
            <></>
    );
}
export default ReportBugModal;