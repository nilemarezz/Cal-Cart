import express, { Application, Request, Response, NextFunction } from 'express';
import Item from './interface/Item'
const app: Application = express()

let dataItems = [
  { name: "Coffee", price: 20, detail: 'Black coffee with ice', isAvaliable: true, icon: 'coffee' },
  { name: "Cheese Cake", price: 90, detail: 'Original Cheesecake', isAvaliable: true, icon: 'cake' },
]


app.get('/items', (req: Request, res: Response, next: NextFunction) => {
  let items: Item[] = [];
  dataItems.map(item => {
    items.push({name : item.name , price : item.price, detail : item.detail, isAvaliable : item.isAvaliable ,icon :item.icon })
  })
  res.json(items)
})

app.listen(5000, () => {
  console.log('app start at port 5000')
})