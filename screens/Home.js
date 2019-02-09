import React from 'react';
import styles from '../styles';
import { connect } from 'react-redux';
import { login } from '../redux/actions';

import { Text, View } from 'react-native';

class Home extends React.Component {
  state = {};

  componentWillMount() {
    this.props.dispatch(login('hey'));
  }

  render() {
    return (
      <View>
        <Text>{this.props.user}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Home);
