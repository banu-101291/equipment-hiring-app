import React, { useState } from 'react';
import EquipmentService from '../../services/EquipmentService';

function RentalForm({ equipmentId }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [rentalSuccess, setRentalSuccess] = useState(false);

  const handleRent = async () => {
    setLoading(true);
    setError(null);
    try {
      await EquipmentService.rentEquipment(equipmentId);
      setRentalSuccess(true);
    } catch (error) {
      setError('Error renting equipment. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Rent Equipment</h2>
      {rentalSuccess ? (
        <p>Rental request successful!</p>
      ) : (
        <>
          <button onClick={handleRent} disabled={loading}>
            {loading ? 'Renting...' : 'Rent'}
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
      )}
    </div>
  );
}

export default RentalForm;
