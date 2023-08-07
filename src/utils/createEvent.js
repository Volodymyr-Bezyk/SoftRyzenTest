import axios from 'axios';
import toast from 'react-hot-toast';

export const createEvent = async formData => {
  try {
    const data = await axios.post(
      'https://64c88fa6a1fe0128fbd5e8b1.mockapi.io/events',
      { ...formData }
    );
    toast.success(`Success! New event saved`);
    return data;
  } catch (error) {
    console.log('ERR', error);
    return;
  }
};
