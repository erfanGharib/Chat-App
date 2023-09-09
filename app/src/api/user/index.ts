const userData = (req, res) => {
    console.log(req.body);
    return res.status(200).end();
}

export default userData;