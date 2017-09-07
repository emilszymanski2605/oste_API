module.exports = (server) => {
  server.get('/customers', function (req, res, next) {
    res.send({"kundernr": "ef22", "navn": "emil szymanski" });
    return next();
  });
    };