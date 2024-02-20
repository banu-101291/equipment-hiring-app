import React from 'react';
import EquipmentService from '../services/EquipmentService';

function RentalForm({ equipmentId }) {
  const handleRent = () => {
    EquipmentService.rentEquipment(equipmentId);
  };

  return (
    <div>
      <h2>Rent Equipment</h2>
      <button onClick={handleRent}>Rent</button>
    </div>
  );
}

export default RentalForm;
