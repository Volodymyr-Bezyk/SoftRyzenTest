import dayjs from 'dayjs';

export const dateFormatter = inputDate => dayjs(inputDate).format('DD.MM.YYYY');
