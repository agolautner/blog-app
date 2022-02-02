import { useState } from 'react';
import './App.css';

function Post({item, remove, edit}) {


  const [newTitle, setNewTitle] = useState('');
  const [newText, setNewText] = useState('');

  return (
    <div key={item.id}>
      <h2>{item.title}</h2>
      <p>{item.postText}</p>
      <p>{item.date.toLocaleString()}</p>
      <input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} placeholder='New post title' />
      <input onChange={(e) => setNewText(e.target.value)} value={newText} placeholder='New post text' />
      <button onClick={() => edit(item.id, newTitle, newText)} >Edit</button>
      <button onClick={() => remove(item.id)}>Delete</button>
    </div>
  )
}

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

  function remove(id) {
    setPosts(posts.filter((post) => post.id !== id));
  }

  function edit(id, newTitle, newText) {
    console.log(`editing post nr. ${id}`);
    const newList = [];
    for (let post of posts) {
      if (post.id === id) {
        post.title = newTitle;
        post.postText = newText;
      }
      newList.push(post);
    }
    setPosts(newList);
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
          <Post item={item} key={item.id} remove={remove} edit={edit}/>
        )
      })}
      
    </div>
  );
}

export default App;
