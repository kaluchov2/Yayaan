class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    
    }
    helloWorldHandler=()=>{
      const message = this.createChatBotMessage("Hola, sigo aprendiendo")
      this.setChatbotMessage(message)
    }

    menuHandler=()=>{
      const message = this.createChatBotMessage("Los siguientes comandos tienen acciones predeterminadas; *datoscuriosos* *estres* *chiste* *resumendia*")
      this.setChatbotMessage(message)
    }

    todosHandler = () =>{
      const message = this.createChatBotMessage("Sure. Heres your todos",{
        widget: "todos",
      })
      this.setChatbotMessage(message)
    }

    handleJavascriptQuiz = () => {
      const message = this.createChatBotMessage(
        "Fantastic. Here is your quiz. Good luck!",
        {
          widget: "javascriptQuiz",
        }
      );
      this.setChatbotMessage(message);
    }

    handleNormalMood=()=>{
      const message = this.createChatBotMessage(
        "Pero siempre se puede estar mejor! Tengo estas actividades para ti",
        {
          widget:"opcionesOcio"
        }
      )
      this.setChatbotMessage(message)
    }

    handleDatosCuriosos=()=>{
      const message=this.createChatBotMessage(
        "Selecciona una categoria ;)",
        {
          widget:"opcionesDatos"
        }
      )
      this.setChatbotMessage(message)
    }
    handleDatosDeportes=()=>{
      const message = this.createChatBotMessage("Para los alpinistas, la “Zona de Muerte” en el Everest se encuentra en los últimos 850 metros, antes de llegar a la cima, pues es a partir de esa distancia que la mayoría de aventureros ha fallecido, muchos de ellos a causa de edemas cerebrales, los cuales pueden ser causados por el exceso de altura")
      this.setChatbotMessage(message)

    }

    handleEstres=()=>{
      console.log("doing something");
  const win = window.open("http://localhost:3000/estresact", "_blank");
  win.focus();
    }
    handleChiste=()=>{
      
      const message = this.createChatBotMessage("Mis chistes no son los mejores, ahi va uno", {
        widget:"jokes"
      }
      )
      this.setChatbotMessage(message)
    }

    handleresumen=()=>{
      const win = window.open("http://localhost:3000/resumen", "_blank");
  win.focus();

    }

    setChatbotMessage =(message)=>{
      this.setState(state=>({...state,messages:[...state.messages,message]}))
    }
  }
  
  export default ActionProvider;

