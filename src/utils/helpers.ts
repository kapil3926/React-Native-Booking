function formatDate(dateStr: any) {
  let date;
  if (!dateStr) {
    date = new Date();
  } else {
    const [year, month, day] = dateStr.split('-');
    date = new Date(year, month - 1, day);
  }

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const monthName = months[date.getMonth()];

  return `${date.getDate()} ${monthName} ${date.getFullYear()}`;
}

export {formatDate};
