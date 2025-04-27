const express = require('express');
const router = express.Router();
const postController = require('../controller/postController')

router.get('/posts', postController.getAllPost);

module.exports = router


// app.get('/', (req, res) => {
//   response(200, "Api Ready To Go", "SUCCESS", res)
// })

// app.get('/mahasiswa', (req, res) => {
//   const sql = "SELECT * FROM mahasiswa"
//   db.query(sql, (err, fields) => {
//     if (err) {
//       throw err
//     }
//     response(200, fields, "Mahasiswa Get List", res)
//   })
// })

// app.get('/mahasiswa/:nim', (req, res) => {
//   const nim = req.params.nim;
//   const sql = `SELECT * FROM mahasiswa WHERE nim = ${nim}`
//   db.query(sql, (err, fields) => {
//     if (err) {
//       throw err
//     }
//     response(200, fields, "Mahasiswa Get List", res)
//   })
// })

// app.post('/mahasiswa', (req, res) => {
//   const {nim, nama_lengkap, kelas, alamat} = req.body
//   const sql = `INSERT INTO mahasiswa (nim, nama_lengkap, kelas, alamat) VALUES ('${nim}', '${nama_lengkap}', '${kelas}', '${alamat}')` 
//   db.query(sql, (err, fields) => {
//     if(err) throw err
//     if(fields?.effectedRows) {
//       const data = {
//         isSuccess: fields.affectedRows,
//         id: fields.insertId,

//       }
//     }
//     response(200, "Delete Mahasiswa Get List", res)
//   })

// })

// app.put('/mahasiswa', (req, res) => {
//   res.send("Ini Put")
// })

// app.delete('/mahasiswa', (req, res) => {
//   res.send("Ini Delete Data")
// })