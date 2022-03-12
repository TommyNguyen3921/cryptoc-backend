import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    icon: String,
    price: String,
    symbol: String

});

const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;