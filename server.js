const liveServer = require("live-server");
 
const params = {
    // Port number
    port: 8181,
    // Host IP, 127.0.0.1 is localhost
    host: "127.0.0.1",
    // Main directory
    root: "./",
    // Load browser on start
    open: true,
    // Directories to ignore (comma, separated)
    ignore: 'node_modules, .git, README.md',
    // file: "index.html",
    // Delay reload to wait for files to update
    wait: 1000,
    // 0 = errors only, 1 = some, 2 = lots
    logLevel: 2,
};

liveServer.start(params);