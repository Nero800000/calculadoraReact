import React, {useState} from 'react'
import './App.css'
// margin-left: 234px;
//margin-left: 155px;
function App() {
  const [num, setNum] = useState(0)
  const [sinal, setSinal] = useState(false)
  const [operation,setOperation] = useState(false)

 
  const handleclick = (e) => {
    e.preventDefault()
       
    
      setNum(e.target.innerHTML )


   


      if(num) {
     setNum( num + e.target.innerHTML )
    
    

      }
     
    
     
    

  }
 const  clear = (e) => {
    e.preventDefault()
    setNum(0)
 }

const soma = (e) => {
 e.preventDefault()
 setSinal('+')
 setOperation(num)
 setNum(0)
 

 
}
const multiplicar = (e) => {
  e.preventDefault()
  setSinal('x')
  setOperation(num)
  setNum(0)
  
 
  
 }
 const subtracao = (e) => {
  e.preventDefault()
  setSinal('-')
  setOperation(num)
  setNum(0)
  
 
  
 }
 const divisao = (e) => {
  e.preventDefault()
  setSinal('/')
  setOperation(num)
  setNum(0)
  
 
  
 }
 const porcentagem = (e) => {
  e.preventDefault()
  setSinal('%')
  setOperation(num)
  setNum(0)
  
 
  
 }

const reseultado = (e) => {
  e.preventDefault()
    if(operation && sinal === '+') {
      const numero1 = parseFloat(num)
      const numero2 = parseFloat(operation)
      const reseultado = numero1 + numero2
      setNum(reseultado)
    }
    if(operation && sinal === 'x') {
      const numero1 = parseFloat(num)
      const numero2 = parseFloat(operation)
      const reseultado = numero1 * numero2
      setNum(reseultado)
    }
    if(operation && sinal === '-') {
      const numero1 = parseFloat(num)
      const numero2 = parseFloat(operation)
      const reseultado = numero2 - numero1
      setNum(reseultado)
    
    }
    if(operation && sinal === '/') {
      const numero1 = parseFloat(num)
      const numero2 = parseFloat(operation)
      const reseultado = numero2 / numero1
      setNum(reseultado)
  
    }
    if(operation && sinal === '%') {
      const numero1 = parseFloat(num)
      const numero2 = parseFloat(operation)
      const valor = numero2 * numero1
      const resultado = valor / 100
      setNum(resultado)
  
    }

}





  
  return (
    <div className="App">
      
         <div className='main'>
         <input value={num} />
            <div className="calculadora"> 
            <button className='apagar2' onClick={clear} >clear</button>
            <button className='apagar1' onClick={divisao}>/</button>
            <button className='apagar' onClick={porcentagem}>%</button>
            <br></br>  
            <button onClick={handleclick}>7</button>
            <button onClick={handleclick}>8</button>
            <button onClick={handleclick}>9</button>
            <button onClick={multiplicar} >x</button>
            <br></br>
            <button onClick={handleclick}>4</button>
            <button onClick={handleclick}>5</button>
            <button onClick={handleclick}>6</button>
            <button onClick={subtracao}>-</button>
            <br></br>
            <button onClick={handleclick}>1</button>
            <button onClick={handleclick}>2</button>
            <button onClick={handleclick}>3</button>
            <button onClick={soma}>+</button>
            <br></br>
            <button onClick={handleclick}>N</button>
            <button onClick={handleclick}>0</button>
            <button onClick={handleclick}>.</button>
            <button onClick={reseultado}>=</button>
         </div>
         </div>
     
    </div>
  );
  }
  
export default App;
