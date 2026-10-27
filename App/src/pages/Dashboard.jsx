

export default function Dashboard() { 

  return (

    <div className="p-6 ">
       <div className="flex items-center justify-end mb-4 gap-5">
       <h1 className="p-4 font-bold mr-160"> Good Morning </h1>
        <button className="bg-gray-400 w-35 h-10"> + New Project </button>
        <button className="bg-green-900 w-40 h-10 text-white"> Request a secret</button>
      </div>

      <div 
        className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Active Projects Card */}
        <div className="bg-white p-6 shadow-lg rounded-lg dark:bg-gray-800">
          <h3 className="text-xl font-bold dark:text-gray-100">Active Projects</h3>
          <p className="text-lg p-1 text-gray-600 dark:text-gray-100">3</p>
          <p className="text-lg p-1 text-gray-600 dark:text-gray-100">2 in review. 1 proposal</p>
        </div>

        {/* Pending Approvals Card */}
        <div className="bg-white p-6 shadow-lg rounded-lg dark:bg-gray-800">
          <h3 className="text-xl font-bold dark:text-gray-100">Pending approvals</h3>
          <p className="text-lg p-1 text-gray-600 dark:text-gray-100">1 Delivered</p>
          <p className="text-lg p-1 text-gray-600 dark:text-gray-100">Home page v3.pdf</p>
        </div>
        hi

        {/* Unpaid Invoices Card */}
        <div className="bg-white p-6 shadow-lg rounded-lg dark:bg-gray-800">
          <h3 className="text-xl font-bold dark:text-gray-100">Unpaid Invoices</h3>
          <p className="text-lg p-1 text-gray-600 dark:text-gray-100">$222</p>
          <p className="text-lg p-1 text-gray-600 dark:text-gray-100">2 months</p>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-lg dark:bg-gray-800">
          <h3 className="text-xl font-bold dark:text-gray-100">Overdue Invoices</h3>
          <p className="text-lg p-1 text-gray-600 dark:text-gray-100">$122</p>
          <p className="text-lg p-1 text-gray-600 dark:text-gray-100">2 months</p>
        </div>
      </div>

      <div className=" bg-white p-6 Shadow-lg rounded-lg text-xl w-200">
        <div className=" flex mb-2">
        <h1> A waiting approval </h1>
        <span className="ml-105 bg-gray-300 rounded-lg"> 1 Pending request </span>
        </div>
        <div className="">
          <div className="flex gap-15 bg-gray-400 text-sm p-6 h-15 items-center Shadow-lg rounded-lg ">
          <p className=""> Deliverable </p>
          <p className=""> Project </p>
          <p className=""> Client </p>
          <p className=""> Sent </p>
          <p className=""> Status </p>
          <p className=""> Action </p>
         
          </div>
        </div>
      </div>

      <div className=" bg-white p-6 Shadow-lg rounded-lg text-xl w-200 mt-6">
          <h1> Deadline</h1>
          <p className="text-red-500 text-sm p-2">! Over due </p>
          <p className="bg-500 h-8 p-2 Shadow-lg rounded-lg text-xl w-190"></p>

          <p className=" text-sm p-2"> This week </p>
          <p className="bg--500 h-8 p-2 Shadow-lg rounded-lg text-xl w-190"></p>

          <p className=" text-sm p-2"> Later </p>
          <p className="bg--500 h-8 p-2 Shadow-lg rounded-lg text-xl w-190"></p>

      </div>

       <div className=" bg-white p-6 Shadow-lg rounded-lg text-xl w-200 mt-6">
          <h1 className=""> Money and invoices</h1>
          <div className="flex gap-20 bg-gray-100 text-sm p-2 h-8 Shadow-lg rounded-lg w-190">
          <p className="pr-10"> References </p>
          <p className=""> Client </p>
          <p className=""> Amount </p>
          <p className=""> Status </p>
          <p className="pl-10"> Due date </p>
         
          </div>
      </div>
    </div>
  );
}