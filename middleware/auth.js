import jwt from 'jsonwebtoken';

var util = require('util')
const auth = async (req, res, next) => {
    try {
        console.log("test" + util.inspect(req));
        const token = req.headers.authorization.split(" ")[1];
        
        let decodedData = jwt.verify(token, 'test');

        req.userId = decodedData?.id;

        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;