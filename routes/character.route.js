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
                data: {
                    name: result[0].name,
                    birthday: result[0].birthday,
                    nickname: result[0].nickname
                }
            });
        });
    }
});

export default characterRouter;
