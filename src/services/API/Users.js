import axios from "axios"

const mainRoute = "http://localhost:3030/api/v1/"
const userRoute = mainRoute + "users/"
const productRoute = mainRoute + "products/"

//user api call
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

const getLogin = async (mobile, otp, orderId) => {
  const loginRoute = userRoute + "verifyOTP"
  return await axios.post(
    loginRoute,{
      mobile,
      otp,
      orderId
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

const resendOTP = async (orderId) => {
  const resendOtpRoute = userRoute + "resendOTP"
  return await axios.post(
    resendOtpRoute,
    {
      orderId
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

const getProfile = async (id) => {
  const profileRoute = userRoute + id
  return await axios.get(profileRoute)
  .then((data) => {
    return data.data
  }).catch((e) => {
    return {
      status: false,
      msg: e
    }
  })
}

const getOrders = async (id) => {
  const orderRoute = userRoute + id
  return await axios.get(orderRoute)
  .then((data) => {
    return data.data
  }).catch((e) => {
    return {
      status: false,
      msg: e
    }
  })
}

export {getLogin,getOTP,resendOTP,getProfile,getOrders}
