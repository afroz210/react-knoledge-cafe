import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog ,handleAddToBookmarks ,handleMarkAsRead}) => {
    const{id, cover , author_image , author , posted_date ,reading_time ,title ,hashtags} = blog;
    return (
        <div>
          <img className='w-[1000px] py-6' src={cover} alt={`Cover Photo Of the Title ${title}`}></img>
          <div className='flex justify-between'>

            <div className='flex justify-between gap-6'>
                <div className='w-14 rounded-full'>
                <img className='' src={author_image} ></img>
                </div>
                <div>
                    <h4 className='text-2xl'>{author}</h4>
                    <p>{posted_date}</p>
                </div>
            </div>

            <div className='flex justify-between gap-3'>
                <div>
                <p>{reading_time} min read</p>
                </div>
                <div>
                <button onClick={()=>handleAddToBookmarks(blog)}><CiBookmark></CiBookmark></button>
                </div>
            </div>
          </div>

          <h2 className='text-4xl mt-6'>{title}</h2>
          <p className='mb-6 mt-2'>
            {
             hashtags.map((hash , idx) => <span key={idx}><a href=''>{hash}</a></span>)
            }
          </p>
          <button onClick={()=>handleMarkAsRead(id,reading_time)} className='font-bold text-blue-600 underline'>Mark As Read</button>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead : PropTypes.func
} 

export default Blog;