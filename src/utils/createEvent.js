import axios from 'axios';

export const createEvent = async formData => {
  try {
    const data = await axios.post(
      'https://64c88fa6a1fe0128fbd5e8b1.mockapi.io/events',
      { ...formData }
    );
    console.log('completed', data);
  } catch (error) {
    console.log('ERR', error);
    return;
  }
};
