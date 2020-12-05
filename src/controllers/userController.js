const users = [{
        'username': "bchan",
        'firstName': 'Brian',
        'lastName': 'Chan'
    },
    {
        'username': "rfederer",
        'firstName': 'Roger',
        'lastName': 'Federer'
    }
]

exports.getUsers = (req, res, next) => {
    res.status(200);
    res.json(users);
}

exports.getUser = (req, res, next) => {
    const username = req.params.username;
    for (let user of users) {
        if (user.username === username) {
            res.status(200);
            res.json(user);
            return;
        }
    }
    res.status(404);
    res.json({
        "message": "Data not found"
    });
}