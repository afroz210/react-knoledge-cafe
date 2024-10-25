
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'

function App() {

  return (
    <>
     
      <div className='container mx-auto py-6'>

      <Header></Header>

      <div className='md:flex justify-between my-6 gap-10'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>

      </div>
    </>
  )
}

export default App
