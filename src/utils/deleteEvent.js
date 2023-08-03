import axios from 'axios';

export const deleteEvents = async id => {
  try {
    await axios.delete(
      `https://64c88fa6a1fe0128fbd5e8b1.mockapi.io/events/${id}`
    );
  } catch (error) {
    return;
  }
};
