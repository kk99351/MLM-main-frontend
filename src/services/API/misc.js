import axios from "axios"

const mainRoute = "http://localhost:3030/api/v1/"
const mlmRoute = mainRoute + "mlm/"
const orderRoute = mainRoute + "orders/"

const walletDeduct = async (payload) => {
  const walletDeductRoute = mlmRoute + 'wallet/deduct/' + payload.id
  return await axios.put(walletDeductRoute,{
    amount: payload.amount
  }).then((data) => {
    return data.data
  }).catch((e) => {
    console.log(e)
    return {
      status: false,
      msg: e
    }
  })
}

const walletBalance = async (payload) => {
  const walletBalRoute = mlmRoute + 'wallet/' + payload.id
  return await axios.get(walletBalRoute).then((data) => {
    return data.data
  }).catch((e) => {
    return {
      status: false,
      msg: e
    }
  })
}

const orderRegister = async (payload) => {
  const orderRegisterRoute = orderRoute
  return await axios.post(orderRegisterRoute,{
    ...payload
  }).then((data) => {
    return data.data
  }).catch((e) => {
    console.log(e)
    return {
      status: false,
      msg: e
    }
  })
}

const getOrders = async (payload) => {
  const ordersRoute = orderRoute + 'user/' + payload.id
  return await axios.get(ordersRoute)
  .then((data) => {
    return data.data
  }).catch((e) => {
    console.log(e)
    return {
      status: false,
      msg: e
    }
  })
}



export {walletDeduct,walletBalance, orderRegister, getOrders}