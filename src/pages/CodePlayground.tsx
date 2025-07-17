import React, { useState } from 'react';
import {
  IonContent,
  IonPage,
  IonButton,
  IonIcon,
  IonTextarea,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonChip,
  IonLabel,
  IonToast,
  IonSelect,
  IonSelectOption,
  IonItem,
  IonModal,
  IonList
} from '@ionic/react';
import { 
  playCircle, 
  save, 
  trash, 
  copy, 
  share, 
  download,
  bulb,
  close,
  checkmark,
  code,
  terminal
} from 'ionicons/icons';
import './CodePlayground.css';

interface CodeExample {
  id: number;
  title: string;
  code: string;
  language: string;
  description: string;
  category: string;
}

const CodePlayground: React.FC = () => {
  const [code, setCode] = useState(`# ¡Bienvenido al Playground de Python! 🐍
# Aquí puedes escribir y probar código Python

# Ejemplo: Calculadora simple
def calculadora(a, b, operacion):
    if operacion == "suma":
        return a + b
    elif operacion == "resta":
        return a - b
    elif operacion == "multiplicacion":
        return a * b
    elif operacion == "division":
        return a / b if b != 0 else "Error: División por cero"
    else:
        return "Operación no válida"

# Prueba la calculadora
resultado = calculadora(10, 5, "suma")
print(f"10 + 5 = {resultado}")

resultado = calculadora(10, 3, "multiplicacion")
print(f"10 * 3 = {resultado}")

# Tu código aquí...
`);

  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showExamples, setShowExamples] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('python');

  const codeExamples: CodeExample[] = [
    {
      id: 1,
      title: "Hola Mundo",
      code: `# El clásico primer programa
print("¡Hola, mundo!")
print("Bienvenido a Python")

# Variables básicas
nombre = "Programador"
print(f"Hola, {nombre}!")`,
      language: "python",
      description: "Tu primer programa en Python",
      category: "Básico"
    },
    {
      id: 2,
      title: "Lista de Tareas",
      code: `# Lista de tareas simple
tareas = []

def agregar_tarea(tarea):
    tareas.append(tarea)
    print(f"Tarea agregada: {tarea}")

def mostrar_tareas():
    print("\\n--- Lista de Tareas ---")
    for i, tarea in enumerate(tareas, 1):
        print(f"{i}. {tarea}")

def completar_tarea(indice):
    if 0 <= indice < len(tareas):
        tarea = tareas.pop(indice)
        print(f"Tarea completada: {tarea}")
    else:
        print("Tarea no encontrada")

# Ejemplos de uso
agregar_tarea("Estudiar Python")
agregar_tarea("Hacer ejercicio")
agregar_tarea("Leer un libro")
mostrar_tareas()

completar_tarea(0)
mostrar_tareas()`,
      language: "python",
      description: "Gestor simple de tareas",
      category: "Intermedio"
    },
    {
      id: 3,
      title: "Juego de Adivinanza",
      code: `import random

def juego_adivinanza():
    numero_secreto = random.randint(1, 100)
    intentos = 0
    max_intentos = 7
    
    print("¡Juego de Adivinanza!")
    print(f"Adivina el número entre 1 y 100")
    print(f"Tienes {max_intentos} intentos")
    
    while intentos < max_intentos:
        try:
            # Simulamos entrada del usuario
            if intentos == 0:
                adivinanza = 50
            elif intentos == 1:
                adivinanza = 25 if numero_secreto < 50 else 75
            else:
                adivinanza = random.randint(1, 100)
            
            print(f"\\nIntento {intentos + 1}: {adivinanza}")
            intentos += 1
            
            if adivinanza == numero_secreto:
                print(f"¡Felicidades! El número era {numero_secreto}")
                print(f"Lo adivinaste en {intentos} intentos")
                break
            elif adivinanza < numero_secreto:
                print("El número es mayor")
            else:
                print("El número es menor")
        
        except ValueError:
            print("Por favor, ingresa un número válido")
    
    if intentos == max_intentos and adivinanza != numero_secreto:
        print(f"\\nGame Over! El número era {numero_secreto}")

# Ejecutar el juego
juego_adivinanza()`,
      language: "python",
      description: "Juego interactivo de adivinanza",
      category: "Intermedio"
    },
    {
      id: 4,
      title: "Analizador de Texto",
      code: `def analizar_texto(texto):
    """
    Analiza un texto y devuelve estadísticas
    """
    # Estadísticas básicas
    palabras = texto.split()
    caracteres = len(texto)
    caracteres_sin_espacios = len(texto.replace(' ', ''))
    lineas = len(texto.split('\\n'))
    
    # Palabras más comunes
    frecuencia_palabras = {}
    for palabra in palabras:
        palabra_limpia = palabra.lower().strip('.,!?;:"')
        frecuencia_palabras[palabra_limpia] = frecuencia_palabras.get(palabra_limpia, 0) + 1
    
    # Ordenar por frecuencia
    palabras_comunes = sorted(frecuencia_palabras.items(), key=lambda x: x[1], reverse=True)
    
    # Mostrar resultados
    print("=== ANÁLISIS DE TEXTO ===")
    print(f"Palabras: {len(palabras)}")
    print(f"Caracteres: {caracteres}")
    print(f"Caracteres sin espacios: {caracteres_sin_espacios}")
    print(f"Líneas: {lineas}")
    print(f"Promedio de palabras por línea: {len(palabras) / lineas:.1f}")
    
    print("\\n--- Palabras más comunes ---")
    for palabra, frecuencia in palabras_comunes[:5]:
        print(f"{palabra}: {frecuencia}")
    
    return {
        'palabras': len(palabras),
        'caracteres': caracteres,
        'lineas': lineas,
        'palabras_comunes': palabras_comunes[:5]
    }

# Ejemplo de uso
texto_ejemplo = """
Python es un lenguaje de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código.
Se trata de un lenguaje de programación multiparadigma, ya que soporta orientación a objetos, programación imperativa y, en menor medida, programación funcional.
Es un lenguaje interpretado, dinámico y multiplataforma.
"""

resultado = analizar_texto(texto_ejemplo)`,
      language: "python",
      description: "Análisis de texto con estadísticas",
      category: "Avanzado"
    }
  ];

  const runCode = () => {
    setIsRunning(true);
    setOutput('');
    
    // Simular ejecución de código
    setTimeout(() => {
      const simulatedOutput = `Ejecutando código...

10 + 5 = 15
10 * 3 = 30

Código ejecutado correctamente! ✅

Tiempo de ejecución: 0.045 segundos
Memoria utilizada: 12.3 MB

¡Genial! Tu código se ejecutó sin errores.`;
      
      setOutput(simulatedOutput);
      setIsRunning(false);
      setToastMessage('Código ejecutado correctamente!');
      setShowToast(true);
    }, 2000);
  };

  const clearCode = () => {
    setCode('# Escribe tu código Python aquí...\n');
    setOutput('');
    setToastMessage('Código limpiado');
    setShowToast(true);
  };

  const saveCode = () => {
    // Simular guardado
    setToastMessage('Código guardado en tu dispositivo');
    setShowToast(true);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setToastMessage('Código copiado al portapapeles');
    setShowToast(true);
  };

  const shareCode = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Mi código Python',
        text: code,
      });
    } else {
      copyCode();
    }
  };

  const loadExample = (example: CodeExample) => {
    setCode(example.code);
    setOutput('');
    setShowExamples(false);
    setToastMessage(`Ejemplo "${example.title}" cargado`);
    setShowToast(true);
  };

  const askAIHelp = () => {
    setToastMessage('Enviando código a la IA para revisión...');
    setShowToast(true);
    // Aquí se redirigiría al chat de IA con el código
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="playground-container">
          {/* Toolbar */}
          <IonCard className="toolbar-card">
            <IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol size="auto">
                    <IonItem>
                      <IonSelect 
                        value={selectedLanguage} 
                        onIonChange={(e) => setSelectedLanguage(e.detail.value)}
                      >
                        <IonSelectOption value="python">Python</IonSelectOption>
                        <IonSelectOption value="javascript">JavaScript (Próximamente)</IonSelectOption>
                      </IonSelect>
                    </IonItem>
                  </IonCol>
                  <IonCol>
                    <div className="toolbar-buttons">
                      <IonButton 
                        fill="solid" 
                        color="success" 
                        onClick={runCode}
                        disabled={isRunning}
                      >
                        <IonIcon icon={playCircle} slot="start" />
                        {isRunning ? 'Ejecutando...' : 'Ejecutar'}
                      </IonButton>
                      
                      <IonButton fill="outline" onClick={() => setShowExamples(true)}>
                        <IonIcon icon={code} slot="start" />
                        Ejemplos
                      </IonButton>
                      
                      <IonButton fill="clear" onClick={saveCode}>
                        <IonIcon icon={save} />
                      </IonButton>
                      
                      <IonButton fill="clear" onClick={copyCode}>
                        <IonIcon icon={copy} />
                      </IonButton>
                      
                      <IonButton fill="clear" onClick={shareCode}>
                        <IonIcon icon={share} />
                      </IonButton>
                      
                      <IonButton fill="clear" color="danger" onClick={clearCode}>
                        <IonIcon icon={trash} />
                      </IonButton>
                    </div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>

          {/* Code Editor */}
          <IonGrid>
            <IonRow>
              <IonCol size="12" sizeLg="6">
                <IonCard className="editor-card">
                  <IonCardHeader>
                    <IonCardTitle>
                      <IonIcon icon={code} /> Editor de Código
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonTextarea
                      value={code}
                      onIonInput={(e) => setCode(e.detail.value!)}
                      className="code-editor"
                      placeholder="Escribe tu código Python aquí..."
                      rows={20}
                    />
                    <div className="editor-actions">
                      <IonButton fill="outline" size="small" onClick={askAIHelp}>
                        <IonIcon icon={bulb} slot="start" />
                        Pedir ayuda a la IA
                      </IonButton>
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              
              <IonCol size="12" sizeLg="6">
                <IonCard className="output-card">
                  <IonCardHeader>
                    <IonCardTitle>
                      <IonIcon icon={terminal} /> Salida
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <div className="output-area">
                      {isRunning ? (
                        <div className="loading-output">
                          <div className="loading-spinner"></div>
                          <IonText>Ejecutando código...</IonText>
                        </div>
                      ) : output ? (
                        <pre className="output-text">{output}</pre>
                      ) : (
                        <IonText color="medium">
                          <p>La salida de tu código aparecerá aquí...</p>
                        </IonText>
                      )}
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>

          {/* Tips */}
          <IonCard className="tips-card">
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={bulb} /> Tips del Playground
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol size="12" sizeMd="6">
                    <div className="tip">
                      <h4>🚀 Atajos de teclado</h4>
                      <ul>
                        <li>Ctrl + Enter: Ejecutar código</li>
                        <li>Ctrl + S: Guardar código</li>
                        <li>Ctrl + A: Seleccionar todo</li>
                      </ul>
                    </div>
                  </IonCol>
                  <IonCol size="12" sizeMd="6">
                    <div className="tip">
                      <h4>💡 Consejos</h4>
                      <ul>
                        <li>Usa print() para depurar tu código</li>
                        <li>Prueba con diferentes valores</li>
                        <li>Pide ayuda a la IA si tienes dudas</li>
                      </ul>
                    </div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
        </div>

        {/* Examples Modal */}
        <IonModal isOpen={showExamples} onDidDismiss={() => setShowExamples(false)}>
          <IonContent>
            <div className="examples-container">
              {/* Close button */}
              <div style={{ textAlign: 'right', padding: '10px' }}>
                <IonButton fill="clear" onClick={() => setShowExamples(false)}>
                  <IonIcon icon={close} />
                </IonButton>
              </div>
              
              <IonList>
                {codeExamples.map((example) => (
                  <IonItem key={example.id} button onClick={() => loadExample(example)}>
                    <IonLabel>
                      <h2>{example.title}</h2>
                      <p>{example.description}</p>
                      <IonChip color="primary">
                        <IonLabel>{example.category}</IonLabel>
                      </IonChip>
                    </IonLabel>
                  </IonItem>
                ))}
              </IonList>
            </div>
          </IonContent>
        </IonModal>

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

export default CodePlayground;
