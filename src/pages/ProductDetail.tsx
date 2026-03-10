import { useParams, Link } from 'react-router'
import { products } from '../data/products'


export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)


  // Hämta selektor för att lägga till produkt i korgen

  
  if (!product) {
    return <p className="p-10 text-gray-500">Produkten hittades inte.</p>
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Link to="/" className="text-indigo-600 text-sm hover:underline mb-6 inline-block">
        ← Tillbaka
      </Link>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-2xl mb-6"
      />
      <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
      <p className="text-gray-500 mt-3">{product.description}</p>
      <div className="flex items-center justify-between mt-6">
        <span className="text-2xl font-bold text-indigo-600">{product.price} kr</span>
        <button
          onClick={() => addToCart(product)}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
        >
          Lägg i korg
        </button>
      </div>
    </div>
  )
}
