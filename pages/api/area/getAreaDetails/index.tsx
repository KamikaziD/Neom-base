import express from "express";
import axios, { AxiosResponse, HttpStatusCode } from "axios";

export default async function handle(
  req: express.Request,
  res: express.Response
) {
  const params: any = req.query?.areaId;
  const token: string = req.headers.authorization;
  // "Basic V2Fycm9vbTpaN0RhVWZFRA==";

  try {
    // if (token !== undefined) {
    //   throw (new Error("Unauthorized").message = "Unauthorized");
    // }

    const response: AxiosResponse = await axios.get(
      `https://uatgroundx.neom.com/nuxeo/site/cameraData/getAreaDetails?areaId=${params}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "s-max-age=1, stale-while-revalidate",
          Authorization: token,
        },
      }
    );

    const body: JSON = response.data;

    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.status(HttpStatusCode.Ok).send(body);
  } catch (err) {
    res.send({ error: err.message, code: err.statusCode });
  }
}
