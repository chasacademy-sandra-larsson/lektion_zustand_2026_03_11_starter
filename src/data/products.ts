export interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Trådlösa hörlurar',
    price: 899,
    description: 'Brusreducerande hörlurar med 30 timmars batteritid.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
  },
  {
    id: '2',
    name: 'Mekaniskt tangentbord',
    price: 1299,
    description: 'Kompakt 75% tangentbord med RGB-belysning.',
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=400',
  },
  {
    id: '3',
    name: 'Webbkamera 4K',
    price: 649,
    description: 'Skarp bild med inbyggd mikrofon, perfekt för möten.',
    image: 'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400',
  },
  {
    id: '4',
    name: 'USB-C Hub',
    price: 399,
    description: '7-i-1 hub med HDMI, USB 3.0 och kortläsare.',
    image: 'https://images.unsplash.com/photo-1625895197185-efcec01cffe0?w=400',
  },
]
