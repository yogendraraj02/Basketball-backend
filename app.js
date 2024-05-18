const express = require("express");
const app = express();
const userRoutes = require("./routes/user.routes");

app.use(express.json())
app.use('/users',userRoutes);
app.get('/' , (req, res) => {
    res.send("Basketball backend");
})

app.listen(3000 , () => {
    console.log(`server listening at 3000`);
})