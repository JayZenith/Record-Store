import express from 'express';
import { Album } from '../models/albumModel.js';

const router = express.Router();

//ROUte to save a new book
router.post('/', async(req, res) => {
    try{
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
         ) {
            return res.status(400).send({
                message: 'Send required fields: title, author, publishYear',
            });
        }
        const newAlbum = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };
        const album = await Album.create(newAlbum);

        return res.status(201).send(album);
    } catch (error){
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//Route for Get ONe book from database
router.get('/', async (req, res) => {
    try {
        const albums = await Album.find({});
        return res.status(200).json({
            //send this object 
            count: albums.length,
            data: albums
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send( { message: error.message });
    }
});

//Route for GEt one book from database by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const album = await Album.findById(id);

        return res.status(200).json(album);
    } catch (error) {
        console.log(error.message);
        res.status(500).send( { message: error.message });
    }
});

// Route for Update A Book 
router.put('/:id', async (req, res) => {
    try{
        if(
            !req.body.title ||
            !req.body.author || 
            !req.body.publishYear
        ) {
            return res.status(400).send({
                message: 'Send required fields: title, author, publishYear',
            });
         }

         const { id } = req.params;

         const result = await Album.findByIdAndUpdate(id, req.body);

         if(!result){
            return res.status(404).json({ message: 'Album not found' });
         }
         return res.status(200).send({ message: 'Album updated' });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//Route for deleting a book
router.delete('/:id', async(req, res) => {
    try{
        const { id } = req.params;

        const result = await Album.findByIdAndDelete(id);

        if(!result){
            return res.status(404).json({ message: 'Album not found '});
        }

        return res.status(200).send({ message: 'Album deleted' });

    } catch (error){
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});


export default router;
