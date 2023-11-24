export const customDateFormat = (value) => {
  const date = new Date(value);
  const getMonth =
    (date?.getMonth() + 1).toString().length === 1
      ? `0${date?.getMonth() + 1}`
      : date?.getMonth() + 1;

  const getDate =
    (date?.getDate() + 1).toString().length === 1
      ? `0${date?.getDate()}`
      : date?.getDate();

  return date !== "Invalid Date"
    ? `${date?.getFullYear()}-${getMonth}-${getDate}`
    : value;
};
