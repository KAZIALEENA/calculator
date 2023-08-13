import './App.css';
import React, {useState} from 'react'

function App() {

    const handleUpClick = ()=>{

        console.log("Button clicked");
        setText("")
    }

    const handleBtn = (input) => {
        const buttonText = input.target.innerText;
    
        switch (buttonText) {
            case '+/-':
              // Handle changing sign
              const updatedText = text.startsWith('-') ? text.substring(1) : `-${text}`;
              setText(updatedText);
              break;
            case '%':
              // Handle percentage calculation
              const percentValue = parseFloat(text) / 100;
              setText(percentValue.toString());
              break;
            
            case '+':
                setText(text + buttonText);
                break;
            case '-':
                setText(text + buttonText);
                break;
            case '*':
                setText(text + buttonText);
                break;
            case '/':
                if (text.endsWith('+') || text.endsWith('-') || text.endsWith('*') || text.endsWith('/')) {
                    // Replace the last operator with the new one
                    const newText = text.slice(0, -1) + buttonText;
                    setText(newText);
                  } else {
                    setText(text + buttonText);
                  }
                  break;
            case '.':
              // Handle decimal point
              if (!text.includes('.')) {
                setText(text + buttonText);
              }
              break;
            default:
              // Handle numbers
              setText(text === '0' ? buttonText : text + buttonText);
              break;
          }
        }
      
    
    const handleonChange = (event)=>{
        setText(event.target.value)
    }

    const handleResult = () => {
        try {
          const result = eval(text); // Use caution with eval due to security risks
          setText(result.toString());
        } catch (error) {
          setText('Error');
        }
      }
    const [text, setText] = useState('0')
  return (
   <>
   
   <section className="calculadora">
   <input type="text" className="pantalla" id="result" value={text} onChange={handleonChange}/>
   <button className="tecla especial" onClick={handleUpClick}>AC</button>
   <button className="tecla especial" onClick={handleBtn}>+/-</button>
   <button className="tecla especial" onClick={handleBtn} id=" ">%</button>
   <button className="tecla signo"  onClick={handleBtn} id=" ">/</button>
   <button className="tecla numero" onClick={handleBtn} id="boton_7">7</button>
   <button className="tecla numero" onClick={handleBtn} id="boton_7">8</button>
   <button className="tecla numero" onClick={handleBtn} id="boton_9">9</button>
   <button className="tecla signo"  onClick={handleBtn} id=" ">*</button>
   <button className="tecla numero" onClick={handleBtn} id="boton_4">4</button>
   <button className="tecla numero" onClick={handleBtn} id="boton_5">5</button>
   <button className="tecla numero" onClick={handleBtn} id="boton_6">6</button>
   <button className="tecla signo"  onClick={handleBtn} id=" ">-</button>
   <button className="tecla numero" onClick={handleBtn} id="boton_1">1</button>
   <button className="tecla numero" onClick={handleBtn} id="boton_2">2</button>
   <button className="tecla numero" onClick={handleBtn} id="boton_3">3</button>
   <button className="tecla signo"  onClick={handleBtn} id=" ">+</button>
   <button className="tecla cero"  onClick={handleBtn} id="boton_0">0</button>
   <button className="tecla numero" onClick={handleBtn}>.</button>
   <button className="tecla signo"  onClick={handleResult} id=" ">=</button>
</section>

   </>
  );
}

export default App;
