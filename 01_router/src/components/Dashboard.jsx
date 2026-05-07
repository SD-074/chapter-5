import React from 'react'
import { Link, Outlet } from 'react-router'

export default function Dashboard() {
  return (
    <>
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" checked/>
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    {/* <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
      Open drawer
    </label> */}
    <Outlet />
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <Link to="/dashboard/settings"><li><a>Settings</a></li></Link>
      {/* <li><a>Overview</a></li> */}
      <Link to="/dashboard/overview"><li><a>overview</a></li></Link>

    </ul>
  </div>
</div>
    </>
  )
}
