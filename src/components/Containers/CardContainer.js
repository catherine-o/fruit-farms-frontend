import React from 'react'
import Card from '../cards/Card'
import './Container.css'

export default function CardContainer({farms, setActiveCard}) {

    const farmCards = farms.map(farm => (
        <Card farm={farm} setActiveCard={setActiveCard} />
    ))

    return (
        <div className='card-container'>
            {farmCards}
        </div>
    )
}
