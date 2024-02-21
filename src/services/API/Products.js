import axios from "axios"

const mainRoute = "http://localhost:3030/api/v1/"
const productRoute = mainRoute + "products/"

//user api call
const getProducts = async (payload) => {
  if (payload?.ref){
    return await axios.get(
      productRoute,
      {ref: payload.ref}
    ).then((data) => {
      return data.data
    }).catch((e) => {
      return {
        status: false,
        msg: e
      }
    })
  }
  return await axios.get(
    productRoute,
  ).then((data) => {
    return data.data
  }).catch((e) => {
    return {
      status: false,
      msg: e
    }
  })
}

const getSingleProduct = async (id) => {
  const singleProductRoute = productRoute + id 
  return await axios.get(singleProductRoute)
  .then((data) => {
    return data.data
  })
  .catch((e) => {
    return {
      status: false,
      msg: e
    }
  })
}

const getProductCount = async (mobile) => {
  const productCountRoute = productRoute + 'get/count'
  return await axios.get(
    productCountRoute,
  ).then((data) => {
    return data.data
  }).catch((e) => {
    return{
      status: false,
      msg: e
    }
  })
}

const getOTP = async (mobile) => {
  const sendOtpRoute = userRoute + "getOTP"
  return await axios.post(
    sendOtpRoute,
    {
      mobile
    }
  ).then((data) => {
    return data.data
  }).catch((e) => {
    return {
      status: false,
      msg: e
    }
  })
}

export {getProducts, getProductCount, getSingleProduct}
