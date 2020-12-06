import React from 'react';
import axios from "axios"
//const [readMore,setReadMore]=useState(false);
//const linkName=readMore?'Read Less << ':'Read More >> '
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            articles:[]
         }
    }

    componentDidMount(){
        axios.get("http://localhost:5002/articles/").then(res => {
            this.setState({
                articles:res.data
            })
            
        }).catch(err => console.log(err));
    
    }
    render() { 
        return ( 
            <div>
            <ol>
            {
                this.state.articles.map(article => {
                    return(
                        <div class="card" >
                            <div class="card-body">
                            <h5 class="card-title">{article.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Author:{article.author}</h6>
                            <p class="card-text limit">{article.content}</p> </div>
                        </div>          
                    )
                    })
            }
            </ol>
            
            </div>

         );
    }
}

export default Home;
