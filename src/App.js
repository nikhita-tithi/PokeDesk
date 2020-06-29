import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "react-bootstrap";
import Search from "./Search";
import Cardelement from "./Card";
import Example from "./Modal";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      searchedTerm: "",
      flag: false,
      selectedobj: {},
    };
  }

  componentDidMount() {
    const arr = [];

    const poks = async () => {
      for (let i = 1; i < 10; i++) {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await resp.json();
        const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
        const obj = {};
        obj.name = data.name;
        obj.id = data.id;
        obj.pic = pic;
        obj.stats = data.stats;
        arr.push(obj);
      }
      this.setState({ pokemons: arr });
    };
    poks();
  }

  handleSelectObj = (obj) => {
    this.setState({
      flag: true,
      selectedobj: obj,
    });
  };

  handleModal = () => {
    this.setState({
      flag: false,
    });
  };
  render() {
    console.log(this.state);
    const arr = this.state.pokemons;
    const filteredArray = arr.filter((item) => {
      return item.name
        .toLowerCase()
        .includes(this.state.searchedTerm.toLowerCase());
    });
    console.log(filteredArray);
    return (
      <>
        <Navbar style={{ backgroundColor: "#8f8f8a" }}>
          <Navbar.Brand href="#home">
            <div>
              <img
                src="https://vectorified.com/image/pokemon-logo-vector-20.jpg"
                width="120"
                height="60"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              <h1 style={{ float: "right", margin: "10px" }}>Poke Desk!</h1>
            </div>
          </Navbar.Brand>
        </Navbar>

        <div>
          <Search
            handleTerm={(term) => {
              this.setState({ searchedTerm: term });
            }}
          />
          {filteredArray.map((item) => {
            return (
              <Cardelement
                handleSelectObj={(obj) => {
                  this.handleSelectObj(obj);
                }}
                name={item.name}
                pic={item.pic}
                id={item.id}
                stats={item.stats}
              />
            );
          })}

          {this.state.flag && (
            <Example
              selectedobj={this.state.selectedobj}
              handleModal={this.handleModal}
            />
          )}
        </div>
      </>
    );
  }
}

export default App;
