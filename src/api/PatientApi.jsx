import axios from 'axios';

import SessionController from '../controller/SessionController';

const url = '/api/patients';

export default {
  findTrainerByUsername(username) {
    return axios.get(url + '/' + username);
  },

  updatePatientByUsername(username, patientDto) {
    const sessionId = SessionController.getSession();
    console.log(sessionId);
    console.log(patientDto);
    return axios.put(url + '/' + username, patientDto, {
      headers: { Authorization: sessionId }
    });
  }
};