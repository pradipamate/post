import React, { Component } from "react";
import { BrowserRouter, Router, Route, link, Link } from 'react-router-dom';
import detailscreen from './detailscreen';
class App extends Component {
    constructor(props) {
        super(props);
        this.onChangesearchHandler = this.onChangesearchHandler.bind(this);
    }

    console.lo(props.match.params.id,"id")

    componentDidMount() {
        this.props.dispatch(initialData());
    }
    onChangesearchHandler(event) {
        console.log("evenet",event.target.value)
        if(event.target.value.length!==0){
            this.props.dispatch(FetchingRequest(event.target.value));
        }
        else{
            this.props.dispatch(initialData());
        }
    }

    <BrowserRouter>
      <div className="grid-container">
            <Route path="/detailscreen/:id" component={detailscreen} />   
      </div>
    </BrowserRouter>
    
    render() {  
     
          var Data = this.props.Datafetch;
          var data=Data.DataFetch;
          console.log("data",data);
          if(data !==undefined){
           var List=data.map((item)=>
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    <td><Link to={'/detailscreen/' + item.id}>more </Link></td>
                </tr>
            )
          }
        return (
            <div>
              <Container>
                    <Row>
                        <div>
                        <input type="text" placeholder="enter title Name" onChange={this.onChangesearchHandler}  /> 
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>UserId</th>
                                    <th>Title</th>
                                    <th>Body</th>
                                    <th>More</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {List}
                                </tbody>
                              </Table>
                         </div>
                      </Row>
               </Container>
            </div>
        );
    }
}


