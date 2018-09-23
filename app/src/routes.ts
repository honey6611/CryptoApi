import * as Router from 'koa-router';
import { BaseContext } from 'koa';
const Routes = new Router();
Routes.get('/', (ctx: BaseContext) => {
    ctx.status = 200;
    ctx.body = 'Hello world';
});

export { Routes };