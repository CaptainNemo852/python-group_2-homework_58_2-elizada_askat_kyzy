import React, {Component, Fragment} from 'react';
import './Jokes.css';
import Joke from '../components/Joke/Joke';


class Jokes extends Component {
    state = {
        jokes: [],
    };

    componentDidMount() {
        const JOKE_URL = 'https://api.chucknorris.io/jokes/random';
        fetch(JOKE_URL).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('You have some errors!!!');
        }).then(jokes => {
            this.setState({jokes: jokes})
        }).catch(error => {
            console.log(error);
        });
    }


    render() {
    console.log(this.state);
        return (
            <Fragment>
                <section className="Jokes">
                    <Joke
                        key={this.state.jokes.id}
                        title={this.state.jokes.value}/>
                </section>
            </Fragment>
        )
    }
}


export default Jokes