import React, { useContext } from 'react'
import { Dropdown, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CartContext } from '../../contexts/CartContext'
import CartItem from './CartItem'
import CartSum from './CartSum'

const Cart = () => {
  const { cartItems } = useContext(CartContext)
  return (
    <Dropdown alignRight>
      <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
        <FontAwesomeIcon icon="shopping-cart" size="lg" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="cart-dropdown-menu">
        <ListGroup variant="flush" horizontal="lg">
          <ListGroup.Item>
            {cartItems.length ? cartItems.map(item => <CartItem key={item.id} item={item} />) : ''}
            <CartSum isCart={true} />
          </ListGroup.Item>
        </ListGroup>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Cart
