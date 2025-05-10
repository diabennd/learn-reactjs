import React from "react";
import { useState } from "react";


//useState hook digunakan untuk menyimpan suatu keadaan dan mengubah keadaan tersebut jika terjadi perubahan pada keadaannya

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p className="text-4xl font-bold">{count}</p>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default UseStateHook;
