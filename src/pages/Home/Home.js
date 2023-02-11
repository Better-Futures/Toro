import React from 'react'
import {Intro, Cards, Features, Connection, Projects} from '../../components';
import { Object1, Object2 } from './Data';


const home = () => {
  return (
    <>
    <Intro />
    <Cards />
    <Features {...Object1} />
    <Connection {...Object2} />
    <Projects /> 
    </>
  )
}

export default home;