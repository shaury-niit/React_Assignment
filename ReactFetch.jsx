import React from 'react';
import axios from 'axios';

class FetchDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      name:"",
      email:"",
      password:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.insertUser = this.insertUser.bind(this)
  }

  componentDidMount() {  // its Component Life Cycle MEthod Of React
    axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
      });
  }

  handleChange(e){
    const {name, value} = e.target;
    this.setState({[name]:value})
  }

  insertUser(){
      const data={
          name:this.state.name,
          email:this.state.email,
          password:this.state.password
      }
    axios.post(`http://localhost:7001/users/create`, data )
    .then(res => {
      console.log(res)
    });
  }

  render() {
    return (
      <div>
        <h1>Rest Call</h1>
        <ul>
          {this.state.posts.map(post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
        <input type="text" name="name" value={this.state.name} placeholder="name" onChange={this.handleChange} />
        <input type="text" name="email" value={this.state.email} placeholder="email" onChange={this.handleChange} />
        <input type="password" name="password" value={this.state.password} placeholder="password" onChange={this.handleChange} />
        <button onClick={this.insertUser}>Insert</button>
      </div>
      
    );
  }
}

export default FetchDemo;



