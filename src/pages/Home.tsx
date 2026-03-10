import { Link } from 'react-router'
import { products } from '../data/products'

export default function Home() {

  // Hämta selektor för att lägga till produkt i korgen
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Produkter</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow p-4 flex flex-col gap-3">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl"
              />
              <h2 className="text-lg font-semibold text-gray-800 mt-3">{product.name}</h2>
            </Link>
            <p className="text-gray-500 text-sm">{product.description}</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-indigo-600 font-bold">{product.price} kr</span>
              <button
                onClick={() => addToCart(product)}
                className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition"
              >
                Lägg i korg
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
