

import React from 'react'

import '../styles/App.css'
import { useState, useEffect } from 'react'

const App = () => {
    const [text, setText] = useState('')
    const [loadingText, setLoadingText] = useState('')

    useEffect(() => {
        setLoadingText(text);
    }, [text])
    return (
        <div className="app" style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className='textarea' style={{ width: '50%', height: '100%' }}>
                <textarea value={text} onChange={(e) => setText(e.target.value)} style={{ width: '98%', height: '100%', padding: '10px' }} />

            </div>
            <div className='preview' style={{ width: '50%', height: '100%', backgroundColor: 'lightgray' }}>
                <h1 className='loading' style={{
                    padding: '10px',
                    maxWidth: '100%',
                    height: 'auto',  
                    wordWrap: 'break-word',  
                    overflowWrap: 'break-word',  
                    display: 'block'  }}>{loadingText}</h1>
     </div>
    </div >
  )
}

export default App
