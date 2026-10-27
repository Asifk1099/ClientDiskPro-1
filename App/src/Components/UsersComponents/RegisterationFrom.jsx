
import React from "react"
import { Link } from "react-router-dom"

export default function Signup(){
    return(

        <div className="min-h-screen flex items-center justify-center">
 
    <form
    className="mt-13  text-black  w-full max-w-md p-6 bg-amber-50 rounded-2xl shadow-2xl   ">
        
         <div>
           <h1 className="w-full bg-green-800 rounded-lg p-3 text-center text-white">  Create your ClientDisk account </h1>
         
         <p className="text-center text-sm sm:text-base mt-2 mb-2">
            Setup your workspace to manage account
         </p>
         </div>

         <div >
            <label className="pt-2 text-left mb-2 block"> 
               Full Name 
               </label>

               <input className="w-full text-black bg-white rounded-md p-2" 
               type="text" 
               placeholder="Name"
               name='full-name'
               />
         </div>
         
         <div className="">
            <label className="pt-2 text-left mb-1 block ">
               Email
            </label>
            <input className="w-full text-black bg-white rounded-md  p-2" placeholder="email"  required/>
         </div>
         
         <div>
            <label className="pt-2 text-left block mb-1">
                Select Role
                </label >
                <select className="w-full  bg-white p-2 rounded-md text-black" name="" id="" required>
                  <option> Select </option>
                   <option> Select </option>
                    <option> Select </option>
                     <option> Select </option>
                      <option> Select </option>
                </select>

                <p className="pt-2 text-sm text-black mb-1">
                  Show to your client in portal
                  </p>
                  
                <div>
                  <label className="pt-2 block mb-1 text-left">
                     Password
                  </label>
                  <input className="w-full text-black bg-white text-blacks p-2 rounded-md " type="password" name="" id="" placeholder="password"/>            
         </div>  

                  <div >
                  <label className="pt-2 block mb-1 text-left">
                     Confirm Password
                  </label>
                  <input className="w-full text-black bg-white text-blacks p-2 rounded-md " type="password" name="" id="" placeholder="confirm password"/>
                  </div>
                  
                  <label className="pt-2 flex items-center font-medium text-gray-300">
                     <input type="checkbox" className=" w-5 h-4 " name="" id="" />
                     <p className="text-black"> I agree to </p>
                     <a className="underline text-black" href="#"> the Term of Service</a>
                     <p className="text-black"> and </p>
                     <a className="text-black underline" href="#" >  Privicy Policy </a> 
                      </label> 
                     
                     <div className="pt-4">
                  <button type="submit"
                  className=" w-full bg-green-400 border-2 p-2 rounded-md hover:bg-green-500 py-2  "
                  > Create Account </button>
                  
                  <Link className=" ml-30 hover:text-blue-400" to="/login">  Already have account</Link>
                   
                  </div>
         </div>
        
    </form>
     

     </div>
    )
}