/* eslint-disable max-len */
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
    <CDBSidebar textColor="#fff" backgroundColor="#333">
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large" />}>
        <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
          CarBnB
        </a>
      </CDBSidebarHeader>

      <CDBSidebarContent className="sidebar-content">
        <CDBSidebarMenu style={{ paddingTop: '100px' }}>
          <NavLink exact to="/" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="columns">Home</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/cars" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="car">Cars</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/reserve" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="table">Reserve</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/reservations" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="chart-line">My Reservations</CDBSidebarMenuItem>
          </NavLink>

          <NavLink exact to="/addCars" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="car">Add Cars</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/delete" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="trash">Delete</CDBSidebarMenuItem>
          </NavLink>
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: 'start', marginLeft: '30px' }}>
        <div style={{ padding: '20px 5px', gap: '50px' }}>
          <FaFacebook size={18} />
          <FaTwitter size={18} />
          <FaLinkedin size={18} />
        </div>
        <p>Copyright © 2021. All Rights Reserved.</p>
      </CDBSidebarFooter>
    </CDBSidebar>
  </div>
);

export default Navbar;
