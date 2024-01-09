import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Overview from './components/Overview'
import Transactions from './components/Transactions'
function App() {
  return (
    <div className='inline-flex'>
      <Navbar/>
      <div className='flex flex-col bg-[#FAFAFA]'>
      <Header/>
      <Overview/>
      <Transactions/>
      </div>
    </div>

  )
}

export default App
