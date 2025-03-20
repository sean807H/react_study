import { createRoot } from 'react-dom/client' 
// import App from './App.jsx'
import PropStudy from './PropStudy.jsx'
import UserInfo from './UserInfo.jsx'
import UseStateStudy from './UseStateStudy.jsx'

const root = createRoot(document.getElementById('root'))
// root.render(<App />)
// root.render(<PropStudy hello="world" mynum = {100} obj={[1, 2, 3]}/>)
// root.render(<UserInfo name="John" age={20}/>)
root.render(<UseStateStudy />)
