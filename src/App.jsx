// import React, { useEffect , useState} from 'react'
// import "./style.css"
// import {io} from "socket.io-client"

// const socket=io("http://localhost:3000/")

// const App = () => {
//     const [mes,setMsg]=useState({
//         msg:"",
//         userName:""
//     });
//     const [allmsg,setAllMsg]=useState([]);

//     const[typing,setTyping]=useState([]);
//     // typing=false


//     useEffect(()=>{
//        let userName=prompt("Enter your name")
//         setMsg((preval)=>({...preval,userName:userName}))


//     },[])
//     // const [allmsg,setallmsg]=useState([])

//     useEffect(()=>{
//         socket.on("connect",()=>{
//             console.log("connected");
            
//         })
//         // console.log("connected");
//         // socket.emit("chat message")

//     socket.on("chat message",(data)=>{
//         console.log(data);
        
//         setAllMsg([...allmsg,data]);
//     })
    
        
//     },[allmsg])

    

//     // useEffect(()=>{
//     //     socket.emit("typing",data)
//     //     setTyping=true
//     //     setTimeout(()=>{
//     //         setTyping=false
//     //     },1000)

//     // },[typing])

        
//     const handleChange=(e)=>{
        
//             setMsg((preval)=>({...preval,[e.target.name]:e.target.value}))
        
         

//     }
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         //   console.log(mes);

//          socket.emit("chat message",mes)
        
//         setMsg((preval)=>({...preval,msg:""}))
       
       
          

//     }
//   return (
//     <div className='h-screen w-screen flex flex-col '>
//         <div className='w-full h-{calc(100%-80px)}'> 
//             {
//                 allmsg.length?<div>
//                       {
//                 allmsg.map((ele,ind)=><div key={ind} className={`w-full h-10 flex items-center ${!(ele.userName==mes.userName)?"justify-start":"justify-end"}`}>
//                     <span className={`p-2 rounded-lg ${ele.userName!=mes.userName?"bg-gray-500":"bg-green-600"}`}>
//                         {
//                             ele.msg
//                         }
//                     </span>
//                 </div>)
//             }

//                 </div>:""
//             }
//         </div>
       
//             <div className='w-full h-full items-end' >
                
//         <form className='flex items-end  p-2 h-full w-full g-5' onSubmit={handleSubmit}>
//             <div></div>
//             <div className='g-5 flex  w-full p-2 items-end'>
//                    <input type="text" name='msg' className=' w-full rounded-lg flex items-end border-2  p-2' onChange={handleChange} value={mes.msg} />
//             <button className=' rounded-lg border-2 p-2 bg-lime-300 hover:bg-lime-500 active:bg-lime-800' >Click</button>
//             </div>
         
        
//         </form>
        
//             </div>
    
//         {/* <form className='flex items-end  p-2 h-full w-full g-5' onSubmit={handleSubmit}>
//             <div></div>
//             <div className='g-5 flex  w-full p-2 items-end'>
//                    <input type="text" className=' w-full rounded-lg flex items-end border-2  p-2' onChange={handleChange} value={mes.msg} />
//             <button className=' rounded-lg border-2 p-2 bg-lime-300 hover:bg-lime-500 active:bg-lime-800' >Click</button>
//             </div>
         
        
//         </form> */}
        
            
//     </div>
//   )
// }

// export default App


import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes'

const App = () => {
  return (
    <>
        <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App