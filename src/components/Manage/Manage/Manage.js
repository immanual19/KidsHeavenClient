import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import ListIcon from '@material-ui/icons/List';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RateReviewIcon from '@material-ui/icons/RateReview';
import ViewListIcon from '@material-ui/icons/ViewList';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddBasicService from '../AddBasicService/AddBasicService';
import AddPremiumService from '../AddPremiumService/AddPremiumService';
import Book from '../Book/Book';
import OrderList from '../OrderList/OrderList';
import PostReview from '../PostReview/PostReview';
import BookingList from '../BookingList/BookingList';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import ManageServices from '../ManageServices/ManageServices';
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

function Manage(props) {

  const userInfo=JSON.parse(localStorage.getItem('userInfo'));
  const email=userInfo.email;

  const [admin,isAdmin]=useState(false);

  useEffect(()=>{
    fetch('http://localhost:8080/isAdmin',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({email})
    })
    .then(res=>res.json())
    .then(data=>{
      if(data){
        isAdmin(data);
      }
    })
  },[admin])

  const [myBookings,setMyBookings]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:8080/myOrder',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({email})
    })
    .then(res=>res.json())
    .then(data=>setMyBookings(data))
  },[])

  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const {serviceId}=useParams();
  //console.log('id=',serviceId, 'type=',serviceType);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  //Starts Here
  const [bookingVisible,setBookingVisible]=useState(true);
  const [bookingListVisible,setBookingListVisible]=useState(false);
  const [reviewVisible,setReviewVisible]=useState(false);
  const [orderListVisible,setOrderListVisible]=useState(true);
  const [makeAdminVisible,setMakeAdminVisible]=useState(false);
  const [addBasicVisible,setAddBasicVisible]=useState(false);
  const [addPremiumVisible,setAddPremiumVisible]=useState(false);
  const [manageAllVisible,setManageAllVisible]=useState(false);
  //Ends Here
  const handleClick=(text)=>{
      console.log('Clicked',text);
      if(text==='Make Admin'){
          setMakeAdminVisible(true);
          setOrderListVisible(false);
          setAddBasicVisible(false);
          setAddPremiumVisible(false);
          setManageAllVisible(false);
      }
      else if(text==='Add Basic Service'){
        setAddBasicVisible(true);
        setMakeAdminVisible(false);
        setOrderListVisible(false);
        setAddPremiumVisible(false);
        setManageAllVisible(false);
      }
      else if(text==='Add Premium Service'){
        setAddPremiumVisible(true);
        setAddBasicVisible(false);
        setMakeAdminVisible(false);
        setOrderListVisible(false);
        setManageAllVisible(false);
        
      }
      else if(text==='Order list'){
        setOrderListVisible(true);
        setAddPremiumVisible(false);
        setAddBasicVisible(false);
        setMakeAdminVisible(false);
        setManageAllVisible(false);
        
      }
      else if(text==='Book'){
        setBookingVisible(true);
        setBookingListVisible(false);
        setReviewVisible(false);
      }
      else if(text==='Booking List'){
        setBookingListVisible(true);
        setBookingVisible(false);
        setReviewVisible(false);
      } 
      else if(text==='Review'){
        setReviewVisible(true);
        setBookingListVisible(false);
        setBookingVisible(false);
      }
      else if(text=='Manage'){
        setManageAllVisible(true);
        setOrderListVisible(false);
        setAddPremiumVisible(false);
        setAddBasicVisible(false);
        setMakeAdminVisible(false);
      }
  }

  const [list,setList]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:8080/getAllOrder')
    .then(res=>res.json())
    .then(data=>{
      setList(data);
    })
  },[])


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };



  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>

      {
       admin && <List>
        {['Order list', 'Add Basic Service'].map((text, index) => (
          <ListItem  onClick={()=>handleClick(text)} button key={text}>

            <ListItemIcon>{index%2==0 ? <ListIcon/> : <PlusOneIcon/> }</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}


          {['Add Premium Service', 'Make Admin'].map((text, index) => (
            <ListItem  onClick={()=>handleClick(text)}  button key={text}>
              <ListItemIcon>{index%2==0 ? <PlusOneIcon/> : <PersonAddIcon/> }</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          {['Manage'].map((text, index) => (
            <ListItem  onClick={()=>handleClick(text)}  button key={text}>
              <ListItemIcon><LineStyleIcon></LineStyleIcon></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      }

   {
    !admin && <List>
    
    { ['Book', 'Booking List'].map((text, index) => (
      <ListItem  onClick={()=>handleClick(text)}  button key={text}>
        <ListItemIcon>{index===0 % 2 === 0 ? <ShoppingCartIcon/> : <ViewListIcon/> }</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    ))}

    {['Review'].map((text, index) => (
      <ListItem  onClick={()=>handleClick(text)}  button key={text}>
        <ListItemIcon><RateReviewIcon/></ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    ))}
    </List>
   }

        

        
          
      </List>
      
      <Divider />

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  //Write everything here

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div>
        {
          !admin &&  bookingVisible && <Book serviceId={serviceId}></Book>
        }
        {
            !admin && bookingListVisible && <BookingList myBookings={myBookings} key={myBookings._id}></BookingList>
        }
        {
           admin && makeAdminVisible && <MakeAdmin></MakeAdmin>
        }
        {
           admin && addBasicVisible && <AddBasicService></AddBasicService>
        }
        {
          admin && manageAllVisible && <ManageServices></ManageServices>
        }
        {
         admin && addPremiumVisible && <AddPremiumService></AddPremiumService>
        }
        {
          admin && orderListVisible && <OrderList orderlist={list}></OrderList>
        }
        {
          !admin && reviewVisible && <PostReview></PostReview>
        }
        </div>
      </main>
    </div>
  );
}

export default Manage;