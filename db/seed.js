import db from "#db/client";
import { createEmployee } from "#db/queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  const employees = [
    { name: "John Smith", birthday: "1990-05-15", salary: 55000 },
    { name: "Jane Doe", birthday: "1988-03-22", salary: 62000 },
    { name: "Michael Johnson", birthday: "1995-07-10", salary: 48000 },
    { name: "Emily Davis", birthday: "1992-11-30", salary: 71000 },
    { name: "David Wilson", birthday: "1985-09-18", salary: 85000 },
    { name: "Sarah Brown", birthday: "1998-01-25", salary: 52000 },
    { name: "James Miller", birthday: "1991-06-12", salary: 67000 },
    { name: "Olivia Taylor", birthday: "1994-04-08", salary: 59000 },
    { name: "Daniel Anderson", birthday: "1987-12-03", salary: 78000 },
    { name: "Sophia Martinez", birthday: "1996-08-21", salary: 64000 },
  ];

  for (const employee of employees) {
    await createEmployee(employee);
  }
}
