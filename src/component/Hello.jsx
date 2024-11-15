// Import necessary modules
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoice, faProjectDiagram, faHeart, faFileAlt, faBars } from '@fortawesome/free-solid-svg-icons'; // Updated to import faBars

function AccountCard() {
  return (
    <div className="max-w-sm mx-auto bg-[#639BAB] rounded-lg shadow-md p-6">
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
      <h1 className="text-lg font-bold text-white">Hi Mariëlle</h1>
      <p className="text-sm text-white">
        We hebben de bestelling toegevoegd aan je account. Zo heb je altijd inzicht.
      </p>
    </div>
  );
}

// Sub-component for the menu section
function AccountMenu() {
  return (
    <div>
      <div className="flex items-center mb-4">
        <FontAwesomeIcon icon={faBars} className="text-white ml-2" /> 
        <span className="text-white font-semibold mx-1">Mijn account</span>
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
      <p className="text-sm font-semibold text-[#639BAB]">{label}</p> 
      <FontAwesomeIcon icon={icon} className="text-[#6C6C6C] mb-2" />
    </div>
  );
}

function RewardSection() {
    return (
      <div className="mt-6 text-center bg-white rounded-lg shadow-md p-6">
        <p className="text-sm font-semibold text-[#639BAB]">Verdien 25,- met jouw klustips</p> 
        <p className="text-sm text-[#6C6C6C]">
          Door 5 foto’s van jouw project en jouw tips te delen!
        </p>
        <div className="flex items-center justify-center mt-4">
          <input
            type="text"
            readOnly
            value="omz.nl/klantverhaal-upload-link"
            className="border border-[#639BAB] rounded-l-lg py-2 px-3 w-2/3 text-sm"
          />
          <button className="bg-[#639BAB] text-white rounded-r-lg py-2 px-4 text-sm font-semibold">
            Kopieer
          </button>
        </div>
      </div>
    );
  }
  

export default AccountCard;
