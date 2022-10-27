import {Component} from 'react';
import './card-list.styles.css';
import Card from '../card/card.components';
class CardList extends  Component{

    render(){
        
         const {monsters} = this.props;
        return(
            <div className='card-list' > 
            {monsters.map((monsters) => {
                
                return(
                  <Card monsters={monsters}/> 
                )})}
              
            </div>
        );
    }
}
export default CardList;
