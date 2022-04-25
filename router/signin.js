import express from "express";
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded())


router.post('/', function(req, res) {
    console.log(req);
    res.send('SignIn')
})

export default router;