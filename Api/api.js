import axios from 'axios';
const BASE_URL = 'https://gorest.co.in/public/v1/';

let axiosApiClient;
const axiosConfig = {
  baseURL: BASE_URL,
  validateStatus: () => true,
};
axiosApiClient = axios.create(axiosConfig);

export const Getuser = async () => {
  try {
    const getResponse = await axiosApiClient.get('users');
    return getResponse.data;
  } catch (err) {
    return {message: 'something went wrong', status: false};
  }
};

export const GetPost = async params => {
  try {
    const getResponse = await axiosApiClient.get(`posts?user_id=${params}`);
    // console.log(getResponse);

    return getResponse.data;
  } catch (err) {
    return {message: 'something went wrong', status: false};
  }
};

export const GetProfile = async params => {
  try {
    const getResponse = await axiosApiClient.get(`users/${params}`);
    // console.log(getResponse);

    return getResponse.data;
  } catch (err) {
    return {message: 'something went wrong', status: false};
  }
};
