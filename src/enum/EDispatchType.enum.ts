export enum EDispatchType {
  // Emit
  SEND_MESSAGE = "send_message",

  // Was suppose to be upwards
  GET_CONVERSATIONS = "get_messages",
  GET_MESSAGES = "get_conversation",
  TYPING = "typing",
  STOP_TYPING = "stop_typing",

  // On
  NEW_MESSAGE = "new_message",
  IS_TYPING = "is_typing",
  IS_STOP_TYPING = "is_stop_typing",
}
