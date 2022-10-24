import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { AppData } from '../pages/chatApp';
import axios from 'axios';
import { baseURL } from '..';

const ReportBugModal = () => {
    const { REPORT_BUG_MODAL_DISPLAY_STATUS, set_REPORT_BUG_MODAL_DISPLAY_STATUS } = useContext(AppData);
    const reportBugForm = React.createRef();

    // const sendReportBugData = () => {
    //     axios.post(
    //         `${baseURL}/api/reportbug`,
    //         Object.values(reportBugForm.current).map(v => v.value.trim()).splice(0,4)
    //     )
    //     .then(res => console.log(res))
    // }

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

                    {/* <form ref={reportBugForm} action="/api/reportbug" encType="multipart/form-data" method="post">
                        <div class="form-group">
                            <input type="file" class="form-control-file" name="uploaded_file" />
                            <input type="text" class="form-control" placeholder="Number of speakers" name="nspeakers" />
                            <input type="submit" value="Get me the stats!" class="btn btn-default" />            
                        </div>
                    </form> */}
                    <form action='/api/reportbug' method='post' className='py-2 px-3' ref={reportBugForm} encType='multipart/form-data'>
                        <div class="form-group">
                            <input className='shadow-sm' type="text" placeholder='Email' />
                            <input className='shadow-sm' type="text" placeholder='Subject' />
                            <textarea className='shadow-sm' cols="30" rows="10" placeholder='Describe bug..'></textarea>
                            <input 
                                className="block w-full text-sm text-gray-900 rounded-c border-c border cursor-pointer dark:text-darkMode_lightC focus:outline-none dark:placeholder-gray-400" 
                                type="file" 
                                name="uploaded_file"
                            />

                            <input
                                className='primary-btn'
                                type='submit'
                                value='Report'
                                // onClick={e => { e.preventDefault(); sendReportBugData() }}
                            />
                        </div>
                    </form>
                </div>
            </div> :
            <></>
    );
}
export default ReportBugModal;