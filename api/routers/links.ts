import {Router} from "express";
import Link from "../models/Link";
import {shortener} from "../helpers";
import {ILink} from '../types'


const linksRouter = Router();

linksRouter.post("/", async (req, res) => {
    try {
        console.log(req.body)
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
    const links = await Link.findById(req.params.shortUrl)
    res.send('Short link will be given here')
})

export default linksRouter;