import { useEffect, useState } from "react";
import "./App.css";
import img0 from "./assets/img0.png";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";

function App() {
  const [curActive, setCurActive] = useState<number>(0);

  useEffect(() => {
    console.log(curActive);
  }, [curActive]);

  const Images = [
    { id: 0, img: img0 },
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
  ];

  const dots = Images.map(({ id }) => (
    <div
      key={id}
      className={`w-4 h-4 rounded-full border-2 border-white cursor-pointer ${
        id === curActive ? "bg-white" : ""
      }`}
      onClick={() => setCurActive(id)}
    ></div>
  ));

  const increaseActive = () => {
    if (curActive + 1 > Images.length - 1) return setCurActive(0);
    setCurActive((prev) => prev + 1);
  };
  const decreaseActive = () => {
    if (curActive - 1 < 0) return setCurActive(Images.length - 1);
    setCurActive((prev) => prev - 1);
  };

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-neutral-900'>
      <div
        className='w-1/2 h-1/2 rounded-lg relative flex justify-between p-4 bg-cover bg-no-repeat bg-center'
        style={{ backgroundImage: `url(${Images[curActive].img})` }}
      >
        <div className='flex items-center'>
          <div
            className='row-span-2 flex items-center justify-center text-4xl text-white select-none cursor-pointer'
            onClick={decreaseActive}
          >
            &#8592;
          </div>
        </div>
        <div className='flex items-end'>
          <div className='flex items-center justify-center gap-3'>{dots}</div>
        </div>
        <div className='flex items-center'>
          <div
            className='row-span-2 flex items-center justify-center text-4xl text-white select-none cursor-pointer'
            onClick={increaseActive}
          >
            &#8594;
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
