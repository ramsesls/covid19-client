import dayjs from 'dayjs';

const formatNumber = number => new Intl.NumberFormat().format(number);
const formatDate = tms => tms ? dayjs(tms).format('MMMM D, YYYY h:mm A') : 'N/A';

export { formatNumber, formatDate };
