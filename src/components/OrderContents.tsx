import { formatCurrency } from '../helpers'
import type { MenuItem, OrderItem } from '../types'

type OrderContentsProps = {
  order: OrderItem[]
  removeItem: (id: MenuItem['id']) => void
}

const OrderContents = ({ order, removeItem }: OrderContentsProps) => {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y-3 mt-5">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b items-center"
          >
            <div>
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-black">
                Cantidad: {item.quantity} -{' '}
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
            <button
              className="bg-red-600 rounded-full h-8 w-8 font-black text-white"
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderContents
