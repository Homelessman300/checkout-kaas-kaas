// Import necessary modules
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoice, faProjectDiagram, faHeart, faFileAlt } from '@fortawesome/free-solid-svg-icons';

function AccountCard() {
  return (
    <div className="max-w-sm mx-auto bg-gray-100 rounded-lg shadow-md p-6">
      <AccountHeader />
      <AccountMenu />
      <RewardSection />
    </div>
  );
}

// Sub-component for the header section
function AccountHeader() {
  return (
    <div className="text-center mb-6">
      <h1 className="text-lg font-bold text-gray-900">Hi Mariëlle</h1>
      <p className="text-sm text-gray-600">
        We hebben de bestelling toegevoegd aan je account. Zo heb je altijd inzicht.
      </p>
    </div>
  );
}

// Sub-component for the menu section
function AccountMenu() {
  return (
    <div className="bg-[#7aa5b5] rounded-lg p-4">
      <div className="flex items-center mb-4">
        <span className="text-white font-semibold">Mijn account</span>
      </div>
      <div className="grid grid-cols-2 gap-4 text-center">
        <AccountLink icon={faFileInvoice} label="Mijn bestellingen" />
        <AccountLink icon={faProjectDiagram} label="Mijn projecten" />
        <AccountLink icon={faFileAlt} label="Mijn facturen" />
        <AccountLink icon={faHeart} label="Mijn favorieten" />
      </div>
    </div>
  );
}

// Sub-component for each individual menu item
function AccountLink({ icon, label }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <FontAwesomeIcon icon={icon} className="text-gray-700 mb-2" />
      <p className="text-sm font-semibold text-[#7aa5b5]">{label}</p>
    </div>
  );
}

// Sub-component for the reward section
function RewardSection() {
  return (
    <div className="mt-6 text-center">
      <p className="text-sm font-semibold">Verdien 25,- met jouw klustips</p>
      <p className="text-sm text-gray-600">
        Door 5 foto’s van jouw project en jouw tips te delen!
      </p>
      <div className="flex items-center justify-center mt-4">
        <input
          type="text"
          readOnly
          value="omz.nl/klantverhaal-upload-link"
          className="border rounded-l-lg py-2 px-3 w-2/3 text-sm"
        />
        <button className="bg-gray-300 text-gray-700 rounded-r-lg py-2 px-4 text-sm font-semibold">
          Kopieer
        </button>
      </div>
    </div>
  );
}

export default AccountCard;
