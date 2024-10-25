import PropTypes from "prop-types"
import Bookmark from "../Bookmark/Bookmark"

const Bookmarks = ({bookmarks ,readingTime}) => {
    return (
        <div className="md:w-1/3"> 
        <div className="bg-gray-200 p-4 rounded-xl mb-4">
            <h2 className="text-3xl">Reading Time : {readingTime}</h2>
        </div>
        <div className=" bg-gray-200 p-4 rounded-xl">
            <h2 className="text-3xl text-center">Bookmarked-Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.object,
    readingTime : PropTypes.object
}

export default Bookmarks; 