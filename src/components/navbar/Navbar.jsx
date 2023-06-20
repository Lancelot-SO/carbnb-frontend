/* eslint-disable max-len */
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem,
} from 'cdbreact';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div style={{
    display: 'flex', height: '100vh', overflow: 'scroll initial', borderRight: '1px solid var(--color-gray)',
  }}
  >
    <CDBSidebar textColor="#000" backgroundColor="#fff">
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large" />}>
        <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
          CarBnB
        </a>
      </CDBSidebarHeader>

      <CDBSidebarContent className="sidebar-content">
        <CDBSidebarMenu style={{ paddingTop: '100px', color: '#000' }}>
          <NavLink exact to="/" className={(link) => (link.isActive ? 'link active' : 'link')}>
            <CDBSidebarMenuItem icon="columns">Home</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/reserve" className={(link) => (link.isActive ? 'link active' : 'link')}>
            <CDBSidebarMenuItem icon="table">Reserve</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/reservations" className={(link) => (link.isActive ? 'link active' : 'link')}>
            <CDBSidebarMenuItem icon="chart-line">My Reservations</CDBSidebarMenuItem>
          </NavLink>

          <NavLink exact to="/addCar" className={(link) => (link.isActive ? 'link active' : 'link')}>
            <CDBSidebarMenuItem icon="car">Add Cars</CDBSidebarMenuItem>
          </NavLink>

          <NavLink exact to="/delete" className={(link) => (link.isActive ? 'link active' : 'link')}>
            <CDBSidebarMenuItem icon="trash">Delete</CDBSidebarMenuItem>
          </NavLink>
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: 'start', display: 'flex', flexWrap: 'wrap' }}>
        <div style={{
          padding: '10px 5px', minWidth: '90%', display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-evenly', gap: '5%',
        }}
        >
          <FaFacebook size={18} />
          <FaTwitter size={18} />
          <FaLinkedin size={18} />
        </div>
        <p style={{ marginLeft: '3%' }}>Copyright © 2021. All Rights Reserved.</p>
      </CDBSidebarFooter>
    </CDBSidebar>
  </div>
);

export default Navbar;
