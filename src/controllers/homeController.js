exports.home = (req, res, next) => {
    res.status(200);
    res.json({"message": "Hello Node.js"});
}