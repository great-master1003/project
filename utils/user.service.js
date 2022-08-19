import getConfig from 'next/config';
import { fetchWrapper } from './fetchwrapper';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/users`;

export const userService = {
    register,
}

function register(user) {
    return fetchWrapper.post(`${baseUrl}/register`, user);
}

