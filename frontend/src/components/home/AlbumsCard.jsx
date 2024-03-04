/*
import React from "react";

const BooksCard = () => {
    return(
        <div>Books Card</div>
    )
}

export default BooksCard
*/

import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi'
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi'
import { MdOutlineDelete } from 'react-icons/md';
import AlbumSingleCard from './AlbumSingleCard';

const AlbumsCard = ({ albums }) => {
    return(
        <div className = 'grid sm:grid-cols-2 1g:grid-cols-3 x1:grid-cols-4'>
            {albums.map((item) => (
                <AlbumSingleCard key={item._id} album={item}/>
            ))}
        </div>
    );

};
export default AlbumsCard;