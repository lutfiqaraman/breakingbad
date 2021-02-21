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
        data.BreakingBadData(character).then((result) => {
            return res.send({
                data: result
            });
        });
    }
});

export default characterRouter;
