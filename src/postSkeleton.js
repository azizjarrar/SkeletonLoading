import React from 'react'
import './postSkeleton.css'
const PostSkeleton = () => {
    return (
        <div className="cardSkeleton">
          <div className="userName"><div className="avatarContainer"><img /></div><p className="name"></p></div>
          <div className="title"><p></p></div>
          <div className="body"><p></p><p></p><p></p></div>
        </div>
    )
}

export default PostSkeleton
