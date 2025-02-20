export const API_BASE_URL = 'http://localhost:5010/API';

export const routes = {
    home: '/', 
    login : '/login',
    register : '/register',
    dashboard : '/dashboard',
    profile : '/profile',
    talkUs : '/talkUs',
    userManagement : '/UserManagement',
    cars : '/Cars',
    services : '/Services',
    carService : '/CarService',
    carServiceAdminMode : '/CarServiceAdminMode',
    typeDocs : '/TypeDocs',
};
  
export const formatKilometers = km => {
    return new Intl.NumberFormat('es-CO', {
      style: 'decimal',
      maximumFractionDigits: 2
    }).format(km) + ' km';
  };
  
export const formatMoney = amount => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(amount);
};

  

  