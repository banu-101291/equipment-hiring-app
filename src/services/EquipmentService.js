class EquipmentService {
    static getEquipmentList() {
      // Mocked equipment data
      return [
        { id: 1, name: 'Excavator', available: true },
        { id: 2, name: 'Bulldozer', available: false },
        { id: 3, name: 'Crane', available: true },
      ];
    }
  
    static rentEquipment(id) {
      // Your rental request logic here
    }
  }
  
  export default EquipmentService;
  

  