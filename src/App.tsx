import { useEffect, useState } from "react";

async function queryData() {
  const data = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(666);
    }, 2000);
  })
  return data;
}

function App() {
  const [num, setNum] = useState(0);

  queryData().then(data => {
    setNum(data);
  })
  useEffect(() => {
    console.log(num);
    // if (num > 0) {
    // } else { 
    //   console.log(2222);
    // }
  }, [num]);

  // prevNum 是 上一次的 num
  return (
    <div onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</div>
  );
}

export default App;

