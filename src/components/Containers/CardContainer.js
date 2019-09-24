import React from 'react'
import Card from '../cards/Card'
import './Container.css'

export default function CardContainer({filteredFarms, setActiveCard}) {


    const createCards = (farms) => {
        return farms.map(farm => {
          return <Card key={farm.id} farm={farm} />
        })
    }

    return (
        <div className='card-container'>
            {createCards(filteredFarms)}
        </div>
    )
}
