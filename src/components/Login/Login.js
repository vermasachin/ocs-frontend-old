import React, { Fragment, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import studyingImg from '../../assets/undraw_studying.svg';
import logo from '../../assets/logo.svg';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2
  },
  padding: {
    padding: theme.spacing.unit * 2
  },
  button: {
    margin: `${theme.spacing.unit * 2}px 0`
  },
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  paper: {
    display: 'flex',
    maxWidth: '960px',
    width: '50vw',
    maxHeight: '40vh',
    flexWrap: 'wrap',
    padding: `${theme.spacing.unit * 10}px ${theme.spacing.unit * 5}px `,
    margin: `${theme.spacing.unit * 5}px 0`
  },
  toolbar: {
    maxWidth: '1280px',
    margin: '0 auto'
  },
  loginTitle: {
    fontWeight: 700
  },
  smallLink: {
    textDecoration: 'underline',
    color: 'rgba(0, 0, 0, 0.54)'
  },
  smallText: {
    color: 'rgba(0, 0, 0, 0.54)'
  },
  loginBg: {
    background: `url('${studyingImg}') no-repeat right`,
    flexBasis: '60%',
    backgroundSize: 'contain'
  }
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: true,
      anchorEl: null,
      phone: '',
      password: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = e => {
    e.preventDefault();
    // Handle login api here
    console.log('logged in');
  };

  render() {
    const { classes } = this.props;
    const { phone, password, auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <Fragment>
        <div className={classes.root}>
          <AppBar position="static">
            <Grid>
              <Toolbar className={classes.toolbar}>
                <img src={logo} alt="logo" />
                {auth && (
                  <div>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                      }}
                      open={open}
                      onClose={this.handleClose}
                    >
                      <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                      <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    </Menu>
                  </div>
                )}
              </Toolbar>
            </Grid>
          </AppBar>
        </div>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.padding}
        >
          <Paper className={classes.paper}>
            <div style={{ flexBasis: '40%' }}>
              <form onSubmit={this.login}>
                <Grid item xs={12} className={classes.margin}>
                  <Typography
                    variant="h4"
                    className={classes.loginTitle}
                    gutterBottom
                  >
                    Log in
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    className={classes.smallText}
                  >
                    or <a className={classes.smallLink}>create account</a>
                  </Typography>
                  <TextField
                    required
                    id="phone-required"
                    label="Phone"
                    margin="normal"
                    type="tel"
                    name="phone"
                    pattern="^[6789]\d{9}$"
                    value={phone}
                    onChange={this.onChange}
                    autoFocus={true}
                  />
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="password-required"
                      label="Password"
                      margin="normal"
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.onChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      className={classes.button}
                    >
                      Login
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
            <div className={classes.loginBg} />
          </Paper>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Login);
