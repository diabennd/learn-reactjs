import { useState } from "react";

const EventHandling = () => {
  const [userInput, setUserInput] = useState("");
  const [color, setColor] = useState("lightpink");

  return (
    <div className="m-3">
      <div
        className={`w-[200px] aspect-square`}
        style={{
          backgroundColor: color,
        }}
      ></div>
      <form action="">
        <input
          type="text"
          className="border-1 rounded-[5px] mt-3 mb-2"
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        <button
          //sebuah event click yang akan mengubah warna background menjadi abu2 dan jika diklik lagi akan kembali menjadi warna asalnya
          onClick={(e) => {
            e.preventDefault();
            console.log(userInput);
            userInput === "" ? alert("invalid color value") : setColor(userInput);
            setUserInput("")
          }}
        >
          click here
        </button>
      </form>
    </div>
  );
};

export default EventHandling;
