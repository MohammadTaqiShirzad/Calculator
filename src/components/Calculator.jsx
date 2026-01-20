import { useState } from "react";
import { evaluate } from "mathjs";

const Calculator = () => {
  const [num, setNum] = useState("");
  const [hasDote, setHasDote] = useState(false);
  let operators = ["+", "-", "*", "/"];
  const isOperator = (char) => operators.includes(char);
  const clickHandler = (e) => {
    const value = e.target.value;
    const lastChar = num.slice(-1);
    if (isOperator(value) && num === "") {
      if (value !== "-") return;
    }
    if (isOperator(value) && isOperator(lastChar)) {
      setNum((prev) => prev.slice(0, -1) + value);
      return;
    }
    if (value === ".") {
      if (hasDote) return;
      else setHasDote(true);
    }

    if (isOperator(value)) {
      setHasDote(false);
    }
    setNum((prev) => prev + value);
  };
  const clear = () => {
    setNum("");
    setHasDote(false);
  };
  const deleteValue = () => {
    const lastChar = num.slice(-1);
    const newValue = num.slice(0, -1);

    if (lastChar === ".") setHasDote(false);

    setNum(newValue);
  };

  const equal = () => {
    const result = evaluate(num);
    const resultStr = String(result);

    setNum(resultStr);
    setHasDote(resultStr.includes("."));
  };
  return (
    <div className="w-screen h-screen bg-[url('bg.jpg')] bg-cover flex justify-center items-center ">
      <div className=" w-9/10 sm:w-2/3 md:w-1/2 lg:w-1/3 px-8 py-10 mx-auto rounded-xl shadow shadow-gray-400 flex flex-col gap-8 bg-gray-900/70 text-gray-300 ">
        <h1 className="text-4xl font-semibold text-end shadow shadow-gray-500 rounded-2xl py-6 px-4 overflow-hidden">
          {num ? num : 0}
        </h1>
        <div className="grid grid-cols-4 gap-4">
          <button
            onClick={clear}
            value={"clear"}
            className="col-span-2 p-6 cursor-pointer rounded-xl shadow shadow-gray-500 hover:shadow-gray-300 text-amber-500 text-xl font-semibold"
          >
            AC
          </button>
          <button
            onClick={clickHandler}
            value={"/"}
            className="p-6 cursor-pointer rounded-xl shadow shadow-gray-500 hover:shadow-gray-300 text-amber-500 text-2xl font-bold"
          >
            ÷
          </button>
          <button
            onClick={clickHandler}
            value={"*"}
            className="p-6 cursor-pointer rounded-xl shadow shadow-gray-500 hover:shadow-gray-300 text-amber-500 text-2xl font-bold"
          >
            ×
          </button>
          <button
            onClick={clickHandler}
            value={7}
            className="font-bold p-6 cursor-pointer rounded-xl shadow shadow-gray-500 hover:shadow-gray-300 text-xl"
          >
            7
          </button>
          <button
            onClick={clickHandler}
            value={8}
            className="font-bold text-xl p-6 cursor-pointer rounded-xl shadow shadow-gray-500 hover:shadow-gray-300"
          >
            8
          </button>
          <button
            onClick={clickHandler}
            value={9}
            className="font-bold text-xl p-6 cursor-pointer rounded-xl shadow shadow-gray-500 hover:shadow-gray-300"
          >
            9
          </button>
          <button
            onClick={clickHandler}
            value={"-"}
            className="p-6 cursor-pointer rounded-xl shadow shadow-gray-500 hover:shadow-gray-300 text-amber-500 text-2xl font-bold"
          >
            -
          </button>

          <button
            onClick={clickHandler}
            value={4}
            className="font-bold text-xl p-6 cursor-pointer rounded-xl shadow shadow-gray-500 hover:shadow-gray-300"
          >
            4
          </button>
          <button
            onClick={clickHandler}
            value={5}
            className="font-bold text-xl p-6 cursor-pointer rounded-xl shadow shadow-gray-500 hover:shadow-gray-300"
          >
            5
          </button>
          <button
            onClick={clickHandler}
            value={6}
            className="font-bold text-xl p-6 cursor-pointer rounded-xl shadow shadow-gray-500 hover:shadow-gray-300"
          >
            6
          </button>

          <button
            onClick={clickHandler}
            value={"+"}
            className=" p-6 cursor-pointer rounded-xl shadow shadow-gray-500 hover:shadow-gray-300 text-amber-500 text-2xl font-bold"
          >
            +
          </button>
          <button
            onClick={clickHandler}
            value={1}
            className="font-bold text-xl p-6 cursor-pointer rounded-xl shadow shadow-gray-500 hover:shadow-gray-300"
          >
            1
          </button>
          <button
            onClick={clickHandler}
            value={2}
            className="font-bold text-xl p-6 cursor-pointer rounded-xl shadow shadow-gray-500 hover:shadow-gray-300"
          >
            2
          </button>
          <button
            onClick={clickHandler}
            value={3}
            className="font-bold text-xl p-6 cursor-pointer rounded-xl shadow shadow-gray-500 hover:shadow-gray-300"
          >
            3
          </button>
          <button
            onClick={equal}
            value={"="}
            className="row-span-2 p-6 cursor-pointer rounded-xl shadow shadow-gray-500 hover:shadow-gray-300 text-amber-500 text-2xl font-bold"
          >
            =
          </button>
          <button
            onClick={deleteValue}
            value={"delete"}
            className="font-semibold p-6 cursor-pointer rounded-xl shadow shadow-gray-500 hover:shadow-gray-300 text-amber-500 text-xl"
          >
            ⌫
          </button>

          <button
            onClick={clickHandler}
            value={0}
            className="font-bold text-xl p-6 cursor-pointer rounded-xl shadow shadow-gray-500 hover:shadow-gray-300"
          >
            0
          </button>
          <button
            onClick={clickHandler}
            value={"."}
            className="font-bold text-xl p-6 cursor-pointer rounded-xl shadow shadow-gray-500 hover:shadow-gray-300 "
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
