import React,{ useState, useContext } from 'react'
import Transaction from './Transaction'
import { GlobalContext } from '../store/GlobalState'


function Transactions() {
  const context = useContext(GlobalContext);

  return (
    <div>
        {context.transactions.map(item=> 
          <Transaction key={item.id} item={item} />
        )}
    </div>
  )
}

export default Transactions