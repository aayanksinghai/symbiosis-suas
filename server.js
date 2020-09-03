const express = require('express')
const createError = require('http-errors')
const dotenv = require('dotenv')


//Load env variables
dotenv.config({ path: './config/config.env' })

const app = express()


app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use('/assets', express.static(__dirname + '/public/assets'))

//Routes
app.get('/', (req, res) =>{
    res.render('index')
})

// 404 Page
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page  
    res.status(err.status || 500);
    res.render('error', { title: 'Error'});
  });


const port = process.env.PORT || 5000;
const server = app.listen(port, (error) => 
{
    console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${port}`)
})

//Handling unrejected exceptions 
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`)
    //Close server & exit process
    server.close(() => process.exit(1))
})