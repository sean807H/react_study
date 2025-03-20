import { createRoot } from 'react-dom/client' 
// import App from './App.jsx'
import PropStudy from './PropStudy.jsx'

const root = createRoot(document.getElementById('root'))
// root.render(<App />)
root.render(<PropStudy hello="world" mynum = {100} obj={[1, 2, 3]}/>)
