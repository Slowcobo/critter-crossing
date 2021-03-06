export const getMonth = (monthNum) => {
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
  return months[monthNum - 1];
};

export const monthMarks = [
  { value: 1, label: "Jan" },
  { value: 2, label: "Feb" },
  { value: 3, label: "Mar" },
  { value: 4, label: "Apr" },
  { value: 5, label: "May" },
  { value: 6, label: "Jun" },
  { value: 7, label: "Jul" },
  { value: 8, label: "Aug" },
  { value: 9, label: "Sep" },
  { value: 10, label: "Oct" },
  { value: 11, label: "Nov" },
  { value: 12, label: "Dec" },
];

export const timeMarks = [
  { value: "0", label: "12AM" },
  { value: "1", label: "" },
  { value: "2", label: "" },
  { value: "3", label: "" },
  { value: "4", label: "" },
  { value: "5", label: "" },
  { value: "6", label: "6AM" },
  { value: "7", label: "" },
  { value: "8", label: "" },
  { value: "9", label: "" },
  { value: "10", label: "" },
  { value: "11", label: "" },
  { value: "12", label: "12PM" },
  { value: "13", label: "" },
  { value: "14", label: "" },
  { value: "15", label: "" },
  { value: "16", label: "" },
  { value: "17", label: "" },
  { value: "18", label: "6PM" },
  { value: "19", label: "" },
  { value: "20", label: "" },
  { value: "21", label: "" },
  { value: "22", label: "" },
  { value: "23", label: "11PM" },
];

export const timeText = (value) => {
  return value < 13 ? `${value}AM` : `${value}PM`;
};

export const monthText = (value) => {
  return monthMarks[value - 1];
};
