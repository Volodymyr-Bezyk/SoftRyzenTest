import axios from 'axios';

export const editEvent = async (formData, id) => {
  try {
    const data = await axios.put(
      `https://64c88fa6a1fe0128fbd5e8b1.mockapi.io/events/${id}`,
      { ...formData }
    );
    return data;
  } catch (error) {
    console.log('ERR', error);
    return;
  }
};
