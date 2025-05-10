import { useEffect, useState } from "react";

function UseEffectHook() {
  const [number, setNumber] = useState(0);

  //useEffect adalah efek samping ketika kita melakukan rerender, dalam hal ini adalah mengganti nilai state karena setiap nilai state berubah akan terjadi rerender
  useEffect(() => {
    setTimeout(() => {
        console.log("executed: " + number + " times")
    }, 500)
    console.log(`count number : ${number}`); //function yang akan dieksekusi ketika efek sampingnya terpicu
  }, [number]); //dependency => jika tidak diberi dependency maka akan dieksekusi setiap kali rerender terjadi, jika hanya array kosong maka akan dieksekusi saat render pertama kali, jika diisi value maka akan dieksekusi sesuai dengan perubahan pada nilai tersebut

  return (
    <>
      <div>
        <p className="text-4xl font-bold">{number}</p>
        <button
        className="my-10"
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          Add Number
        </button>
      </div>
    </>
  );
}

export default UseEffectHook;
