import React from 'react'
import './Cards.css'

export default function Card({farm, setActiveCard, activeCard, img}) {

    const {item, business, location_1_city, location_1_state} = farm

    return (
        <div className={ activeCard ? 'active-card' : 'card'} onClick={() => setActiveCard(farm)} >
            <h2>{item}</h2>
            <h3>{business}</h3>
            {activeCard
                ? ( <section className='details'>
                        <p>{location_1_city}, {location_1_state}</p>
                        {/* <img src={img} alt='fruit' className='active-image' /> */}
                    </section>
            )
            :null
        }
            {activeCard
                    ? ( <section className='details-image'>
                            <img src={img} alt='fruit' className='active-image' />
                        </section>
                )
                :null
            }
        </div>
    )
}
