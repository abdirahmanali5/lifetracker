const Post = require('../models/nutrition');
const {BadRequestError, ForbiddenError } = require("../utils/errors")






const authUserOwnsPost = async (req,res,next) => {
    try{
        const {user } = res.locals
        const { postId} =req.params
        const {post} = await Post.fetchPostbyId(postId)

        if (post.userEmail !== user.email) {
            throw  new ForbiddenError('User is not allowed to update other users nutrition posts')
        }
        res.locals.post = post
        return next()
    }catch(err){
    return next(err)
    }
}



module.exports = {
    authUserOwnsPost
}