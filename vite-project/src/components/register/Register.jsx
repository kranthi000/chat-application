// import React, { useState } from 'react'
// // import Inbuilt from '../inbuilt/Inbuilt'
// // import { MdDriveFileRenameOutline } from "react-icons/md";
// // import { IoIosEye } from "react-icons/io";
// // import { HiOutlineMail } from "react-icons/hi";
// // import {Link} from "react-router-dom";




// const Register = () => {
  
//   const [showRight,setShowRight] = useState(false)

//   const handelChange = (e)=>{
//   setFormData((preval)=>({...preval,[e.target.name]:e.target.value}))

//   if(!showRight){
//     setShowRight(true)
//   }
// }
//    const[showpass,setShowpass]=useState({})

//    const [globalState,setGloabalState]=useState({
//     isLoading:false
//    })

   

//     const[formData,setFormData]=useState({
//       email:"",
//       password:"",
//       name:""
//     })
//     // const handelChange=(e)=>{
//     //   setFormData((preval)=>({...preval,[e.target.name]:e.target.value}))
//     // }
//     const handelSubmit=(e)=>{
//       e.preventDefault()
//        console.log(formData);
//     }

       
//     // (async()=>{
//     //   try {
//     //       setGloabalState((preval)=>({...preval,isLoading:true}));
//     //      let data=await AdminServices.registerAdmin(formData)

//     //     // console.log(data);
//     //     toast.success(`${data.msg}`)
        
        
//     //   } catch (error) {
//     //     toast.error("something went wrong");
        
        
//     //   }finally{
//     //      setGloabalState((preval)=>({...preval,isLoading:false}))
        
//     //   }
     

//     // })();


     


//     // show pass 
//     // let {email,password,name}=formData

//     return(
//       <div className="w-screen h-screen flex justify-center items-center bg-gray-200">

// <div className="flex w-[900px] h-[450px] rounded-[30px] overflow-hidden shadow-2xl">

// {/* LEFT REGISTER FORM */}

// <div className={`bg-[#f66565] flex flex-col items-center justify-center gap-6 
// transition-all duration-700 ${showRight ? "w-1/2" : "w-full"}`}>

// <h1 className="text-white text-3xl font-bold">REGISTER</h1>

// <img
// src="https://i.pravatar.cc/80"
// className="rounded-full border-4 border-white"
// />

// <input
// type="text"
// name="name"
// placeholder="Enter Name"
// value={name}
// onChange={handelChange}
// className="w-[250px] h-[40px] rounded-full px-4 outline-none"
// />

// <input
// type="email"
// name="email"
// placeholder="Enter Email"
// value={email}
// onChange={handelChange}
// className="w-[250px] h-[40px] rounded-full px-4 outline-none"
// />

// <input
// type="password"
// name="password"
// placeholder="Password"
// value={password}
// onChange={handelChange}
// className="w-[250px] h-[40px] rounded-full px-4 outline-none"
// />

// <button className="bg-sky-400 px-8 py-2 rounded-full text-white hover:bg-sky-500">
// Register
// </button>

// </div>


// {/* RIGHT SIDE */}

// <div className={`bg-gray-100 flex flex-col items-center justify-center text-center
// transition-all duration-700 overflow-hidden
// ${showRight ? "w-1/2 opacity-100" : "w-0 opacity-0"}`}>

// <img
// src="https://cdn-icons-png.flaticon.com/512/906/906334.png"
// className="w-44"
// />

// <h2 className="text-xl font-bold mt-4">
// CREATE YOUR ACCOUNT
// </h2>

// <p className="text-gray-600 mt-2">
// Join us and start chatting with friends
// </p>

// </div>

// </div>
// </div>
//     )
// }








    







// export default Register


   

//    {/* src="https://files.ably.io/ghost/prod/2023/01/build-a-realtime-chat-app-from-scratch--1-.png" */}



import React from 'react'
// import avatar from "./avatar.png";
// import illustration from "./illustration.png";


const Register = () => {
  return (
    // <div>Register</div>
     <div className="container">
      <div className="card">

        {/* LEFT SIDE FORM */}
        <div className="left">

          <h2 className="title">REGISTER</h2>

          <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" className="avatar" alt="profile" />

          <input
            type="text"
            placeholder="ENTER NAME"
            className="input"
          />

          <input
            type="email"
            placeholder="ENTER EMAIL"
            className="input"
          />

          <input
            type="password"
            placeholder="PASSWORD"
            className="input"
          />

          <button className="btn">SUBMIT</button>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="right">

          <img src="https://appinventiv.com/wp-content/uploads/2021/08/firebase-chat-app.png" className="illustration" alt="illustration" />

          <h3>CREATE YOUR ACCOUNT</h3>

          <p>Join us and start chatting with friends</p>

        </div>

      </div>
    </div>
  );
}

  


export default Register