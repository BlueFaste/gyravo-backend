import express from "express";
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded())


router.get('/', function(req, res) {
    res.send('Logout')
})

export default router;