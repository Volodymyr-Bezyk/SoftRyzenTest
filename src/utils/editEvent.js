import axios from 'axios';
import toast from 'react-hot-toast';

export const editEvent = async (formData, id) => {
  try {
    const data = await axios.put(
      `https://64c88fa6a1fe0128fbd5e8b1.mockapi.io/events/${id}`,
      { ...formData }
    );
    toast.success(`Success! Event edited`);
    return data;
  } catch (error) {
    console.log('ERR', error);
    return;
  }
};
