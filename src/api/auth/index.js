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
   getUserByUserGuid(userGuid) {
    return api.get(`${modules}/getUserByUserGuid?userGuid=${userGuid}`);
  },
  /**
   * POST 用户注册
   * @param {Object} params
   * @param {String} account
   * @param {String} password
   */
   addUser(params) {
    return api.post(`${modules}/addUser`, params);
  },
}

export default auth;