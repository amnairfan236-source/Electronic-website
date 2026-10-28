import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, MapPin, ChevronDown, X } from 'lucide-react'

function Navbar() {
  const [cartCount, setCartCount] = useState(0)
  const [showLocationModal, setShowLocationModal] = useState(false)
  const [locationText, setLocationText] = useState('Add Address')

  const updateCartCount = () => {
    try {
      const savedCart = JSON.parse(localStorage.getItem('zaptro_cart')) || []
      const totalCount = savedCart.reduce((sum, item) => sum + Number(item.quantity || 0), 0)
      setCartCount(totalCount)
    } catch (error) {
      setCartCount(0)
    }
  }

  useEffect(() => {
    updateCartCount()
    window.addEventListener('storage', updateCartCount)
    window.addEventListener('cartUpdated', updateCartCount)

    return () => {
      window.removeEventListener('storage', updateCartCount)
      window.removeEventListener('cartUpdated', updateCartCount)
    }
  }, [])

  const handleDetectLocation = () => {
    setLocationText('Jaranwala, Pakistan')
    setShowLocationModal(false)
  }

  return (
    <nav className='bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm sticky top-0 z-50 relative'>
      
      {/* Left: Logo and Add Address with Popup */}
      <div className='flex items-center gap-6 relative'>
        <Link to="/" className='text-2xl font-bold tracking-tight text-gray-900'>
          <span className='text-red-600'>Z</span>aptro
        </Link>

        <div className='relative'>
          <div 
            onClick={() => setShowLocationModal(!showLocationModal)}
            className='flex items-center gap-1.5 text-xs text-gray-700 cursor-pointer hover:text-red-600 font-medium bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200 select-none'
          >
            <MapPin size={15} className='text-red-600' />
            <span>{locationText}</span>
            <ChevronDown size={13} className='text-gray-400' />
          </div>

          {/* Change Location Popup Modal */}
          {showLocationModal && (
            <div className='absolute top-11 left-0 bg-white border border-gray-200 shadow-xl rounded-2xl p-5 w-72 z-50'>
              <div className='flex items-center justify-between mb-4'>
                <h3 className='font-bold text-gray-900 text-base'>Change Location</h3>
                <button 
                  onClick={() => setShowLocationModal(false)}
                  className='text-gray-400 hover:text-gray-600 transition p-1 cursor-pointer'
                >
                  <X size={16} />
                </button>
              </div>

              <button 
                onClick={handleDetectLocation}
                className='w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 rounded-xl text-xs transition shadow-md active:scale-95 cursor-pointer'
              >
                Detect my location
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Center: Nav Links */}
      <div className='hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700'>
        <Link to="/" className='hover:text-red-600 transition'>Home</Link>
        <Link to="/products" className='hover:text-red-600 transition'>Products</Link>
        <Link to="/about" className='hover:text-red-600 transition'>About</Link>
        <Link to="/contact" className='hover:text-red-600 transition'>Contact</Link>
      </div>

      {/* Right Side: Cart & Sign In */}
      <div className='flex items-center gap-6'>
        <Link to="/cart" className='relative text-gray-700 hover:text-red-600 transition flex items-center p-1'>
          <ShoppingCart size={24} />
          {cartCount > 0 && (
            <span className='absolute -top-1 -right-2 bg-red-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md'>
              {cartCount}
            </span>
          )}
        </Link>

        <Link to="/sign-in">
          <button className='bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition shadow-sm cursor-pointer'>
            Sign in
          </button>
        </Link>
      </div>

    </nav>
  )
}

export default Navbar