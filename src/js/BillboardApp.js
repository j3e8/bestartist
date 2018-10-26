import React from 'react';
import Loading from '../components/Loading/Loading.js'

class BillboardApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: undefined
    }
  }

  renderResults() {
    if (!this.state.results) {
      return <Loading/>;
    }

    return this.state.results.map((r, index) => {
      <div>
        { r.artistName }
      </div>
    })
  }

  render() {
    return (
      <div className="BillboardApp">
        <h1>Billboard Hot 100</h1>
        <section>
          { this.renderResults() }
        </section>
      </div>
    );
  }
}
export default BillboardApp;
