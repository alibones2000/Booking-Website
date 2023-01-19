import './Home.css'
// import Featured from "./Featured";

function Home(){




    return(
        <div className='homeContainer'>
            <div className='homeItem'>
                <img 
                src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/6a/2a/e4/impactantes-hoteles-en.jpg?w=500&h=400&s=1'
                alt=''
                className='homeImg'
                />
                <div className='homeTitle'>
                    <h1>Cancun</h1>
                    </div>

                </div>
                <div className='homeItem'>
                <img 
                src='https://ychef.files.bbci.co.uk/976x549/p07zy3y6.jpg'
                alt=''
                className='homeImg'
                />
                <div className='homeTitle'>
                    <h1>Cairo</h1>
                    </div>

                </div>
                <div className='homeItem'>
                <img 
                src='https://www.frommers.com/system/media_items/attachments/000/868/450/s980/Frommers-New-York-Central-Park-1190x768.jpg?1647003577'
                alt=''
                className='homeImg'
                />
                <div className='homeTitle'>
                    <h1>New York City</h1>
                    </div>

                </div>
                
                
                
            </div>
          
      
    )
}
export default Home;