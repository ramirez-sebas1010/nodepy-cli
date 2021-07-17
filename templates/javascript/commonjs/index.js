const Server = require("./src/config/server.config");
const dotenv = require("dotenv");

(()=>{

    setEnvironmentVariables();
    
    const server = new Server();
    //Remote Server
    // server.createHttpsServer();
    
    //Local Server
    server.createHttpServer();
})();

function setEnvironmentVariables() {
    dotenv.config();
}

