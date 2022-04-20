export const cut = (text, length = 5) => {
  if (text.length >= length) {
    return `${text.substr(0, length)}...`;
  }
  return text;
}