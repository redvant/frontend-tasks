import './Post.css'

function Post({post}) {
  return (
    <div className='post-container'>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )
}

export default Post