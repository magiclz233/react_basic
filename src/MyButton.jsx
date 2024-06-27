import { useState } from "react";

function MyButton({count,  onClick}) {

    return (<button onClick={onClick}>点击了 {count} 次</button>);
}

export default function MyApp() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }
    return (
        <div>
          <h1>Welcome to my app</h1>
          <MyButton count={count} onClick={handleClick} />
          <MyButton count={count} onClick={handleClick} />
        </div>
      );
}