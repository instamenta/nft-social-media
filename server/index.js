const express = require('express');

const cookieParser = require('cookie-parser');
const { PORT } = require('./config/variables');
// const routes = require('./routes');
const { dataBase } = require('./config/dataBase')
//const { auth } = require('./middlewares/authMiddleware')
//const { errorHandler} = require('./middleware/errorHandlingMiddleware')

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(cookieParser())

app.get('/', ( req,res) => {

    console.log('works')
})

//app.use(auth)
// app.use(routes);
//app.use(errorHandler)

dataBase();

app.listen(PORT, () => console.log('Server is running ' + PORT))