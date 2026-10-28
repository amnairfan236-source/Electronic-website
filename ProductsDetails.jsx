import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowUp, ShoppingCart, Minus, Plus } from 'lucide-react'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'

function ProductsDetails() {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const productsList = [
    {
      id: 1,
      title: 'Sony WH-1000XM3 Wireless Headphones',
      category: 'Audio',
      price: 299.99,
      oldPrice: 329.99,
      discount: '9% off',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60',
      description: 'Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo.'
    },
    {
      id: 2,
      title: 'PlayStation 5 Wireless Controller Robot White',
      category: 'Gaming',
      price: 57.00,
      oldPrice: 59.00,
      discount: '4% discount',
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&auto=format&fit=crop&q=60',
      description: 'Experience the modernized design of the Xbox wireless controller in robot white, featuring sculpted surfaces and refined geometry for enhanced comfort and effortless control during gameplay Stay on target with textured grip on the triggers, bumpers, and back case.'
    },
    {
      id: 3,
      title: 'Apple iPhone 15 Pro Max',
      category: 'Mobile',
      price: 1199.99,
      oldPrice: 1299.99,
      discount: '8% off',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&auto=format&fit=crop&q=60',
      description: 'Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and a more versatile pro camera system.'
    },
    {
      id: 4,
      title: '4K Ultra HD Smart OLED TV 55"',
      category: 'TV',
      price: 899.99,
      oldPrice: 999.99,
      discount: '10% off',
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&auto=format&fit=crop&q=60',
      description: 'Immerse yourself in breathtaking 4K picture quality with infinite contrast, rich colors, and smart streaming features built right in.'
    },
    {
      id: 5,
      title: 'MacBook Pro 16" M3 Max',
      category: 'Laptop',
      price: 2499.99,
      oldPrice: 2699.99,
      discount: '7% off',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60',
      description: 'Supercharged by M3 Max, the most advanced chip ever in a personal laptop, delivering extreme performance for pro workflows.'
    },
    {
      id: 6,
      title: 'Smart Coffee Maker Machine',
      category: 'Appliances',
      price: 149.99,
      oldPrice: 179.99,
      discount: '15% off',
      image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&auto=format&fit=crop&q=60',
      description: 'Brew your favorite coffee house drinks right at home with precision temperature control and built-in grinder.'
    }
  ]

  const product = productsList.find(p => p.id === Number(id)) || productsList[1]

  const addToCart = () => {
    let existingCart = JSON.parse(localStorage.getItem('zaptro_cart')) || []
    const itemIndex = existingCart.findIndex(item => item.id === product.id)

    if (itemIndex > -1) {
      existingCart[itemIndex].quantity += quantity
    } else {
      existingCart.push({ ...product, quantity: quantity })
    }

    localStorage.setItem('zaptro_cart', JSON.stringify(existingCart))
    window.dispatchEvent(new Event('cartUpdated'))

    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='bg-gray-50 min-h-screen flex flex-col justify-between text-gray-800'>
      <div className='max-w-7xl mx-auto px-6 py-8 w-full flex-grow'>
        <div className='text-xs text-gray-500 mb-8'>
          <Link to="/" className='hover:text-red-600'>Home</Link> / <Link to="/products" className='hover:text-red-600'>Products</Link> / <span className='text-gray-800 font-medium'>{product.title}</span>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-start bg-white p-8 rounded-2xl border border-gray-200 shadow-sm'>
          <div className='h-96 bg-gray-50 rounded-2xl p-6 flex items-center justify-center border border-gray-100 relative'>
            <img 
              src={product.image} 
              alt={product.title} 
              className='max-h-full max-w-full object-contain drop-shadow-lg'
            />
          </div>

          <div className='space-y-6'>
            <h1 className='text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight'>
              {product.title}
            </h1>

            <p className='text-xs font-semibold text-gray-400 uppercase tracking-wider'>
              MICRO / {product.category} / {product.title.split(' ')[0]}
            </p>

            <div className='flex items-center gap-4'>
              <span className='text-2xl font-extrabold text-red-600'>${product.price.toFixed(2)}</span>
              {product.oldPrice && (
                <span className='text-gray-400 line-through text-lg'>${product.oldPrice.toFixed(2)}</span>
              )}
              {product.discount && (
                <span className='bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded shadow-sm'>
                  {product.discount}
                </span>
              )}
            </div>

            <p className='text-gray-600 text-sm leading-relaxed'>
              {product.description}
            </p>

            <div className='flex items-center gap-4 pt-2'>
              <span className='text-xs font-semibold text-gray-700'>Quantity:</span>
              <div className='flex items-center border border-gray-300 rounded-lg overflow-hidden'>
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className='px-3 py-1.5 bg-gray-50 hover:bg-gray-200 text-gray-700 transition cursor-pointer'
                >
                  <Minus size={14} />
                </button>
                <span className='px-4 py-1.5 text-sm font-bold text-gray-900'>{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className='px-3 py-1.5 bg-gray-50 hover:bg-gray-200 text-gray-700 transition cursor-pointer'
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <div className='pt-4'>
              <button 
                onClick={addToCart}
                className={`w-full md:w-80 py-3 rounded-xl text-sm font-medium transition shadow-md flex items-center justify-center gap-2 active:scale-95 cursor-pointer ${
                  added ? 'bg-green-600 text-white' : 'bg-red-600 hover:bg-red-700 text-white'
                }`}
              >
                <ShoppingCart size={18} /> 
                {added ? 'Added to Cart ✓' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className='bg-[#0b1329] text-gray-300 pt-12 pb-6 px-6 md:px-16 mt-16 relative border-t border-gray-800'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-gray-800'>
          <div>
            <h2 className='text-2xl font-bold text-white mb-3'>
              <span className='text-red-500'>Z</span>aptro
            </h2>
            <p className='text-xs text-gray-400 mb-4'>Powering Your World with the Best in Electronics.</p>
            <p className='text-xs text-gray-400'>123 Electronics St, Style City, NY 10001</p>
            <p className='text-xs text-gray-400 mt-1'>Email: support@Zaptro.com</p>
            <p className='text-xs text-gray-400 mt-1'>Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className='font-semibold text-white mb-4 text-sm'>Customer Service</h3>
            <ul className='space-y-2 text-xs text-gray-400'>
              <li><Link to="/contact" className='hover:text-white transition'>Contact Us</Link></li>
              <li><a href="#" className='hover:text-white transition'>Shipping & Returns</a></li>
              <li><a href="#" className='hover:text-white transition'>FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold text-white mb-4 text-sm'>Follow Us</h3>
            <div className='flex gap-4 text-gray-400'>
              <a href="#" className='hover:text-white transition'><FaFacebook size={18} /></a>
              <a href="#" className='hover:text-white transition'><FaInstagram size={18} /></a>
              <a href="#" className='hover:text-white transition'><FaTwitter size={18} /></a>
              <a href="#" className='hover:text-white transition'><FaPinterest size={18} /></a>
            </div>
          </div>
          <div>
            <h3 className='font-semibold text-white mb-2 text-sm'>Stay in the Loop</h3>
            <div className='flex items-center'>
              <input type="email" placeholder="Your email address" className='bg-white text-gray-800 px-3 py-2 rounded-l-md text-xs w-full focus:outline-none' />
              <button className='bg-red-500 hover:bg-red-600 text-white text-xs px-4 py-2 font-medium rounded-r-md transition cursor-pointer'>Subscribe</button>
            </div>
          </div>
        </div>
        <div className='max-w-7xl mx-auto pt-6 flex justify-between items-center text-xs text-gray-400 relative'>
          <p className='mx-auto'>© 2026 <span className='text-red-500 font-semibold'>Zaptro</span>. All rights reserved</p>
          <button onClick={scrollToTop} className='absolute right-0 bottom-2 bg-red-500 hover:bg-red-600 text-white p-2.5 rounded-lg shadow-md transition cursor-pointer'>
            <ArrowUp size={18} />
          </button>
        </div>
      </footer>
    </div>
  )
}

export default ProductsDetails