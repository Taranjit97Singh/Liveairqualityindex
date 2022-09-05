import React, {useContext, useState} from 'react'
import {FiSunset} from 'react-icons/fi'
import {GiWaterDrop} from 'react-icons/gi'
import {TiDelete} from 'react-icons/ti'
import DateTimePicker from 'react-datetime-picker';
import HomeScreen from './HomeScreen';
import New from './Pagination'
import NoteContext from './NoteContext/NoteContext';
import {Link} from 'react-router-dom'
import axios from "axios";
import ViewMore from './ViewMore';

function PageDetails(props) {
    const valueContext=useContext(NoteContext);
    const [value, newvalue] = useState();

    // const props.updata = newdata;

    // newvalue(props.updata);
    

    // const handleClose=()=>{
    //   valueContext.setIsShown(false)
    //   console.log(valueContext.setIsShown)
    // }


    // const handleData = async () => {
      
    //   const res1 = await axios.get(`http://13.235.169.222:8081/deviceData?deviceId=123456
    //   `);
    //   console.log(res1.data)
    //   if(res1.data.status==='success'){
    //     console.log('success');
    //     const ndata = res1.data.data;
       
    //   //  console.log(data);
    //     if(valueContext.useAllData===ndata.device_id){
    //       // setData(ndata[0]);
    //       valueContext.setUseAllData(ndata);
    //       console.log("api res page data",ndata); 
    //       console.log(valueContext.useAllData)
    //     // }
    //   }
    // }
  // }
  return (
    <div>
      {console.log(props.updata)}
        <div style={{border:"black solid 1px",height:"65vh",width:"35vw",borderRadius:"10px", paddingLeft:"1vw", backgroundColor:"white", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
    <div style={{width:"34vw", display:"flex"}}>
        <div style={{width:"90%", paddingTop:"2vh"}}>
    <b>Device Details</b><br></br>
    </div>
    <div style={{height:"5vh", width:"1vw"}}>
        {/* <TiDelete style={{height:"4.5vh", width:"4vw", cursor:"pointer"}} onClick={handleClose}/> */}
    </div>
    </div>
    <div style={{marginTop:"3vh"}}>
    <b>Device id: </b> {props.updata.device_id}<br></br>
    <b>Device Name: </b> {props.name}<br></br>
    </div>
    <hr></hr>
    <div style={{display:"flex",height:"15vh"}}>
    <div style={{height:"20vh",width:"15vw"}}>
      {/* <FiSunset style={{height:"10vh",width:"10vw"}} />  */}
      <img src='iconsun.png' alt='icon' height={"80vh"} width={"100vw"} style={{marginLeft:"2vw"}} />
      <br /><b style={{marginLeft:"3.6vw"}}>{props.updata.temp}°C</b></div>
    <div style={{height:"20vh",width:"15vw"}}>
      {/* <GiWaterDrop style={{height:"10vh",width:"10vw"}}/> */}
      <img src='icondrop.png' alt='icon' height={"60vh"} width={"70vw"} style={{marginTop:"2vh",marginLeft:"2vw"}} />
      <br /><b style={{marginTop:"4vh", marginLeft:"2.6vw"}}>{props.updata.humidity}°C </b></div>
  </div>
  <hr></hr>
  <div style={{display:"flex", gap:"2vw", paddingLeft:"1vw"}}>
    <div style={{height:"7vh"}}>
    <div>Co2</div>
    <div><b>{props.updata.co2}</b></div>
    </div>
    <div style={{height:"7vh"}}>
    <div>TVOC</div>
    <div><b>{props.updata.tvoc}</b></div>
    </div>  <div style={{height:"7vh"}}>
    <div>PM2</div>
    <div><b>{props.updata.pm2_level}</b></div>
    </div>  <div style={{height:"7vh"}}>
    <div>PM1</div>
    <div><b>{props.updata.pm1_level}</b></div>
    </div>  <div style={{height:"7vh"}}>
    <div>O2</div>
    <div><b>{props.updata.o2_level}</b></div>
    </div>
{/*     
    <div>{props.updata.tvoc}</div>
    <div>{props.updata.pm1_level}</div>
    <div>{props.updata.pm2_level}</div>
    <div>{props.updata.o2_level}</div> */}
  </div>
  <div style={{paddingLeft:"1vw",paddingTop:"2vh", height:"10vh"}}>Time <br></br>
  {/* <DateTimePicker
        onChange={onChange}
        value={value}
      /> */}
     <b>  {props.updata.time_date}</b> 
      </div> 


      <div>
        <Link style={{textDecoration:"none"}} to="/viewmore">
       <div style={{marginLeft:"27vw",color:"black"}}> <b  style={{textDecoration:"none"}}
        // onClick={handleData} 
        >View More</b></div> 
        {/* <ViewMore upnewdata={props.updata}></ViewMore> */}
         </Link>
      </div>
  </div>

 
</div>
  )
}

export default PageDetails