import { useNavigate } from 'react-router-dom'
import './payment.css'
import { Button } from 'react-bootstrap'


function Payment({payment}){
    
    const navigate = useNavigate()
 
    
    return(
        <div class="container mt-5 px-5">

            <div class="mb-4">

                <h2>Confirm order and pay</h2>
            <span>please make the payment, after that you can enjoy all the features and benefits.</span>
                
            </div>

        <div class="row">

            <div class="col-md-8">
                

                <div class="card p-3">

                    <h6 class="text-uppercase">Payment details</h6>
                    <div class="inputbox mt-3"> <input type="text" name="name" class="form-control" required="required" /> <span>Name on card</span> </div>


                    <div class="row">

                        <div class="col-md-6">

                            <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required="required" /> <i class="fa fa-credit-card"></i> <span>Card Number</span> 


                            </div>
                            

                        </div>

                        <div class="col-md-6">

                             <div class="d-flex flex-row">


                                 <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required="required" /> <span>Expiry</span> </div>

                              <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required="required" /> <span>CVV</span> </div>
                                 

                             </div>
                            

                        </div>
                        

                    </div>



                    <div class="mt-4 mb-4">

                        <h6 class="text-uppercase">Billing Address</h6>


                        <div class="row mt-3">

                            <div class="col-md-6">

                                <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required="required" /> <span>Street Address</span> </div>
                                

                            </div>


                             <div class="col-md-6">

                                <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required="required" /> <span>City</span> </div>
                                

                            </div>


                            

                        </div>


                        <div class="row mt-2">

                            <div class="col-md-6">

                                <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required="required" /> <span>State/Province</span> </div>
                                

                            </div>


                             <div class="col-md-6">

                                <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required="required" /> <span>Zip code</span> </div>
                                

                            </div>


                            

                        </div>

                    </div>

                </div>


                <div class="mt-4 mb-4 d-flex justify-content-between">


                            <span>Previous step</span>


                            <Button onClick={()=>navigate('/confirmation')}class="btn btn-success px-3">Book</Button>


                            

                        </div>

            </div>

            <div class="col-md-4">

                <div class="card card-blue p-3 text-white mb-3">

                   <span>You have to pay</span>
                    <div class="d-flex flex-row align-items-end mb-3">
                        <h1 class="mb-0 yellow">{payment?.payments ? "$" + payment.payments[0].total : null}</h1> 
                    </div>

                    <span>Enjoy all the features and perk after you complete the payment</span>
                    <a href="#" class="yellow decoration">You're Close!</a>

                    <div class="hightlight">

                        <span>Refunds Guranteed for the next 48 Hours!</span>
                        

                    </div>
                    
                </div>
                
            </div>
            
        </div>
          

      </div>
    )
}
export default Payment