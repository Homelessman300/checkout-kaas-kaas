import React from 'react';

const OrderTimeline = () => {
  return (
    <div className="text-center font-sans px-4 py-6 bg-gradient-to-r from-[#639BAB] to-[#9AC8DB] text-white">
      <h3 className="text-lg font-semibold mb-4">We gaan met je bestelling aan de slag:</h3>
      
      {/* On mobile, flex-col; on larger screens, flex-row */}
      <div className="flex flex-col md:flex-row justify-around items-center max-w-4xl mx-auto space-y-6 md:space-y-0 md:space-x-4">
        
        {/* Timeline items with labels */}
        <TimelineItem label="Bestelling geplaatst" active />
        <TimelineConnector />
        
        <TimelineItem label="Productievoorbereiding (en inkoop)" />
        <TimelineConnector />
        
        <TimelineItem label="Zagen en frezen" />
        <TimelineConnector />
        
        <TimelineItem label="Transport" />
        <TimelineConnector />
        
        <TimelineItem label="Leverdatum" />
      </div>
    </div>
  );
};

// Timeline item component with label and dot
const TimelineItem = ({ label, active }) => (
  <div className="flex flex-col items-center relative">
    <div className={`flex items-center justify-center w-5 h-5 rounded-full border-2 ${active ? 'bg-white' : 'bg-transparent'} border-white`}>
      <div className={`${active ? 'w-2 h-2 bg-white rounded-full' : ''}`}></div>
    </div>
    <p className="font-semibold text-center mt-2 text-white text-sm">{label}</p>
  </div>
);

// Connector between timeline items
const TimelineConnector = () => (
  <div className="w-12 h-0.5 bg-white md:w-12 md:h-0.5 transform md:rotate-0 rotate-90 md:my-0 my-4"></div>
);

export default OrderTimeline;
