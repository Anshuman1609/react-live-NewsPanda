import React, { Component } from 'react';
import loading from './loading.gif';

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
            <img className="my-3" width='28px' src={loading} alt="load" />
      </div>
    )
  }
}

export default Spinner