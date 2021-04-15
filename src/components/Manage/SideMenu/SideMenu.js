import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faPlus, faTasks, faSignOutAlt, faThList, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {

    const userInfo=JSON.parse(localStorage.getItem('userInfo'));
    const isAdmin=userInfo.admin;
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                {isAdmin && <div>
                    <li>
                    <Link to="/orderList" className="text-white" >
                        <FontAwesomeIcon icon={faThList} /> <span>Order List</span>
                    </Link>
                </li>
                   
                    <li>
                        <Link to="/addService" className="text-white" >
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addAdmin" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageService" className="text-white" >
                            <FontAwesomeIcon icon={faTasks} /> <span>Manage Service</span>
                        </Link>
                    </li>
                </div>}

                <div>
                <li>
                    <Link to="/orderList" className="text-white" >
                        <FontAwesomeIcon icon={faThList} /> <span>Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="/orderList" className="text-white" >
                        <FontAwesomeIcon icon={faThList} /> <span>Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/orderList" className="text-white" >
                        <FontAwesomeIcon icon={faThList} /> <span>Review</span>
                    </Link>
                </li>
                </div>

            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;