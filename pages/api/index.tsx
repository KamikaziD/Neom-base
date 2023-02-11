import express, { Request, Response } from "express";

function loggerMiddleware(
  request: express.Request,
  response: express.Response,
  next
) {
  console.log(`LOG: ${request.method} ${request.url}`);
  next();
}

const app = express();

app.use(loggerMiddleware);

app.get("/api", async (req: express.Request, res: express.Response) => {
  res.send("NEOM 2.0 API");
});

module.exports = app;
