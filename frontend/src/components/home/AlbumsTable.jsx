import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const AlbumsTable = ({ albums }) => {
    return(
        <div>
            <table className='w-full border-separate border-spacing-2'>
                    <thead>
                        <tr>
                            <th className='border border-slate-600 rounded-md'>No</th>
                            <th className='border border-slate-600 rounded-md'>Title</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>
                                Artist
                            </th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>
                                Release Date
                            </th>
                            <th className='border border-slate-600 rounded-md'>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {albums.map((album, index) =>(
                            <tr key={album._id} className='h-8'>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {index + 1}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {album.title}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {album.author}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {album.publishYear}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    <div className='flex justify-center gap-x-4'>
                                        <Link to={`/albums/details/${album._id}`}>
                                            <BsInfoCircle className='text-2x1 text-green-800' />
                                        </Link>
                                        <Link to={`/albums/edit/${album._id}`}>
                                            <AiOutlineEdit className='text-2x1 text-yellow-600' />
                                        </Link>
                                        <Link to={`/albums/delete/${album._id}`}>
                                            <MdOutlineDelete className='text-2x1 text-red-600' />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    )
}

export default AlbumsTable