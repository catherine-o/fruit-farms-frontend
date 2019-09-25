import React, {useState} from 'react'
import CardContainer from './CardContainer'
import Card from '../cards/Card'
import './Container.css'

export default function Container({filteredFarms}) {
    const [activeCard, setActiveCard] = useState(null)
    const img = 'https://images.unsplash.com/photo-1452804882841-573355623310?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'


    return (
        <div className='container'>
            {activeCard ?  <Card farm={activeCard}  activeCard={true} setActiveCard={setActiveCard} img={img} /> : null }
            <CardContainer filteredFarms={filteredFarms} setActiveCard={setActiveCard}/>
        </div>
    )
}
