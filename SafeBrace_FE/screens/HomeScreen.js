import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Braces Patients!</Text>
      <Image
        source={require('../assets/SafeBraceLogo.png')}
        style={[styles.image, { width: 200, height: 200 }]}
      />
      <View style={styles.faqContainer}>
        <Text style={styles.faqTitle}>FAQs</Text>
        <View style={styles.faq}>
          <Text style={styles.question}>How do I clean my braces properly?</Text>
          <Text style={styles.answer}>You should brush with a fluoride toothpaste at least two times per day (preferably after meals), 
          for at least two minutes each time. 
          Remember to brush all of the teeth surfaces: the front, the back, and the chewing surfaces as well. 
          Be especially careful to clean the areas between wires and teeth, and between brackets and gums — that's where food particles can easily become trapped.</Text>
        </View>
        <View style={styles.faq}>
          <Text style={styles.question}>What do I do if my braces break?</Text>
          <Text style={styles.answer}>Take a good look at the bracket and determine what's wrong with it. 
          If the wire is in place, leave it in place. Use a q-tip to push it gently back in place (if it's sticking out). 
          Use orthodontic wax to secure the bracket in place until you can see your orthodontist. 
          If the bracket has come completely loose from the wire, remove the bracket and bring it with you to your appointment. </Text>
        </View>
        <View style={styles.faq}>
        <Text style={styles.question}>What foods should I avoid eating with braces?</Text>
          <Text style={styles.answer}>Crunchy and sticky foods such as nuts and bubble gum, hard candies like lollipops
           and candy canes can loosen brackets and wires which may cause delays in treatment.</Text>
           <Button
        title="Return to LogIn"
        onPress={() => navigation.navigate('LogIn')}
      />
        </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add6f4',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Optima',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Optima',
  },
  faqContainer: {
    marginTop: 30,
    width: '100%',
  },
  faqTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Optima',
  },
  faq: {
    marginBottom: 20,
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'Optima',
  },
  answer: {
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Optima',
  },
});

export default HomeScreen;