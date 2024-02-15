import express from "express";
import connect from "./DB/connect.js";
import "dotenv/config.js";
import cors from "cors";
import {
  getAll,
  getOne,
  postOne,
  updateOne,
  deleteOne,
} from "./controllers/function.js";
const livePort = process.env.PORT || 5050;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("hello"));
app.get("/api/v1/blogs", getAll);
app.get("/api/v1/blogs/:id", getOne);
app.post("/api/v1/blogs", postOne);
app.put("/api/v1/blogs/:id", updateOne);
app.delete("/api/v1/blogs/:id", deleteOne);
app.listen(livePort, async () => {
  await connect()
    .then(() => {
      console.log("connected to cloud");
      console.log("http://localhost:" + livePort);
    })
    .catch((err) => {
      console.log(err);
    });
});
