import server from './src/app';
import { config } from './src/config';

server.listen(config.PORT);
console.log(`server litning at ${config.PORT}`);

