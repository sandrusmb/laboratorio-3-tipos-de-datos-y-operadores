import "./style.css";

const diners: number = 7;
const totalTicket: number = 120;
const drinkPrice: number = 18;

const totalToPayForGuests: number = (totalTicket - drinkPrice) / diners;
const totalToPayForBirthdayPerson: number = totalToPayForGuests + drinkPrice;

console.log("Total to pay for guests", totalToPayForGuests);
console.log("Total to pay for birthday person", totalToPayForBirthdayPerson);
