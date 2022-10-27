import React, {useState, useEffect} from 'react'

function Form(props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(()=>{
    setTitle(props.article.title)
    setDescription(props.article.description)
  }, [props.article])

  return (
    <div>
      <div>
        <label htmlFor='title'>Title</label><br/>
        <input type="text" value={title} placeholder="Enter Post Title"/>
      </div>
      <div>
        <label htmlFor='description'>Description</label><br/>
        <input type="text" value={description} placeholder="Enter Post Content"/>
      </div>
      <button>Post</button>
    </div>
  )
}

export default Form