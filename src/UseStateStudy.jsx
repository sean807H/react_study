import { useState } from 'react'

// Hook => 함수인데, 이름이 "use"로 시작하는 특수한 역할을 하는 함수
// useState, useEffect, useRef 같은 훅이 존재
// (물론, 그 외에도 다양한 훅이 있음)

function UseStateStudy(){
    // useState(초기값)
    // 초기에는 [0, 세터함수] <= 이렇게 생긴 배열 반환

    // 배열 비구조화 할당을 함
    const [count, setCount] = useState(0)
    // const arr = useState(0)
    // arr[0] => 0
    // arr[1] => setCount
    // count = 2

    return <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(c=>c+1)}>+</button>
    </div>

}

export default UseStateStudy