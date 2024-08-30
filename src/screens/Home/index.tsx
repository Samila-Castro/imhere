import { StatusBar } from 'expo-status-bar';
import {Text, View, TextInput, TouchableOpacity, FlatList, ScrollView, FlatListComponent } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';
import { useState } from 'react';

export function Home() {
  const participants = ["Samila", "Jonas", "Diego", "Rodrigo", "Roverta", "Miguel", "Fernanda", "Tiago", "Mayk Brito"];

  function handleParticipentAdd(){
    console.log("Você clicou no botão de adicionar!")
  };

  function handleParticipentRemove(){
    
  };
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
          Nome do evento
      </Text>
      <Text style={styles.eventDate}>
          Sexta, 4 de Novembro de 2024
      </Text>
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipentAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipentRemove}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  );
}
