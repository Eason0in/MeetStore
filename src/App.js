import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/layout/NavBar'
import ProductList from './components/product/ProductList'
import ProductDetail from './components/product/ProductDetail'
import Complaint from './components/customer/Complaint'
import Pay from './components/customer/Pay'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

library.add(fab, fas)

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/productdetail/:id" component={ProductDetail} />
          <Route path="/complaint" component={Complaint} />
          <Route path="/pay" component={Pay} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
