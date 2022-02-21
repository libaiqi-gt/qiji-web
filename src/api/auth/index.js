import { api } from 'utils/api';

const modules = '/auth';

const auth = {
  /**
   * POST 用户登录
   * @param {Object} params
   * @param {String} account
   * @param {String} password
   */
  userLogin(params) {
    return api.post(`${modules}/userLogin`, params);
  },
  /**
   * GET 获取用户信息
   * @param {Object} params
   * @param {String} userGuid
   */
   getUserInfo(params) {
    return api.get(`${modules}/getUserInfo`, params);
  }
}

export default auth;