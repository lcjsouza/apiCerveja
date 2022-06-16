const express = require("express");
const routes = express.Router();
let cervejas = require("../src/data/cervejas.json");

// Buscar Dados
routes.get("/", (req, res) => {
  return res.json(cervejas);
});

// Inserir Dados
routes.post("/add-cerveja", (req, res) => {
  const body = req.body;

  if (!body) return res.status(400).end();

  cervejas.push(body);
  return res.json(body);
});

module.exports = routes;
