import React from 'react';

class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: undefined
    }
  }

  render() {
    return (
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    )
  }
}
export default Loading;
