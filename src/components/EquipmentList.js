import React from 'react';
import EquipmentService from '../services/EquipmentService';

function EquipmentList() {
  const equipmentList = EquipmentService.getEquipmentList();

  return (
    <div>
      <h2>Equipment List</h2>
      <ul>
        {equipmentList.map((equipment) => (
          <li key={equipment.id}>
            {equipment.name} - {equipment.available ? 'Available' : 'Not Available'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EquipmentList;
