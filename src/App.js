import React, { useState, useRef, useEffect } from 'react';
import BG from './images/BG.jpg'
import Truck from './images/TacoTruck&Logo.png'
import TacoList from "./TacoList"
import { v4 as uuidv4 } from 'uuid';
// import RainingTacos from "./images/RainingTacos.mp3"
// import ReactAudioPlayer from 'react-audio-player'

const LOCAL_STORAGE_KEY = "tacoApp.tacos"

function App () {

  const [tacos, setTacos] = useState([]);
  const tacoNameRef = useRef()
  const tacoRankRef = useRef()
  const tacoLocRef = useRef()
  const tacoRevRef = useRef()


  useEffect(() => {
    const storedTacos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTacos) setTacos(storedTacos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tacos) )
  }, [tacos])

  function toggleTaco(id) {
    const newTacos = [...tacos]
    const taco = newTacos.find(taco => taco.id === id)
    taco.complete = !taco.complete
    setTacos(newTacos)
  }

  function handleAddTaco(e) {
    const name= tacoNameRef.current.value
    const rank= tacoRankRef.current.value
    const location = tacoLocRef.current.value
    const review= tacoRevRef.current.value
    if (name === "" || rank==="" || location==="" || review==="") return
    setTacos(prevTacos => {
      return [...prevTacos, { id: uuidv4(), name:name, complete:false, rank:rank, location:location, review:review }]
    })
    tacoNameRef.current.value = null
    tacoRankRef.current.value = null
    tacoLocRef.current.value = null
    tacoRevRef.current.value = null
  }


  function handleDeleteTacos(){
    const newTacos = tacos.filter(taco => !taco.complete)
    setTacos(newTacos)
  }

  return (
    
    
    <div style={{ display: "flex",flexDirection: "column", backgroundImage:`url(${BG})`,backgroundRepeat:"repeat",backgroundSize:"cover",height:"100vh",width:"100vw", color:"White", justifyContent:"center", alignItems: "center", padding: "0", margin:"0" }}>

       <div style={{ display: "flex", flexDirection:"column", position:"top", padding:"0", backgroundImage:`url(${Truck})`,backgroundRepeat:"repeat",backgroundSize:"cover",height:"80vh",width:"80vw", color:"White", justifyContent:"center", alignItems: "center",}}></div>

      <div style={{ display: "flex", flexDirection:"row", position:"top", padding:"0",color:"White", justifyContent:"center", alignItems: "center",}}>
        <input style={{fontFamily: "Poppins, sans-serif", fontWeight:"600"}} ref={tacoRankRef} type="text" placeholder="Rank (out of 100)" size="20px" maxLength="4"/>
        <input style={{fontFamily: "Poppins, sans-serif", fontWeight:"600"}} ref={tacoNameRef} type="text" placeholder="Taco Name"/>
        <input style={{fontFamily: "Poppins, sans-serif", fontWeight:"600"}} ref={tacoLocRef} type="text" placeholder="Location"/>
        <input style={{fontFamily: "Poppins, sans-serif", fontWeight:"600"}} ref={tacoRevRef} type="text" placeholder="Review"/>
        <button style={{fontFamily: "Poppins, sans-serif", fontWeight:"600"}} onClick={handleAddTaco}> Add Taco</button>
        
      </div>

      <div style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}> 
        <div style={{fontFamily: "Poppins, sans-serif", fontWeight:"600", fontSize: "20pt"}}>Total Tacos Tracked: {tacos.length}</div>
        <TacoList tacos={tacos} toggleTaco={toggleTaco}/> 
        <p></p>
        <button style={{fontFamily: "Poppins, sans-serif", fontWeight:"400", width:"175px", color:"#8B0000"}}onClick={handleDeleteTacos}> Delete Selected Tacos</button>
        <p></p>
      </div>

      

       

      {/* <ReactAudioPlayer
       src={RainingTacos}
       autoPlay="true"
       /> */}

    </div>
     
     
    //  <div 
    //  style={{ display: "flex",flexDirection: "column-reverse", backgroundImage:`url(${BG})`,backgroundRepeat:"repeat",backgroundSize:"cover",height:"100vh",width:"100vw", color:"White", justifyContent:"center", alignItems: "center" }}
    //  >
    //    <div>
    //      <img
    //      src= {Logo}
    //      height="25%"
    //      width="25%"
    //      />
    //      <img
    //      src= {Truck}
    //      height="100%"
    //      width="50%"
    //      />
    //    </div>
    // </div>
  );
};

export default App;