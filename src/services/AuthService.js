class AuthService {
    static isAuthenticated() {
      return localStorage.getItem('user') !== null;
    }
  
    static login(username, password) {
      // Your login logic here
      localStorage.setItem('user', username);
    }
  
    static logout() {
      localStorage.removeItem('user');
    }
  }
  
  export default AuthService;
  