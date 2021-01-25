import express from 'express';
const aboutRouter = express.Router();

aboutRouter.get('/', (req, res) => {
    res.render('about');
});

export default aboutRouter;
