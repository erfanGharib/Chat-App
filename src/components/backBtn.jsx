import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BackBtn = props => {
    return (
        <span id='back-btn' className='default-btn ml-2' onClick={props.func}>
            <FontAwesomeIcon icon={faArrowLeft} size={'lg icon-c'} />
        </span>
    );
}
export default BackBtn;