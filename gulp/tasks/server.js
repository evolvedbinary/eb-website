const StaticServer = require('static-server');

//File paths
const SRC_PATH = 'src';
const DIST_PATH = 'dist';

function serverFn() {
  const server = new StaticServer({
    rootPath: DIST_PATH,
    port: 3000
  });

  server.start(function () {
    console.log('Server started on port: ' + server.port);
  });
}

exports.build = serverFn;