import React from 'react';
import MainContent from '../MainContent/MainContent';
import SideMenu from '../SideMenu/SideMenu';

const Manage = () => {
    return (
        <div className="row">
            <div className="col-md-4">
            <SideMenu></SideMenu>
            </div>
            <div className="col-md-8">
            <MainContent></MainContent>
            </div>
        </div>
    );
};

export default Manage;