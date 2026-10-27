

export default function Project(){
    return(
     <div className="p-2 ">
     <div className=" p-6 flex Shadow-lg text-xl gap-6 ">
          <h1 className="text-2xl"> Webside redesign </h1>

          <div className=" flex justify-end gap-2 pl-130">
          <button className="bg-gray-500 p-2 Shadow-lg rounded-lg text-white text-sm w-30 h-10"> Edit Project </button>
          <button className="bg-green-900 p-2 Shadow-lg rounded-lg text-white text-sm w-50 h-10"> Client portal view </button>
          </div>
        </div>

         <div 
        className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-6 shadow-lg rounded-lg ">
          <h3 className="text-xl font-bold dark:text-gray-100">Total Budgets</h3>
          <p className="text-lg p-1 text-gray-600 ">$345 <span className="text-sm">USED fixed</span></p>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-lg ">
          <h3 className="text-xl font-bold dark:text-gray-100">Target deadline </h3>
          <p className="text-lg p-1 text-gray-600 "></p>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-lg ">
          <h3 className="text-xl font-bold dark:text-gray-100">Milestone pace</h3>
          <p className="text-lg p-1 text-gray-600 "> </p>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-lg ">
          <h3 className="text-xl font-bold dark:text-gray-100">Outstanding balance</h3>
          <p className="text-lg p-1 text-gray-600 ">$000 </p>
        </div>
        </div>
        </div>
    )
}