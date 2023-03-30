
import React, { useState } from 'react'

function App() {
  window.addEventListener("message",(event)=>{
    console.log("%c Line:6 🍿 event", "color:#b03734", event);
    // 确保消息来预期发送者
    if(event.origin==="http://localhost:5173"){
      // 对数据进行处理
      postMessage(event.data)
    }
  })
  const [ count, setCounts ] = useState('')
  const onChange = (e: any) => {
    setCounts(e.target.value)
  }
  return (
    <>
      <h2>webpack511111+react+ts</h2>
      <p>受控组件</p>
      <input type="text" value={count} onChange={onChange} />
      <br />
      <p>非受控组件</p>
      <input type="text" />
    </>
  )
}
export default App
