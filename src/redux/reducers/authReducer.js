import { SIGNIN_SUCCESS, SIGNOUT_SUCCESS } from '@/constants/constants';

const initState = null;
// {
// id: 'test-123',
// role: 'ADMIN',
// provider: 'password'
// };

export default (state = initState, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return {
        id: action.payload.id,
        role: action.payload.role,
        email: action.payload.email,
        mobile: action.payload.mobile,
        isAdmin: action.payload.isAdmin,
        token: action.payload.token,
      };
    case SIGNOUT_SUCCESS:
      return null;
    default:
      return state;
  }
};
