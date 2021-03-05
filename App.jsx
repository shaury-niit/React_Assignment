import React from 'react';

class App extends React.Component {
    render() {

        let myStyle={
            fontSize:50,
            color:'#FF0000'
        }

        let companies = ["Microsoft", "Facebook", "Google", "Coforge"]

        return (
            <div>
                <h1>Hello World!</h1>
                <h1 style={myStyle}>App User  {this.props.username}</h1>
                <h1>Session User {this.props.sessionUser}</h1>
                <ul>
                    {companies.map((ele,index)=>
                        {
                            return <li key={index}>{ele}</li>
                        }
                    )}
                </ul>
            </div>
        )
    }
}

export default App