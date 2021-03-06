module.exports = function(app, bootstrap, utils) {

    var ctrls = bootstrap.loadControllers(utils);

    // Say hello to the world
    app.get('/', ctrls["greeting"].reply);
    
    // Catch-all
    app.get('*', function(req, res) { res.status(404).json({ error:'Invalid GET request' }) });
    app.post('*', function(req, res) { res.status(404).json({ error:'Invalid POST request' }) });
    app.delete('*', function(req, res) { res.status(404).json({ error:'Invalid DELETE request' }) });
};
