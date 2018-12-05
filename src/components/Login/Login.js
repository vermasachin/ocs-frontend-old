import React, { Fragment, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import studyingImg from '../../assets/undraw_studying.svg';

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
  paper: {
    background: `url('${studyingImg}') no-repeat right`,
    maxWidth: '1140px',
    padding: `${theme.spacing.unit * 10}px ${theme.spacing.unit * 5}px `,
    width: '75vw',
    maxHeight: '60vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundSize: 'contain'
  }
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { phone, password } = this.state;

    return (
      <Fragment>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.padding}
        >
          <Paper className={classes.paper}>
            <form onSubmit={this.login}>
              <Grid item xs={12} className={classes.margin}>
                <FormLabel component="legend">Login</FormLabel>
                <TextField
                  required
                  id="phone-required"
                  label="Phone"
                  margin="normal"
                  type="tel"
                  name="phone"
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
          </Paper>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Login);
