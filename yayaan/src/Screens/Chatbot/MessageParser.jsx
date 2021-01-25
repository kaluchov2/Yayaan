class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      
      const lowercase=message.toLowerCase()
      
      if(lowercase.includes("hola")){
        this.actionProvider.helloWorldHandler()
        }

      if(lowercase.includes("todos")){
        this.actionProvider.todosHandler();
      }

      if(lowercase.includes("menu")){
        this.actionProvider.menuHandler();
      }

      if(lowercase.includes("chiste")){
        this.actionProvider.handleChiste();
      }
      if(lowercase.includes("datoscuriosos")){
        this.actionProvider.handleDatosDeportes();
      }

      if(lowercase.includes("estres")){
        this.actionProvider.handleEstres();
      }

      if(lowercase.includes("resumendia")){
        this.actionProvider.handleresumen();
      }
    }

  }
  
  export default MessageParser;