// src/screens/WelcomeScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { auth } from '../firebaseConfig';
import AuthButton from '../components/AuthButton'; // Importa o componente de botão personalizado
 
const WelcomeScreen = ({ navigation }) => {
  // Função para sair da conta
  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        navigation.navigate('Login');
      });
  };
 
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'data:image/jpeg;base64,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xiJXiGmpqiWVwLgHNEQLRYF13m+UXGtuasNSAGmwtyVKqcQnixHNTMa+UUuQF5OSPtJMxe629so053U8XFyorqKabSJufA5pm9ris8UFKNTTxvs13QTSutm+yF5xDih1Qz5rhjMkQGQ1JbkjYwaWhbu51tjsPvGiMDEju2rJHVMu95Po2dzI/VAWSrx6mh9DOHP2EcYzv8A1i6ef1jQWG3c+ft6NrDaFlPE2JnqtG53J3Liep3Xnhmm+f1gqf8JSkhhtpJUbFw6taOfVeKTBazEbCRrqSjPrA6VEo9220bSN76roFBRxwRthiaGRsFmtGwC9w4Wnul2RajOktsezYREVozwiIgCIiAIiIAiIgCIiAIiIAiIgOc6wYpWt/aCCYDrdnZu+9qscbw4XChuOIexraWq9iRr6aQ/WPpxH45gs8MpadPgqGbxn+5pwW/GmSi0cVwmGqbkmYHAbHZzT1a4ahbEVS13cehWUnny6rxP9DzlMq39UJGaRVs7W8mvDJLeBIB+Ky0/BkRIdUSy1JGzZCBGP3GgA+d0wqfFK1hqKYUgp3PeIxL2oeWNcWhxLbg3ss1NW1kNWylrRB+lie+J0IfbMwjMwl51NjfZTOEkrOvkb43E6xgaA0AADQACwA6AL0i+OcALnZQnBq179A3zVJopKmWtqm0sPaP8A0cYe42hjyDUvcO8+qNdFZ8SrAxr5naNa0u8gLqU+TmhdFQse8WkmLp39bynMAe/LlXeCKm230d5MnxQv2aFHwA1/p108k7/2bXGOBvcGt1PiSrNheB01KLQQxx/ZaAT4ncqQRXEkujPnlnLthERekYREQBERAEREAREQBERAEREAREQBERARPFOCtrqaSnJs4gFjvckaczHeRA8rqk4LiRkvDMMlXH6MsZ3uPbb1ad7966YoTiDhamrbOkaWyt0bNGckre4OG47jcKLLiU0WcGfZw+iBUPisklS8YfTH9LJpI8bQw+25xGziNAO9TX9QHn0XYhVlnQGMOt0zhl1ZMCwGnomFkDMt9XOJzPeernHUqHHpqdssT1UEvHlm1h1EyCJkMYtGxoY0dwFlDcbYK+qha+HSqgeJYT1c3dh7nC4+CsSK2UIzaluKHhPELahmYNyvGkkbtHRvG7XN33WeWYu3PlyUnj3B1NVv7a74aj9tC7I8/a0Id5hRY+T4u0lr6t8fNgLGXHQua29vgqktO2+HwX46jFV9EI6H+kqhtFHrTscH1Ug9WzTcQg83OO46BdQY0AADQDQBaeE4VDSxiGCNrGDkBueZJ3J7yt1WMcFBUipmy/I/sERF2QhERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREB//9k=' }} // Substitua com o URL da sua imagem
        style={styles.image}
      />
      <Text style={styles.welcomeText}>Bem-vindo ao Aplicativo!</Text>
      <Text style={styles.infoText}>Você está logado com sucesso.</Text>
      {/* Botão de Logout estilizado */}
      <AuthButton title="Sair" onPress={handleLogout} color="#dc3545" textColor="#fff" />
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff', // Cor de fundo clara
    padding: 16,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75, // Faz a imagem ser circular
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Cor do texto
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#666', // Cor do texto secundário
    marginBottom: 20,
  },
});
 
export default WelcomeScreen;