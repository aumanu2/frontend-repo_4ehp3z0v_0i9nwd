import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b border-orange-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-gradient-to-tr from-orange-500 to-amber-400 grid place-items-center text-white font-black">M1</div>
            <div>
              <h1 className="text-xl font-extrabold tracking-tight">Moribus 1</h1>
              <p className="text-xs text-gray-500 -mt-0.5">Sweet & crispy goodness</p>
            </div>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#menu" className="hover:text-orange-600">Menu</a>
            <a href="#about" className="hover:text-orange-600">About</a>
            <a href="#contact" className="hover:text-orange-600">Contact</a>
          </nav>
          <a href="#order" className="hidden sm:inline-block bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm font-semibold shadow">Order Now</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Welcome to Moribus 1
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Home of Smoribus — our signature s'mores pack — and Morifries, the crispy fries you crave. Simple menu, bold flavor.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#menu" className="bg-gray-900 text-white px-5 py-2.5 rounded-md font-semibold hover:bg-gray-800">Explore Menu</a>
              <a href="#contact" className="px-5 py-2.5 rounded-md font-semibold bg-white/70 hover:bg-white shadow border border-orange-100">Find Us</a>
            </div>
            <div className="mt-8 text-sm text-gray-600">
              Open daily • Freshly made • Wallet friendly
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-orange-200 to-amber-100 border border-orange-200 shadow-inner flex items-center justify-center p-6">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="rounded-xl bg-white shadow p-4 border border-orange-100">
                  <div className="h-24 rounded-lg bg-gradient-to-br from-amber-300 to-orange-200" />
                  <p className="mt-3 font-semibold">Smoribus Pack</p>
                  <p className="text-sm text-gray-600">2 pieces • 10k</p>
                </div>
                <div className="rounded-xl bg-white shadow p-4 border border-orange-100">
                  <div className="h-24 rounded-lg bg-gradient-to-br from-yellow-300 to-amber-200" />
                  <p className="mt-3 font-semibold">Morifries</p>
                  <p className="text-sm text-gray-600">Medium 10k • Large 15k</p>
                </div>
                <div className="col-span-2 rounded-xl bg-white shadow p-4 border border-orange-100">
                  <p className="font-semibold">Simple. Tasty. Affordable.</p>
                  <p className="text-sm text-gray-600">Grab a Smoribus pack and a side of Morifries for the perfect combo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-16 bg-white/60 border-y border-orange-100">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-extrabold">Menu</h3>
          <p className="mt-2 text-gray-600">Straight to the point—two signatures done right.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {/* Smoribus */}
            <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-2xl font-bold">Smoribus</h4>
                  <p className="text-gray-600">Our house s'mores: gooey marshmallow, chocolate, and crisp biscuit.</p>
                </div>
                <span className="shrink-0 text-xl font-extrabold text-orange-600">10k</span>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                <p>1 pack = 2 Smoribus</p>
                <a href="#order" className="bg-orange-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-700">Add</a>
              </div>
            </div>

            {/* Morifries */}
            <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-2xl font-bold">Morifries</h4>
                  <p className="text-gray-600">Golden fries with a satisfying crunch. Choose your size.</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Medium</div>
                  <div className="text-xl font-extrabold text-orange-600 leading-none">10k</div>
                  <div className="text-sm text-gray-600 mt-2">Large</div>
                  <div className="text-xl font-extrabold text-orange-600 leading-none">15k</div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href="#order" className="bg-orange-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-700">Medium</a>
                <a href="#order" className="bg-gray-900 text-white px-4 py-2 rounded-md font-semibold hover:bg-black">Large</a>
              </div>
            </div>
          </div>

          {/* Combo highlight */}
          <div className="mt-8 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 p-6 text-white flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-lg font-semibold">Perfect Pair</p>
              <p className="opacity-90">Smoribus + Morifries = instant happiness.</p>
            </div>
            <a href="#order" className="bg-white/90 text-gray-900 px-5 py-2.5 rounded-md font-bold hover:bg-white">Order Combo</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-extrabold">About Moribus 1</h3>
            <p className="mt-3 text-gray-700">
              We keep it simple: a sweet treat and a savory classic, both done with care. Whether you're craving the toasted bliss of Smoribus or the crunch of Morifries, we've got you covered.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Freshly prepared</li>
              <li>• Friendly pricing</li>
              <li>• Quick service</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white border border-orange-100 shadow p-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-black text-orange-600">2</div>
                <div className="text-sm text-gray-600">Signature items</div>
              </div>
              <div>
                <div className="text-3xl font-black text-orange-600">10k</div>
                <div className="text-sm text-gray-600">Entry price</div>
              </div>
              <div>
                <div className="text-3xl font-black text-orange-600">⚡️</div>
                <div className="text-sm text-gray-600">Fast & tasty</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Order */}
      <section id="contact" className="py-16 bg-white/60 border-t border-orange-100">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-extrabold">Contact & Orders</h3>
          <p className="mt-2 text-gray-700">Ready to treat yourself? Reach out to place an order or drop by!</p>

          <div id="order" className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
              <p className="font-semibold">WhatsApp</p>
              <p className="text-gray-600">+62 812-3456-7890</p>
            </div>
            <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
              <p className="font-semibold">Instagram</p>
              <p className="text-gray-600">@moribus.one</p>
            </div>
            <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
              <p className="font-semibold">Location</p>
              <p className="text-gray-600">Your city • Open daily</p>
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-600">
            Prices: Smoribus pack (2 pcs) 10k • Morifries Medium 10k • Morifries Large 15k
          </div>
        </div>
      </section>

      <footer className="py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Moribus 1 — Sweet & crispy goodness
        </div>
      </footer>
    </div>
  )
}

export default App
