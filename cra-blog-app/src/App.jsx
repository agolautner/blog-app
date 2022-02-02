import { useState } from 'react';
import './App.css';

function App() {

  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');

  function add(){
    setPosts([...posts, 
      {
        title: title,
        postText: postText,
        date: new Date(),
        id: Math.random()
      }
    ]);
    setTitle('');
    setPostText('');
  } 

  return (
    <div className="App">
      <h1>Blog Posts</h1>

      <div>
        <input onChange={(e) => setTitle(e.target.value)} placeholder='Title' value={title}/>
        <input onChange={(e) => setPostText(e.target.value)} placeholder='Post' value={postText}/>
        <button onClick={add}>New Post</button>
        <button onClick={() => setPosts([])}>Delete all posts</button>
      </div>

      {posts.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.postText}</p>
            <p>{item.date.toLocaleString()}</p>
            <input placeholder='New post title' />
            <input placeholder='New post text' />
            <button>Edit</button>
            <button>Delete</button>
          </div>
        )
      })}
      
    </div>
  );
}

export default App;
