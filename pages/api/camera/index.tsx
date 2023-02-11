import express from "express";
import axios, { HttpStatusCode } from "axios";

export default async function handle(
  req: express.Request,
  res: express.Response
) {
  const params: any = req.query.areaId;
  const token: any = process.env.NEOM_API_AUTH_TOKEN;
  console.log(token);
  try {
    const response: express.Response = await axios.get(
      `https://uatgroundx.oci.sense.neomos.online/cameraData/cameraAnalytics`,
      {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "s-max-age=1, stale-while-revalidate",
          AUTH_TOKEN: token,
          Authorization: "Basic RGF0YUluZ2VzdGlvbjo5SlBzMUVqeGF6R2JLQkpj",
        },
      }
    );

    const body = await response.json();

    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.setHeader("AUTH_TOKEN", token);
    res.status(HttpStatusCode.Ok).send(body);
  } catch (err) {
    if (err.code == "CERT_HAS_EXPIRED") {
      res
        .status(HttpStatusCode.ServiceUnavailable)
        .send({ error: err.message, code: err.code });
    } else {
      res.send({ error: err.message, code: err.code });
    }
  }
}
