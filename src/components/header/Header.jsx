import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import * as React from "react";
//import Container from "@mui/material/Container";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import Badge from "@mui/material/Badge";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import { BsDot, BsFillFileEarmarkFill, BsFillGrid1X2Fill, BsFillRecordFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { changeTheme } from "../../actions/normalActions";
import logo from "../../images/logo.jpg";
import { COLORS } from "../../theme/Defaults";
import { HeaderViewStylesFunction } from "../../theme/Theme";
import { MENU_MOUNT_TOP_RIGHT, MOBILE_MENU } from "../../utils/utils";
import { Pages } from "./Pages";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


const Header = () => {
  const themeType = useSelector((store) => store.themeType.themeType);
  let theme = themeType === "light" ? "dark" : "light";
  const dispatch = useDispatch();
  const themeVariable = useTheme();
  const headerViewStyles = HeaderViewStylesFunction();
  const {
    // primaryName,
    // secondaryName,
    tertiaryName,
    appBar,
    toolBar,
    headerLogo,
    menuOptionsStyleMobile,
    menuOptionsStyleDesktop,
    menuPage,
  } = headerViewStyles;

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElSubMenu, setAnchorSubMenu] = React.useState(null);
  const [anchorElMoreMenu, setAnchorMoreMenu] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenSubMenu = (event) => {
    setAnchorSubMenu(event.currentTarget);
  };

  const handleOpenMoreMenu = (event) => {
    setAnchorMoreMenu(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseSubMenu = () => {
    setAnchorSubMenu(null);
  };
  const handleCloseMoreMenu = () => {
    setAnchorMoreMenu(null);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const location = useLocation();
  const components = {
    BsFillGrid1X2Fill,
    BsFillFileEarmarkFill,
    BsDot, BsFillRecordFill
  };
  const FaIconDynamic = ({ type }) => {
    const FaIcon = components[type];
    return (<FaIcon></FaIcon>);
  };
  const CollapesList = ({ text }) => {


    const [collapesOpen, setCollapesOpen] = React.useState(false || text.url.includes(location.pathname));
    const handlechangeColl = () => {
      setCollapesOpen((s) => !s)
    }
    return (
      <>
        <ListItem key={text.name} disablePadding sx={{ display: 'block' }} onClick={handlechangeColl}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <FaIconDynamic type={text.icon} />
            </ListItemIcon>
            <ListItemText primary={text.name} sx={{ opacity: open ? 1 : 0 }} />
            {open ? collapesOpen ? <ExpandLess /> : <ExpandMore /> : null}
          </ListItemButton>
        </ListItem>
        <Collapse in={collapesOpen} timeout="auto" unmountOnExit>
          {text.children.map((child, index) => {
            return (
              <ListItem key={child.name} disablePadding sx={{ display: 'block', ml: 1 }}>
                <ListItemButton
                  component={Link} to={child.url}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <FaIconDynamic type={child.icon} />
                  </ListItemIcon>
                  <ListItemText primary={child.name} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            )
          })
          }
        </Collapse>
      </>
    )
  }

  return (
    <>
      <AppBar position="static" sx={appBar}>
        {/* <Container maxWidth="xl"> */}
        <Toolbar disableGutters variant="dense">
          <Typography variant="h6" noWrap component="div" sx={toolBar}>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              // ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={menuOptionsStyleMobile}>
           

          </Box>
          
          <Box sx={menuOptionsStyleDesktop}>

          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
         
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <Tooltip title="Manager">
              <List sx={{ paddingTop: 0, paddingBottom: 0 }}>
                <ListItem disablePadding>
                  <ListItemButton onClick={handleOpenUserMenu}>
                    <ListItemIcon sx={{ minWidth: 35 }}>
                      <AccountCircleIcon sx={{ color: "black" }} />
                    </ListItemIcon>

                    <ExpandMore />
                  </ListItemButton>
                </ListItem>
              </List>
            </Tooltip>
         
          </Box>
        </Toolbar>
        {/* </Container> */}
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ display: 'flex', justifyContent: 'center' }} >
          {open && <img
            alt="logo small"
            style={{ height: '50%', width: '50%', my: 2 }}
            src="https://www.creativebees.in/wp-content/uploads/2022/11/logo.png.webp" />
          }
          {open ? <IconButton sx={{ mt: 1 }} onClick={handleDrawerClose}>
            <MenuIcon sx={{ fill: "#e3b707" }} />
          </IconButton> : <img
            style={{ height: '50%', width: '50%', my: 2 }}
            alt="logo favicon"

            src="https://www.creativebees.in/wp-content/uploads/2022/11/favicon-150x150.png" />}
        </DrawerHeader>
        <Divider />
        <List
         onMouseLeave={() => {
          setOpen(false)
        }}
          sx={{
            backgroundColor: '#2c2c2c',
            height: '100%', color: '#fff',
            '& svg': {
              fill: '#fff'

            }
          }}
        >
          {Pages.map((text, index) => {
            return text.children?.length ? <CollapesList text={text} /> : <ListItem

              key={text.name} disablePadding sx={{ display: 'block' }}>
              <ListItemButton component={Link} to={text.url}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <FaIconDynamic type={text.icon} />
                </ListItemIcon>
                <ListItemText primary={text.name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          })}
        </List>

      </Drawer>
    </>
  );
};
export default Header;
