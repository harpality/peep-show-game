import React, { Component } from "react";
import "./style.css";
import characters from '../../characters.json'
import CharacterCard from '../CharacterCard'


class CardContainer extends Component {

    state = {
       characters,
       hasBeenClicked: []
    }

    handleClick = (id) => {
    const hasBeenClicked = this.state.hasBeenClicked;
    if (hasBeenClicked.length === 11) {
        this.winGame();
    }
    else if (hasBeenClicked.includes(id)) {
    this.resetGame()
} 

     else { 
            hasBeenClicked.push(id)
            this.setState({hasBeenClicked})
            console.log(this.state.hasBeenClicked)
            console.log("clicked #", id)
            this.shuffleCards() 
            console.log(this.state.hasBeenClicked.length)
        }   

    }

    resetGame = () => {
        alert('game over!')
        this.shuffleCards() 
        this.setState({hasBeenClicked: []})
    }

    winGame = () => {
        alert('you win!')
        this.shuffleCards() 
        this.setState({hasBeenClicked: []})
    }

    shuffleCards = () => {
        const cast = this.state.characters;
       
            for (let i = cast.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [cast[i], cast[j]] = [cast[j], cast[i]];
            }
            this.setState({characters: cast});
        }
        
    

    render() {
    return (
        <div className="cards">
        <div className="container mt-3">
          <div className="row justify-content-center">
        
        {this.state.characters.map(character =>
            <CharacterCard 
            id={character.id}
            name={character.name}
            key={character.name}
            image={character.image}
            onClick={this.handleClick}/>)}
        </div>
        <div className="w-100 d-none d-md-block"></div>
        </div>
        </div>
    )
}

}
export default CardContainer;
