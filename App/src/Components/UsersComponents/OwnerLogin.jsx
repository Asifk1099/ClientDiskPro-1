import React from "react";
import { Link } from "react-router-dom";


export default function OwnerLoginForm(){
   return(
      
      <div className="h-screen flex items-center justify-center">
      
         <form className=" w-full max-w-md p-6 bg-amber-50 rounded-2xl shadow-2xl  " action=" ">
             
               <h1 className="w-full bg-green-800 rounded-lg p-3 text-center text-white" >Sign in to Owner Account </h1>
               <br />
               <p className="text-center mb-3">Welcome back. Enter your details to continue. </p>

                <div>
                <label className="text-left mb-2 block"> Email address </label>
                
                <input className="bg-gray-50 w-full text-black rounded-md p-1 mb-2" type="email" name="" id="" placeholder="email" />
             </div>

              <div className="">
                <label className="text-left mb-2 block"> Password  <a className="pl-50" href=""> Forget Password</a> </label> 
                  <input className="bg-gray-50 w-full  text-black rounded-md p-1" type="password" name="" id="" placeholder="password" />

             </div>

              <div>
                
            <input className="mb-2" type="checkbox" name="" id=""/>
               <label for=""> Keep me signed in on this device </label>
             </div>             
<br />
             <div className="">
                <button className="w-full bg-green-400 rounded-lg p-2 text-white hover:bg-[green] cursor-pointer transition duration-500 ">Sign In</button>       
             </div>
<br />
             <div>
             <p>New to ClientDisk?  <Link className="underline" to="/register"> Already have account </Link></p>
            
             </div>            
         </form>
        
      </div>
   )
}