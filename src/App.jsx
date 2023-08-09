import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './store'

function App() {

  const count = useSelector((state) => {
    return state.counter.value;
  });

  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-center bg-gray-600 h-screen">
        <div className="pt-5">
          <p className="text-xl md:text-4xl text-center text-white">REACT INCREMENT DECREMENT</p>
          <div className="w-full flex justify-center items-center h-4/6">
            <div className="flex justify-between w-screen md:w-5/6">
              <button className="px-10 py-3 text-center text-white border-2 border-blue-600 bg-blue-600 rounded-3xl cursor-pointer hover:border-blue-700 hover:bg-blue-700" onClick={() => dispatch(increment())}><i className="bi bi-plus-lg text-3xl"></i></button>
              <p className="text-6xl text-white">{count}</p>
              <button className="px-10 py-3 text-center text-white border-2 border-blue-600 bg-blue-600 rounded-3xl cursor-pointer hover:border-blue-700 hover:bg-blue-700" onClick={() => dispatch(decrement())}><i className="bi bi-dash-lg text-3xl"></i></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
