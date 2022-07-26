import React from 'react';

const Expart = ({expart}) => {
    const {name,id,img} = expart;
    return (
        <div id='exparts' className='p-4'>
            
<div className="  bg-white rounded-lg border border-gray-200 shadow-md ">
    
    <div className="flex flex-col items-center pb-10">
        <img className="p-2 mb-3 w-full rounded shadow-lg" src={img} alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium  ">{name}</h5>
        <span className="text-sm text-gray-500 ">ID: {id}</span>
        <div className="flex mt-4 space-x-3 lg:mt-6">
            <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
            <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ">Message</a>
        </div>
    </div>
</div>

        </div>
    );
};

export default Expart;