import fs from "fs";
import express from "express";

const puerto = 3030;

const app = express();

app.get("/", (req, res) => {
  fs.readFile(`./pages/index.html`, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    res.send(data);
  });
});

app.get(`/products/:id.json`, async (req, res) => {
  const { id } = req.params;

  fs.readFile(
    `./products/${id}.json`,
    {
      encoding: "utf-8",
    },
    (err, data) => {
      if (err) {
        console.error(err);
        res
          .status(400)
          .send(`Hubo un error, el producto con el id: <b>${id}</b> no existe`);
        return;
      }

      res.status(200).send(JSON.parse(data));
    }
  );
});

app.listen(puerto || 3000, () => {
  console.log(
    `Funcionando en el puerto: ${puerto}\nPuedes acceder desde http://localhost:${puerto}`
  );
});
