import axios from 'axios';
import toast from 'react-hot-toast';

export const deleteEvents = async id => {
  try {
    await axios.delete(
      `https://64c88fa6a1fe0128fbd5e8b1.mockapi.io/events/${id}`
    );
    toast.success(`Success! Event deleted`);
  } catch (error) {
    return;
  }
};
