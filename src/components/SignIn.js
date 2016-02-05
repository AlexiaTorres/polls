import React, { Component, PropTypes } from 'react';

export default class SignIn extends Component {

  constructor(props) {
    super(props);
  }

  handleCancelClick() {
    this.props.cancelSignIn();
  }

  handlesignInWithGithubClick() {
    this.props.signInWithGithub();
  }

  handlesignInWithTwitterClick() {
    this.props.signInWithTwitter();
  }

  render() {
    return (
      <div style={{textAlign: 'center', margin:'2em auto 2em', justifyContent: 'center'}}>
      <h2>Welcome to Poll App</h2>
      <h3>Sign in</h3>
      <div style={{textAlign: 'center', margin:'2em auto 2em', display: 'flex', justifyContent: 'center'}}>
          <button className="btn" style={{margin: '2em', width: '90%'}} type="button" onClick={ () => this.handlesignInWithGithubClick()}>GitHub</button>
          <button className="btn" style={{margin: '2em', width: '90%'}} type="button" onClick={ () => this.handlesignInWithTwitterClick()}>Twitter</button>
      </div>
      </div>
    );
  }

}

SignIn.propTypes = {
  cancelSignIn: PropTypes.func.isRequired,
  signInWithGithub: PropTypes.func.isRequired,
  signInWithTwitter: PropTypes.func.isRequired
};
