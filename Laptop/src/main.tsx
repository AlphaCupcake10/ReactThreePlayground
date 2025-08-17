import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Canvas } from '@react-three/fiber';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<div style={{
      background: `linear-gradient(138deg,rgba(0, 0, 0, 1) 0%, rgba(32, 36, 51, 1) 100%)`,
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      textAlign: 'center',
    }}>Loading...</div>}>
      <Canvas camera={{ fov: 55}}>
        <App />
      </Canvas>
    </Suspense>
  </React.StrictMode>,
)