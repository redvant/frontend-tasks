import Sidebar from '../../components/Sidebar'
import { Outlet } from "react-router-dom"
import './Dashboard.css'

function Dashboard() {
  return (
    <div className='dashboard-container'>
      <Sidebar />
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard