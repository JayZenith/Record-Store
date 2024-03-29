import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowAlbum = () => {
    const [album, setAlbum] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:4444/albums/${id}`)
            .then((res) => {
                setAlbum(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [])

    return(
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3x1 my-4'>Show Album</h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className = 'flex flex-col border-2 border-sky-400 rounded-x1 w-fit p-4'>
                    <div className='my-4'>
                        <span className='text-x1 mr-4 text-gray-500'>id</span>
                        <span>{album._id}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-x1 mr-4 text-gray-500'>Title</span>
                        <span>{album.title}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-x1 mr-4 text-gray-500'>Artist</span>
                        <span>{album.author}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-x1 mr-4 text-gray-500'>Release Date</span>
                        <span>{album.publishYear}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-x1 mr-4 text-gray-500'>Release Time</span>
                        <span>{new Date(album.createdAt).toString()}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-x1 mr-4 text-gray-500'>Last Update Time</span>
                        <span>{new Date(album.updatedAt).toString()}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ShowAlbum