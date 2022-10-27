import React from 'react'

function ArticleList(props) {
  return (
    <div>
      {props.articles && props.articles.map(article => {
        return(
          <div key={article.id}>
            <h1>{article.title}</h1>
            <p>{article.description}</p>

            <div>
                <button className='btn'>Update</button>
                <button className='btn'>Delete</button>
            </div>

            <hr className='post_line'/>
          </div>
        )
      })}
    </div>
  )
}

export default ArticleList