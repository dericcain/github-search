export function thousandsSeparator(number) {
  if (number.length < 4) return number;
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
