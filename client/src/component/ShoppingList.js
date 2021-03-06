import React, {Component} from "react";
import {Container, ListGroup, ListGroupItem, Button} from "reactstrap";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import uuid from 'uuid/v4';

class ShoppingList extends Component{
    state = {
        items: [
            {id : uuid(), name : "Eggs"},
            {id : uuid(), name : "Bread"},
            {id : uuid(), name : "Chai"},
            {id : uuid(), name : "Juice"},
            {id : uuid(), name : "Curd"}
        ]
    }
    render(){
        const {items} = this.state;
        return(
            <Container>
                <Button 
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={()=>{
                    const name = prompt('Enter item');
                    if(name){
                        this.setState(state=>({
                            items: [...state.items, {id:uuid(), name}]
                        }));
                    }
                }}
                
                >Add item</Button>

            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {items.map(({id,name})=>(
                        <CSSTransition key={id} timeout={500} classNames="fade">
                            <ListGroupItem>
                            <Button className="remove-btn" color="danger" size="small" onClick={()=>{
                                this.setState(this.setState({
                                    items: this.state.items.filter(item=>item.id !== id)
                                }));
                            }}>X

                            </Button>
                                {name}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
            </Container>
        )
    }
}

export default ShoppingList