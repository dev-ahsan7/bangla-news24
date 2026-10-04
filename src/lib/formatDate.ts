export const formatDate = (date: string) =>
  new Date(date).toLocaleString('bn-BD', {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone: 'Asia/Dhaka',
  });
