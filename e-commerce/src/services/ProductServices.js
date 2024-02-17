export const getProducts = () => {
  return [
    {
      id: "1",
      name: "computer",
      price: 70000,
      quantity: 20,
    },
    {
      id: "2",
      name: "I-Phone",
      price: 100000,
      quantity: 30,
    },
    {
      id: "3",
      name: "Samsung",
      price: 80000,
      quantity: 50,
    },
  ];
};
export const productServices = { getProducts };
