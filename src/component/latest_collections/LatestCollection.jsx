import React from 'react'
import Card from '../commonfiles/Card'
import latest_collections from '../../assets/New_collection'
import './latestcollection.css'

const LatestCollection = () => {
  return (
    <div>
       
            <div className="new_collections">
            <h1>Latest Collections 👍</h1>
            <p>Explore our latest collection varieties of items</p>

            <hr />

          
                <div className='collections'>

                    {latest_collections.map((card, i)=>{
                        return <Card key={i} id={card.i} name={card.name} img={card.img} new_price={card.new_price} old_price={card.old_price}/>
                    })}

                </div>
            </div>


            
            </div>
    
        
        
       
  )
}

export default LatestCollection