import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { AppData } from '../pages/chatApp';
import axios from 'axios';
import { baseURL } from '..';

const ReportBugModal = () => {
    const { REPORT_BUG_MODAL_DISPLAY_STATUS, set_REPORT_BUG_MODAL_DISPLAY_STATUS } = useContext(AppData);
    const reportBugForm = React.useRef();

    // let arr = []; 
    // Object.values(reportBugForm.current).map((v, i) => {
    //     arr[i] = v.value; 
    // })
    // console.log(arr);
    const sendReportBugData = () => {
        axios({
            method: 'post',
            headers: {
                'Content-Type':'application/json',
            },
            url: `${baseURL}/api/reportbug`,
            body: JSON.stringify({name: 'erfan'})
        })
        .then(json => console.log(json))
        // axios
        // .post(`${baseURL}/api/reportbug`, {
        //     body: (
        //         Object.values(reportBugForm.current).map((v, i) => {
        //             if (i < 4) return v.value;
        //         })
        //     )
        // })
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

                    <form id='reportBugForm' className='py-2 px-3' ref={reportBugForm}>
                        <input className='shadow-sm' type="text" id='reportBugEmailField' placeholder='Email' />
                        <input className='shadow-sm' type="text" id='reportBugSubjectField' placeholder='Subject' />
                        <textarea className='shadow-sm' cols="30" rows="10" placeholder='Describe bug..' id='reportBugDescribeField'></textarea>
                        <input type="file" id='reportBugEmailField' />
                        <button
                            className='primary-btn'
                            onClick={e => {e.preventDefault(); sendReportBugData()}}
                        >Report</button>
                    </form>
                </div>
            </div> :
            <></>
    );
}
export default ReportBugModal;