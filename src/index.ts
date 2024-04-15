import express from "express";

import { config } from "dotenv";
import routes from "./routes";

config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(routes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
