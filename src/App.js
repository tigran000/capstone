import React from "react"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import CssBaseline from "@material-ui/core/CssBaseline"
import Drawer from "@material-ui/core/Drawer"
import Hidden from "@material-ui/core/Hidden"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import MenuIcon from "@material-ui/icons/Menu"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"

import selectComponent from "./components/selectComponent"
const drawerWidth = 180

const styles = theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
})

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
    selectedTab: "Home"
  }

  handleDrawerToggle = () =>
    this.setState(state => ({ mobileOpen: !state.mobileOpen }))

  handleView = selectedTab => this.setState({ selectedTab })

  render() {
    const { classes, theme } = this.props
    const { selectedTab } = this.state

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <List>
          {[
            "Home",
            "Event Database",
            "Press Database",
            "Video Testimony",
            "Sumgait",
            "Maragha",
            "Other",
            "About Us"
          ].map((text, index) => (
            <ListItem button key={text} onClick={() => this.handleView(text)}>
              {text}
            </ListItem>
          ))}
        </List>
      </div>
    )
    if (this.state.maraghaIsOpen) {
    }

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" color="inherit" noWrap>
              AsItHappend
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
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
          {selectComponent(selectedTab)}
        </main>
      </div>
    )
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer)
