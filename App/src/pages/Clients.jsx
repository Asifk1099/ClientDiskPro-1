

export default function Clients(){
    return(
    
          <div className=" py-6 mx-6 ">
            <div className=" bg-white p-6 Shadow-lg rounded-lg text-xl mt-6">
              
          <div className=" flex justify-end gap-2">
            <div className="mr-140 bg-gray-300 rounded-2lg w-10 h-10" />
          <p className="bg-gray-500 p-2 Shadow-lg rounded-lg text-white text-sm h-10"> Portal access active </p>
          <button className="bg-gray-500 p-2 Shadow-lg rounded-lg text-white text-sm w-40 h-10"> Send message </button>
          <button className="bg-green-900 p-2 Shadow-lg rounded-lg text-white text-sm w-40 h-10"> + New project </button>
          </div>

          <div className="flex gap-20 justify-between bg-gray-100 text-sm p-2  Shadow-lg rounded-lg mt-6 ">
          <div className="justify-center"> 
          <p className="pr-10"> Client since </p>
          <p> $123</p>
          </div>

           <div className="justify-center"> 
          <p className="pr-10"> Total billed </p>
          <p> $123</p>
          </div>

           <div className="justify-center"> 
          <p className="pr-10"> Out standing balance </p>
          <p> $123</p>
          </div>

           <div className="justify-center"> 
          <p className="pr-10"> Average Turnarround </p>
          <p> $123</p>
          </div>
          </div>
          </div>

          <div className=" bg-white p-6 Shadow-lg rounded-lg text-xl mt-6   ">
          <div className="flex">
          <h1 className="mb-4"> Projects </h1>
          <span className="pl-230"> view achive </span>
          </div>
          <div className="  bg-gray-200 p-4 Shadow-lg rounded-lg text-xl mt-2">
            <p className="text-green-800"> IN DEVELOPMENT </p>
            <p>Website redesign and storefront setup </p>

            
          </div>
          </div>

          <div className=" bg-white p-6 Shadow-lg rounded-lg text-xl mt-6">
          <h1 className="mb-4"> Invoices </h1>
          <div className="p-4 h-12 rounded-lg bg-gray-200 flex justify-between items-center ">
            <p> Invoice</p>
            <p>Description</p>
            <p>Data info</p>
            <p>Amount</p>
            <p>Status</p>
            <p>Action</p>
          </div>
          </div>

          <div className=" bg-white p-6 Shadow-lg rounded-lg text-xl mt-6">
          <h1> Recentfiles and deliverables </h1>
          <div className=" flex justify-end gap-2">
          </div>
          </div>
          </div>
    )
}