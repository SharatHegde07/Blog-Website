import React, { Component } from 'react';
//import { render } from 'react-dom';
import {Helmet} from 'react-helmet'
import axios from 'axios';
import "./css/create.css"
import "bootstrap/dist/css/bootstrap.min.css";

export default class CreateArticles extends Component {
    constructor(props){
        super(props);
        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        
        
    this.onChangeAuthor=this.onChangeAuthor.bind(this);
    this.onChangeContent=this.onChangeContent.bind(this);
    this.onChangeTitle=this.onChangeTitle.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
        this.state={
            author:'',
            title:'',
            content:'',
            date:date
        }
    }

    onChangeAuthor(e){
        this.setState({
            author:e.target.value
        });
    }
    onChangeTitle(e){
        this.setState({
            title:e.target.value
        });
    }
    onChangeContent(e){
        this.setState({
            content:e.target.value
        });
    }
    

    onSubmit(e){
        e.preventDefault();

        axios.post('http://localhost:5002/articles/newArticle',{
            author:this.state.author,
            title:this.state.title,
            content:this.state.content,
            date:this.state.date
          })
          .then((res) => console.log(res))
          .catch(err => console.log(err));
        window.location='/';
    }
    render() {
        return (
            
            <div className='back'>
            <div className="articleback">
        <Helmet><title>YOUR ARTICLE</title></Helmet>
          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label>Author: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.author}
                  onChange={this.onChangeAuthor}
                  />
              <label>title </label><input 
                  type="text" 
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                  />
                  <label>Artcile-content</label>
              <textarea 
                rows="10"
                cols="150"
                className="form-control"
                  value={this.state.content}
                  onChange={this.onChangeContent}
                  />
              <label>Date: {this.state.date} </label>
              <br></br>
                  <input type="submit" value="POST" className="btn btn-primary" />
            </div>
          </form>
        
        </div>
        </div>
        )
      }
    }