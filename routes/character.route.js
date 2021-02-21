import express from "express";
import * as data from "../src/utils/breakingbadrequest.js";

const characterRouter = express.Router();

characterRouter.get('/', (req, res) => {

    const character = req.query.name;

    if (!character) {
        return res.send({
            error: 'You must provide a name'
        });
    } else {
        const d =  data.BreakingBadData(character).then((r) => { return r });
        console.log(d);
        return res.send({ data: d });
    }
});

export default characterRouter;
