import { LineItemsCount } from '@commercelayer/react-components'
import { TypeAccepted } from '@commercelayer/react-components/lib/utils/getLineItemsCount'
import type { NextPage } from 'next'
import React from 'react'
import styles from '../styles/Home.module.css'

export const LINE_ITEMS_SHIPPABLE: TypeAccepted[] = ['skus']
export const LINE_ITEMS_SHOPPABLE: TypeAccepted[] = [
    ...LINE_ITEMS_SHIPPABLE,
]

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <LineItemsCount typeAccepted={LINE_ITEMS_SHOPPABLE}>
        {(props) => (
            <div>{props.quantity}</div>
        )}
      </LineItemsCount>
    </div>
  )
}

export default Home
