import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CaseDetail from './pages/CaseDetail'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projekte/:id" element={<CaseDetail />} />
    </Routes>
  )
}
