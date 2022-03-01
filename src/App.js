import {useState} from "react"
import './App.css';

function App() {
  const [username,setUsername]=useState("")
  const [comment,setComment]=useState("")
  const [post,setPost]= useState([])
 const addPost=()=>{

     const items= {
       id:post.length+1,
       Username:username,
       comment:comment
     }
     setComment('')
     setUsername('')
     setPost([...post,items])
  }
  return (
    <div className="App">
        <input name='name' value={username} placeholder='Enter your Name' onChange={(e)=>setUsername(e.target.value)}/>
        <textarea name='comment' value={comment} placeholder='whats on your mind' onChange={(e)=>setComment(e.target.value)}/>
        <button onClick={addPost}>Post</button>
       { post.map((props)=>(
   <div className="card">
     <p>{props.id}</p>
      <p>{props.Username}</p>
      <p>{props.comment}</p>
      <button>x</button>
   </div>
       ))}
    </div>
  );
}

export default App;
