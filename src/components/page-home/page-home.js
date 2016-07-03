import React from 'react';
import ReactDOM from 'react-dom';
import GifList from './includes/GifList';
import GifModal from './includes/GifModal';
import SearchBar from './includes/SearchBar';
import Header from '../header';
import request from 'superagent';
import './page-home.css';



class PageHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGif: null,
      modalIsOpen: false
    };
  }

  openModal(gif) {
    this.setState({
      modalIsOpen: true,
      selectedGif: gif
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
      selectedGif: null
    });
  }

  handleTermChange(term) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;

    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data })
    });
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Homepage</h1>
        <SearchBar onTermChange={term => this.handleTermChange(term)} />
        <GifList  gifs={this.state.gifs}
                  onGifSelect={selectedGif => this.openModal(selectedGif) } />
        <GifModal modalIsOpen={this.state.modalIsOpen}
                  selectedGif={this.state.selectedGif}
                  onRequestClose={ () => this.closeModal() } />
      </div>
    );
  }
}

export default PageHome;
