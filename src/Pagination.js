import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./App.css";
import { Form, Button, Container, Table } from "react-bootstrap";
import { FiSunset } from "react-icons/fi";
import { GiWaterDrop } from "react-icons/gi";
import PageDetails from "./PageDetails";
import HomeScreen from "./HomeScreen";
import NoteContext from "./NoteContext/NoteContext";

function App() {
  const [postsPerPage] = useState(6);
  const [offset, setOffset] = useState(1);
  const [posts, setAllPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
   const [loading, setLoading] = useState(true);
  //  const [hidden, setHidden] = useState(true);
  // const [show,setShow] = useState([]);
  const [newdata, setData] = useState([]);
  const valueContext = useContext(NoteContext);
  // newScreen(props.par);
  const [name, setName] = useState('')
  const [item, SearchData] = useState([]);

  {console.log(valueContext.search,'search')}

  // const setDataOn = async (deviceID,deviceName) => {
  //     const res1 = await axios.get(`http://13.235.169.222:8081/deviceData?deviceId=${deviceID}
  //     `);
  //     console.log(res1.data)
  //     if(res1.data.status==='success'){
  //       console.log('success');
  //       const ndata = res1.data.data;
       
      //  console.log(data);
        // if(data===ndata.device_id){
          // setData(ndata[0]);
          // setName(deviceName);
          // valueContext.setUseAllData(ndata);
          // console.log("api res data",ndata); 
          // console.log(valueContext.useAllData)
        // }
        // const slice = ndata.slice(valueContext.offset - 1, valueContext.offset - 1 + valueContext.postsPerPage);
    
        // console.log(slice)
        // For displaying Data
        // const postData = getPostData(slice);
      
    
        // Using Hooks to set value
        // valueContext.setUseAllData(slice);
        // console.log(posts)
        // // getPostData();
        // valueContext.setPageCount(Math.ceil(ndata.length / valueContext.postsPerPage));
      // }
      
    // setData(data);

  // };

  // const handlePostClick=(posts)=>{
    // setDataOn(posts)
  //   valueContext.setIsShown(true)
    
  // }

  // const getPostData = () => {
  //   debugger
  //   if(valueContext.isshown!== true){
  //     return posts.map((post) => (

       
  //       <div style={{ width: "88%" }}>
  //         <div
  //           style={{
  //             display: "flex",
  //             margin: "1vh",
  //             padding: "1vh",
  //             border: "solid black 1px",
  //             width: "95%",
  //             borderRadius: "10px",
  //             backgroundColor: "white",
  //             boxShadow:
  //               "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  //           }}
  //           key={post.id}
  //           onClick={() => setDataOn(post)}
  //         >
  //           <div style={{ width: "5vw" }}>{post.id}</div>
  //           <div style={{ width: "20vw" }}>{post.name}</div>
  //           <div style={{ width: "20vw" }}>{post.username}</div>
  //           <div style={{ width: "20vw" }}>{post.address.city}</div>
  //           <div style={{ width: "20vw"}}> {post.address.suite}</div>
  //             <div style={{width: "20vw"}}> {post.address.street}</div>
  //         </div>
  //       </div>
        
  //     ))}
  //     else{
  //       return posts.map((post) => (

       
  //         <div style={{ width: "88%" }}>
  //           <div
  //             style={{
  //               display: "flex",
  //               margin: "1vh",
  //               padding: "1vh",
  //               border: "solid black 1px",
  //               width: "95%",
  //               borderRadius: "10px",
  //               backgroundColor: "white",
  //               boxShadow:
  //                 "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  //             }}
  //             key={post.id}
  //             onClick={() => setDataOn(post)}
  //           >
  //             <div style={{ width: "5vw" }}>{post.id}</div>
  //             <div style={{ width: "20vw" }}>{post.name}</div>
  //             <div style={{ width: "20vw" }}>{post.username}</div>
  //             <div style={{ width: "20vw" }}>{post.address.city}</div>
              
  //           </div>
  //         </div>
  //         ))
  //     }
  // };

  const getAllPosts = async () => {
    const res = await axios.get(`http://13.235.169.222:8081/deviceList`);
// console.log('res Data is' , res.data)
// setRestData(res.date)
    console.log(res.data)
    const data = res.data.data;
  // if(res.status === 200){
      //  setAllPosts(data);
      //  SearchData(data);
       valueContext.setData(data);

       console.log('inside Status Success')
       console.log(data);
  
    const slice = data.slice(offset - 1, offset - 1 + postsPerPage);
    
    // console.log(slice)
    // For displaying Data
    // const postData = getPostData(slice);
  

    // Using Hooks to set value
    valueContext.setData(slice);
    // console.log(posts)
    // // getPostData();
    setPageCount(Math.ceil(data.length / postsPerPage));
  };

  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    console.log(selectedPage);
    if (selectedPage === 0) {
      setOffset(selectedPage + 1);
    } else {
      setOffset(selectedPage + postsPerPage);
    }
  };

  useEffect(() => {
    console.log("inside useEffect")
    getAllPosts();
  }, [offset]);

  // console.log(posts)
  return (
    
    <div>
      <div
        style={{
          backgroundColor: "rgb(240, 240, 240)",
          height: "75vh",
          width: "90vw",
          margin: "5vw",
          borderRadius: "10px",
        }}
      >
        <h3 style={{ padding: "5px", paddingTop: "10px", paddingLeft: "2vw" }}>
          All Locations and all devices{" "}
        </h3>

        <div style={{ paddingLeft: "2vw", paddingRight: "2vw" }}>
          <div style={{ display: "flex" }}>
            <div
              className={valueContext.isshown ? "tablewidth" : "tablefullwidth"}
            >
              
                {valueContext.isshown ? (
                  <div style={{
                    display: "flex",
                    padding: "1vh",
                    margin: "1vh",
                    border: "solid black 1px",
                    width: "90%",
                    borderRadius: "10px",
                    backgroundColor: "white",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    fontWeight: "bold",
                  }}>
                    <div style={{ width: "5vw" }}>#</div>
                    <div style={{ width: "20vw" }}>Device Id</div>
                    <div style={{ width: "20vw" }}>Device Name</div>
                    {/* <div style={{ width: "20vw" }}>City</div> */}
                  </div>
                  ) : (

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
                  }}>
                    {/* <div style={{ width: "5vw" }}>#</div>
                    <div style={{ width: "20vw" }}>Name</div>
                    <div style={{ width: "20vw" }}>Username</div>
                    <div style={{ width: "20vw" }}>City</div>
                    <div style={{ width: "20vw" }}>Device Name</div>
                    <div style={{ width: "20vw" }}>Device System</div>
                    <div style={{ width: "20vw" }}>Danger</div> */}
                  </div>
                 )
                }


                   
              {/* </div> */}
              {/* Display all the posts */}
             {/* {posts} */}
             {valueContext.isshown==true?(
 valueContext.data.map((post,i) => (
  <div style={{ width: "95%" }}>
    <div
      style={{
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
      onClick={() => valueContext.setDataOn(post.device_id,post.device_name)}
    >
      {/* <h1>aa</h1> */}
      <div style={{ width: "5vw" }}>{post.id}</div>
      <div style={{ width: "20vw" }}>{post.device_id}</div>
      <div style={{ width: "20vw" }}>{post.device_name}</div>
      {/* <div style={{ width: "20vw" }}>{post.address.city}</div> */}
   
    </div>
  </div>
        ))
             ):(
             posts.map((post) => (

       
                <div style={{ width: "99%" }}>
                  <div
                    style={{
                      cursor:"pointer",
                      display: "flex",
                      margin: "1vh",
                      padding: "1vh",
                      border: "solid black 1px",
                      width: "100%",
                      borderRadius: "10px",
                      backgroundColor: "white",
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                    key={post.id}
                    // onClick={()=> handlePostClick(post)}
                    
                  >
                    <h1>heelo</h1>
                //     {/* <div style={{ width: "5vw" }}>{post.id}</div>
                //     <div style={{ width: "20vw" }}>{post.name}</div>
                //     <div style={{ width: "20vw" }}>{post.username}</div>
                //     <div style={{ width: "20vw" }}>{post.address.city}</div>
                //     <div style={{ width: "20vw"}}> {post.address.suite}</div>
                //    <div style={{width: "20vw"}}> {post.address.street}</div>
                //    <div style={{width: "20vw"}}> {post.address.street}</div> */}
                    
                 </div>
                 </div>
                )
                )
             )}

<div style={{ marginTop: "3.5vh", marginLeft:"-2vw" }}> 
  <ReactPaginate
          previousLabel={<img src="prev.png" style={{width:"2vw"}}/>}
          nextLabel={<img src="next.png" style={{width:"2vw"}}/>}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagediv"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
        </div>
            </div>
          
            {valueContext.isshown === true ? (
              <PageDetails updata={valueContext.newdata} name={valueContext.name}/>
            ) : (
              " "
            )}
            {console.log('name', name)}


            {/* <PageDetails ndata={newdata} /> */}
          </div>

          {/* Using React Paginate */}
          
        </div>
      </div>
    </div>
  );
}

export default App;
