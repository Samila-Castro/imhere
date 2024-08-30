import {Text, View, Alert ,TextInput, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {
  const participants = ["Samila", "Jonas", "Diego", "Rodrigo", "Roverta", "Miguel", "Fernanda", "Tiago", "Mayk Brito"];

  function handleParticipentAdd(){
    if(participants.includes("Samila")){
      Alert.alert("Participante existe", "Já existe um participante na lista com esse nome." )
    }
  };

  function handleParticipentRemove(name: string){
    Alert.alert("Remover participante", `Remover o participante ${name}?`, [
      {
        text: "sim",
        onPress: () => Alert.alert("Deletado!")
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
            onRemove={() => handleParticipentRemove(item)}
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
