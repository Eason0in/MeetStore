import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/layout/NavBar'
import ProductList from './components/product/ProductList'
import ProductDetail from './components/product/ProductDetail'
import Complaint from './components/customer/Complaint'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProductContextProvider from './contexts/ProductContext'
import CartContextProvider from './contexts/CartContext'

library.add(fab, fas)

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CartContextProvider>
          <NavBar />
          <Switch>
            <ProductContextProvider>
              <Route exact path="/" component={ProductList} />
              <Route path="/productdetail/:id" component={ProductDetail} />
              <Route path="/complaint" component={Complaint} />
            </ProductContextProvider>
          </Switch>
        </CartContextProvider>
      </div>
    </BrowserRouter>
  )
}

export default App
