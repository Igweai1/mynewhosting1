// import React from 'react'
// import './card.css'
// import { Link } from 'react-router-dom'


// // This is a reuseable card for all components
// const Card = (props) =>{

    
//   return (
//     <div className='item'>
//         <img src={props.img} alt="" />
//         <p>{props.name}</p>
//         <div className="item-prices item text-center">
//             <div className="item-price-new ">
//                 ${props.new_price}
//             </div>
//             <div className="item-price-old">
//                 ${props.old_price}
//             </div>
//         </div>


//         <Link to={`/product/${id}`}>
        
//             <button className='btn btn-sm btn-outline-primary mt-3'>Add to Cart</button>
//         </Link>
      
//     </div>
//   )
// }

// export default Card


import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'


// This is a reuseable card for all components
const Card = ({id,name,img,new_price,old_price}) => {

  return (
    <div className='container item '>
        <img src={img} alt={name} />
        <p>{name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${new_price}
            </div>
            <div className="item-price-old">
                ${old_price}
            </div>
        </div>
       <Link to={`/product/${id}`}>
        <button className='btn btn-sm btn-outline-primary mt-3'>Add to cart</button>
        </Link>

    </div>
  )
}

export default Card
