import React from 'react'

const Posts = ({posts=[]}) => {
  return (
    <div>
      {posts.map((post, i)=>(
          <div key={i}>
            <p>{post.text}</p>
            <img src={post.photoURL}/>
          </div>
      ))}
    </div>
  )
}

export default Posts

