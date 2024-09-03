import {Text, View, Alert ,TextInput, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';
import { useState } from 'react';

interface Participants {
  name: string
}
export function Home() {
  const [participants, setParticipants] = useState<Participants[]>([]);
  const [name, setName] = useState("");

  function handleParticipentAdd(name: string){                                         
    if(participants.some(participant => participant.name === name)){
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome." )
    }

    const newParticipant = {
      name: name,               
    }

    setParticipants(prevState => [...prevState, newParticipant])
    setName("");

  };
  
  function handleParticipentRemove(name: string){  
    Alert.alert("Remover participante", `Remover o participante ${name}?`, [
      {
        text: "sim",
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant.name !== name))
      },
      {
        text: "não",
        style: "cancel"
      }
    ]);



    
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
          onChangeText={text => setName(text)}
          defaultValue={name}
          
        />
        <TouchableOpacity style={styles.button} onPress={() => handleParticipentAdd(name)}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <Participant
            key={item.name}
            name={item.name}
            onRemove={() => handleParticipentRemove(item.name)}
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
