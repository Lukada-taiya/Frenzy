import React from 'react';
import loader from '../../img/loader.gif';

const Spinner = () => {
  return (
    <img src={loader} alt='Loading...' style={{width: '200px', margin: 'auto', display: 'block'}} />
  )
}

export default Spinner