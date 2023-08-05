import axios from 'axios';

export const createEvent = async () => {
  try {
    const { data } = await axios.post(
      'https://64c88fa6a1fe0128fbd5e8b1.mockapi.io/events'
    );

    return data;
  } catch (error) {
    return;
  }
};
