import React , {Component} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Form, Input, Button } from 'antd';
import {  SearchOutlined} from '@ant-design/icons';
class Home extends Component {
  render(){
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Input size="large" placeholder="large size" prefix={<SearchOutlined />} />
        
      </div>
    )
  }
  
}

export default Home
