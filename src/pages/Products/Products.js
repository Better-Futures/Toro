import React from 'react'
import { Product, Connection } from '../../components'
import { Object1, Object2 } from './Data'



const products = () => {
  return (
    <>
    <Product />
    <Connection {...Object1} />
    <Connection {...Object2} />
    </>
  )
}

export default products