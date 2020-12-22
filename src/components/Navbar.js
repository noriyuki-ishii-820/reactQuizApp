import React from "react";

const Navbar = () => {
    return (
        <div className="header">
            <nav className="bg-gray-800">
                 <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <h1 className="appTitle">Quiz App</h1>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button className="github-btn">
                           Twitter
                        </button>  
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button className="github-btn">
                           GitHub
                        </button>  
                    </div>
                </div>
            </div>
     

   
</nav>



        </div>




    )
}

export default Navbar;