import axios from 'axios';

export const getOneEventById = async id => {
  try {
    const data = await axios.get(`/events/${id}`);

    return data;
  } catch (error) {
    return;
  }
};
