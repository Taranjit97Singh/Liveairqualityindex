import React, {useContext, useEffect, useState} from 'react'
import NoteContext from './NoteContext/NoteContext';
import Page2 from './Page2'
import axios from 'axios';
// import { useHistory } from "react-router";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Navigate } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai';
import ReactPaginate from "react-paginate";
import "./App.css";


function ViewMore(props) {
  
  const valueContext=useContext(NoteContext);
  // const history = useHistory();
  const [bool, setBool] = useState(true)
  const [pgn,setPgn] = useState(0);
  const [newx,setNewX] = useState(0);
  const [n,setN] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  console.log(startDate)
  console.log(endDate)
  // const filteredDate =(startDate,endDate,device_id)=>{
  //   valueContext.whetherDateFiltered(startDate,endDate,device_id)

  // }
{console.log("viewmore",valueContext.device_id)}
  const myhandle = async (data) =>
  {
   
    valueContext.setOffset( data);
    

   return data;
  }

  const handlePageClick = async (event) => {
    const selectedPage = event.selected;
    setPgn(selectedPage*6)
    // let x = await myhandle(event.selected)
    // console.log("called with "+selectedPage)
    // // console.log("sel lenght",selectedPage.length);
    // if (selectedPage === 0) {
    //   valueContext.setOffset(selectedPage + 1);
    // } else {
    //   valueContext.setOffset(selectedPage * valueContext.postsPerPage +1);
    //   console.log(" offset ="+valueContext.offset)
    // }
    console.log("in handlePageClick")
    setNewX(event.selected);
    if(valueContext.checkfilter === true){
      // for(let i=2;i<=valueContext.pageCount;i++){
    valueContext.setDataOn1(event.selected);
    console.log("in if")
    // setN(n+1);
      // }
    }
    else{
      // for(let i=2;i<=valueContext.pageCount;i++){
        valueContext.filterPage(event.selected);
        console.log("in else")
        // setN(n+1);
      // }
  }
    
    

  };




    // const dates = [startDate,endDate];
    // const filteredDates = dates.filter(d => new Date(d) - new Date() > 0);
  return (
    <div>
        <div className='image'>
        <Page2></Page2>
      <div
    style={{
      backgroundColor: "rgb(240, 240, 240)",
      height: "75vh",
      width: "90vw",
      margin: "5vw",
      borderRadius: "10px",
    }}
  >
    <div style={{display:"flex"}}>
    <h3 style={{ padding: "5px", paddingTop: "10px", paddingLeft: "2vw" }}>
      All Locations and all devices{" "}
      {/* <Calendar
          // onChange={setDate}
          // value={date}
          // selectRange={true}
        /> */}
        </h3>
        <div style={{display:"flex", gap:"0.5vw",marginLeft:"38%", marginTop:"3vh", fontSize:"15px"}}>
        {/* <h5>Start date</h5>
        <input type='date' ></input>
        <h5>Last  date</h5>
        <input type='date'></input> */}
        
        From: <input type="date" data-date-format="YYYY MM DD" value={startDate} onChange={e => setStartDate(e.target.value)} style={{width:"8.5vw", height:"1.5vw", fontSize:"11.5px", marginLeft:"0.1vw"}}/>
        To: <input type="date" data-date-format="YYYY MM DD" value={endDate} onChange={e => setEndDate(e.target.value)} 
        style={{width:"8.5vw", height:"1.5vw", fontSize:"11.5px", marginLeft:"0.1vw"}}/> 
        <AiOutlineSearch onClick={()=>{
          if(startDate==='' && endDate === ''){
            // valueContext.setDataOn(valueContext.device_id,'aa')
            alert("Enter Filter Dates");
          }
          else if( startDate===''){
            alert("Enter Start Date");
          }
          else if( endDate===''){
            alert("Enter End Date");
          }
          else{
          valueContext.whetherDateFiltered(startDate,endDate,valueContext.device_id,newx);
          }  
        }
          } style={{width:"1.7vw", height:"3.3vh", fontSize:"12.5px", marginLeft:"-0.1vw", backgroundColor:"white", borderRadius:"3px"}}>
          {/* <AiOutlineSearch/> */}
          </AiOutlineSearch>
        </div>
       
    
    </div>
    {/* <div style={{ paddingLeft: "2vw", paddingRight: "2vw" }}></div> */}
    <div style={{
        display: "flex",
        padding: "1vh",
        margin: "1vh",
        border: "solid black 1px",
        width: "99%",
        borderRadius: "10px",
        backgroundColor: "white",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        fontWeight: "bold",
      }}
      >
        <div style={{ width: "5vw" }}>#</div>
        <div style={{ width: "20vw" }}>Device Id</div>
        {/* <div style={{ width: "20vw" }}>longitude</div> */}
        <div style={{ width: "20vw" }} 
          onClick={()=>{
          if(valueContext.count === 0){
          if(bool===true){
          valueContext.sortData(valueContext.device_id, 'temp', 'asc',newx)
          setBool(false);
        }
          else{
          //  valueContext.whetherFetchDataDesc(newx)
          valueContext.sortData(valueContext.device_id, 'temp', 'desc',newx)
           setBool(true);
           }}
           else{
            if(bool===true){
              valueContext.sortFilterData(valueContext.device_id, 'temp', 'asc',startDate,endDate,newx);
              setBool(false);
              {console.log("in if")}
            }
              else{
              //  valueContext.whetherFetchDataDesc(newx)
              valueContext.sortFilterData(valueContext.device_id, 'temp', 'desc', startDate,endDate,newx);
               setBool(true);
               {console.log("in else")}
               }
            
          }

          }}
          >
           Temperature</div>
        <div style={{ width: "15vw" }} onClick={()=>{
          if(valueContext.count === 0){
            if(bool===true){
            valueContext.sortData(valueContext.device_id, 'humidity', 'asc',newx)
            setBool(false);
          }
            else{
            //  valueContext.whetherFetchDataDesc(newx)
            valueContext.sortData(valueContext.device_id, 'humidity', 'desc',newx)
             setBool(true);
             }}
             else{
              if(bool===true){
                valueContext.sortFilterData(valueContext.device_id, 'humidity', 'asc',startDate,endDate,newx);
                setBool(false);
                {console.log("in if humid")}
              }
                else{
                //  valueContext.whetherFetchDataDesc(newx)
                valueContext.sortFilterData(valueContext.device_id, 'humidity', 'desc', startDate,endDate,newx);
                 setBool(true);
                 {console.log("in else humid")}
                 }
              
            }}}>Humidity</div>
        <div style={{ width: "15vw" }}>CO2</div>
        <div style={{ width: "15vw" }}>TVOC</div>
        <div style={{ width: "15vw" }}>PM2</div>
        <div style={{ width: "15vw" }}>PM1</div>
        <div style={{ width: "15vw" }}>O2</div>
        <div style={{ width: "35vw" }}>Date&Time</div>
{/* {console.log('viewmore', )} */}
      </div>

      {/* <div style={{ width: "95%" }}>
    <div style={{
        cursor:"pointer",
        display: "flex",
        margin: "1vh",
        padding: "1vh",
        border: "solid black 1px",
        width: "95%",
        borderRadius: "10px",
        backgroundColor: "white",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    key={post.id}
    onClick={() => setDataOn(post.device_id)}
    > */}
      {/* <h1>aa</h1> */}
      {/* <div style={{ width: "5vw" }}>{props.upnewdata.latitude}</div>
      <div style={{ width: "20vw" }}>{props.upnewdata.device_id}</div>
      <div style={{ width: "20vw" }}>{props.upnewdata.longitude}</div> */}
      {/* <div style={{ width: "20vw" }}>{post.address.city}</div> */}
      
   {valueContext.useAllData.length >0  ? valueContext.useAllData.map((post,i) =>{
    return (
      <div style={{ width: "100%" }}>
      <div style={{
        cursor:"pointer",
        display: "flex",
        margin: "1vh",
        padding: "1vh",
        border: "solid black 1px",
        width: "99%",
        borderRadius: "10px",
        backgroundColor: "white",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
      // key={post.device_id}
      >
     <div style={{ width: "5vw" }}>{pgn+i+1}</div>
      <div style={{ width: "13vw" }}>{post.device_id}</div>
      <div style={{ width: "7vw" }}><img src="icon1.png" width={"25vw"} height={"25vh"}></img> </div>
      {/* <div style={{ width: "20vw" }}>{post.longitude}</div>  */}
     <div style={{ width: "20vw" }}>{post.temp}</div>  
     <div style={{ width: "15vw" }}>{post.humidity}</div>  
     <div style={{ width: "15vw" }}>{post.co2}</div> 
     <div style={{ width: "15vw" }}>{post.tvoc}</div>   
     <div style={{ width: "15vw" }}>{post.pm2_level}</div>  
     <div style={{ width: "15vw" }}>{post.pm1_level}</div>  
     <div style={{ width: "15vw" }}>{post.o2_level}</div>  
     <div style={{ width: "30vw" }}>{post.time_date}</div>  
     <div style={{ width: "5vw" }}>{bool==true?<img src="arrow1.png" width={"15vw"} height={"15vh"}/>:<img src="arrow2.png" width={"15vw"} height={"15vh"} />} </div>
     </div>
     </div>
    )
   }): <Navigate to="/"/>}
    {/* </div>
  </div> */}
<div style={{ marginTop: "3vh", marginLeft:"-1.5vw" }}> 
<ReactPaginate
            previousLabel={<img src="prev.png" style={{width:"2vw"}}/>}
            nextLabel={<img src="next.png" style={{width:"2vw"}}/>}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={valueContext.pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagediv"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
          </div>

    </div>
    </div>
    </div>
    
  
     )
     
    
}

export default ViewMore