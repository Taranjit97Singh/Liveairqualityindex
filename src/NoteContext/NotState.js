import React, {useState} from 'react'
import NoteContext from './NoteContext'
import axios from 'axios';

function NotState(props) {
    const [isshown,setIsShown]=useState(true);
    const [postsPerPage] = useState(6);
    const [mainData,setMainData]=useState([])
    const [useAllData,setUseAllData]=useState([])
    const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [search,setSearch] = useState('');
  const [data,setData] =useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [offset, setOffset] = useState(1);
  const [name, setName] = useState('');
  const [newdata, setNewData] = useState([]);
  const [device_id,setDeviceId]=useState('');
  const [filterData,setFilterData] = useState([]);
  const [check,setCheck] = useState(false);
  const [checkfilter,setCheckFilter] = useState();
  const [count,setCount] = useState(0);
  const [url,setUrl] = useState(``);
  const [filterurl,setFilterUrl] = useState(``);

    {console.log("useAllData is" , useAllData)}

    {console.log("offset outside setData1",offset)}

    {console.log(search)}

  const setDataOn = async (deviceID,deviceName) => {
      const res1 = await axios.get(`http://13.235.169.222:8081/deviceData?deviceId=${deviceID}&start=0&limit=${postsPerPage}
      `);
      setDeviceId(deviceID);
      const url1=`http://13.235.169.222:8081/deviceData?deviceId=${deviceID}`;
      setUrl(url1);
      console.log("I am called")
      console.log(res1.data)
      if(res1.data.status==='success'){
        console.log('success');
        const ndata = res1.data.data;
        const total = res1.data.count;
       
      console.log("total length", total);
        // if(data===ndata.device_id){
          setNewData(ndata[0]);
          setName(deviceName);
          // setMainData(ndata);
           //setUseAllData(ndata);
          console.log("api res data",ndata); 
          // console.log(valueContext.useAllData)
        // }
        console.log(" offset in first = "+offset)
        console.log("posts per page = "+postsPerPage )
        // const slice = ndata.slice(offset -1 , (offset-1) + postsPerPage);
    // 
        // console.log(slice)
        // For displaying Data
        // const postData = getPostData(slice);
      
    
        // Using Hooks to set value
        setUseAllData(ndata);
        // console.log(posts)
        // // getPostData();
        setCheckFilter(true);
        setPageCount(Math.ceil(total / postsPerPage));
        // setCheck(true);
        
        // setDataOn1();
        //setOffset(offset+postsPerPage)
      }
    }
    const setDataOn1 = async (x) => {
      
        
        // console.log(" offset inside setdataon1 = "+offset + " x = "+x)
        // console.log('main data page', mainData);
        const res1 = await axios.get(`${url}&start=${x*postsPerPage}&limit=${postsPerPage}
      `);
      console.log(res1.data)
      if(res1.data.status==='success'){
        const ndata = res1.data.data;
        
        // if(rem===0){
      
        //     if(Math.ceil(mainData.length % postsPerPage) !== 0){
        //       for(let i=0;i<=mainData.length; i++){
        //         if(i<=(mainData.length-rem)){
        //  const slice = mainData.slice(x*postsPerPage , (x+1) * postsPerPage);
        setUseAllData(ndata);
      }
}


    
    const searchData = async (search) =>{
      const res1 = await axios.get(`http://13.235.169.222:8081/deviceList/${search}`);
      console.log(res1.data)
      if(res1.data.status==='success'){
        console.log('success');
        const ndata = res1.data.data;
      //   var p=[]
        
        // window.location.reload(false);
        // for(let i=0;i<=ndata.length;i++){

        //   if(ndata[i].device_id === search){
        //     p.push(ndata[i]);
        //   }

        // }
        // const slice = ndata.slice(x*postsPerPage , (x+1) * postsPerPage);
        setData(ndata);
    //     const newResults = ndata.filter(crypto => crypto.device_id.includes(search));
    // console.log('newResults', newResults);
    // setData(newResults);
    }

    }

    const sortData = async (deviceID,orderBy,sortOrder,x)=>{
      const url1=`http://13.235.169.222:8081/deviceData?deviceId=${deviceID}&orderBy=${orderBy}&sortOrder=${sortOrder}`
      const res1 = await axios.get(`${url1}&start=${x*postsPerPage}&limit=${postsPerPage}
       `);
      console.log(res1.data)
      setUrl(url1);
      if(res1.data.status==='success'){
        console.log('success');
        const ndata = res1.data.data;
        const total = res1.data.count;
        // setMainData(ndata);

      console.log('x asc temp', x);
      // console.log('main data sort', mainData);
      // if(check === false){
        // const result= ndata.sort((a,b)=> a.temp-b.temp)
        // if(check === false){
        // const slice = ndata.slice(x*postsPerPage , (x+1) * postsPerPage);
          setUseAllData(ndata);
          setCheckFilter(true);
          // setCheck(false);
        // }
        // else{
        //   console.log("in else")
        // }
        setPageCount(Math.ceil(total / postsPerPage));
      // }
      // else{
      //   const result= filterData.sort((a,b)=> a.temp-b.temp)
        // setUseAllData(result);
      //   const slice = result.slice(x*postsPerPage , (x+1) * postsPerPage);
      //     setUseAllData(slice);
      // }
        // window.location.reload(false);
    }
  }


  
  const sortFilterData = async (deviceID,orderBy,sortOrder,StartDate,EndDate,x)=>{
    const res1 = await axios.get(`http://13.235.169.222:8081/deviceData?deviceId=${deviceID}&orderBy=${orderBy}&sortOrder=${sortOrder}&startDate=${StartDate}&endDate=${EndDate}&start=${x*postsPerPage}&limit=${postsPerPage}
     `);
    console.log(res1.data)
    setFilterUrl(`http://13.235.169.222:8081/deviceData?deviceId=${deviceID}&orderBy=${orderBy}&sortOrder=${sortOrder}&startDate=${StartDate}&endDate=${EndDate}`)
    if(res1.data.status==='success'){
      console.log('success');
      const ndata = res1.data.data;
      const total = res1.data.count;

      // setFilterData(ndata);

    // console.log('x asc temp', x);
    console.log('main data sort sortFilterData', ndata);
        setUseAllData(ndata);
        setCheckFilter(false);
    
      setPageCount(Math.ceil(total / postsPerPage));
  }
}

  // const sortDataDesc = async (x)=>{
  //   // const res1 = await axios.get(`http://13.235.169.222:8081/deviceData?deviceId=${deviceID}`);
  //   // console.log(res1.data)
  //   // if(res1.data.status==='success'){
  //   //   console.log('success');
  //   //   const ndata = res1.data.data;
  //   if(check === false){
  //     const result= mainData.sort((a,b)=> b.temp-a.temp)
  //     // setUseAllData(result);
  //     const slice = result.slice(x*postsPerPage , (x+1) * postsPerPage);
  //         setUseAllData(slice);
  //   }
  //   else{
  //     const result= filterData.sort((a,b)=> b.temp-a.temp)
  //     // setUseAllData(result);
  //     const slice = result.slice(x*postsPerPage , (x+1) * postsPerPage);
  //         setUseAllData(slice);
  //   }
  //     // window.location.reload(false);
  // }


  // const sortHumidDataAsc = async (x)=>{
  //   // const res1 = await axios.get(`http://13.235.169.222:8081/deviceData?deviceId=${deviceID}`);
  //   // console.log(res1.data)
  //   // if(res1.data.status==='success'){
  //   //   console.log('success');
  //   //   const ndata = res1.data.data;
  //   if(check === false){
  //     const result= mainData.sort((a,b)=> a.humidity-b.humidity)
  //     // setUseAllData(result);
  //     const slice = result.slice(x*postsPerPage , (x+1) * postsPerPage);
  //         setUseAllData(slice);
  //   }
  //   else{
  //     const result= filterData.sort((a,b)=> a.humidity-b.humidity)
  //     // setUseAllData(result);
  //     const slice = result.slice(x*postsPerPage , (x+1) * postsPerPage);
  //         setUseAllData(slice);
  //   }
  //     // window.location.reload(false);
  // }


// const sortHumidDataDesc = async (x)=>{
//   // const res1 = await axios.get(`http://13.235.169.222:8081/deviceData?deviceId=${deviceID}`);
//   // console.log(res1.data)
//   // if(res1.data.status==='success'){
//   //   console.log('success');
//   //   const ndata = res1.data.data;
//   if(check === false){
//     const result= mainData.sort((a,b)=> b.humidity-a.humidity)
//     // setUseAllData(result);
//     const slice = result.slice(x*postsPerPage , (x+1) * postsPerPage);
//           setUseAllData(slice);
//   }
//   else{
//     const result= filterData.sort((a,b)=> b.humidity-a.humidity)
//     // setUseAllData(result);
//     const slice = result.slice(x*postsPerPage , (x+1) * postsPerPage);
//           setUseAllData(slice);
//   }
//     // window.location.reload(false);
// }

const whetherDateFiltered = async (StartDate,EndDate,deviceID,x)=>{
  console.log('starahkjsdh',StartDate,EndDate,deviceID)
  setStartDate(StartDate);
  setEndDate(EndDate);

  const res1 = await axios.get(`http://13.235.169.222:8081/deviceData?deviceId=${deviceID}&startDate=${StartDate}&endDate=${EndDate}&start=${x*postsPerPage}&limit=${postsPerPage}
  `);
  console.log(res1.data)
  const url1=`http://13.235.169.222:8081/deviceData?deviceId=${deviceID}&startDate=${StartDate}&endDate=${EndDate}`;
  setFilterUrl(url1);
  if(res1.data.status==='success'){
    console.log('success');
    const ndata = res1.data.data;
    console.log("kahani")
    const total= res1.data.count;
    // var d1 = Date.parse(startDate);
    // var d2 = Date.parse(endDate);
    // var p=[]
    // for(let i=0;i<ndata.length;i++)
    // {
    //    let d3 =Date.parse(ndata[i].time_date.substring(0,10));
    //    if(d3>=d1 && d3<=d2)
    //    {
    //       p.push(ndata[i])
    //       console.log("between matched");  
    //    }
    //    else
    //       console.log("not matched");
    // //  console.log(ndata[i].time_date.substring(0,10));
    // }
    
    // const slice = ndata.slice(x*postsPerPage , (x+1) * postsPerPage);
          setUseAllData(ndata);
    {console.log("filet use data", ndata)}
    // {console.log("filet p data", p)}
// filteredDates = dates.filter(d => new Date(d) - new Date() > 0);
    // setUseAllData(slice);

    // setFilterData(ndata);
    // setCheck(true);
    setCheckFilter(false);
    setCount(1);

    setPageCount(Math.ceil(total / postsPerPage));
    // setCheckFilter(true);

    // window.location.reload(false);
}
}

const filterPage= async (x) => {
      
        
    // console.log(" offset inside setdataon1 = "+offset + " x = "+x)
    // console.log('main data page', mainData);
    const res1 = await axios.get(`${filterurl}&start=${x*postsPerPage}&limit=${postsPerPage}
  `);
  console.log(res1.data)
  if(res1.data.status==='success'){
    const ndata = res1.data.data;
    
    // if(rem===0){
  
    //     if(Math.ceil(mainData.length % postsPerPage) !== 0){
    //       for(let i=0;i<=mainData.length; i++){
    //         if(i<=(mainData.length-rem)){
    //  const slice = mainData.slice(x*postsPerPage , (x+1) * postsPerPage);
    setUseAllData(ndata);
  }
}
  
  return (
    <NoteContext.Provider value={{isshown,setIsShown,useAllData,setUseAllData, sortData, 
      // sortDataDesc, sortHumidDataAsc, sortHumidDataDesc,
      startDate, setStartDate,endDate, setEndDate,whetherDateFiltered,search,setSearch, searchData, data,setData, postsPerPage, pageCount, setPageCount, offset, setOffset, setDataOn, name, setName, newdata, setNewData,setDataOn1, 
    checkfilter,setCheckFilter, filterPage, device_id,setDeviceId, sortFilterData, count,setCount
    }}>
      {props.children}

    </NoteContext.Provider>
  )
}


export default NotState;