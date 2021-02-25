import express from 'express';
const aboutRouter = express.Router();

aboutRouter.get('/', (req, res) =>
{
    res.render('about', {
        title: 'Breaking Bad | About'
    });
});

export default aboutRouter;
