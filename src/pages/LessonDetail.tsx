import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon,
  IonText,
  IonCard,
  IonCardContent,
  IonTextarea,
  IonToast,
  IonBackButton,
  IonButtons,
  IonChip,
  IonLabel
} from '@ionic/react';
import { 
  checkmarkCircle, 
  codeSlash, 
  chevronBackOutline,
  timeOutline,
  bookOutline
} from 'ionicons/icons';
import { useParams, useHistory } from 'react-router-dom';
import './LessonDetail.css';

interface Lesson {
  id: number;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number;
  completed: boolean;
  content: string;
  codeExample: string;
  exercise: string;
  expectedOutput: string;
}

interface LessonDetailParams {
  lessonId: string;
  language: string;
}

const LessonDetail: React.FC = () => {
  const { lessonId, language } = useParams<LessonDetailParams>();
  const history = useHistory();
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [userCode, setUserCode] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Lecciones de ejemplo (deberías obtenerlas de un servicio o estado global)
  const pythonLessons: Lesson[] = [
    {
      id: 1,
      title: "Introducción a Python",
      description: "Conceptos básicos de Python y sintaxis fundamental",
      difficulty: 'beginner',
      duration: 15,
      completed: false,
      content: `Python es un lenguaje de programación interpretado, interactivo y orientado a objetos.
      
Características principales:
- Sintaxis simple y legible
- Interpretado (no requiere compilación)
- Multiplataforma
- Gran biblioteca estándar
- Comunidad activa

Python es ideal para principiantes por su sintaxis clara.`,
      codeExample: `# Mi primer programa en Python
print("¡Hola, mundo!")
print("Bienvenido a Python")

# También puedes usar variables
nombre = "Python"
print(f"¡Hola, {nombre}!")`,
      exercise: `Crea un programa que imprima "¡Hola, Python!" en la consola.
También incluye una línea que imprima tu nombre.`,
      expectedOutput: "¡Hola, Python!\n[Tu nombre]"
    },
    {
      id: 2,
      title: "Variables y Tipos de Datos",
      description: "Aprende sobre variables, tipos primitivos y declaraciones",
      difficulty: 'beginner',
      duration: 20,
      completed: false,
      content: `Las variables en Python son contenedores para almacenar valores de datos.

Python tiene diferentes tipos de datos:
- int: números enteros
- float: números decimales
- str: cadenas de texto
- bool: verdadero/falso
- list: listas
- dict: diccionarios`,
      codeExample: `# Variables numéricas
edad = 25
altura = 1.75
precio = 99.99

# Variables de texto
nombre = "Juan"
apellido = "Pérez"

# Variables booleanas
es_estudiante = True
tiene_trabajo = False

# Mostrar información
print(f"Nombre: {nombre} {apellido}")
print(f"Edad: {edad}")
print(f"Altura: {altura}m")`,
      exercise: `Crea variables para tu información personal:
- nombre (string)
- edad (entero)
- altura (decimal)
- es_programador (booleano)

Luego imprime toda esta información de forma organizada.`,
      expectedOutput: "Información personal con variables correctamente definidas"
    }
  ];

  const javaLessons: Lesson[] = [
    {
      id: 1,
      title: "Introducción a Java",
      description: "Conceptos básicos de Java y sintaxis fundamental",
      difficulty: 'beginner',
      duration: 18,
      completed: false,
      content: `Java es un lenguaje de programación orientado a objetos, robusto y seguro.

Características principales:
- Orientado a objetos
- Multiplataforma (Write Once, Run Anywhere)
- Fuertemente tipado
- Manejo automático de memoria
- Gran ecosistema de bibliotecas`,
      codeExample: `public class HolaMundo {
    public static void main(String[] args) {
        System.out.println("¡Hola, mundo!");
        System.out.println("Bienvenido a Java");
        
        // Variables en Java
        String nombre = "Java";
        System.out.println("¡Hola, " + nombre + "!");
    }
}`,
      exercise: `Crea un programa Java que imprima "¡Hola, Java!" en la consola.
También incluye una línea que imprima tu nombre.`,
      expectedOutput: "¡Hola, Java!\n[Tu nombre]"
    }
  ];

  useEffect(() => {
    const lessons = language === 'python' ? pythonLessons : javaLessons;
    const foundLesson = lessons.find(l => l.id === parseInt(lessonId));
    if (foundLesson) {
      setLesson(foundLesson);
    }
  }, [lessonId, language]);

  const handleRunCode = () => {
    if (userCode.trim()) {
      setToastMessage('Código ejecutado correctamente!');
      setShowToast(true);
      // Aquí podrías agregar lógica para validar el código
    } else {
      setToastMessage('Por favor, escribe algo de código antes de ejecutar.');
      setShowToast(true);
    }
  };

  const handleCompleteLesson = () => {
    setToastMessage('¡Lección completada! Excelente trabajo.');
    setShowToast(true);
    
    // Aquí podrías actualizar el estado global o localStorage
    setTimeout(() => {
      history.goBack();
    }, 1500);
  };

  if (!lesson) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
            <IonTitle>Lección no encontrada</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div className="lesson-detail-container">
            <IonText>
              <h2>Lección no encontrada</h2>
              <p>No se pudo encontrar la lección solicitada.</p>
            </IonText>
          </div>
        </IonContent>
      </IonPage>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'success';
      case 'intermediate': return 'warning';
      case 'advanced': return 'danger';
      default: return 'medium';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'Principiante';
      case 'intermediate': return 'Intermedio';
      case 'advanced': return 'Avanzado';
      default: return 'Desconocido';
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{lesson.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="lesson-detail-container">
          {/* Header de la lección */}
          <div className="lesson-header">
            <IonText>
              <h1>{lesson.title}</h1>
              <p className="lesson-description">{lesson.description}</p>
            </IonText>
            <div className="lesson-meta">
              <IonChip color={getDifficultyColor(lesson.difficulty)}>
                <IonLabel>{getDifficultyLabel(lesson.difficulty)}</IonLabel>
              </IonChip>
              <IonChip color="medium">
                <IonIcon icon={timeOutline} />
                <IonLabel>{lesson.duration} min</IonLabel>
              </IonChip>
            </div>
          </div>

          {/* Contenido teórico */}
          <IonCard className="theory-card">
            <IonCardContent>
              <div className="theory-header">
                <IonIcon icon={bookOutline} />
                <IonText>
                  <h3>Teoría</h3>
                </IonText>
              </div>
              <div className="theory-content">
                <pre>{lesson.content}</pre>
              </div>
            </IonCardContent>
          </IonCard>

          {/* Ejemplo de código */}
          <IonCard className="code-example-card">
            <IonCardContent>
              <div className="code-header">
                <IonIcon icon={codeSlash} />
                <IonText>
                  <h3>Ejemplo de código</h3>
                </IonText>
              </div>
              <div className="code-example">
                <pre><code>{lesson.codeExample}</code></pre>
              </div>
            </IonCardContent>
          </IonCard>

          {/* Ejercicio */}
          <IonCard className="exercise-card">
            <IonCardContent>
              <div className="exercise-header">
                <IonIcon icon={checkmarkCircle} />
                <IonText>
                  <h3>Ejercicio</h3>
                </IonText>
              </div>
              <div className="exercise-content">
                <p>{lesson.exercise}</p>
                <IonTextarea
                  value={userCode}
                  placeholder="Escribe tu código aquí..."
                  onIonInput={(e) => setUserCode(e.detail.value!)}
                  className="code-input"
                  rows={8}
                />
                <div className="exercise-actions">
                  <IonButton expand="block" onClick={handleRunCode} color="primary">
                    <IonIcon icon={codeSlash} slot="start" />
                    Ejecutar código
                  </IonButton>
                  <IonButton expand="block" onClick={handleCompleteLesson} color="success">
                    <IonIcon icon={checkmarkCircle} slot="start" />
                    Completar lección
                  </IonButton>
                </div>
              </div>
            </IonCardContent>
          </IonCard>
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

export default LessonDetail;
