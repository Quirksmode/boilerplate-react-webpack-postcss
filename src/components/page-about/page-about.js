import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../header';


class PageAbout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <h1>About page</h1>
      </div>
    );
  }
}

export default PageAbout;
