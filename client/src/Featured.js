import './Featured.css'
import Search from './Header';
import Home from './Home';
import MailList from './MailList';
function Feature({hotels, handleSearch, searchCity, handleSearchCity}){
    return(
        <div>
            
            <Search hotels={hotels} handleSearch={handleSearch} searchCity={searchCity}  handleSearchCity={handleSearchCity}/>
            <Home />
            <div className='pList'>
                <h2 className='pTitle'>Destinations</h2>
            <div className='pListItem'>
                <img src='https://therealdeal.com/wp-content/uploads/2012/11/Roosevelt-Hotel.jpg' alt='' className='pListImg' />
                <div className='pListTitle'>
                    <h3>Hotels</h3>
                </div>
          
            </div>
            
            <div className='pListItem'>
                <img src='https://media.cntraveler.com/photos/53da60a46dec627b149e66f4/master/pass/hilton-moorea-lagoon-resort-spa-moorea-french-poly--110160-1.jpg' alt='' className='pListImg' />
                <div className='pListTitle'>
                    <h3>Resorts</h3>
                </div>
            </div>
            <div className='pListItem'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Downtown_Calgary_2020-2.jpg/365px-Downtown_Calgary_2020-2.jpg' alt='' className='pListImg' />
                <div className='pListTitle'>
                    <h3>Cities</h3>
                </div>
            </div>
            <div className='pListItem'>
                <img src='https://a.cdn-hotels.com/gdcs/production182/d660/7fe239d2-a8ae-4bc2-80c5-ab80064977b9.jpg' alt='' className='pListImg' />
                <div className='pListTitle'>
                    <h3>Beaches</h3>
                </div>
            
            </div>

            <div className='pListItem'>
                <img src='https://i.natgeofe.com/n/535f3cba-f8bb-4df2-b0c5-aaca16e9ff31/giza-plateau-pyramids_16x9.jpg' alt='' className='pListImg' />
                <div className='pListTitle'>
                    <h3>Landmarks</h3>
                </div>
            </div>
            </div>
            <MailList />
        </div>
    )
}


export default Feature;