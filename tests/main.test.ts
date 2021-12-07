import { toCsv } from "../src/main";

test("stringify", () => {
  const data = [
    {
      name: "A",
      age: 20,
    },
    {
      name: "B",
      age: 16,
    },
    {
      name: "C",
      age: 38,
    },
    {
      name: "D",
      age: 27,
    },
  ];

  const csv = toCsv(data);
  expect(typeof csv).toEqual("string");
  expect(csv).toEqual(`A,20
B,16
C,38
D,27`);
});
