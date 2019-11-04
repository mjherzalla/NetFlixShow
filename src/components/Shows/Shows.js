import React, { Component } from 'react';
import ShowsList from './ShowsList'

import './Shows.css';

var en_data = require('.//..//..//data/en_US.json');
var la_data = require('.//..//..//data/la_PG.json');


class Shows extends Component {
    constructor(props) {
        super(props);
        this.state = {
            en_Shows_data: en_data,
            la_Shows_data: la_data,
            SelectedShow: "",
            Language: "en",
            classState: 'showCard'

        };
    }

    changeSelectedLanguage(event){

       console.log(this.state.Language)
        this.setState({
            Language: event.target.value
        }) 
         
    }
    GetShows() {
     
        if (this.state.Language == "en") {
            console.log("set english")
            return this.state.en_Shows_data
        } else {
            console.log("set latin")
            return this.state.la_Shows_data
        }
    }

    expand() {
        if (this.state.classState == "showCard") {
            this.setState({
                classState: "expandedshowCard"
            });

        }
    }
    Deselect() {
        this.setState({
            classState: "showCard"
        });
    }

    render() {

        return (
            <div>
               
               <select  value={this.state.Language} onChange={(e)=>this.changeSelectedLanguage(e)}>
                            <option value="en">English</option>
                            <option value="la">Latin </option>
                </select><br/>
                <ShowsList Shows={this.GetShows()} classState={this.state.classState} 
                xpand={() => this.expand()} 
                Deselect={() => this.Deselect()}
                Language={this.state.Language}
                
                  />
            </div>
        );
    }
}

export default Shows;