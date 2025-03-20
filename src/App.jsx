import { useState } from 'react'

// Hook => 함수인데, 이름이 "use"로 시작하는 특수한 역할을 하는 함수
// useState, useEffect, useRef 같은 훅이 존재
// (물론, 그 외에도 다양한 훅이 있음)

function App(){
    return <div></div>
}

// 함수 컴포넌트 정의
// (이름이 반드시 대문자로 시작)
function App() {
  const a = 100;
  let b = "Hello"
  const c = <h1>Title: {b}</h1>
  const arr = ["a","b","c"]
  const itemList = <ul>
    {arr.map(item => <li>{item}</li>)}
    {/* [<li>a</li>, <li>b</li>, <li>c</li>]*/}
  </ul>

// {a} {b} {1+2} {"js".toUpperCase()}
// <div style={{backgroundColor:"red", color:"blue"}}>
// return 에서는 반복문 못쓰기 때문에 위에서 코딩하는게 좋음
  return <div>{itemList}</div>
}

export default App
// export const hello = "Hello"