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