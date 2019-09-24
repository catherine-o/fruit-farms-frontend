import React, {useState} from 'react'
import CardContainer from './CardContainer'
import Card from '../cards/Card'
import './Container.css'

export default function Container({filteredFarms}) {
    const [activeCard, setActiveCard] = useState(null)


    return (
        <div className='container'>
            <CardContainer filteredFarms={filteredFarms} />
            {activeCard ?  <Card farm={activeCard}  activeCard={true} setActiveCard={setActiveCard} /> : null }
        </div>
    )
}
