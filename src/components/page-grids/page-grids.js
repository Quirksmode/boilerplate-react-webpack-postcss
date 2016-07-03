import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../header';
import './page-grids.css';


class PageGrids extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <main className="page page-grids">
            <header>
                <div className="grid no-cols">
                   <h1>Responsive Grids</h1>
                   <p className="intro">I know, I know another Grid system, but bear with us, this one is pretty cool and we have been using it on all our large scale projects at Beyond for the last few years and thought it was time to share.</p>
                </div>
            </header>
            <section>
                <div className="grid no-cols">
                    <h2>12 Column grid example</h2>
                    <p>A basic 12 column example</p>
                </div>
                <div className="grid">
                    <div className="col-1-1">1 of 1</div>
                    <div className="col-6-12">1 of 2</div>
                    <div className="col-6-12">1 of 2</div>
                    <div className="col-4-12">1 of 3</div>
                    <div className="col-4-12">1 of 3</div>
                    <div className="col-4-12">1 of 3</div>
                    <div className="col-3-12">1 of 4</div>
                    <div className="col-3-12">1 of 4</div>
                    <div className="col-3-12">1 of 4</div>
                    <div className="col-3-12">1 of 4</div>
                    <div className="col-8-12">8 of 12</div>
                    <div className="col-4-12">4 of 12</div>
                    <div className="col-9-12">9 of 12</div>
                    <div className="col-3-12">3 of 12</div>
                </div>
            </section>
            <section>
                <div className="grid-custom no-cols">
                   <h2>Custom grid example</h2>
                   <p>A custom grid allows you handcraft exactly how each column will behave across the different breakpoints.</p>
                </div>
                <div className="grid-custom">
                    <div className="grid-custom__col">Custom 1</div>
                    <div className="grid-custom__col">Custom 2</div>
                    <div className="grid-custom__col">Custom 3</div>
                    <div className="grid-custom__col">Custom 4</div>
                    <div className="grid-custom__col">Custom 5</div>
                    <div className="grid-custom__col">Custom 6</div>
                </div>
            </section>
            <section>
                <div className="grid no-cols">
                    <h2>Broken 12 Column grid example</h2>
                    <p>The alternate className names do not work properly</p>
                </div>
                <div className="grid">
                    <div className="col-1-1">1 of 1</div>
                    <div className="col-1-2">1 of 2</div>
                    <div className="col-1-2">1 of 2</div>
                    <div className="col-1-3">1 of 3</div>
                    <div className="col-1-3">1 of 3</div>
                    <div className="col-1-3">1 of 3</div>
                    <div className="col-1-4">1 of 4</div>
                    <div className="col-1-4">1 of 4</div>
                    <div className="col-1-4">1 of 4</div>
                    <div className="col-1-4">1 of 4</div>
                    <div className="col-8-12">8 of 12</div>
                    <div className="col-4-12">4 of 12</div>
                    <div className="col-9-12">9 of 12</div>
                    <div className="col-3-12">3 of 12</div>
                </div>
            </section>
        </main>
      </div>
    );
  }
}

export default PageGrids;
