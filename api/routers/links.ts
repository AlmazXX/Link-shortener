import { Router } from "express";
import { Shortener } from "../helpers";
import Link from "../models/Link";
import { ILink } from "../types";

const linksRouter = Router();

linksRouter.post("/links", async (req, res, next) => {
  try {
    const links = await Link.find();
    const existingLinks = links.map((link) => link.shortUrl);

    const shortener = new Shortener();
    shortener.setLinks(existingLinks);

    const linkData: ILink = {
      shortUrl: shortener.getLink(),
      originalUrl: req.body.url,
    };

    const link = new Link(linkData);
    await link.save();
    return res.send(link);
  } catch (e) {
    return next(e);
  }
});

linksRouter.get("/:shortUrl", async (req, res, next) => {
  try {
    const shortUrl = req.params.shortUrl;
    const link = await Link.findOne({ shortUrl });

    if (!link) {
      return res.status(404).send({ error: "Short link does not exist" });
    }

    res.status(301).redirect(link.originalUrl);
  } catch (e) {
    return next(e);
  }
});

export default linksRouter;