const prisma = require('../config/db')

exports.getAllPost = async (req, res) => {
    try {
        const post = await prisma.posts.findMany();
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getDetailPost = async (req, res) => {
    const {noBook} = req.params

    try {
        const post = await prisma.posts.findUnique({
            where: {no_book: parseInt(noBook)}
        });

        if(!post) {
            res.status(404).json("Data Tidak Ditemukan")
        }

        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}