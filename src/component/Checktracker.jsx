import React from 'react';


const OrderTimeline  = () => {
  return (
    <div className="text-center font-sans">
      <h3 className="text-lg font-semibold mb-4">We gaan met je bestelling aan de slag:</h3>
      <div className="flex justify-around items-center max-w-4xl mx-auto py-6">

        <div className="flex flex-col items-center relative">
          <div className="w-3 h-3 bg-blue-500 rounded-full mb-2"></div>
          <p className="font-semibold">Bestelling geplaatst</p>
          <span className="text-sm text-gray-600"></span>
        </div>


        <div className="w-16 h-0.5 bg-gray-300"></div>

        <div className="flex flex-col items-center relative">
          <div className="w-3 h-3 bg-blue-500 rounded-full mb-2"></div>
          <p className="font-semibold">Productievoorbereiding (en inkoop)</p>
        </div>


        <div className="w-16 h-0.5 bg-gray-300"></div>


        <div className="flex flex-col items-center relative">
          <div className="w-3 h-3 bg-blue-500 rounded-full mb-2"></div>
          <p className="font-semibold">Zagen en frezen</p>
        </div>


        <div className="w-16 h-0.5 bg-gray-300"></div>


        <div className="flex flex-col items-center relative">
          <div className="w-3 h-3 bg-blue-500 rounded-full mb-2"></div>
          <p className="font-semibold">Transport</p>
        </div>


        <div className="w-16 h-0.5 bg-gray-300"></div>

  
        <div className="flex flex-col items-center relative">
          <div className="w-3 h-3 bg-blue-500 rounded-full mb-2"></div>
          <p className="font-semibold">Leverdatum</p>
          <span className="text-sm text-gray-600"></span>
        </div>
      </div>
    </div>
  );
};

export default OrderTimeline;
