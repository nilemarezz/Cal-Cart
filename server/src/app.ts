import express , {Application , Request , Response , NextFunction} from 'express';

const app: Application = express()


const add = (num1 : number , num2 : number) => {
  return num1 + num2
}
app.get('/',(req : Request,res:Response , next : NextFunction) => {
  console.log(add(5,5))
  res.send('asdadsasd')
})

app.listen(5000 , () => {
  console.log('app start at port 5000')
})