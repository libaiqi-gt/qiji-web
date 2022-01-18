import { api } from 'utils/api';

const modules = '/auth';

export default {
  /**
   * 
   * @param {Object} params  
   * @returns 
   */
  userLogin(params) {
    return api.post(`${modules}/userLogin`, params);
  }
}