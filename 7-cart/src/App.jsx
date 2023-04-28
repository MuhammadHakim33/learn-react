import { useEffect, useState } from 'react'
import axios from 'axios'
import Item from './component/Item'
import Payment from './component/Payment'

function App() {
  const [items, setItems] = useState([])
  const [amount, setAmount] = useState(1)
  const [price, setPrice] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    async function getItems() {
      const { data } = await axios('https://fakestoreapi.com/products/10')
      setItems(data)
      setPrice(data.price)
      setTotal(data.price)
    }
    getItems()
  }, [])

  useEffect(() => {
    setTotal(price * amount)
  }, [amount])

  return (
    <div className='border mt-10 mx-auto max-w-lg space-y-4'>
      <div className='border-b p-4'>
        <h1 className='text-xl font-bold'>ORDER SUMMARY</h1>
      </div>
      <div>
        <Item
          handleAmount={setAmount}
          getAmount={amount} 
          key={items.id}
          img={items.image}
          title={items.title}
          price={items.price}
        />
      </div>
      <div>
        <Payment 
          getAmount={amount}
          getPrice={price}
          getTotal={total}
        />
      </div>
    </div>
  )
}

export default App
