const sessionKey = 'JESSIONID';
const usernameKey = 'username';

export default {
  getError(error) {
    return error.message + ' ' + error.error;
  },

  clear() {
    sessionStorage.clear();
  },

  setSession(jSessionId, username) {
    sessionStorage.setItem(sessionKey, sessionKey + '=' + jSessionId);
    sessionStorage.setItem(usernameKey, username);
  },

  getSession() {
    return sessionStorage.getItem(sessionKey);
  },

  getUsername() {
    return sessionStorage.getItem(usernameKey);
  },

  isLogged() {
    return sessionStorage.getItem(sessionKey) !== null && sessionStorage.getItem(usernameKey) !== null;
  }
};