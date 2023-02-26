import userRouter from "./users.js";
import express from "express";
let router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("El puerto esta funcionando");
});

router.use("/users", userRouter);
// module.exports = router;
export default router;
