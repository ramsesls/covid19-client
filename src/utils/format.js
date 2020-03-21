import dayjs from 'dayjs';

const formatNumber = number => new Intl.NumberFormat().format(number);
const formatDate = tms => tms ? dayjs(tms).format('MMMM D, YYYY h:mm A') : 'N/A';
const formatTooltipDate = date => dayjs(date).format('D MMMM, YYYY');

export { formatNumber, formatDate, formatTooltipDate };
