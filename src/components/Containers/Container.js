import React, {useState} from 'react'
import CardContainer from './CardContainer'
import Card from '../cards/Card'
import './Container.css'

export default function Container({farms}) {
    const [activeCard, setActiveCard] = useState(null)

    return (
        <div className='container'>
            <CardContainer farms={farms} />
            {activeCard ?  <Card farm={activeCard}  activeCard={true} setActiveCard={setActiveCard} /> : null }
        </div>
    )
}
