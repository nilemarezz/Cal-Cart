import React, { FC } from 'react'
import { Card } from 'antd';
import { Row, Col } from 'antd';

const CardItem = (props: { name: string, price: number, isAvaliable: boolean, detail?: string }) => (
  <Card type="inner" style={{ width: '45vh', marginTop: 15 }}>
    <Row style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
      <Col span={18}>
        <h2>{props.name}</h2>
        <p>{props.detail}</p>
      </Col>
      <Col span={6}> <h2>{props.price} ฿</h2></Col>
    </Row>
  </Card>
);

export default CardItem