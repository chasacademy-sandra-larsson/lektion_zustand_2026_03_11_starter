import { Link } from 'react-router'
import { Trash2 } from 'lucide-react'

export default function Cart() {

  // Använda selektorer från cartStore

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-10 text-center">
        <p className="text-gray-500 text-lg">Varukorgen är tom.</p>
        <Link to="/" className="text-indigo-600 hover:underline mt-4 inline-block">
          Fortsätt handla
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Varukorg</h1>

      <ul className="flex flex-col gap-4">
        {cart.map(({ product, quantity }) => (
          <li key={product.id} className="flex items-center gap-4 bg-white rounded-2xl shadow p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover rounded-xl"
            />
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{product.name}</p>
              <p className="text-indigo-600 font-bold">{product.price} kr</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => decreaseQuantity(product.id)}
                className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 font-bold transition"
              >
                −
              </button>
              <span className="w-6 text-center font-semibold">{quantity}</span>
              <button
                onClick={() => increaseQuantity(product.id)}
                className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 font-bold transition"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(product.id)}
              className="text-red-400 hover:text-red-600 transition"
            >
              <Trash2 size={20} />
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center justify-between">
        <span className="text-xl font-bold text-gray-800">Totalt: {totalPrice()} kr</span>
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
          Till kassan
        </button>
      </div>
    </div>
  )
}
