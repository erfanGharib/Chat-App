import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
// import { baseURL } from '..';
// import sendFile from '../utils/sendFile';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from '../stores/appStore/reducers/_reportBugModal';
import { T_AppStoreReducers } from '@/types/T_AppStoreReducers';

const ReportBugModal = () => {
    const dispatch = useDispatch();
    const reportBugForm: { current: HTMLFormElement } = useRef();
    // set file when user choosed one
    const [file, setFile] = useState('');
    const { status } = useSelector((state: T_AppStoreReducers) => state.$_reportBugModal);

    /** 
     * send text data using @sendReportBugData
     * send file using @sendFile
     * two saparate api
    */
    const sendReportBugData = () => {
        axios.post(
            `/api/reportBug`,
            Object.values(reportBugForm.current).map(v => v.value).splice(0, 3)
        )
        .then(res => console.log(res));

        // sendFile(e, file);
    }

    return (
        status ?
            <div className='overlay'>
                <div id='ReportBugModal' className='w-80 dark:bg-darkMode_lightC bg-lightMode_toLightC rounded-c'>
                    <div className='f-center-between w-full h-14 border-c p-2'>
                        <h3 className='ml-2'>Report Bug</h3>
                        <span
                            className='default-btn'
                            onClick={() => dispatch(hideModal())}
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
                        <input type="text" placeholder='Subject' className='mt-2 !rounded-b-none' />
                        <textarea cols={30} rows={10} placeholder='Describe bug..' className='!border-y-0 !rounded-none' ></textarea>
                        <input
                            // onChange={e => setFile(e.target.files[0])}
                            className="block !rounded-t-none w-full text-sm text-gray-900 cursor-pointer dark:text-darkMode_lightC focus:outline-none dark:placeholder-gray-400"
                            type="file"
                            name="uploaded_file"
                            accept="image/png, image/gif, image/jpeg"
                        />

                        <span
                            className='primary-btn !border-none mt-2 mb-1 w-full block text-center'
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