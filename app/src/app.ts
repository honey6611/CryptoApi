import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as helmet from 'koa-helmet';
import { Routes } from './routes';

class App {
    public App: Koa;
    constructor() {
        this.App = new Koa();
        this.App_Initialise();
    }

    private App_Initialise() {
        this.App.use(helmet());
        this.App.use(bodyParser());
        this.App.use(Routes.routes()).use(Routes.allowedMethods());
    }
}

export default new App().App;