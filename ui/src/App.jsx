import React from 'react'
import Sidebar from './component/sidebar';
import { ThemeProvider } from './component/ui/ThemeContext';

function App() {
  

  return (
  
     <ThemeProvider>
        <> 
  <Sidebar/>
  </>
  </ThemeProvider>
    
  )
}

export default App
