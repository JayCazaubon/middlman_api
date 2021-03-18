import Head from "next/head";
//import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" />
      </p>
      <p>
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" />
      </p>
      <p>
        <label for="phone">Phone Number:</label>
        <input type="text" id="phone" name="phone" />
      </p>
      <p>
        <label for="addr">Address:</label>
        <input type="text" id="addr" name="address"></input>
      </p>
      <p>
        <label for="details">Dropoff Instructions:</label>
        <textarea id="details" name="details"></textarea>
      </p>
      <p>
        <label for="addr">Address:</label>
        <input type="text" id="addr" name="address"></input>
      </p>
      <p>
        <label for="rating">Number of Stars:</label>
        <input type="text" id="rating" name="rating"></input>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
}
