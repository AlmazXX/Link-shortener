import cors from "cors";
import express from "express";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

const run = async () => {
  app.listen(port, () => {
    console.log("We are live on port: " + port);
  });
};

run().catch(console.error);