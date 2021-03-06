import express from "express";
import * as data from "../src/utils/breakingbadrequest.js";

const characterRouter = express.Router();

characterRouter.get('/', (req, res) => {

    const character = req.query.name;

    if (!character) {
        return res.send({
            error: 'Please, you have to type a name'
        });
    } else {
        data
            .BreakingBadData(character)
            .then((result) => {
                return res.json({
                    data: {
                        name: result[0].name,
                        occupation: result[0].occupation,
                        appearance: result[0].appearance,
                        nickname: result[0].nickname,
                        status: result[0].status
                    }
                });
            })
            .catch((e) => {
                console.log(e);
            });
    }
});

export default characterRouter;
