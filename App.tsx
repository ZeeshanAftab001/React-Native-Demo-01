import React, { Component } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import Card from './components/Card'
import ScrollCard from './components/ScrollCard'
import ImageCard from './components/ImageCard'
import List from './components/List'
import PasswordGenerator from './components/passwordGenerator'
import Form from './components/Form'

export default class App extends Component {
  render() {
    return (
      <View>
        <SafeAreaView>
        <ScrollView>
          <Card />
          <ScrollCard />
          <ImageCard />
          <List />
          <PasswordGenerator />
          <Form />
        </ScrollView>
        </SafeAreaView>
      </View>
    )
  }
}
