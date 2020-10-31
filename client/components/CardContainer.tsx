import React, { FC } from 'react'
import { Card } from 'antd';
import styles from '../styles/Card.module.css'
import CardItem from './CardItem'
import Item from '../interfaces/Items'
const CardContainer = (props: { items: Item[] }) => (
  <div>
    {props.items.map(item => {
      return <CardItem name={item.name} price={item.price} detail={item.detail} isAvaliable={item.isAvaliable} key={item.name} />
    })}

  </div>
);

export default CardContainer