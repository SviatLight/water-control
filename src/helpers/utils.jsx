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
