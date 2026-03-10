import { Outlet } from 'react-router'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Outlet />
    </div>
  )
}
