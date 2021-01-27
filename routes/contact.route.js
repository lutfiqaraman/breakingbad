import express from 'express';
const contactRouter = express.Router();

contactRouter.get('/', (req, res) => {
    res.render('contact');
});

export default contactRouter;
