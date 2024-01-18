import React, { useState } from "react";
import UserprofileCard from "./components/UserProfileCard";
import Avatar from "./components/Avatar";

//create our root component ==> App coomponent

function App() {
  //state...

  const [counter, setCounter] = useState(0);

  const handleIncrement = (event) => {
    event.preventDefault();
    setCounter((prev) => prev + 1);
    console.log(counter);
  };
  //handle decrement...

  const handleDrecrement = (event) => {
    event.preventDefault();
    setCounter((prev) => prev - 1);
    console.log(counter);
  };
  return (
    <section className="main-page">
      <UserprofileCard />
      <div className="main-container">
        <h2> Testing Events on React</h2>
        <div className="counter">{counter}</div>
        <button onClick={handleIncrement}> Increment </button>
        <button onClick={handleDrecrement}> Decrement </button>
      </div>
      <div>
        <form onSubmit={(event=>{
          event.preventDefault;
          const ele = event.target.elements;
          console.log (ele)
          })}>
          <input  type="text" placeholder="Enter your Name" name="name"/>
          <input type="email" placeholder="Enter your Email" name="email"/>
          <input type="tel" placeholder="Enter your Phone" name="tel"/>
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
}

export default App;
