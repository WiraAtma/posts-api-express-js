const prisma = require('../config/db')

exports.getAllPost = async (req, res) => {
    try {
        const post = await prisma.posts.findMany();
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}   