import axios from 'axios';

axios.defaults.baseURL = 'https://64c88fa6a1fe0128fbd5e8b1.mockapi.io/events/';

export const getEvents = async () => {
  try {
    const { data } = await axios.get('/events');

    return data;
  } catch (error) {
    return;
  }
};
