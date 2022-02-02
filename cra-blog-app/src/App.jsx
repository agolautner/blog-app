import { useState } from 'react';
import './App.css';

function App() {

  const [posts, setPosts] = useState([]);

  function add(){
    setPosts([...posts, 
      {
        title: "Fourth Post!",
        postText: "Hello, this is my fourth post! How exciting!",
        date: "2022-02-04"
      }
    ]);
  } 

  return (
    <div className="App">
      <h1>Blog Posts</h1>

      <div>
        <input placeholder='Title' />
        <input placeholder='Post' />
        <button onClick={add}>New Post</button>
        <button onClick={() => setPosts([])}>Delete all posts</button>
      </div>

      {posts.map((item) => {
        return (
          <div>
            <h2>{item.title}</h2>
            <p>{item.postText}</p>
            <p>{item.date}</p>
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
