 import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Components/counterSlice.js";
import './index.css'
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">

      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center w-80">

        <h1 className="text-5xl font-bold text-gray-800 mb-8">
          {count}
        </h1>

        <div className="flex justify-center gap-4">

          <button
            onClick={() => dispatch(increment())}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg text-lg font-semibold transition duration-300"
          >
            + Increment
          </button>

          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg text-lg font-semibold transition duration-300"
          >
            - Decrement
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;