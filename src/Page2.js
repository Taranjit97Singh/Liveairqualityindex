import React from 'react'
import { Form, Button, Container, Table } from "react-bootstrap";
import {useEffect,useState, useContext} from 'react'
import {AiOutlineThunderbolt, AiOutlineBulb} from 'react-icons/ai';
import {BiDroplet} from 'react-icons/bi';
import {AiOutlineSearch} from 'react-icons/ai'
// import {useState} from 'react'
import NoteContext from "./NoteContext/NoteContext";

function Page2() {
    const valueContext = useContext(NoteContext);
    const [data,setData]=useState('')

    const handleChange=(e)=>{
        // valueContext.setSearch(e.target.value);
        valueContext.searchData(e.target.value);
    }
   
  return (
    <div  >
        <div style={{paddingLeft:"5vw",paddingTop:"2vh",display:"flex"}}>
               <div>
                   <br/>
               <h2>Real Time Analysis <br></br> Live Air Quality <br></br> Enriching the Healthy Space</h2>
                {/* <div style={{ display:"flex", gap:"0.5vw"}}> */}
                    {/* <div className='smalldiv' style={{textAlign:"center", display:"flex", alignItems:"center", justifyContent:"center"}}><AiOutlineThunderbolt /> </div>
                    <div className='smalldiv' style={{textAlign:"center", display:"flex", alignItems:"center", justifyContent:"center"}}><BiDroplet/></div>
                    <div className='smalldiv' style={{textAlign:"center", display:"flex", alignItems:"center", justifyContent:"center"}}><AiOutlineBulb/></div> */}
                
  
               {/* </div> */}
                              </div>
                <div style={{height:"10vh",width:"70vw",display:"flex", gap:"2vw"}}>
                <div style={{height:"10vh",width:"30vw",marginLeft:"30vw",display:"flex", gap:"0.5vw"}}>
                    <input  type="search"  style={{width:"30vw", height:"5.5vh",borderRadius:"15px"}} onChange={handleChange} ></input>
                    <AiOutlineSearch onClick={()=>handleChange()} style={{height: "5vh",
  width: "2vw", fontSize:"12.5px", 
 marginLeft:"-0.3vw", 
 marginTop:"0.2vh",
// margin:"auto",
  borderRadius:"3px"}}>
          {/* <AiOutlineSearch/> */}
          </AiOutlineSearch> </div>
                    {/* <div style={{display:"flex", gap:"0.5vw"}}>
                    <div className='smalldiv' style={{textAlign:"center", display:"flex", alignItems:"center", justifyContent:"center"}}><AiOutlineThunderbolt /> </div>
                    <div className='smalldiv' style={{textAlign:"center", display:"flex", alignItems:"center", justifyContent:"center"}}><BiDroplet/></div>
                    <div className='smalldiv' style={{textAlign:"center", display:"flex", alignItems:"center", justifyContent:"center"}}><AiOutlineBulb/></div>
                
                </div> */}
            </div>
        </div>
    </div>
  )
  
  }
export default Page2