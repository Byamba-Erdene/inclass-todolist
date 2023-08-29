import { useState } from "react";

export default function Random() {
  //   let name = "Bat";
  const [name, setName] = useState("Bat");
  const [number, setNumber] = useState(0);
  const [isTrue, setIsTrue] = useState(false);

  function changeName() {
    // name = "Enerel";
    setName("Enerel");
    setNumber(number + 1);
    setIsTrue(!isTrue);
    console.log(isTrue);
  }
  return (
    <div>
      <h1>Hello world</h1>
      <p>{name}</p>
      <p>{number}</p>
      {/* <p>{isTrue}</p> */}
      <button onClick={changeName}>Change name</button>
    </div>
  );
}
