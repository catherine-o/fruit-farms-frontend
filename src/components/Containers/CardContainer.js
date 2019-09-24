import React from 'react'
import Card from '../cards/Card'
import './Container.css'

export default function CardContainer({filteredFarms, setActiveCard}) {


    const createCards = (farms) => {
        return farms.map(farm => {
          return <Card key={farm.id} farm={farm} setActiveCard={setActiveCard}/>
        })
    }

    return (
        <div className='card-container'>
            {createCards(filteredFarms)}
        </div>
    )
}
