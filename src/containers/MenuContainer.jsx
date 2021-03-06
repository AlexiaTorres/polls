import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import NotificationsContainer from './NotificationsContainer';
import MenuItem from '../components/MenuItem';
import * as authActions from '../actions/auth';


class Menu extends Component {

  constructor(props) {
    super(props);
  }

  handleSignOutClick() {
    this.props.signOut();
  }

  render() {
    const { auth } = this.props;
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
          { auth.authenticated ?
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button> : null
          }
            <Link className="navbar-brand" to="/">Poll App</Link>
          </div>
            { auth.authenticated ?
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
                <MenuItem href="/poll" { ...this.props }>My Polls</MenuItem>
                <MenuItem href="/vote" { ...this.props }>Vote</MenuItem>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <NotificationsContainer { ...this.props } />
                <MenuItem href="/" { ...this.props }><button style={{border: 'none', background: 'none'}} onClick={ () => this.handleSignOutClick() }>Sign Out</button></MenuItem>
            </ul>
          </div> : null
        }
        </div>
      </nav>
    );
  }
}

Menu.propTypes = {
  auth: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    active: state.menu.active,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps, authActions
)(Menu);
