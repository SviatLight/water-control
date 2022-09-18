export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const capitalizeAll = (arr) => {
  return arr
    .map((el, index) => {
      return index === 0 ? el : capitalizeFirstLetter(el);
    })
    .join(" ");
};

export const dateFormate = (date) => {
  const dateMonth =
    date.getMonth() > 8 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
  const dateDay = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
  const dateYear = date.getFullYear();
  return `${dateMonth}-${dateDay}-${dateYear}`;
};

export const dateToMonth = (date) => {
  return date.toLocaleDateString("en-US", { month: "long" });
};

export const dateToDate = (date) => {
  return date.toLocaleDateString("en-US", { dateStyle: "medium" });
};
