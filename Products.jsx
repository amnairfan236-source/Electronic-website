import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingCart, ArrowUp, ArrowLeft } from 'lucide-react'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'

function Products() {
  const [searchParams] = useSearchParams()
  const selectedCategory = searchParams.get('category')
  const [addedId, setAddedId] = useState(null)

  const productsList = [
    //  AUDIO (6 Products) 
    {
      id: 1,
      title: 'Sony WH-1000XM3 Wireless Headphones',
      category: 'AUDIO',
      price: 299.99,
      oldPrice: 329.99,
      discount: '9% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60',
      description: 'Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI.'
    },
    {
      id: 2,
      title: 'Apple AirPods Pro (2nd Gen)',
      category: 'AUDIO',
      price: 249.99,
      oldPrice: 279.99,
      discount: '10% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&auto=format&fit=crop&q=60',
      description: 'Active Noise Cancellation, Adaptive Audio, and Personalized Spatial Audio for immersive sound.'
    },
    {
      id: 3,
      title: 'Bose QuietComfort Ultra Earbuds',
      category: 'AUDIO',
      price: 299.00,
      oldPrice: 329.00,
      discount: '9% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60',
      description: 'Breakthrough spatialized audio for immersive listening no matter the content or source.'
    },
    {
      id: 4,
      title: 'JBL Charge 5 Portable Bluetooth Speaker',
      category: 'AUDIO',
      price: 179.99,
      oldPrice: 199.99,
      discount: '10% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=60',
      description: 'Bold JBL Pro Sound with optimized long excursion driver and separate tweeter.'
    },
    {
      id: 5,
      title: 'Marshall Stanmore III Bluetooth Speaker',
      category: 'AUDIO',
      price: 379.99,
      oldPrice: 399.99,
      discount: '5% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&auto=format&fit=crop&q=60',
      description: 'Home audio speaker with a wider soundstage than its predecessor for room-filling sound.'
    },
    {
      id: 6,
      title: 'Sennheiser Momentum 4 Wireless',
      category: 'AUDIO',
      price: 349.99,
      oldPrice: 399.99,
      discount: '12% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60',
      description: 'Superior sound signature with an impressive 60-hour battery life and fast charging.'
    },

    //  GAMING (6 Products) 
    {
      id: 7,
      title: 'PlayStation 5 Wireless Controller Robot White',
      category: 'GAMING',
      price: 57.00,
      oldPrice: 59.00,
      discount: '4% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&auto=format&fit=crop&q=60',
      description: 'Experience the modernized design of the wireless controller featuring haptic feedback.'
    },
    {
      id: 8,
      title: 'Sony PlayStation 5 Console (Digital Edition)',
      category: 'GAMING',
      price: 449.99,
      oldPrice: 499.99,
      discount: '10% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&auto=format&fit=crop&q=60',
      description: 'Lightning-fast loading with an ultra-high speed SSD and deeper immersion support.'
    },
    {
      id: 9,
      title: 'Xbox Series X 1TB Gaming Console',
      category: 'GAMING',
      price: 499.99,
      oldPrice: 539.99,
      discount: '7% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=500&auto=format&fit=crop&q=60',
      description: 'The fastest, most powerful Xbox ever with 12 teraflops of raw graphic processing power.'
    },
    {
      id: 10,
      title: 'Nintendo Switch OLED Model White Set',
      category: 'GAMING',
      price: 349.99,
      oldPrice: 379.99,
      discount: '8% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=500&auto=format&fit=crop&q=60',
      description: 'Featuring a vibrant 7-inch OLED screen, wide adjustable stand, and wired LAN port.'
    },
    {
      id: 11,
      title: 'Logitech G Pro X Wireless Gaming Headset',
      category: 'GAMING',
      price: 199.99,
      oldPrice: 229.99,
      discount: '13% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=500&auto=format&fit=crop&q=60',
      description: 'Pro-grade tech designed with top esports professionals for zero delay and maximum comfort.'
    },
    {
      id: 12,
      title: 'Razer BlackWidow V4 Pro Mechanical Keyboard',
      category: 'GAMING',
      price: 229.99,
      oldPrice: 249.99,
      discount: '8% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&auto=format&fit=crop&q=60',
      description: 'Full-featured mechanical gaming keyboard with immersive per-key RGB and command dial.'
    },

    //  MOBILE (6 Products) 
    {
      id: 13,
      title: 'Apple iPhone 15 Pro Max Titanium',
      category: 'MOBILE',
      price: 1199.99,
      oldPrice: 1299.99,
      discount: '8% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&auto=format&fit=crop&q=60',
      description: 'Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button.'
    },
    {
      id: 14,
      title: 'Samsung Galaxy S24 Ultra 5G AI Phone',
      category: 'MOBILE',
      price: 1299.99,
      oldPrice: 1419.99,
      discount: '8% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&auto=format&fit=crop&q=60',
      description: 'Ultimate productivity with built-in S Pen, Galaxy AI tools, and 200MP camera system.'
    },
    {
      id: 15,
      title: 'Google Pixel 8 Pro Obsidian 128GB',
      category: 'MOBILE',
      price: 999.99,
      oldPrice: 1059.99,
      discount: '6% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60',
      description: 'The all-pro phone engineered by Google with Tensor G3 and advanced computational photography.'
    },
    {
      id: 16,
      title: 'OnePlus 12 5G Emerald Green 256GB',
      category: 'MOBILE',
      price: 799.99,
      oldPrice: 899.99,
      discount: '11% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&auto=format&fit=crop&q=60',
      description: 'Smooth flagship performance powered by Snapdragon 8 Gen 3 with fast charging support.'
    },
    {
      id: 17,
      title: 'Xiaomi 14 Ultra Leica Camera Edition',
      category: 'MOBILE',
      price: 950.00,
      oldPrice: 1050.00,
      discount: '9% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60',
      description: 'Professional optical lens co-engineered with Leica for stunning portrait and street photography.'
    },
    {
      id: 18,
      title: 'Nothing Phone (2) Transparent White',
      category: 'MOBILE',
      price: 649.99,
      oldPrice: 699.99,
      discount: '7% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&auto=format&fit=crop&q=60',
      description: 'Unique Glyph Interface back design with a seamless and clean customized user experience.'
    },

    //  TV (6 Products) 
    {
      id: 19,
      title: '4K Ultra HD Smart OLED TV 55 Inch',
      category: 'TV',
      price: 899.99,
      oldPrice: 999.99,
      discount: '10% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&auto=format&fit=crop&q=60',
      description: 'Immerse yourself in breathtaking 4K picture quality with infinite contrast, rich colors.'
    },
    {
      id: 20,
      title: 'Samsung 55\" Neo QLED 4K Smart TV',
      category: 'TV',
      price: 1199.99,
      oldPrice: 1399.99,
      discount: '14% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format&fit=crop&q=60',
      description: 'Quantum Mini LEDs provide ultra-fine light control for stellar blacks and vibrant detail.'
    },
    {
      id: 21,
      title: 'LG 65\" C3 Series OLED evo 4K Smart TV',
      category: 'TV',
      price: 1599.99,
      oldPrice: 1799.99,
      discount: '11% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&auto=format&fit=crop&q=60',
      description: 'Self-lit pixels and alpha 9 AI Processor Gen6 for ultra-crisp cinematic visuals.'
    },
    {
      id: 22,
      title: 'Sony BRAVIA XR 55\" 4K HDR Google TV',
      category: 'TV',
      price: 1099.99,
      oldPrice: 1249.99,
      discount: '12% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1577979749830-f1d742b96791?w=500&auto=format&fit=crop&q=60',
      description: 'Cognitive Processor XR reproduces content the way humans see and hear in real life.'
    },
    {
      id: 23,
      title: 'TCL 50\" Class 4K UHD Smart Android TV',
      category: 'TV',
      price: 349.99,
      oldPrice: 399.99,
      discount: '12% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=500&auto=format&fit=crop&q=60',
      description: 'Stunning 4K high-definition clarity combined with effortless streaming smart apps.'
    },
    {
      id: 24,
      title: 'Hisense 55\" ULED 4K Quantum Dot Smart TV',
      category: 'TV',
      price: 479.99,
      oldPrice: 529.99,
      discount: '9% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=500&auto=format&fit=crop&q=60',
      description: 'Quantum Dot color technology with smooth motion rate and high peak brightness.'
    },

    //  LAPTOP (6 Products)
    {
      id: 25,
      title: 'MacBook Pro 16 Inch M3 Max (16GB RAM, 512GB SSD)',
      category: 'LAPTOP',
      price: 2766.00,
      oldPrice: 3040.00,
      discount: '9% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60',
      description: 'Apple MacBook Pro Laptop with M3 Max chip, Liquid Retina XDR display, and heavy-duty battery.'
    },
    {
      id: 26,
      title: 'HP Victus Gaming Laptop, 12th Gen Intel Core i5, NVIDIA RTX 3050',
      category: 'LAPTOP',
      price: 866.00,
      oldPrice: 950.00,
      discount: '9% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format&fit=crop&q=60',
      description: '15.6-inch FHD IPS 144Hz display, 16GB DDR4, 512GB SSD storage, Backlit keyboard.'
    },
    {
      id: 27,
      title: 'Dell XPS 15 9530 Creator Laptop (OLED Touch)',
      category: 'LAPTOP',
      price: 1899.99,
      oldPrice: 2099.99,
      discount: '9% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60',
      description: 'Stunning 3.5K OLED touch screen powered by Intel Core i7 processor and NVIDIA graphics.'
    },
    {
      id: 28,
      title: 'ASUS ROG Zephyrus G14 Gaming Laptop',
      category: 'LAPTOP',
      price: 1499.99,
      oldPrice: 1699.99,
      discount: '11% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format&fit=crop&q=60',
      description: 'Ultra-slim gaming performance with AMD Ryzen 9 processor and high-refresh gaming display.'
    },
    {
      id: 29,
      title: 'Lenovo ThinkPad X1 Carbon Gen 11 Business Laptop',
      category: 'LAPTOP',
      price: 1399.99,
      oldPrice: 1549.99,
      discount: '9% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&auto=format&fit=crop&q=60',
      description: 'Legendary keyboard durability, lightweight carbon fiber chassis, and enterprise security.'
    },
    {
      id: 30,
      title: 'Acer Swift Go 14 OLED Thin & Light Laptop',
      category: 'LAPTOP',
      price: 749.99,
      oldPrice: 829.99,
      discount: '9% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'data:image/jpeg;base64,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',
      description: 'Vibrant 2.8K OLED display housed in an aluminum body built for productivity on the go.'
    },

    // APPLIANCES (6 Products) 
    {
      id: 31,
      title: 'Smart Coffee Maker Machine Appliance',
      category: 'APPLIANCES',
      price: 149.99,
      oldPrice: 179.99,
      discount: '15% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTodIlJAVeh3_D3L5AD8ZlKjqBQFoZCYqmrKcE7oUuG4Q&s',
      description: 'Brew your favorite coffee house drinks right at home with precision temperature control.'
    },
    {
      id: 32,
      title: 'Dyson V15 Detect Cordless Vacuum Cleaner',
      category: 'APPLIANCES',
      price: 699.99,
      oldPrice: 749.99,
      discount: '6% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500&auto=format&fit=crop&q=60',
      description: 'Intelligent cordless vacuum with laser illumination that reveals microscopic dust.'
    },
    {
      id: 33,
      title: 'Philips Airfryer XXL with Fat Removal Tech',
      category: 'APPLIANCES',
      price: 249.99,
      oldPrice: 299.99,
      discount: '16% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=500&auto=format&fit=crop&q=60',
      description: 'Fry with little to no added oil while extracting excess fat from your meals.'
    },
    {
      id: 34,
      title: 'Nespresso Vertuo Next Coffee and Espresso Maker',
      category: 'APPLIANCES',
      price: 179.99,
      oldPrice: 209.99,
      discount: '14% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTegB2Rm4dQQH0qf8GqbDyA-M0N83VYHDyTojAhMLvx5Q&s=10',
      description: 'Versatile single-serve coffee machine capable of brewing multiple cup sizes.'
    },
    {
      id: 35,
      title: 'Panasonic Inverter Microwave Oven with Sensor',
      category: 'APPLIANCES',
      price: 189.99,
      oldPrice: 219.99,
      discount: '13% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=500&auto=format&fit=crop&q=60',
      description: 'Patented inverter technology for seamless cooking, defrosting, and even heating.'
    },
    {
      id: 36,
      title: 'LG Smart Inverter Wi-Fi Enabled Refrigerator',
      category: 'APPLIANCES',
      price: 1299.99,
      oldPrice: 1449.99,
      discount: '10% off',
      delivery: 'FREE delivery Fri, 18 Apr',
      fastDelivery: 'Or fastest delivery Tomorrow, 17 Apr',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxdkd8v5PJQBJVvqSo_IVSlFnNOq0DLpJq5ZdUeUYXJw&s=10',
      description: 'Spacious smart fridge with cooling features to keep food farm-fresh longer.'
    }
  ]

  // Filter products based on category query parameter
  const filteredProducts = selectedCategory 
    ? productsList.filter(p => p.category.toUpperCase() === selectedCategory.toUpperCase())
    : productsList

  const addToCart = (product, e) => {
    e.preventDefault()
    let existingCart = JSON.parse(localStorage.getItem('zaptro_cart')) || []
    const itemIndex = existingCart.findIndex(item => item.id === product.id)

    if (itemIndex > -1) {
      existingCart[itemIndex].quantity += 1
    } else {
      existingCart.push({ ...product, quantity: 1 })
    }

    localStorage.setItem('zaptro_cart', JSON.stringify(existingCart))
    window.dispatchEvent(new Event('cartUpdated'))

    setAddedId(product.id)
    setTimeout(() => setAddedId(null), 1500)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='bg-gray-100 min-h-screen flex flex-col justify-between text-gray-800'>
      <div className='max-w-5xl mx-auto px-6 py-8 w-full flex-grow'>
        
        {/* Back Button & Header */}
        <div className='flex items-center justify-between mb-8'>
          {selectedCategory ? (
            <Link to="/products" className='inline-flex items-center gap-1.5 bg-gray-900 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow hover:bg-gray-800 transition'>
              <ArrowLeft size={16} /> Back
            </Link>
          ) : (
            <div></div>
          )}
          <h1 className='text-2xl md:text-3xl font-extrabold text-gray-900 uppercase'>
            {selectedCategory ? `${selectedCategory} Products` : 'All Products'}
          </h1>
        </div>

        {/* Products List (Screenshots Layout Style) */}
        <div className='space-y-4'>
          {filteredProducts.length === 0 ? (
            <div className='bg-white p-12 text-center rounded-2xl shadow-sm'>
              <p className='text-gray-500 text-sm'>No products found in this category.</p>
              <Link to="/products" className='inline-block mt-4 bg-red-600 text-white px-6 py-2 rounded-lg text-xs font-medium'>
                View All Products
              </Link>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className='bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition'
              >
                {/* Left: Product Image Link */}
                <Link to={`/products/${product.id}`} className='w-48 h-40 bg-gray-50 rounded-xl p-3 flex-shrink-0 flex items-center justify-center border border-gray-100 relative group'>
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className='max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300'
                  />
                </Link>

                {/* Middle: Details & Specs */}
                <div className='flex-grow space-y-2'>
                  <Link to={`/products/${product.id}`}>
                    <h3 className='font-bold text-gray-900 text-sm md:text-base hover:text-red-600 transition line-clamp-2'>
                      {product.title}
                    </h3>
                  </Link>
                  <p className='text-xs text-gray-500 line-clamp-2'>{product.description}</p>
                  
                  <div className='flex items-center gap-3 pt-1'>
                    <span className='text-xl font-extrabold text-gray-900'>${product.price.toFixed(2)}</span>
                    {product.oldPrice && (
                      <span className='text-gray-400 text-xs line-through'>${product.oldPrice.toFixed(2)}</span>
                    )}
                    {product.discount && (
                      <span className='text-red-600 text-xs font-bold'>({product.discount})</span>
                    )}
                  </div>

                  <div className='text-[11px] text-gray-600 space-y-0.5 pt-1'>
                    <p className='text-green-600 font-medium'>{product.delivery}</p>
                    <p className='text-gray-500'>{product.fastDelivery}</p>
                  </div>
                </div>

                {/* Right: Add to Cart Button */}
                <div className='w-full md:w-44 flex-shrink-0 flex flex-col justify-center'>
                  <button 
                    onClick={(e) => addToCart(product, e)}
                    className={`w-full py-2.5 rounded-lg text-xs font-medium transition shadow-md flex items-center justify-center gap-2 active:scale-95 cursor-pointer ${
                      addedId === product.id 
                        ? 'bg-green-600 text-white' 
                        : 'bg-red-600 hover:bg-red-700 text-white'
                    }`}
                  >
                    <ShoppingCart size={15} /> 
                    {addedId === product.id ? 'Added ✓' : 'Add to cart'}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Footer */}
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

export default Products