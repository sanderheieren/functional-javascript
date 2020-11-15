const messages = require("./messages");

const getShortMessages = (messagesObj) =>
  messagesObj
    .filter((msg) => msg.message.length < 50)
    .map((msg) => msg.message);
const obj = messages.filter((msg) => msg.message.length < 50);
console.log(obj);
const msg = obj.map((msg) => {
  console.log(msg, msg.message);
  return msg.message;
});
console.log(msg);

const arr = getShortMessages(messages);
console.log(arr);
