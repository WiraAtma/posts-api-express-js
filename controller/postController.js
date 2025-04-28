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

exports.createPost = async (req, res) => {
    const data = req.body;

    try {
        const newPost = await prisma.posts.create({
            data: {
                ...data
            }
        })

        if(!newPost) {
            res.status(404).json("Ada Kesalahan Saat Menampilkan Data")
        }

        res.status(201).json(newPost);

    } catch (err) {
        res.status(500).json({error : err.message})
    }
}

exports.updatePost = async (req, res) => {
    const data = req.body;
    const {id} = req.params

    try {
        const updatedPost = await prisma.posts.update({
            where: {id: parseInt(id)},
            data: {
                ...data
            }
        })

        if(!updatedPost) {
            res.status(404).json("Ada Kesalahan Saat Menampilkan Data")
        }

        res.status(201).json(updatedPost);

    } catch (err) {
        res.status(500).json({error : err.message})
    }
}