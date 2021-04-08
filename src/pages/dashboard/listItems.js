import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Link from '@material-ui/core/Link';

import { Route, useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import './styles/listItems.css';


export const mainListItems = (


  <div>
    <Link href='/dashboard' style={{ textDecoration: 'none'}} >
    <ListItem button>
      <ListItemIcon style={{color: '#3578E3'}}>
        <DashboardIcon />
      </ListItemIcon >
      <Link href="/referrals" className="links" style={{ textDecoration: 'none',color: '#3578E3' }}> <a class="a_links">Dashboard</a></Link>
    </ListItem>
    </Link >
    <Link href='/profile' style={{ textDecoration: 'none'}} >
    <ListItem button>
    <Link href="/profile" className="links" style={{ textDecoration: 'none', color: '#3578E3' }}> 
      <ListItemIcon style={{color: '#3578E3'}}>
        <BarChartIcon />
      </ListItemIcon>
      <a class="a_links">Profile</a> </Link>
    </ListItem>
    </Link>
    <Link href='/wallet' style={{ textDecoration: 'none'}} >
    <ListItem button >
      <ListItemIcon style={{color: '#3578E3'}} >
        <ShoppingCartIcon />
      </ListItemIcon>
      <Link href="/wallet" className="links" style={{ textDecoration: 'none', color: '#3578E3' }}> <a class="a_links">Wallet</a></Link>
    </ListItem>
    </Link>
    <Link href='/referrals' style={{ textDecoration: 'none'}} >
    <ListItem button>
      <ListItemIcon style={{color: '#3578E3'}}>
        <PeopleIcon />
      </ListItemIcon>
      <Link href="/referrals" className="links" style={{ textDecoration: 'none', color: '#3578E3' }}> <a class="a_links">Referrals</a></Link>
    </ListItem >
    </Link>
    <Link href='/settings' style={{ textDecoration: 'none'}} >
    <ListItem button>
      <ListItemIcon style={{color: '#3578E3'}}>
        <LayersIcon />
      </ListItemIcon>
      <Link href="/settings" className="links" style={{ textDecoration: 'none', color: '#3578E3' }} > <a class="a_links">Settings</a></Link>
    </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon style={{color: '#3578E3'}}>
        <AssignmentIcon />
      </ListItemIcon>
      <Link href="/referrals" className="links" style={{ textDecoration: 'none', color: '#3578E3' }} > <a class="a_links">Log out</a></Link>

    </ListItem>
    
  </div>
);