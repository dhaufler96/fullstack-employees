import express from "express";
import {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "#db/queries/employees";

const router = express.Router();

router.get("/", async (req, res) => {
  const employees = await getEmployees();
  res.json(employees);
});

router.post("/", async (req, res) => {
  const { name, birthday, salary } = req.body ?? {};

  if (!name || !birthday || salary == null) {
    return res.sendStatus(400);
  }

  const employee = await createEmployee({
    name,
    birthday,
    salary,
  });

  res.status(201).json(employee);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const employee = await getEmployee(id);

  if (!employee) {
    return res.sendStatus(404);
  }

  res.json(employee);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const employee = await deleteEmployee(id);

  if (!employee) {
    return res.sendStatus(404);
  }

  res.sendStatus(204);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, birthday, salary } = req.body ?? {};

  if (!name || !birthday || salary == null) {
    return res.sendStatus(400);
  }

  const employee = await updateEmployee({
    id,
    name,
    birthday,
    salary,
  });

  if (!employee) {
    return res.sendStatus(404);
  }

  res.json(employee);
});

export default router;
