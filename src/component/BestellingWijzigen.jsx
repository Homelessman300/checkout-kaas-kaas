import React from 'react';

const OrderModificationInfo = () => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md text-gray-800">
      <h2 className="text-2xl font-semibold mb-4">Bestelling wijzigen</h2>
      <p className="mb-4">
        We gaan zo snel mogelijk (geautomatiseerd) met je bestelling aan de slag om deze op tijd klaar te hebben voor transport. 
        Nadat de voorbereidingen begonnen zijn, kan je je bestelling niet meer wijzigen. Toch een foutje ontdekt?{' '}
        <a href="#" className="text-blue-500 hover:underline">
          Controleer hier of je je bestelling nog kunt wijzigen.
        </a>
      </p>
      <hr className="my-4" />
      <p>
                         
      Bezoek onze <a href="#" className=" text-blue-500 hover:underline ">sklantenservice pagina </a>
        
        voor meer informatie of controleer de <a href="#" className="text-blue-500 hover:underline"> status van je bestelling hier</a>.
      </p>
    </div>
  );
};

export default OrderModificationInfo;
