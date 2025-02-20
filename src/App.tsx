import { ChangeEvent } from "react"

// 非受控
function App() {

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
  }

  // 还可以通过ref获取value，也是非受控
  return <input defaultValue={'guang'} onChange={onChange}/>
}

// 受控
// function App() {

//   const [value, setValue] = useState('guang');

//   function onChange(event: ChangeEvent<HTMLInputElement>) {
//     console.log(event.target.value);
//     // setValue(event.target.value);
//   }

//   return <input value={value} onChange={onChange}/>
// }
export default App
