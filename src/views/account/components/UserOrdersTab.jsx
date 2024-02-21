import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '@/redux/actions/miscActions';
import { OrderItem } from '@/components/orders';

// Just add this feature if you want :P

const UserOrdersTab = () => {
  const id = useSelector((state) => state.auth.id);
  const orders = useSelector((state) => state.app.orders)
  console.log(orders)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOrders({id}))
  },[])
  return (
    <div>
      <div className="basket-header">
        <h3 className="basket-header-title">
          Past Orders &nbsp;
          <span>
            (
            {` ${orders.length} ${orders.length > 1 ? 'items' : 'item'}`}
            )
          </span>
        </h3>
      </div>
      {orders.length <= 0 && (
        <div className="basket-empty">
          <h5 className="basket-empty-msg">No Orders</h5>
        </div>
      )}
      {orders.map((order,index) => (
        <div className="basket-item basket-item-flex" key={index}>
          <div style={{display: 'flex',justifyContent:'space-between'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <span className="order-address">{order.user.name}</span>
              <span className="order-address">Mobile: {order.phone}</span>
              <span className="order-address">Address: {order.shippingAddress}</span>
              <span className="order-address">City: {order.city}</span>
              <span className="order-address">State: {order.state}</span>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center'}}>
              <span className='order-status'>Status: {order.status}</span>
              <span className='order-price'>Paid: ${order.totalPrice}</span>
            </div>
          </div>
          <div>
          {order.orderItems.map((product, i) => {
              let productItem = product.product
              return <OrderItem
                // eslint-disable-next-line react/no-array-index-key
                key={productItem.id}
                product={{...productItem,selectedSize: product.size,
                  selectedColor: product.color, quantity: product.quantity}}
              />
            })}
          </div>
        </div>
      ))}
    </div>
  )
};

export default UserOrdersTab;
