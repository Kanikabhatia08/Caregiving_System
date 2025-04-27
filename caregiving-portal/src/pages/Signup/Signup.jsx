import React, { useState } from 'react';
import CaregiverSignup from './CaregiverSignup';  
import CustomerSignup from './CustomerSignup';    

function Signup() {
  const [activeTab, setActiveTab] = useState('customer'); 

  return (   // <<<=== this "return" was missing in your file
    <div>
      <section className="max-w-[80%] mx-auto justify-center gap-10 flex">
        <div className="w-full max-w-[50%]">
          <div className="flex justify-evenly w-full">
            <button
              onClick={() => setActiveTab('customer')}
              className={`tab-button ${activeTab === 'customer' ? 'active text-orange border-b-2 border-b-orange' : ''} text-xl pb-2 font-semibold`}
            >
              Customer
            </button>
            <button
              onClick={() => setActiveTab('caregiver')}
              className={`tab-button ${activeTab === 'caregiver' ? 'active text-orange border-b-2 border-b-orange' : ''} text-xl pb-2 font-semibold`}
            >
              Caregiver
            </button>
          </div>

          <div className="transition-all duration-500 ease-in-out">
            {activeTab === 'customer' && <CustomerSignup />}
            {activeTab === 'caregiver' && <CaregiverSignup />}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
