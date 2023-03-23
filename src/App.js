import React, { useState, useRef, useEffect } from 'react';
import BG from './images/BG.jpg'
import Truck from './images/TacoTruck&Logox2.png'
import TacoMenu from './images/TacoMenu3.jpg'
import TacoMenuTop from './images/TacoMenuTOP2.jpg'
import TacoMenuBottom from './images/TacoMenuBOTTOMx2_v3.jpg'
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


  function handleDeleteTacos(e){
    e.preventDefault();
    const newTacos = tacos.filter(taco => !taco.complete)
    setTacos(newTacos)
  }

  return (
    
    // ALL DIV
    <div style={{ display: "flex", flexDirection:"column", backgroundImage:`url(${BG})`, backgroundRepeat:"repeat", color:"White", justifyContent:"center", padding: "0", margin:"0" }}>

       {/* LOGO AND TRUCK */}
       <div style={{ display: "flex", flexShrink:"0", position:"top", padding:"0", backgroundImage:`url(${Truck})`,backgroundRepeat:"repeat",backgroundSize:"cover",height:"80vh",width:"80vw", color:"White", justifyContent:"center", alignItems: "center",}}></div>
       
       {/* ENTRY FIELDS */}
      <div style={{ display: "flex", flexDirection:"row", flexWrap:"wrap", gap:"5px", position:"top", padding:"0",color:"White", justifyContent:"center", alignItems: "center",}}>
        <input style={{fontFamily: "Poppins, sans-serif", fontWeight:"600"}} ref={tacoRankRef} type="text" placeholder="Rating (out of 100)" size="20px" maxLength="3"/>
        <input style={{fontFamily: "Poppins, sans-serif", fontWeight:"600"}} ref={tacoNameRef} type="text" placeholder="Taco Name"/>
        <input style={{fontFamily: "Poppins, sans-serif", fontWeight:"600"}} ref={tacoLocRef} type="text" placeholder="Location"/>
        <input style={{fontFamily: "Poppins, sans-serif", fontWeight:"600"}} ref={tacoRevRef} type="text" placeholder="Review"/>
        <button style={{fontFamily: "Poppins, sans-serif", fontWeight:"600", borderRadius: "25px 25px 5px 5px", backgroundColor:"#efc84f", color:"#de5448", height:"35px" }} onClick={handleAddTaco}> Add Taco</button>
        
      </div>
       

       
      
      <div style={{ display: "flex", flexDirection:"column", flexWrap:"wrap", position:"top", padding:"0",color:"White", justifyContent:"flex-start", alignItems: "center",}}>  

        {/* TOTAL TACOS DIV */}
        <div style={{fontFamily: "Poppins, sans-serif", fontWeight:"600", fontSize: "20pt", justifyContent: "center", alignItems:"center", margin: "10px", textShadow: "2px 2px 6px #000000"}}  >Total Tacos Tracked: {tacos.length}</div>
      
        


        {/* taco menu div*/}
        <div style={{display: "flex", flexDirection:"column", backgroundImage:`url(${TacoMenuTop})`, backgroundSize:"contain", backgroundColor: "#F6EDDB", backgroundRepeat:"no-repeat", width:"700px", paddingTop: "20px", color:"Black", alignItems:"center", boxShadow: "0px 5px 13px 0px rgba(0,0,0,0.61)"}}> 
       
          <h1 style={{backgroundColor: "#F6EDDB"}}></h1>
          <h1 style={{backgroundColor: "#F6EDDB"}}></h1>

          <TacoList style={{marginLeft: "10px"}} tacos={tacos} toggleTaco={toggleTaco}/> 
           
          <img src = {TacoMenuBottom} width="700px"/>
  
        </div> 

          <h1></h1>
          <button style={{display:"flex", fontFamily: "Poppins, sans-serif", fontWeight:"400", width:"175px", height:"25px", backgroundColor:"#de5448", color:"#efc84f", justifyContent:"center", border: "2px solid #efc84f", borderRadius: "10px", boxShadow: "0px 5px 13px 0px rgba(0,0,0,0.61)"}}  onClick={handleDeleteTacos}><strong> Delete Selected Tacos </strong></button>
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