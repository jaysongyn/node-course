const passport = require('passport');

module.exports = (app) => {
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
    
    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/current_user', (req, res) => {
        res.send(req.suer );
    });

    app.get('/googlee4a1e53478505124.html', (req, res) => {
        res.send('google-site-verification: googlee4a1e53478505124.html' );
    });
    
    app.get('/api/logout', (req, res) => {
      req.logout();
      res.send(req.suer)
    });
}

