import React, { useState } from 'react';
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonChip,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonToast,
  IonSegment,
  IonSegmentButton,
  IonBadge,
  IonProgressBar
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { 
  checkmarkCircle, 
  playCircle, 
  codeSlash, 
  trophyOutline,
  bookOutline,
  bulbOutline,
  chevronForwardOutline,
  timeOutline
} from 'ionicons/icons';
import './PythonLearning.css';

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

const PythonLearning: React.FC = () => {
  const history = useHistory();
  const [selectedDifficulty, setSelectedDifficulty] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);

  const lessons: Lesson[] = [
    // Principiante
    {
      id: 1,
      title: "Introducción a Python",
      description: "Conceptos básicos de Python y sintaxis fundamental",
      difficulty: 'beginner',
      duration: 15,
      completed: false,
      content: `Python es un lenguaje de programación interpretado, interactivo y orientado a objetos.`,
      codeExample: `print("¡Hola, mundo!")`,
      exercise: `Crea un programa que imprima "¡Hola, Python!" en la consola.`,
      expectedOutput: "¡Hola, Python!"
    },
    {
      id: 2,
      title: "Variables y Tipos de Datos",
      description: "Aprende sobre variables, tipos primitivos y declaraciones",
      difficulty: 'beginner',
      duration: 20,
      completed: false,
      content: `Las variables en Python son contenedores para almacenar valores.`,
      codeExample: `nombre = "Juan"\nedad = 25`,
      exercise: `Crea variables para tu nombre y edad.`,
      expectedOutput: "Variables correctamente definidas"
    },
    {
      id: 3,
      title: "Operadores y Expresiones",
      description: "Operadores aritméticos, lógicos y de comparación",
      difficulty: 'beginner',
      duration: 18,
      completed: false,
      content: `Los operadores en Python nos permiten realizar operaciones.`,
      codeExample: `a = 10\nb = 5\nresultado = a + b`,
      exercise: `Realiza operaciones matemáticas básicas.`,
      expectedOutput: "Operaciones correctas"
    },
    // Intermedio
    {
      id: 4,
      title: "Estructuras de Control",
      description: "Condicionales y bucles en Python",
      difficulty: 'intermediate',
      duration: 25,
      completed: false,
      content: `Las estructuras de control permiten dirigir el flujo del programa.`,
      codeExample: `if edad >= 18:\n    print("Eres mayor de edad")`,
      exercise: `Crea un programa con condicionales.`,
      expectedOutput: "Condicionales funcionando"
    },
    {
      id: 5,
      title: "Listas y Tuplas",
      description: "Manejo de colecciones de datos",
      difficulty: 'intermediate',
      duration: 22,
      completed: false,
      content: `Las listas y tuplas son colecciones ordenadas de elementos.`,
      codeExample: `lista = [1, 2, 3]\ntupla = (1, 2, 3)`,
      exercise: `Crea y manipula listas y tuplas.`,
      expectedOutput: "Colecciones creadas correctamente"
    },
    // Avanzado
    {
      id: 6,
      title: "Funciones",
      description: "Definición y uso de funciones",
      difficulty: 'advanced',
      duration: 30,
      completed: false,
      content: `Las funciones nos permiten reutilizar código.`,
      codeExample: `def saludar(nombre):\n    return f"Hola, {nombre}"`,
      exercise: `Crea funciones personalizadas.`,
      expectedOutput: "Funciones definidas correctamente"
    },
    {
      id: 7,
      title: "Clases y Objetos",
      description: "Programación orientada a objetos",
      difficulty: 'advanced',
      duration: 35,
      completed: false,
      content: `La programación orientada a objetos organiza el código en clases.`,
      codeExample: `class Persona:\n    def __init__(self, nombre):\n        self.nombre = nombre`,
      exercise: `Crea clases y objetos.`,
      expectedOutput: "Clases definidas correctamente"
    }
  ];

  const achievements = [
    { id: 'first_lesson', title: 'Primera Lección', description: 'Completaste tu primera lección' },
    { id: 'python_basics', title: 'Fundamentos Python', description: 'Dominaste los conceptos básicos' },
    { id: 'python_intermediate', title: 'Nivel Intermedio', description: 'Completaste 3 lecciones' },
    { id: 'python_master', title: 'Maestro Python', description: 'Completaste 7 lecciones' },
  ];

  const filteredLessons = lessons.filter(lesson => lesson.difficulty === selectedDifficulty);
  const completedLessons = lessons.filter(lesson => lesson.completed).length;
  const totalLessons = lessons.length;
  const progressPercentage = (completedLessons / totalLessons) * 100;

  const openLesson = (lesson: Lesson) => {
    history.push(`/lesson/python/${lesson.id}`);
  };

  const checkAchievements = () => {
    const newAchievements = [];
    
    if (completedLessons === 1 && !unlockedAchievements.includes('first_lesson')) {
      newAchievements.push('first_lesson');
    }
    
    if (completedLessons === 3 && !unlockedAchievements.includes('python_basics')) {
      newAchievements.push('python_basics');
    }
    
    if (completedLessons === 5 && !unlockedAchievements.includes('python_intermediate')) {
      newAchievements.push('python_intermediate');
    }
    
    if (completedLessons === 7 && !unlockedAchievements.includes('python_master')) {
      newAchievements.push('python_master');
    }
    
    if (newAchievements.length > 0) {
      setUnlockedAchievements([...unlockedAchievements, ...newAchievements]);
      setToastMessage(`¡Nuevo logro desbloqueado! ${newAchievements.length} logro(s)`);
      setShowToast(true);
    }
  };

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
      <IonContent>
        <div className="python-learning-container">
          <div className="hero-section">
            <div className="hero-content">
              <IonText>
                <h1>Aprende Python</h1>
                <p>Domina uno de los lenguajes más versátiles del mundo</p>
              </IonText>
              
              <IonCard className="progress-card">
                <IonCardContent>
                  <div className="progress-header">
                    <IonIcon icon={trophyOutline} />
                    <IonText>
                      <h3>Tu Progreso</h3>
                    </IonText>
                  </div>
                  <div className="progress-content">
                    <IonText>
                      <p>{completedLessons} de {totalLessons} lecciones completadas</p>
                    </IonText>
                    <IonProgressBar value={progressPercentage / 100} color="primary" />
                    <IonText>
                      <p>{Math.round(progressPercentage)}% completado</p>
                    </IonText>
                  </div>
                </IonCardContent>
              </IonCard>
            </div>
          </div>

          <div className="section">
            <div className="section-header">
              <IonText>
                <h2>Selecciona el nivel de dificultad</h2>
              </IonText>
            </div>
            
            <IonSegment value={selectedDifficulty} onIonChange={e => setSelectedDifficulty(e.detail.value as any)}>
              <IonSegmentButton value="beginner">
                <IonLabel>PRINCIPIANTE</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="intermediate">
                <IonLabel>INTERMEDIO</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="advanced">
                <IonLabel>AVANZADO</IonLabel>
              </IonSegmentButton>
            </IonSegment>

            <IonCard className="lessons-card">
              <IonCardHeader>
                <IonCardTitle>
                  <IonIcon icon={bookOutline} />
                  Lecciones - {getDifficultyLabel(selectedDifficulty)}
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonGrid>
                  <IonRow>
                    {filteredLessons.map((lesson) => (
                      <IonCol size="12" sizeMd="6" key={lesson.id}>
                        <IonCard className={`lesson-card ${lesson.completed ? 'completed' : ''}`}>
                          <IonCardContent>
                            <div className="lesson-header">
                              <div className="lesson-info">
                                <h3>{lesson.title}</h3>
                                <p>{lesson.description}</p>
                              </div>
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
                            <div className="lesson-actions">
                              <IonButton
                                expand="block"
                                onClick={() => openLesson(lesson)}
                                color={lesson.completed ? "success" : "primary"}
                              >
                                <IonIcon icon={lesson.completed ? checkmarkCircle : playCircle} slot="start" />
                                {lesson.completed ? 'Revisar' : 'Comenzar'}
                              </IonButton>
                            </div>
                          </IonCardContent>
                        </IonCard>
                      </IonCol>
                    ))}
                  </IonRow>
                </IonGrid>
              </IonCardContent>
            </IonCard>
          </div>

          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message={toastMessage}
            duration={3000}
            color={toastMessage.includes('Excelente') ? 'success' : 'warning'}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PythonLearning;
