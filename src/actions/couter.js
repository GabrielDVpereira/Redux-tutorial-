export const incrementAction = () => {
  return { type: "INCREMENT" };
};
export const incrementByValueAction = (value) => {
  return { type: "INCREMENT_BY_VALUE", value };
};
