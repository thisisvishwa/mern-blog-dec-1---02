```javascript
const Comment = require('../models/Comment');
const Post = require('../models/Post');

// Fetch all comments
exports.getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fetch a single comment
exports.getComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (comment == null) {
            return res.status(404).json({ message: 'Cannot find comment' });
        }
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new comment
exports.createComment = async (req, res) => {
    const comment = new Comment({
        content: req.body.content,
        author: req.body.author,
        post: req.body.post
    });

    try {
        const newComment = await comment.save();
        const post = await Post.findById(req.body.post);
        post.comments.push(newComment._id);
        await post.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a comment
exports.updateComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (comment == null) {
            return res.status(404).json({ message: 'Cannot find comment' });
        }

        if (req.body.content != null) {
            comment.content = req.body.content;
        }

        const updatedComment = await comment.save();
        res.status(200).json(updatedComment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a comment
exports.deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (comment == null) {
            return res.status(404).json({ message: 'Cannot find comment' });
        }

        await comment.remove();
        res.status(200).json({ message: 'Deleted Comment' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
```