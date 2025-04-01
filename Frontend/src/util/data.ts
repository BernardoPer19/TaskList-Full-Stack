export const createData = () => {
  const now = new Date();
  const formattedDate = now.toLocaleDateString("es-ES");
  return formattedDate;
};
