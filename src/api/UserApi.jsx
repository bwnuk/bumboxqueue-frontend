import axios from 'axios';
import SessionController from '../controller/SessionController';

const url = 'http://localhost:8013/api/users';

export default {
  registration(username, password, PatientInputDto) {
    console.log('TEST');
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);
    const config = {
      method: 'POST',
      url: url + '/registation',
      headers: {
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Origin': 'origin',
        'Content-Type': 'text/plain'
      },
      params,
      data: PatientInputDto
    };
    return axios(config);
  },
  login(username, password) {
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);
    return axios.post(url + '/login', params);
  },
  logout() {
    const sessionId = SessionController.getSession();
    SessionController.clear();
    return axios.post(url + '/logout', {
      headers: { Authorization: sessionId }
    });
  }
};