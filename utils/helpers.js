function formatDate(dateString) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [year, month, day] = dateString.split("-");

  const monthIndex = parseInt(month, 10) - 1;
  const dayNumber = parseInt(day, 10);

  const monthName = months[monthIndex];

  return `${monthName} ${dayNumber}, ${year}`;
}
function replaceNonAlphanumericWithHyphen(inputString) {
    return inputString.replace(/[^a-zA-Z0-9]/g, '-');
  }

export { formatDate, replaceNonAlphanumericWithHyphen };
