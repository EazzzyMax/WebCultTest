import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  View,
  ActivityIndicator,
  Image,
} from 'react-native';

interface IImagePreviewModal {
  modalVisible: boolean;
  hdurl: string | undefined;
  closeModal: () => void;
}

const ImagePreviewModal = ({
  modalVisible,
  closeModal,
  hdurl,
}: IImagePreviewModal) => {
  const [loadingHDImage, setLoadingHDImage] = useState<boolean>(false);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}>
      <View style={styles.modalView}>
        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
          <Text style={styles.closeText}>×</Text>
        </TouchableOpacity>
        {loadingHDImage && (
          <View style={[styles.absoluteFill, styles.centered]}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        )}
        {hdurl && (
          <Image
            source={{uri: hdurl}}
            style={styles.hdImage}
            resizeMode="contain"
            onLoadStart={() => setLoadingHDImage(true)}
            onLoadEnd={() => setLoadingHDImage(false)}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 2,
  },
  closeText: {
    fontSize: 30,
    color: '#FFF',
  },
  hdImage: {
    width: '100%',
    height: '100%',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  absoluteFill: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default ImagePreviewModal;
