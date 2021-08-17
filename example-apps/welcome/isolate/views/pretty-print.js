export const prettyPrint = (text) => {
  console.log(
    `%c${text}`,
    'font-style: italic; color: purple; font-weight: bold;',
  );
};
