import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CursedPlans from './pages/CursedPlans'
import DarkFeatures from './pages/DarkFeatures'
import Testimonials from './pages/Testimonials'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<CursedPlans />} />
          <Route path="/features" element={<DarkFeatures />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
