import express from "express";
import cookieParser from "cookie-parser";
import auth_router from './routes/auth.route.js'
import authMiddleware from './middlewares/auth.middleware.js'
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(cors());
//routers
app.use('/', auth_router);
//public route
app.get('/home', (req, res) => {
    res.send('hello!');
})
//protected route
app.get('/profile', authMiddleware, (req,res) => {
    res.json({msg:`Welcome, ${req.user.name}`})
})

app.listen(3000, (err) => console.log(err ? err : 'listen on port 3000'));
