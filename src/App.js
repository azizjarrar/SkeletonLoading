import React,{useEffect} from 'react';
import './app.css';
import avatar from './avatar.svg'
import PostSkeleton from './postSkeleton.js'
function App() {
  const [postsData,setPostsData]=React.useState([])
  useEffect(() => {
    //fetch api for data
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(posts=>{
      //simulate api delay
      setTimeout(() => {
        setPostsData(posts.slice(0,10))
      }, 2000);
    })
  }, [])

  return (
    <div className="App">
      <h1>React Skeletons</h1>
      <div className="postsContainer">
        {/*if array empty show skeletons else show data */}
        {/*generate skeletons*/}
        {postsData.length===0&&Array(10).fill("").map(data=>{
          return        <PostSkeleton/>
        })}
        {/*real data*/}
        {
          postsData.map(element=>{
            return <div className="card">
                        <div className="userName"><div className="avatarContainer"><img src={avatar}/></div><p className="name">aziz jarrar</p></div>
                        <div className="title"><p>{element.title}</p></div>
                        <div className="body"><p>{element.body}</p></div>
                  </div>
          })
        }
      </div>
    </div>
  );
}

export default App;
