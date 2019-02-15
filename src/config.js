let config = {
    Server: {
        port: 3000
    },
    Mongo: {
        mongoUrl: "mongodb://idan:a123456@ds143683.mlab.com:43683/blox_project",
        dbName: "blox_project",
        collectionName: "employees"
    }
};

module.exports = config;