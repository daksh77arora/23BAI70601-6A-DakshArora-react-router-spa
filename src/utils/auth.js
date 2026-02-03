// Simple authentication utility
export const auth = {
  isAuthenticated: false,

  login(callback) {
    this.isAuthenticated = true;
    if (callback) callback();
  },

  logout(callback) {
    this.isAuthenticated = false;
    if (callback) callback();
  },

  checkAuth() {
    return this.isAuthenticated;
  }
};
