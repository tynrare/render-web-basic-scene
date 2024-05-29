// Original and the models by Bruno Simon: https://threejs-journey.com

import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import { Loader } from '@react-three/drei'
import './styles.css'
import App from './App'

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <Loader />
  </>
)
