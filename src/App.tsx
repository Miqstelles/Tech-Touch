import { useState } from 'react'
import './styles/main.css';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-screen bg-phone bg-cover bg-no-repeat">
        <div className="w-full h-[100px] flex items-center justify-center">
          <Navbar
            items={['HOME', 'CONTACT', 'ABOUT']}
          />
        </div>
      </div>
    </div>

  )
}

export default App
