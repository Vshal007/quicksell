import React from "react";

const Card = () => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold text-gray-900">CAM-11</div>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-xl font-medium text-gray-700">A</span>
          </div>
        </div>
      </div>
      <h2 className="mt-2 text-2xl font-bold text-gray-800">
        Conduct Security Vulnerability Assessment
      </h2>
      <div className="flex items-center justify-start mt-4 space-x-2">
        <span className="bg-yellow-200 text-yellow-800 py-1 px-3 rounded-full text-sm">
          <span role="img" aria-label="warning" className="mr-1">
            ⚠️
          </span>
          Feature Request
        </span>
      </div>
    </div>
  );
};

export default Card;
