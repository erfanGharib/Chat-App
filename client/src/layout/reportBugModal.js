import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { AppData } from '../App';

const ReportBugModal = () => {
    const {REPORT_BUG_MODAL_DISPLAY_STATUS, set_REPORT_BUG_MODAL_DISPLAY_STATUS} = useContext(AppData);

    return (
        REPORT_BUG_MODAL_DISPLAY_STATUS ? 
        <div className='overlay'>
            <div id='ReportBugModal' className='w-80 bg-lightMode_toLightC rounded-c'>
                <div className='f-center-between w-full h-14 border-c border-b p-2'>
                    <h3 className='ml-2'>Report Bug</h3>
                    <button 
                        className='default-btn' 
                        onClick={() => set_REPORT_BUG_MODAL_DISPLAY_STATUS(false)}
                    >
                        <FontAwesomeIcon icon={faClose} size={'lg'} className='icon-c' />
                    </button>
                </div>

                <form id='reportBugForm' className='py-2 px-3'>
                    <input className='shadow-sm' type="text" id='reportBugEmailField' placeholder='Email' />
                    <textarea className='shadow-sm' cols="30" rows="10" placeholder='Describe bug..' id='reportBugDescribeField'></textarea>
                    <input type="file" id='reportBugEmailField' />
                    <button className='primary-btn'>Report</button>
                </form>
            </div>
        </div> :
        <></>
    );
}
export default ReportBugModal;