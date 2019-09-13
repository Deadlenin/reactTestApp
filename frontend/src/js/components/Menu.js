import Recipe from './Recipe'
import React, {Component} from 'react'
// import {createStore} from 'redux'
// import {connect} from 'react-redux'

class Menu extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {recipes} = this.props;
        return (
            <article>
                <header>
                    <h1>Delicious Recipes</h1>
                </header>
                <div>
                    {recipes.map( ( recipe, i ) =>
                        <Recipe key={i} {...recipe} /> )
                    }
                </div>
            </article>
        )
    }
}

export default Menu