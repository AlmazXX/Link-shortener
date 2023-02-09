import {Router} from "express";
import Link from "../models/Link";
import {shortener} from "../helpers";
import {ILink} from '../types'


const linksRouter = Router();

linksRouter.post("/links", async (req, res) => {
    try {
        const linkData: ILink = {
            shortUrl: shortener().getLink(),
            originalUrl: req.body.url,
        };
        const link = new Link(linkData);

        try {
            await link.save();
            return res.send(link);
        } catch (e) {
            return res.status(400).send(e)
        }
    } catch {
        return res.sendStatus(500)
    }
})

linksRouter.get('/:shortUrl', async (req, res) => {
    try {
        const shortUrl = req.params.shortUrl;
        const link = await Link.findOne({shortUrl});

        if (!link) {
            return res.status(404).send({error: 'Short link is not found'})
        }

        res.status(301).redirect(link.originalUrl)
    } catch {
        return res.sendStatus(500)
    }
})

export default linksRouter;