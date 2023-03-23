import React from 'react'
import Taco from './Taco'

export default function TacoList({ tacos, toggleTaco }) {
  
    const sortedTacos = tacos.sort((a,b) =>{a-b})
  
  return (
   
   sortedTacos.map(taco => {
    return <Taco style={{marginTop: "50px", backgroundColor: "#F6EDDB"}} key={taco.id} toggleTaco={toggleTaco} taco={taco} />
   })
  )
}
