

export default function SecureExchange(){
    return(
             <div className=" py-6 mx-6 ">
            <div className=" bg-green-950 p-6 Shadow-lg rounded-lg text-xl mt-6">
          <h1 className=" text-white"> Secure Exchange 
            <span className=" text-white text-sm bg-green-900 rounded-2xl"> Single-use zero-trace-vault </span>
            </h1>
            <p className="text-white text-sm w-100 mt-2"> Create a secret (text or file)
                 recipients can open exactly once. It is then permently destoryed with zero trace</p>
            <p className="text-white text-sm w-100 mt-2"> What this protects and what is doesn't</p> 
        <div className=" flex justify-end gap-2 itemd-center">
          <button className="bg-gray-500 p-2 Shadow-lg rounded-lg text-white text-sm w-40 h-10 "> Requst a secret </button>
          <button className="bg-green-800 p-2 Shadow-lg rounded-lg text-white text-sm w-40 h-10"> Send a secret </button>
          </div>
          </div>

        <div className="flex bg-white w-200 mt-4 rounded-xl items-center pl-5 gap-4">
                <div className=" bg-gray-200">
                <button className="" > All </button>
                 <p className=""> (5)</p>
                </div>

                <div className=" bg-gray-200 ">
                <button className="" > Pending </button>
                 <p className=""> (5)</p>
                </div>

                <div className=" bg-gray-200 ">
                <button className="" > Delivered </button>
                 <p className=""> (5)</p>
                </div>

                <div className=" bg-gray-200 ">
                <button className="" > Open </button>
                 <p className=""> (5)</p>
                </div>
                
                <div className=" bg-gray-200 ">
                <button className="" > Destory </button>
                 <p className=""> (5)</p>
                </div>

                <div className=" bg-gray-200 ">
                <button className="" > Expire </button>
                 <p className=""> (5)</p>
                </div>

                <div className=" bg-gray-200 ">
                <button className="" > Revoke </button>
                 <p className=""> (5)</p>
                </div>

                <div className="pl-5">
                    <p> Zero plantext retention policy active </p>
                </div>

                </div>

          </div>
    )
}