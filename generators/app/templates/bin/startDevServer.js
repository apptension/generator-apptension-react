import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

import config from '../config/webpack/webpack-dev.config.babel';
import env from '../config/env/development';

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, env.devServer);

server.listen(env.devServer.port);
