import React from 'react'
import './Bestseller.css'
import Card from '../commonfiles/Card'
import all_products from '../../assets/Product'


const Bestseller = () => {
  return (
    <div className='new_collections bestseller'>
        <h1>Top Rated pick</h1>
        <p>Curated by our shoppers. Trsuted loved and re-ordered again</p>

        <div className='collections'>

        {all_products.map((card, i)=>{
                        return <Card key={i} 
                        id={card.i} 
                        name={card.name} 
                        img={card.img} 
                        new_price={card.new_price} 
                        old_price={card.old_price}/>
                    })}


        </div>
    </div>
  )
}

export default Bestseller