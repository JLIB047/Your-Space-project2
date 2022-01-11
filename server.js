const path = require('path');
const express = require('express');
const routes = require('./controllers/');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
var colors = require('colors');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: 'Super secret secret',
    cookie: { maxAge: 36000 },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
const app = express();
const PORT = process.env.PORT || 3001;

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//turn on server connection 
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now Listening'.red))
})

