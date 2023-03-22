import React from 'react'

export default function Taco({ taco, toggleTaco }) {

  function handleTacoClick() {
    toggleTaco(taco.id)
  }

  return (
    <div>
       <label style={{fontFamily: "Poppins, sans-serif", fontWeight:"200"}}>
         Rank: {taco.rank}
         <> | </>
         Name: {taco.name}
         <> | </>
         Where: {taco.location}
         <> | </>
         Review: {taco.review}
         
         <input type="checkbox" checked={taco.complete} onChange= {handleTacoClick} />
       </label>
       <></>
    </div>
  )
}
