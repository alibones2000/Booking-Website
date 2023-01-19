import './MailList.css'
import { Button } from 'react-bootstrap';

function MailList(){
    return(
        <div className='mail'>
            <h1>Book Now, Live Life!</h1>
            <span className='mailDesc'>Sign up for the best deals!</span>
            <div className='mailInputContainer'>
                <input type='text' placeholder='Your Email'/>
                <Button>Subscribe</Button>
            </div>
        </div>
    )
}
export default MailList;