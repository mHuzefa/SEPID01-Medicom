import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles, withStyles } from '@material-ui/core/styles'
//import Fab from '@material-ui/core/Fab'
import Badge from '@material-ui/core/Badge'
import LocalMall from '@material-ui/icons/LocalMallOutlined'
import IconButton from '@material-ui/core/IconButton'
import PersonIcon from '@material-ui/icons/Person'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import { Link } from 'react-router-dom'
import '../style/index.css'
import { Row, Col, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Menu } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 30,
    top: 8,

    padding: '0 2px',
  },
}))(Badge)

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}))

const Header = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Navbar className='background-searchBar' expand='lg' sticky='top'>
        <Row>
          <Col>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <Navbar.Brand className='brand-icon'>Medicom</Navbar.Brand>
            </Link>
          </Col>
          <Col>
            <Paper component='form' className='header'>
              <InputBase
                className={classes.input}
                placeholder='Search'
                inputProps={{ 'aria-label': 'Search' }}
              />
              <IconButton
                type='submit'
                className={classes.iconButton}
                aria-label='search'>
                <SearchIcon />
              </IconButton>
            </Paper>
          </Col>
          <Col>
            <IconButton style={{ outline: 'none' }}>
              <PersonIcon
                fontSize='large'
                className='cart'
                onClick={handleClick}
              />
              <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <Link
                  to='/login'
                  style={{ textDecoration: 'none', color: 'black' }}>
                  <MenuItem onClick={handleClose}>Login</MenuItem>
                </Link>
                <Link
                  to='/signup'
                  style={{ textDecoration: 'none', color: 'black' }}>
                  <MenuItem onClick={handleClose}>SignUp</MenuItem>
                </Link>
              </Menu>
            </IconButton>
          </Col>
          <Col>
            <Link>
              <IconButton aria-label='cart' className='cartIcon'>
                <StyledBadge badgeContent={0} showZero color='error'>
                  <LocalMall fontSize='large' className='cart' />
                </StyledBadge>
              </IconButton>
            </Link>
          </Col>
        </Row>
      </Navbar>
      <Navbar className='background-Navbar' expand='lg'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
            <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item href=''>Action</NavDropdown.Item>
              <NavDropdown.Item href=''>Another action</NavDropdown.Item>
              <NavDropdown.Item href=''>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href=''>Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
