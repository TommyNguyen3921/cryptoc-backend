import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        console.log("test" + JSON.stringify(req));
        const token = req.headers.authorization.split(" ")[1];
        
        let decodedData = jwt.verify(token, 'test');

        req.userId = decodedData?.id;

        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;