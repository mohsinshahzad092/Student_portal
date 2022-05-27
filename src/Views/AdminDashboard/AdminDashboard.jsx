import React from 'react'
import App from '../../component/AdminDashboardMenu/AdminDashboardMenu'
import AdminDashboardMenu from '../../component/AdminDashboardMenu/AdminDashboardMenu'
import'./AdminDashboard.scss'

const AdminDashboard = () => {
  return (
    <div className='adminDashboard-container'>

      <div className="adminbox"></div>

        <AdminDashboardMenu/>
    </div>
  )
}

export default AdminDashboard