import { getMessages } from "../static-data";
import { SEND_MESSAGE } from "../actions/constants/action-types";
import _ from 'lodash';

export default function messages(state = getMessages(10), action) {
  switch (action.type) {
    case SEND_MESSAGE:
      const { message, userID } = action.payload;
      const allUserMsgs = state[userID];
      const number = +_.keys(allUserMsgs).pop() + 1;

      return {
        ...state,
        [userID]: {
          ...allUserMsgs,
          [number]: {
            number,
            text: message,
            is_user_msg: true
          }
        }
      };

    default:
      return state;
  }
}