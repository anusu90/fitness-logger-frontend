import { Link } from 'react-router-dom'

import User from "../user/user"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faRunning, faUser } from '@fortawesome/free-solid-svg-icons'

export default function LeftCol() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <p className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <FontAwesomeIcon icon={faUserCircle} size="3x" />
                </div>
                <div className="sidebar-brand-text mx-3"> <User /></div>
            </p>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item active">
                <Link className="nav-link" to="/dashboard/workout">
                    <FontAwesomeIcon icon={faRunning} fixedWidth />
                    <span> Workout </span></Link>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">
                Interface
        </div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/dashboard/update" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog" />
                    <span>Profile</span>
                </Link>
                {/* <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Update</h6>
                        <a className="collapse-item" href="buttons.html">Weight</a>
                        <a className="collapse-item" href="cards.html">Height</a>
                    </div>
                </div> */}
            </li>
            {/* Nav Item - Utilities Collapse Menu */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                    <FontAwesomeIcon icon={faRunning} fixedWidth className="fa-fw" />
                    <span>Utilities</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Additional Details</h6>
                        <a className="collapse-item" href="utilities-color.html">GYM</a>
                        <a className="collapse-item" href="utilities-border.html">Shoes</a>
                    </div>
                </div>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">
                PROGRESS
        </div>
            {/* Nav Item - Charts */}
            <li className="nav-item">
                <a className="nav-link" href="charts.html">
                    <i className="fas fa-fw fa-chart-area" />
                    <span>Charts</span></a>
            </li>
            {/* Nav Item - Tables */}
            <li className="nav-item">
                <Link className="nav-link" to="/dashboard/table">
                    <i className="fas fa-fw fa-table" />
                    <span>Tables</span></Link>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" />
            </div>
            {/* Sidebar Message */}
            {/* <div className="sidebar-card">
                <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="" />
                <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div> */}
        </ul>
    )
}