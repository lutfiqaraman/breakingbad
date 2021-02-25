import express from 'express';
const helpRouter = express.Router();

helpRouter.get('/', (req, res) => {
    res.render('help', {
        title: 'Breaking Bad | help'
    });
});

export default helpRouter;
