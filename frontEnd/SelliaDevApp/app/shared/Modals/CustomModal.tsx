import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';

class CustModal extends Component {
  timer = null;

  componentDidMount() {
    const { isVisible, toggleModal, duration } = this.props;

    if (isVisible) {
      this.setAutoClose(duration, toggleModal);
    }
  }

  componentDidUpdate(prevProps) {
    const { isVisible, toggleModal, duration } = this.props;

    if (isVisible !== prevProps.isVisible) {
      clearTimeout(this.timer);

      if (isVisible) {
        this.setAutoClose(duration, toggleModal);
      }
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  setAutoClose(duration, toggleModal) {
    this.timer = setTimeout(toggleModal, duration);
  }

  render() {
    const { error, isVisible, toggleModal } = this.props;

    return (
      <Modal
        isVisible={isVisible}
        onBackdropPress={toggleModal}
        hasBackdrop={false}
        coverScreen={false}
        animationIn="slideInUp"
        animationOut="slideOutDown"
      >
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <View style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: 20,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
            <Text style={{ color: 'black', fontSize: 16, textAlign: 'center' }}>{error}</Text>
          </View>
        </View>
      </Modal>
    );
  }
}

export default CustModal;
