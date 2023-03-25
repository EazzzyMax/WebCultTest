import React, {useEffect, useState} from 'react';
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Text,
  ScrollView,
  Linking,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';

const MainScreen = ({route, navigation}: {route: any; navigation: any}) => {
  const {email} = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState<any>(null);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    //это апи иногда возвращает видео, а не картинку
    axios
      .get('https://apod.as93.net/apod')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleLogout = () => {
    navigation.navigate('Start');
  };

  const openApiDocs = () => {
    Linking.openURL('https://go-apod.herokuapp.com/#api-docs');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeText}>×</Text>
              </TouchableOpacity>
              {data && data.hdurl && (
                <Image
                  source={{uri: data.hdurl}}
                  style={styles.hdImage}
                  resizeMode="contain"
                />
              )}
            </View>
          </View>
        </Modal>

        <View style={styles.header}>
          <Text style={styles.emailText}>{email}</Text>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Выйти</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.content}>
          {data ? (
            <View>
              <TouchableOpacity onPress={openModal}>
                <Image
                  style={styles.image}
                  source={{
                    uri: data.url,
                  }}
                />
              </TouchableOpacity>
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.description}>{data.explanation}</Text>
            </View>
          ) : (
            <Text>Загрузка...</Text>
          )}
        </ScrollView>
        <TouchableOpacity style={styles.footer} onPress={openApiDocs}>
          <Text style={styles.footerText}>API Documentation</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  emailText: {
    fontSize: 18,
  },
  logoutButton: {
    backgroundColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 14,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
  footer: {
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 14,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  closeText: {
    fontSize: 30,
    color: '#FFF',
  },
  hdImage: {
    width: '100%',
    height: '80%',
  },
  previewImage: {
    width: '100%',
    height: 200,
  },
});

export default MainScreen;
