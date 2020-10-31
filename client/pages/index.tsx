import React, { Component } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Input, Button } from 'antd';
import { SearchOutlined, ShoppingCartOutlined, PlusOutlined } from '@ant-design/icons';
import CardContainer from '../components/CardContainer'
import CardSkeleton from '../components/CardSkeleton'
import Item from '../interfaces/Items'
import { Radio } from 'antd';
const items: Item[] = [{
  name: "Chocolate Banoffee Strawberry",
  price: 100,
  detail: "Oreo Milk Shake",
  isAvaliable: true
},
{
  name: "Happy Friend Fried Rice ",
  price: 90,
  detail: "Sakura Milkshake ",
  isAvaliable: true
},
{
  name: "Happy GG ",
  price: 80,
  detail: "Sakura Milkshake ",
  isAvaliable: true
}]
class Home extends Component {
  state = { loading: false, items: items, filterList: [], filterText: '' }

  componentDidMount() {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1000)
  }
  filter = (value: string) => {
    this.setState({ filterText: value })
    this.setState({ filterList: this.state.items.filter(item => item.name.toLowerCase().includes(value.toLowerCase())) })
  }
  renderCard = (filterList: Item[], filterText: string, items: Item[]) => {
    if (filterList.length === 0) {
      if (filterText === '') {
        return <CardContainer items={items} />
      } else {
        return <h1 style={{ color: 'white', marginTop: '10vh' }}>No Data Found</h1>
      }
    } else {
      return <CardContainer items={filterList} />
    }
  }
  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.input}>
          <Button size='large'><ShoppingCartOutlined /></Button>
          <Input size="large" placeholder="Search" prefix={<SearchOutlined />} onChange={(e) => this.filter(e.target.value)} />
          <Button size='large'><PlusOutlined /></Button>
        </div>
        <div style={{ display: 'flex' }}>
          <Radio.Group defaultValue="All" >
            <Radio.Button value="All">All</Radio.Button>
            <Radio.Button value="Drink">Drink</Radio.Button>
            <Radio.Button value="Dessert">Dessert</Radio.Button>
          </Radio.Group>
          <Radio.Group defaultValue="Name">
            <Radio.Button value="Name">Name</Radio.Button>
            <Radio.Button value="Price">Price</Radio.Button>
          </Radio.Group>
        </div>
        {this.state.loading ?
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
          :
          this.renderCard(this.state.filterList, this.state.filterText, this.state.items)
        }

      </div>
    )
  }

}

export default Home
