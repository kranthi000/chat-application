// import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const api=createApi({
//     reducerPath:"api",
//     baseQuery:fetchBaseQuery({
//             // baseUrl:"https://jsonplaceholder.typicode.com/"
//             baseUrl:"https://192.168.0.24:5000/api/"

//     }),


// endpoints:(builder)=>({
//     getUsers:builder.query({
//         query:()=>"users"
//     }),
    
// })

// })

// export const {useGetUsersQuery} = api


// import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
// import axios from "axios"

// const initialState={
//     count:0,
//     allprop:[],
//     loading:false,
//     error:null
// }

// export const fetchAllProp=createAsyncThunk('allprop',async()=>{
//     const res=await axios.get("https://192.168.0.24:5000/api/auth/register")
//     return res.data;

    
// })

// const propSlice=createSlice({
//     name:"prop",
//     initialState,
//     reducers:{},

//     extraReducers:(builder)=>{
//         builder
//         .addCase(fetchAllProp.pending,(state)=>{
//             state.loading=true;

//         })
//         .addCase(fetchAllProp.fulfilled,(state,action)=>{
//             state.loading=false;
//             state.allprop=action.payload;
//         })
//         .addCase(fetchAllProp.rejected,(state,action)=>{
//             state.loading=false;
//             state.error=action.error.message;
//         })
//     }

// });

// export default propSlice.reducer;


import axios from "axios"

const BASE_URL = "http://192.168.0.24:5000"

export const registerService = async (user) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/register`, user)
    return response.data
  } catch (error) {
    console.log("Register Error:", error)
    throw error
  }
}

export const loginService = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, credentials)
    return response.data
  } catch (error) {
    console.log("Login Error:", error)
    throw error
  }
}