import './App.css';
import ArticleList from './components/ArticleList';
import {useState, useEffect} from 'react';


function App() {
  const [articles, setArticles] = useState([])

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

  return (
    <div className="App">
      <ArticleList articles={articles}/>
    </div>
  );
}

export default App;
