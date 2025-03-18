import React from 'react'
import SplitBar from '../ui/SplitBar'
import Button from '../ui/Button'

const CartSummary = () => {
  return (
    <section className='flex-1/3 border border-gray-300 rounded-xl p-6 flex flex-col gap-4'>
      <span className='font-semibold text-2xl'>Resumo Carrinho</span>

      <div className='flex justify-between'>
        <span>Subtotal</span>
        <span className='text-gray-600'>R$ 254,90</span>
      </div>

      <div className='flex justify-between'>
        <span>Frete</span>
        <span className='text-gray-600'>R$ 15,90</span>
      </div>

      <SplitBar />

      <div className='flex justify-between'>
        <span className='text-xl font-medium'>Total</span>
        <span className='text-xl font-medium'>R$ 270,80</span>
      </div>

      <Button size='xl' black>Finalizar Compra</Button>
    </section>
  )
}

export default CartSummary