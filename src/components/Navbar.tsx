import { Link } from 'react-router'
import { ShoppingCart } from 'lucide-react'
import useCartStore from '../store/cartStore'

export default function Navbar() {
  const totalItems = useCartStore((state) => state.totalItems)

  return (
    <nav className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-indigo-600">
        TechShop
      </Link>
      <Link to="/cart" className="relative">
        <ShoppingCart className="w-6 h-6 text-gray-700" />
        {totalItems() > 0 && (
          <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {totalItems()}
          </span>
        )}
      </Link>
    </nav>
  )
}
