import express from "express";
const characterRouter = express.Router();

characterRouter.get('/', (req, res) => {
    const character = req.query.name;

    if (!character) {
        return res.send({
            error: 'You must provide a name'
        });
    } else {
        // HERE YOU HAVE TO CONNECT WITH THE FILE THAT FETCH THE DATA FROM
        // BREAKING BAD API
        console.log(character);
    }
});

export default characterRouter;
