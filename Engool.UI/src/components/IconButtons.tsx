import React from 'react';
import {ViewStyle, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faThumbsUp} from '@fortawesome/free-regular-svg-icons/faThumbsUp';
import {faArrowsSpin} from '@fortawesome/free-solid-svg-icons/faArrowsSpin';

interface ComponentProps {
  onPressOut: () => void;
  style: ViewStyle;
}

class AgainButton extends React.Component<ComponentProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={this.props.style}
        onPressOut={this.props.onPressOut}>
        <FontAwesomeIcon icon={faArrowsSpin} size={40} />
      </TouchableOpacity>
    );
  }
}

class NextButton extends React.Component<ComponentProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={this.props.style}
        onPressOut={this.props.onPressOut}>
        <FontAwesomeIcon icon={faThumbsUp} size={40} />
      </TouchableOpacity>
    );
  }
}

export {AgainButton, NextButton};
