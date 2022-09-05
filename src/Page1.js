import React from 'react'
import './App.css'
import {AiOutlineThunderbolt, AiOutlineBulb} from 'react-icons/ai';
import {BiDroplet} from 'react-icons/bi';
import Page2 from './Page2';
import Pagination from './Pagination';
import NotState from './NoteContext/NotState';
import ViewMore from './ViewMore';
import {Routes,Route} from 'react-router-dom'
function Page1() {

  return (
    <>
    <div className='image'>
        <div >
            {/* <div style={{paddingLeft:"5vw",paddingTop:"2vh",display:"flex"}}>
               <div style={{}}>
                   <br/>
               <h2>Real Time Analysis <br></br> Live Air Quality <br></br> Enriching the Healthy Space</h2>
                <div style={{ display:"flex", gap:"0.5vw"}}>
                    <div className='smalldiv' style={{textAlign:"center", display:"flex", alignItems:"center", justifyContent:"center"}}><AiOutlineThunderbolt /> </div>
                    <div className='smalldiv' style={{textAlign:"center", display:"flex", alignItems:"center", justifyContent:"center"}}><BiDroplet/></div>
                    <div className='smalldiv' style={{textAlign:"center", display:"flex", alignItems:"center", justifyContent:"center"}}><AiOutlineBulb/></div>
                
  
               </div>
                              </div>
                <div style={{height:"40vh",width:"70vw",display:"flex", gap:"2vw"}}>
                <div style={{height:"20vh",width:"30vw",marginLeft:"23vw"}}>
                    <input  type="search" style={{width:"30vw", height:"5.5vh",borderRadius:"15px"}}></input> </div>
                    <div style={{display:"flex", gap:"0.5vw"}}>
                    <div className='smalldiv' style={{textAlign:"center", display:"flex", alignItems:"center", justifyContent:"center"}}><AiOutlineThunderbolt /> </div>
                    <div className='smalldiv' style={{textAlign:"center", display:"flex", alignItems:"center", justifyContent:"center"}}><BiDroplet/></div>
                    <div className='smalldiv' style={{textAlign:"center", display:"flex", alignItems:"center", justifyContent:"center"}}><AiOutlineBulb/></div>
                
                </div>

                
            </div> */}
            <Page2/>
            <Pagination/>
        </div>
        
        
    </div>
    {/* </div> */}
    </>
  )
}

export default Page1