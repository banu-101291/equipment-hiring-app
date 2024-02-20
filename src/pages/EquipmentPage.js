import React, { useState } from 'react';
import EquipmentList from '../components/EquipmentList';
import RentalForm from '../components/Forms/RentalForm';

function EquipmentPage() {
  const [selectedEquipmentId, setSelectedEquipmentId] = useState(null);

  const handleSelectEquipment = (equipmentId) => {
    setSelectedEquipmentId(equipmentId);
  };

  return (
    <div>
      <h2>Equipment List</h2>
      <EquipmentList onSelectEquipment={handleSelectEquipment} />
      {selectedEquipmentId && (
        <RentalForm equipmentId={selectedEquipmentId} />
      )}
    </div>
  );
}

export default EquipmentPage;
