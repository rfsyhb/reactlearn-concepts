const data = [
  {
    id: 1,
    name: "John Doe",
    age: 25,
    email: "johndoe@example.com",
    skill: "Cook"
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 30,
    email: "janesmith@example.com",
    skill: "Sleep"
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 35,
    email: "bobjohnson@example.com",
    skill: "Cook"
  }
];

const getInitialData = () => {
  return data;
};

// export default
// digunakan ketika hanya satu hal
// seperti react component
export default getInitialData;

// export named
// digunakan ketika beberapa hal
// export { getInitialData };