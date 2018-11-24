import axios from 'axios';
import SessionController from '../controller/SessionController';

const url = '/api/users';

export default {
  registration(firstName, lastName, pesel, gender, PatientInputDto) {
    const params = new URLSearchParams();
    params.append('firstName', firstName);
    params.append('lastName', lastName);
    params.append('pesel', pesel);
    params.append('gender', gender);
    const config = {
      method: 'post',
      url: url + '/registation',
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