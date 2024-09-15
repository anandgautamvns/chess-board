import React from 'react'

import styles from './index.module.scss'

interface Props {
  black: boolean;
  children: React.ReactNode
}

const Square: React.FC<Props> = (props: Props) => {
  const { black, children } = props;
  const fill = black ? 'black' : 'white';
  const stroke = black ? 'white' : 'black';
  return (
    <div
      className={styles.squareContainer}
      style={{
        backgroundColor: fill,
        color: stroke,
      }}>
      {children}
    </div>
  )
}

export default Square