import express from 'express';
let router = express.Router()


import authRouter from './routes/auth.mjs'
import commentRouter from './routes/comment.mjs'
import feedRouter from './routes/feed.mjs'
import postRouter from './routes/post.mjs'


// /api/v1/login
router.use(authRouter)


router.use((req, res, next) => {
    const token = req.headers.authorization; // Assuming the token is sent in the Authorization header
    if (token === "valid-token") { // Replace "valid-token" with the actual valid token
      next();
    } else {
      res.status(401).json({ message: "Invalid token" });
    }
  });
  

router.use("/api/v1", commentRouter)
router.use("/api/v1", postRouter)
router.use("/api/v1", feedRouter)


router.post("/weather", (req, res, next) => {

    console.log("req.body: ", req.body);


    // res.send("weather is normal"); // not recommended

    res.send({
        message: "weather is normal",
        apiVersion: "v1",
        temp: 32,
        min: 20,
    });
})

export default router