import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import Posts from './Posts'
import {postPost, getPosts, uploadFile} from './services/posts'

class App extends Component {

  state={
    posts:[],
    post:{}
  }

  componentWillMount(){
    getPosts()
      .then(r=>{
        this.setState({posts:r})
      }).catch(e=>console.log(e))
  }

  handleSubmit=()=>{
    const {post, posts} = this.state
    postPost(post)
      .then(r=>{
        posts.push(r)
        this.setState({posts})
        console.log(post)
      }).catch(e=>console.log(e))
  }

  handleText=(e)=>{
    const {post} = this.state
    const field = e.target.name
    post[field] = e.target.value
    this.setState({post})
  }

  handleImage=(e)=>{
    console.log(e.target.files)
    const {post} = this.state
    const file = e.target.files[0]
    uploadFile(file)
      .then(link=>{
        post['photoURL'] = link
        this.setState({post})
        console.log('done')
      })
  }

  render() {
    const {posts} = this.state
    return (
      <div className="App">
        <Form 
          handleSubmit={this.handleSubmit}
          handleImage={this.handleImage}
          handleText={this.handleText}/>
        <Posts 
          posts={posts}/>
      </div>
    );
  }
}

export default App;
