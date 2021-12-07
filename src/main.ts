import stringify from "csv-stringify/lib/sync";

export function toCsv(data: any): string {
  return stringify(data);
}

async function main(): Promise<void> {
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

  console.log(typeof csv);
  console.log(csv);
}

main();
