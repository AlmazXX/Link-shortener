import {Router} from "express";

const linksRouter = Router();

linksRouter.post('/', (req, res) => {
    res.send('Link will be shortened here')
})

linksRouter.get('/:shortUrl', (req, res) => {
    res.send('Short link will be given here')
})

export default linksRouter;