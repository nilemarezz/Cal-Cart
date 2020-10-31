import React, { FC } from 'react'
import { Card } from 'antd';
import styles from '../styles/Card.module.css'
import { Skeleton } from 'antd';
const CardSkeleton = () => (
  <Card type="inner" style={{ width: '45vh', marginTop: 15 }}>
    <Skeleton active />
  </Card>
);

export default CardSkeleton