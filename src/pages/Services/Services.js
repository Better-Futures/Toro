import React from 'react'
import { Features, Connection } from '../../components';
import { Object1, Object2, Object3 } from './Data';

const Services = () => {
  return (
    <>
    <Features {...Object1} />
    <Connection {...Object3} />
    <Connection {...Object2} />
    </>
  )
}

export default Services