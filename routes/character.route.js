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

        return data.BreakingBadData(character)
            .then((dataOfCharacter) => {
                console.log('Name: ' + dataOfCharacter[0].name);
                console.log('Birth Date: ' + dataOfCharacter[0].birthday);
                console.log('Nickname: ' + dataOfCharacter[0].nickname);
            })
            .catch((error) => {
                console.log(error);
            });
    }
});

export default characterRouter;
