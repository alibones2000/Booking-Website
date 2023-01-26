import "./confirmation.css"

function Confirmation(){
    const rndNum = Math.floor(100000 + Math.random() * 900000)
    console.log(rndNum)
    return(
        <div className="main">
            <div className="conf-holder">
                <h1 className="thank"> ✅ Thank you for booking with Dream Booking!</h1>
            <div className="num-holder">
                <h2 className="conf">Confirmation Number: {rndNum}</h2>
            </div>
            </div>
        </div>
    )
}

export default Confirmation;