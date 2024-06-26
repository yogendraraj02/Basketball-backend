const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const userRoutes = require("./routes/user.routes");
const loginRoutes = require("./routes/login.routes");
const gameRoutes = require("./routes/game.routes")
const { Sequelize } = require("sequelize");
const { sequelize } = require("./models/init");
var cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended :true}))
app.use('/users',userRoutes);
app.use('/login',loginRoutes)
app.use('/game',gameRoutes)
app.get('/' , (req, res) => {
    res.send("Basketball backend");
})

app.listen(3000 , async () => {
    try{
        // const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING);
        await sequelize.authenticate()
        console.log(`server listening at 3000`);
    } catch(e){
        console.log(`error`,e);
    }
})