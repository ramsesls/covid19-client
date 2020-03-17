import dayjs from 'dayjs'

const today = _ => {
  return dayjs().format('DD MMMM, YYYY');
}

export default today;
