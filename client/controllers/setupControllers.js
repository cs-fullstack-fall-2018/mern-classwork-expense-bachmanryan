const Solo = require('../models/soloModel.js');

module.exports = function (router) {

    router.get('/api/setupSolo', function (req, res) {

        const starterSolo = [
            {
                username: 'Ryan',
                password: '55rathat55',
                balance: 10,
            },
            {
                username: 'rBachman',
                password: '55rathat55',
                balance: 100,
            },
            {
                username: 'rBachman',
                password: '55rathat55',
                balance: 1000,
            }

        ];
        Solo.create(starterSolo, function (err, results) {
            res.send(results);

        })
    })

};
