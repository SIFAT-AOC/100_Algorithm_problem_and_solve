const regex = /^\w+@\w+\.\w+/;
import * as totalSum from './problem2.js'
const emails = [
  "info@example.com",
  "john.doe@example.org",
  "jane.smith@example.net",
  "example.com",
  "john.doe@example",
  "jane.smith@example"
];

emails.forEach(email => {
  if (regex.test(email)) {
    console.log(`${email} is a valid email address.`);
  } else {
    console.log(`${email} is not a valid email address.`);
  }
});
