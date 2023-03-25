import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Text,
  ScrollView,
  Linking,
  SafeAreaView,
} from 'react-native';
import {IAPODData} from '../types';
import {fetchData} from '../utils/api';
import ImagePreviewModal from '../components/ImagePreviewModal';

const MainScreen = ({route, navigation}: {route: any; navigation: any}) => {
  const {email} = route.params;
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [data, setData] = useState<IAPODData | null>(null);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleLogout = () => {
    navigation.navigate('Start');
  };

  const openApiDocs = () => {
    Linking.openURL('https://go-apod.herokuapp.com/#api-docs');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ImagePreviewModal
        modalVisible={modalVisible}
        hdurl={data?.hdurl}
        closeModal={closeModal}
      />
      <View style={styles.container}>
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
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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
    resizeMode: 'center',
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
  previewImage: {
    width: '100%',
    height: 200,
  },
});

export default MainScreen;
