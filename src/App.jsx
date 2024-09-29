import { Fragment } from 'react'
import Card from './components/Card'
import Paragrafo from './components/Paragrafo'
import Button from './components/Button'
import CardZero from './components/CardZero'


export default function App() {

  return (
    <>
      <Card title = "Igor Silva"/>
      <Paragrafo title = "Developer REACT | JavaScript | HTML | CSS"/>
      <Paragrafo title = "+5514981745864" />
      <Paragrafo title = "igor_mscsilva@outlook.com"/>
      <CardZero
      gitHubUrl="https://github.com/igor-mscsilva"
      linkedinUrl="https://www.linkedin.com/in/igor-silva-7b9079207/"
      twitterUrl="https://twitter.com"
      />
      
      
    </>
  )
}

