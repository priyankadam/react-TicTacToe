import React, {Component} from 'react';
import Player from './Player';

class Status extends Component{

	handleSetplayer(e){
		this.props.setPlayer(e)
	}




	renderHtml(){
	
       if(this.props.winner){

    		return<h2>Winner is: {this.props.winner}</h2> 
    	}else{
           return this.props.player?
    	
    	<h2>Next player is {this.props.player}</h2>:
    	<Player player={(e)=> this.handleSetplayer(e)}/>


    	}
     
	}

  render() {

    return (<span>{this.renderHtml()}</span>)

  }

}
export default Status;