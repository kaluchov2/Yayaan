// Config starter code
import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import Avatar from "./Avatar";
import Todos from "./todos";
import Options from '../Options/Options'
import Quiz from '../Quiz/Quiz';
import Ocio from '../Ocio/Ocio'
import Jokes from '../Jokes'
import OpcionesOcio from '../OpcionesOcio/OpcionesOcio'
const config = {
  initialMessages: [createChatBotMessage(`Hola de nuevo! Recuerda que puedes escribir "menu" para que te muestre las distintas opciones con las que cuento. Como ha ido tu dia?`,{
    widget: "options",
  }),
],
  botName: "Yayaan",
  customComponents: {
    botAvatar: (props) => <Avatar{...props}/>

  },
  customStyles: {
    // Overrides the chatbot message styles
    botMessageBox: {
      backgroundColor: "#29B6F6",
    },
    // Overrides the chat button styles
    chatButton: {
      backgroundColor: "#A1C9F1",
    },

  },
  state:{
      todos:[]
  },
  widgets:[{
              widgetName: "todos",
              widgetFunc:(props)=> <Todos {...props}/>,
              mapStateToProps:["todos"],
  },
  {
    widgetName: "options",
    widgetFunc:(props)=> <Options {...props}/>,
    
  },
  {
    widgetName: "javascriptQuiz",
    widgetFunc: (props) => <Quiz{...props}/>,
     props: {
      questions: [
        {
          question: "What is closure?",
          answer:
            "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
          id: 1,
        },
        {
          question: "Explain prototypal inheritance",
          answer:
            "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
          id: 2,
        },
      ],
    },
  },{
    widgetName: "opcionesOcio",
    widgetFunc:(props)=><Ocio{...props}/>

  },{
    widgetName: "opcionesDatos",
    widgetFunc:(props)=><OpcionesOcio{...props}/>
  },
  {
    widgetName: "jokes",
    widgetFunc: (props) => <Jokes{...props}/>,
     props: {
      questions: [
        {
          question: "¿Cómo maldice un pollito a otro pollito?",
          answer:
            "¡Caldito seas!.",
          id: 1,
        },
        {
          question: " ¡Soldado! Ayer no lo vi en la clase de camuflaje.",
          answer:
            " ¡Gracias capitán!",
          id: 2,
        },
      ],
    }

  }



]
}

export default config