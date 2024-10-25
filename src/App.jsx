
import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'

function App() {
  const[bookmarks , setBookmarks] = useState([]);
  const[readingTime ,setReadingTime] = useState(0);

  const handleAddToBookmarks = blog =>{
    const newBookmarks = [...bookmarks , blog];
    setBookmarks(newBookmarks);
  }
  
  const handleMarkAsRead = (id , time) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
console.log("remove bookmark", id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);

  } 

  

  return (
    <>
     
      <div className='container mx-auto py-6'>

      <Header></Header>

      <div className='md:flex justify-between my-6 gap-28'>
      <Blogs handleAddToBookmarks={handleAddToBookmarks}
      handleMarkAsRead={handleMarkAsRead}></Blogs>

      <Bookmarks bookmarks={bookmarks}
      readingTime={readingTime} ></Bookmarks>
      </div>

      </div>
    </>
  )
}

export default App
