export class AppStorage {
    static async save(key, value) {
      return localStorage.setItem(key, JSON.stringify(value));
    }
  
    static async get(key) {
      return JSON.parse(localStorage.getItem(key));
    }
  
    static async remove(key) {
      return localStorage.removeItem(key);
    }
  
    static async clear() {
      return localStorage.clear();
    }
  }

  
// return await AsyncStorage
// cuando utilize react native
// mover el storage de la web a mobile


