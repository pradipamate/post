import React, { Component } from "react";
import {initialData,FetchingRequest} from "./practice/actions/PostAction";
import {Col,Row,Container,Table} from "react-bootstrap";
import { connect } from "react-redux";



class App extends Component {
    constructor(props) {
        super(props);
      this.state={
          mainpage:null,
          deatilpage:null,
          displaydetail:null,
          title:null,
          body:null,
          id:null
      }
        this.onChangesearchHandler = this.onChangesearchHandler.bind(this);

    }

    componentDidMount() {
        this.props.dispatch(initialData());
        setTimeout(() => {
         var Data =  this.props.Datafetch;
         console.log(Data);
         var ALldisplaydata=Data.DataFetch;
         console.log("ALldisplaydata",ALldisplaydata);
        this.setState({
          displaydata:ALldisplaydata,
        })
    }, 1000);   
}


    onChangesearchHandler(event) {
           console.log("evenet",event.target.value)
        if(event.target.value.length!==0){
              var initialdata=this.props.Datafetch;
              var ALldisplaydata=initialdata.DataFetch
              console.log("initialdata",ALldisplaydata);
              var selected=event.target.value;
              console.log("selected",selected)
                    const newData = ALldisplaydata.filter(function(item) {
                    const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
                    const textData = selected.toUpperCase();
                    return itemData.indexOf(textData) > -1 ;
                    });
                    this.setState({
                         displaydata:newData,
                    })
               }
        else{
            this.props.dispatch(initialData());
        }
    }

     TitleDetaile(id) {
         var Data =  this.props.Datafetch;
         var ALldisplaydata=Data.DataFetch;
        var Requestviewdata=ALldisplaydata.find(item=>item.id===id);
        console.log("Requestviewdata",Requestviewdata);
         this.setState({
             mainpage: true,
             deatilpage:true,
             displaydetail:Requestviewdata,
             title:Requestviewdata.title,
             id:Requestviewdata.id,
             body:Requestviewdata.body
         })
       
    }
    
    render() {  
     
          var Data = this.state.displaydata;
          console.log("Data",Data);

          if( Data!==null&&Data!==undefined){
                if(Data.length>0) {
                    var List=Data.map((item)=>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                                <td onClick={() => this.TitleDetaile(item.id)} className="more">More</td>
                            </tr>
                        )
                }
        
          }
        return (
            <div>
              <Container>
                    <Row>
                        <div className={this.state.mainpage ? "maindiv":""}>
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

                          <div className={this.state.deatilpage? "deatilpage":"displayhide"}>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>UserId</th>
                                    <th>Title</th>
                                    <th>Body</th>
                                    </tr>
                                </thead>
                                <tbody>
                                     <tr>
                                      <td>{this.state.id}</td>
                                      <td>{this.state.title}</td>
                                      <td>{this.state.body}</td>
                                       </tr>   
                                </tbody>
                              </Table>
                         </div>
                      </Row>
               </Container>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        Datafetch: state.DataFetch
    };
};
export default connect(mapStateToProps)(App);
