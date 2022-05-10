import { styled } from '@stitches/react';
import  { useEffect, useReducer } from 'react';
import  Grid  from './components/Grid';
import Navbar from './components/Navbar';
import {WordleContext, initialState} from './context/wordleContext'

const Container = styled('div', {
  height:'100vh',
  width:'100vw',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'column'
})

const wordReducer= (prevWord: string, key:string)=>{
  if (key === "Backspace"){
    return prevWord.slice(0,-1)
  }
  if (key === "Enter"){
    if (prevWord.length < initialState.secretWord.length){
      console.log('mot trop court');
      
      return prevWord;
    }
    if (prevWord != initialState.secretWord){
      console.log('monumentale erreur');
      return prevWord;
    }
    console.log("bravo");
    return prevWord
    
    
  }
  if(!(/^[a-z]$/i.test(key))){
    return prevWord
  }
  const newWord= `${prevWord}${key}`
  const isWordLengthOk = newWord.length < initialState.secretWord.length +1;
  if (isWordLengthOk){
    return newWord;
 
    
  }
return prevWord
}

function App() {
  const [word, setWord]= useReducer(wordReducer, '');

  useEffect(()=>{
    const handleKeyDown = (event:KeyboardEvent)=> setWord(event.key)
    document.addEventListener('keydown',handleKeyDown)
    return ()=> document.removeEventListener('keydown', handleKeyDown)
  },[])
  console.log(word);
  
  return (
    <WordleContext.Provider value={{ ...initialState , word}} >
      <Navbar/>
      <Container>
      <Grid/>
    </Container>
    </WordleContext.Provider>
    
  );
}

export default App;
