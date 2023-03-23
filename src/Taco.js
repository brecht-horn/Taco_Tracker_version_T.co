import React from 'react'

export default function Taco({ taco, toggleTaco }) {

  function handleTacoClick() {
    toggleTaco(taco.id)
  }

  return (
    <div style={{backgroundColor: "#F6EDDB",marginLeft:"10px",paddingLeft:"10px", paddingRight:"5px", marginRight:"10px", marginTop: "20px", color:"#6f6e6e"}} >
       <label style={{fontFamily: "Poppins, sans-serif", fontWeight:"400"}}>
         <strong style={{color:"#de5448"}}>Rating: {taco.rank}</strong>
         <> | </>
         <strong>Name: </strong>{taco.name}
         <> | </>
         <strong>Where: </strong>{taco.location}
         <> | <em>Select:</em> </>
         <input type="checkbox" checked={taco.complete} onChange= {handleTacoClick} />
         <br></br>
         <div style={{color:"#2a2a2a", marginTop:"5px"}}><strong>Review: </strong>{taco.review}</div>
         <h1></h1>
         <hr></hr>
       </label>
       <></>
    </div>
  )
}
