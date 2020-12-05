import React, { Component } from 'react';
//import { render } from 'react-dom';
import axios from 'axios';
import "./create.css"

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
        const article = {
            author:this.state.author,
            title:this.state.title,
            content:this.state.content,
            date:this.state.date
        }

        axios.post('http://localhost:3003/articles/newArticle', article)
      .then(res => console.log(res.data));
        
console.log(article);
    }
    render() {
      return (
       <div>
           <h3>CREATE NEW ARTICLE</h3>
           <form onSubmit={this.onSubmit}>
               <div className="form-group">
                   <label>AUTHOR:</label>
                   <input type="text" required className="form-control" value={this.state.author} onChange={this.onChangeAuthor} />

               </div>
               <div className="form-group">
                   <label>TITLE:</label>
                   <input type="text" required className="form-control" value={this.state.title} onChange={this.onChangeTitle} />
                        
               </div>
               <div className="form-group">
                   <label>Content:</label>
                   <input type="text" required className="form-control" value={this.state.content}
                        onChange={this.onChangeContent}
                        />
                        
               </div>
               <div className="form-group">
                   <span>{this.state.date}</span>
                        
               </div>
               <div className="form-group">
                   <input type="submit" value="Create Articles" className="btn btn-primary" />

               </div>
           </form>
       </div>
      );
    }
  }