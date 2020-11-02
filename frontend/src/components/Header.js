import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core/styles'
import LocalMall from '@material-ui/icons/LocalMallOutlined'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import { Link } from 'react-router-dom'
import '../style/index.css'
import { Container, Row, Col, Nav, NavDropdown, Navbar } from 'react-bootstrap'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  root: {
    padding: '2px 2px',
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    width: '650px',
    height: 40,
    borderRadius: '20px 20px 20px 20px',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  button: {
    background: 'black',
    color: 'white',
    borderRadius: '20px 20px 20px 20px',
    height: '40px',
    width: '90px',
    border: 'none',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center',
    display: 'inline-block',
    marginTop: theme.spacing(1),
  },
  Cart: {
    color: 'black',
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(5),
  },
}))

const Header = () => {
  const classes = useStyles()
  return (
    <div>
      <Navbar className='background-searchBar' expand='lg'>
        <Container>
          <Row lg={8}>
            <Col>
              <Navbar.Brand className='brand-icon' href='#home'>
                Medicom
              </Navbar.Brand>
            </Col>
            <Col>
              <Paper component='form' className={classes.root}>
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
              <button className={classes.button}>Log In</button>
            </Col>
            <Col>
              <Link to='#'>
                <LocalMall fontSize='large' className={classes.Cart} />
              </Link>
            </Col>
          </Row>
        </Container>
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
