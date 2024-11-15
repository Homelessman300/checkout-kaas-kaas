import React from 'react';

const OrderDetails = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">

      <h2 className="text-xl font-semibold mb-2">
        Details
        <span className="bg-[#236376] text-white px-2 py-1 rounded-full text-sm">
          Bestelling 1000XXX
        </span>
      </h2>
      <p className="text-gray-700">
        Er is een bevestiging inclusief factuur verstuurd naar:
        <span className="font-medium">kaas@kaas.com</span>
      </p>
      <p className="text-gray-700">
        Totaal: <span className="font-medium">€25,39 incl. btw 21%</span>
      </p>
      <p className="text-blue-500 cursor-pointer hover:underline mt-2">
        Bekijk order details
      </p>


      <div className="flex justify-between mt-4 text-gray-800">

        <div>
          <p className="font-semibold">Bezorgadres:</p>
          <p>Mariëlle Veenendaal</p>
          <p>Fransesteeg 16</p>
          <p>6718 TX Ede</p>
          <p>Nederland</p>
        </div>

        <div>
          <p className="font-semibold">Transporteur</p>
          <p>DPD</p>
          <p className="font-semibold mt-2">Leverdatum</p>
          <p>Woensdag 12 december, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
