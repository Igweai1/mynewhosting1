 import React from 'react'
 import BANNA from '../../assets/a.png'
 
 const Notefound = () => {
   return (
     <div>

        <div className="container-fluid notfound" style={{'background': 'Magenta'}}>
          <div className="row">
            <div className="col-md-10 text-center text-light">
              <h1 style={{'fontSize': '50px'}}>404</h1>
  
              <p>Page not found</p>
            </div>

          </div>

        </div>

        
{/* 
        <div className="container-fluid notfound" style={{'Background':'Magenta'}}> 

            <div className="row">
              <p> <img src={BANNA} alt="logo" /></p>
              <h1>This is not found page</h1>
              <p>Page not found</p>

                <div className="col-md-10  text-centre text-light">
                    <h1 style={{'fontSize' : '50px'}}>404</h1>
                  
                    <p>Page not found</p>
                </div>
            </div>
        </div> */}
     </div>
   )
 }
 
 export default Notefound