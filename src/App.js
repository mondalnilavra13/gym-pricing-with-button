import React, { useState } from 'react';

const pricingData = [
  {
    name: 'Basic',
    price: '$10',
    features: ['Access to gym', 'Locker room access', 'No pool access'],
  },
  {
    name: 'Premium',
    price: '$20',
    features: ['Access to gym', 'Locker room access', 'Pool access'],
  },
  {
    name: 'VIP',
    price: '$30',
    features: ['Access to gym', 'Locker room access', 'Pool access', 'Personal trainer'],
  },
];

const PricingCard = ({ data, handleClick }) => {
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <div className="pricing-card">
      <h2>{data.name}</h2>
      <h3>{data.price}</h3>
      <button onClick={() => {handleClick(data.name); setShowFeatures(!showFeatures);}}>
        {showFeatures ? 'Hide Features' : 'Show Features'}
      </button>
      {showFeatures && (
        <ul>
          {data.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const GymPricingUI = () => {
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleClick = (name) => {
    setSelectedPlan(name);
  };

  return (
    <div className="gym-pricing-ui">
      <h1>Gym Pricing</h1>
      <div className="pricing-cards">
        {pricingData.map((data, index) => (
          <PricingCard key={index} data={data} handleClick={handleClick} />
        ))}
      </div>
      {selectedPlan && (
        <p>You have selected the {selectedPlan} plan.</p>
      )}
    </div>
  );
};

export default GymPricingUI;