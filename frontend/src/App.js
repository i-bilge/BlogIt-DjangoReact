import './App.css';
import ArticleList from './components/ArticleList';
import {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';


function App() {
  const [articles, setArticles] = useState([])
  const [editArticle, setEditArticle] = useState('')

  useEffect(() =>{
    fetch('http://localhost:8000/api/articles/', {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'a5d79d7319e6f54e2c3317771f8580b8db3d4c70'
      }
    })
    .then(resp => resp.json())
    .then(resp => setArticles(resp))
    .catch(error => console.log(error))
  }, [])

  const editBtn = (article) =>{
    setEditArticle(article)
  }

  return (
    <div className="App">
      <Navbar />
      <br/>
      <div>
        <button className='btn'>Create Post</button>
      </div>
      <br/>
      <ArticleList articles={articles} editBtn={editBtn} />
      <hr/>
      <Form article={editArticle}/>
    </div>
  );
}

export default App;
