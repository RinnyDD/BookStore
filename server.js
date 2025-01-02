require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
let publicPath = path.join(__dirname,"views")

const productRoutes = require('./routes/genreRoutes');
const bookRoutes = require('./routes/bookRoutes');
const registerRoutes = require('./routes/registerRoutes');
const loginRoutes = require('./routes/loginRoutes');
const indexRoutes = require('./routes/indexRoutes');
// const sessionMiddleware = require('./middlewares/sessionMiddleware'); 
// Middleware
app.use(express.urlencoded({ extended: true }));
// app.use(session({
//     secret: 'cyber cadt idri idt idg',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true }
//   }));
//   // Configure flash middleware
// app.use(flash());
  


app.use(session({ 
    secret:'cyber cadt idri idt idg', 
    saveUninitialized: true, 
    resave: true
})); 
  
// Configure flash middleware
app.use(flash());
// app.use(sessionMiddleware);
// app.use((req, res, next) => {
//     res.locals.user = req.session.user || null; // Pass user data to the view if logged in
//     next();
//   });

// Make flash messages available in all views (with res.locals)
// app.use((req, res, next) => {
//   res.locals.messages = req.flash();
//   next();
// });


app.set('view engine','ejs');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
// app.use('/css', express.static('public/css'));

app.use('/uploads', express.static('public/uploads'));
app.use('/genre',productRoutes);
app.use('/book',bookRoutes);
app.use('/user',registerRoutes);
app.use('/login',loginRoutes);
// app.get('/shop',(req,res) => {
//     res.sendFile(`${publicPath}/user/shop.html`);
// });
app.use('/',indexRoutes);
app.listen(PORT,()=>{
    console.log("server is running on port "+PORT);
});