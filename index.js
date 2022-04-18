import { api, data } from "@serverless/cloud";
import { v4 as uuid } from "uuid" 

api.get("/", async (req, res) => {
  res.send("<h1>Hello Fred!</h1>");
});

api.get("/wazup/:id", async (req, res) => {
  const { id } = req.params
  const rslt = await data.get(id);
  res.json(rslt);
});

api.post("/wazup", async (req, res) => {
  const id = uuid()
  const body = req.body
  await data.set(id, body);
  res.send(`<h1>Wazup added saved successfully. id: ${id}</h1>`);
});
