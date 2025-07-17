import React, { useState, useRef, useEffect } from 'react';
import {
  IonContent,
  IonPage,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonText,
  IonCard,
  IonCardContent,
  IonChip,
  IonTextarea,
  IonToast,
  IonAlert
} from '@ionic/react';
import { 
  send, 
  person, 
  flash, 
  codeSlash, 
  bulb, 
  bug, 
  help,
  copy,
  checkmark
} from 'ionicons/icons';
import './AIChat.css';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
  type?: 'text' | 'code' | 'suggestion';
}

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! 👋 Soy tu asistente de programación con IA. Puedo ayudarte con:\n\n• Explicar conceptos de Python\n• Revisar y corregir tu código\n• Resolver errores\n• Sugerir mejores prácticas\n\n¿En qué puedo ayudarte hoy?",
      isUser: false,
      timestamp: new Date(),
      type: 'text'
    }
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const contentRef = useRef<HTMLIonContentElement>(null);

  const quickQuestions = [
    { icon: bulb, text: "¿Cómo declaro una variable en Python?", color: "primary" },
    { icon: codeSlash, text: "Explícame los bucles for", color: "secondary" },
    { icon: bug, text: "¿Cómo debuggear mi código?", color: "warning" },
    { icon: help, text: "¿Qué son las funciones?", color: "success" }
  ];

  const simulateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('variable')) {
      return `🐍 **Declaración de Variables en Python**

En Python, declarar una variable es muy simple:

\`\`\`python
# Ejemplos de variables
nombre = "Juan"
edad = 25
altura = 1.75
es_estudiante = True
\`\`\`

**Puntos importantes:**
• No necesitas declarar el tipo de variable
• Python detecta automáticamente el tipo
• Los nombres de variables deben empezar con letra o _
• Son case-sensitive (nombre ≠ Nombre)

¿Quieres que te explique más sobre algún tipo específico de variable?`;
    }
    
    if (lowerMessage.includes('bucle') || lowerMessage.includes('for')) {
      return `🔄 **Bucles FOR en Python**

Los bucles for se usan para iterar sobre secuencias:

\`\`\`python
# Bucle sobre una lista
frutas = ["manzana", "banana", "cereza"]
for fruta in frutas:
    print(fruta)

# Bucle con range()
for i in range(5):
    print(f"Número: {i}")

# Bucle con enumerate()
for indice, fruta in enumerate(frutas):
    print(f"{indice}: {fruta}")
\`\`\`

**Conceptos clave:**
• for elemento in secuencia
• range(n) genera números de 0 a n-1
• enumerate() da índice y valor

¿Quieres ver ejemplos más avanzados?`;
    }
    
    if (lowerMessage.includes('debug') || lowerMessage.includes('error')) {
      return `🐛 **Debugging en Python**

Aquí tienes estrategias para debuggear tu código:

\`\`\`python
# 1. Usar print() para ver valores
def mi_funcion(x):
    print(f"Valor recibido: {x}")  # Debug
    resultado = x * 2
    print(f"Resultado: {resultado}")  # Debug
    return resultado

# 2. Usar assert para verificar condiciones
def dividir(a, b):
    assert b != 0, "No se puede dividir por cero"
    return a / b

# 3. Manejo de excepciones
try:
    resultado = dividir(10, 0)
except AssertionError as e:
    print(f"Error: {e}")
\`\`\`

**Herramientas útiles:**
• VS Code con Python extension
• pdb (Python debugger)
• Breakpoints en el IDE

¿Tienes algún error específico que quieras que revise?`;
    }
    
    if (lowerMessage.includes('función') || lowerMessage.includes('funciones')) {
      return `⚙️ **Funciones en Python**

Las funciones son bloques de código reutilizables:

\`\`\`python
# Función básica
def saludar(nombre):
    return f"Hola, {nombre}!"

# Función con parámetros por defecto
def presentarse(nombre, edad=18):
    return f"Soy {nombre} y tengo {edad} años"

# Función con múltiples parámetros
def calcular_area(largo, ancho):
    area = largo * ancho
    return area

# Ejemplos de uso
mensaje = saludar("Ana")
print(mensaje)  # Hola, Ana!

area = calcular_area(5, 3)
print(f"El área es: {area}")  # El área es: 15
\`\`\`

**Conceptos importantes:**
• def nombre_funcion(parametros):
• return devuelve un valor
• Los parámetros pueden tener valores por defecto
• Las funciones pueden llamar a otras funciones

¿Quieres aprender sobre funciones más avanzadas?`;
    }
    
    // Respuesta genérica
    return `🤖 He recibido tu mensaje: "${userMessage}"

Como soy una simulación de IA, puedo ayudarte con:

• **Conceptos básicos**: variables, tipos de datos, operadores
• **Estructuras de control**: if/else, bucles for/while
• **Funciones**: definición, parámetros, return
• **Debugging**: encontrar y corregir errores
• **Buenas prácticas**: código limpio y eficiente

¿Podrías ser más específico sobre qué tema te gustaría aprender? También puedes enviarme código para que lo revise! 💻`;
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      const userMessage: Message = {
        id: messages.length + 1,
        text: newMessage,
        isUser: true,
        timestamp: new Date(),
        type: 'text'
      };
      
      setMessages(prev => [...prev, userMessage]);
      setNewMessage('');
      setIsTyping(true);
      
      // Simular respuesta de IA
      setTimeout(() => {
        const aiResponse: Message = {
          id: messages.length + 2,
          text: simulateAIResponse(newMessage),
          isUser: false,
          timestamp: new Date(),
          type: 'text'
        };
        
        setMessages(prev => [...prev, aiResponse]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const sendQuickQuestion = (question: string) => {
    setNewMessage(question);
    setTimeout(() => sendMessage(), 100);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setToastMessage('Código copiado al portapapeles');
    setShowToast(true);
  };

  const formatMessage = (text: string) => {
    // Detectar bloques de código
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
    const inlineCodeRegex = /`([^`]+)`/g;
    
    let formatted = text;
    
    // Reemplazar bloques de código
    formatted = formatted.replace(codeBlockRegex, (match, lang, code) => {
      return `<div class="code-block">
        <div class="code-header">
          <span class="language">${lang || 'python'}</span>
          <button class="copy-btn" onclick="copyCode('${code.replace(/'/g, "\\'")}')">
            <ion-icon name="copy"></ion-icon>
          </button>
        </div>
        <pre><code>${code}</code></pre>
      </div>`;
    });
    
    // Reemplazar código inline
    formatted = formatted.replace(inlineCodeRegex, '<code class="inline-code">$1</code>');
    
    // Convertir saltos de línea a <br>
    formatted = formatted.replace(/\n/g, '<br>');
    
    return formatted;
  };

  useEffect(() => {
    // Scroll to bottom when new message is added
    contentRef.current?.scrollToBottom();
  }, [messages]);

  return (
    <IonPage>
      <IonContent fullscreen ref={contentRef}>
        <div className="chat-container">
          {/* Quick Questions */}
          <div className="quick-questions">
            <IonText>
              <h3>Preguntas rápidas:</h3>
            </IonText>
            <div className="quick-questions-grid">
              {quickQuestions.map((question, index) => (
                <IonChip
                  key={index}
                  color={question.color}
                  onClick={() => sendQuickQuestion(question.text)}
                  className="quick-question-chip"
                >
                  <IonIcon icon={question.icon} />
                  <IonLabel>{question.text}</IonLabel>
                </IonChip>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="messages-container">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.isUser ? 'user-message' : 'ai-message'}`}
              >
                <div className="message-avatar">
                  <IonIcon icon={message.isUser ? person : flash} />
                </div>
                <div className="message-content">
                  <div className="message-bubble">
                    <div
                      className="message-text"
                      dangerouslySetInnerHTML={{ __html: formatMessage(message.text) }}
                    />
                    <div className="message-time">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message ai-message">
                <div className="message-avatar">
                  <IonIcon icon={flash} />
                </div>
                <div className="message-content">
                  <div className="message-bubble">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Message Input */}
          <div className="message-input">
            <IonItem>
              <IonTextarea
                value={newMessage}
                onIonInput={(e) => setNewMessage(e.detail.value!)}
                placeholder="Escribe tu pregunta aquí..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
                rows={1}
                autoGrow
              />
              <IonButton
                fill="clear"
                slot="end"
                onClick={sendMessage}
                disabled={!newMessage.trim()}
              >
                <IonIcon icon={send} />
              </IonButton>
            </IonItem>
          </div>
        </div>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default AIChat;
