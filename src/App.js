import React, { Component } from 'react';
import ListItems from './listItems'
import './App.css';
import { Route, Link } from 'react-router-dom'
import Cart from './cart.js'


class App extends Component {
  state = { 
    items: [
      {
        name: "Ruby",
        price: 5.99, 
        imageURL: "https://banner2.kisspng.com/20180330/byw/kisspng-web-development-ruby-on-rails-programming-language-ruby-5abef9d3022698.0032296715224652350088.jpg",
        description: "Ruby is...A dynamic, open source programming language with a focus on simplicity and productivity.It has an elegant syntax that is natural to read and easy to write."
      },
      {
        name: "Javascript",
        price: 6.99,
        imageURL: "https://static.memrise.com/img/400sqf/from/uploads/course_photos/3146044000171223183557.png",
        description: "JavaScript (JS) is a lightweight, interpreted or JIT compiled programming language with first-class functions. Most well-known as the scripting language for Web pages, many non-browser environments also use it, such as node.js and Apache CouchDB. JS is a prototype-based, multi-paradigm, dynamic scripting language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about JavaScript."
      },
      {
        name: "Python",
        price: 8.99,
        imageURL: 'https://www.python.org/static/opengraph-icon-200x200.png',
        description: "Python is powerful... and fast; plays well with others; runs everywhere; is friendly & easy to learn; is Open."
      },
      {
        name: "Clojure",
        price: 7.99,
        imageURL: 'data:image/png;base64,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',
        description: "Clojure is a dynamic, general-purpose programming language, combining the approachability and interactive development of a scripting language with an efficient and robust infrastructure for multithreaded programming."
      }
    ],
    cart: []
  }

  addToCart = (item) => {
    this.setState(state => {
      return {cart: state.cart.concat(item)}
    })
  }

  removeFromCart = (item) => {
    this.setState(state => {
      const newArray = [...state.cart]
      newArray.splice(newArray.indexOf(item), 1)
      return { cart: newArray }
    })
  }

  render() {
    return (
      <div>
        <Route path="/cart" render={({ history }) => (
          <Cart items={this.state.cart} onRemoveFromCart={this.removeFromCart}/>
        )}/>

        <Route exact path="/" render={() => {
          return(
            <div>
              <Link to="/cart">You have {this.state.cart.length} items in your cart.</Link>
              <ListItems items={this.state.items} onAddToCart={this.addToCart}/>
            </div>
          )}}/>
      </div>
    );
  }
}

export default App;
