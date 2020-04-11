const {createContainer, asValue, asClass, asFunction} = require('awilix');

// CONFIG
const config = require("../config")
const app = require(".")

// Services
const {HomeService} = require("../services");

// Controllers
const {HomeController} = require("../controllers");

// Routes
const {HomeRoutes} = require("../routes/index.routes");
const Routes = require("../routes");

//Modules
const {User, Idea, Comment} = require("../models");


const container = createContainer();

container
.register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment)
})
.register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
})
.register({
    HomeService: asClass(HomeService).singleton()
})
.register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton()  //Scope se mantenga 
})
.register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
})

module.exports = container;