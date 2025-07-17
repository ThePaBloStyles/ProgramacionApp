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
import './JavaLearning.css';

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

const JavaLearning: React.FC = () => {
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
      title: "Introducción a Java",
      description: "Conceptos básicos de Java y sintaxis fundamental",
      difficulty: 'beginner',
      duration: 18,
      completed: false,
      content: `Java es un lenguaje de programación orientado a objetos, robusto y seguro.`,
      codeExample: `public class HolaMundo {\n    public static void main(String[] args) {\n        System.out.println("¡Hola, mundo!");\n    }\n}`,
      exercise: `Crea un programa Java que imprima "¡Hola, Java!" en la consola.`,
      expectedOutput: "¡Hola, Java!"
    },
    {
      id: 2,
      title: "Variables y Tipos de Datos",
      description: "Aprende sobre variables, tipos primitivos y declaraciones",
      difficulty: 'beginner',
      duration: 22,
      completed: false,
      content: `Java es un lenguaje fuertemente tipado con tipos primitivos y objetos.`,
      codeExample: `int edad = 25;\nString nombre = "Juan";\nboolean esEstudiante = true;`,
      exercise: `Declara variables de diferentes tipos.`,
      expectedOutput: "Variables correctamente definidas"
    },
    {
      id: 3,
      title: "Operadores y Expresiones",
      description: "Operadores aritméticos, lógicos y de comparación",
      difficulty: 'beginner',
      duration: 20,
      completed: false,
      content: `Los operadores en Java nos permiten realizar operaciones.`,
      codeExample: `int a = 10;\nint b = 5;\nint resultado = a + b;`,
      exercise: `Realiza operaciones matemáticas básicas.`,
      expectedOutput: "Operaciones correctas"
    },
    // Intermedio
    {
      id: 4,
      title: "Estructuras de Control",
      description: "Condicionales y bucles en Java",
      difficulty: 'intermediate',
      duration: 28,
      completed: false,
      content: `Las estructuras de control permiten dirigir el flujo del programa.`,
      codeExample: `if (edad >= 18) {\n    System.out.println("Eres mayor de edad");\n}`,
      exercise: `Crea un programa con condicionales.`,
      expectedOutput: "Condicionales funcionando"
    },
    {
      id: 5,
      title: "Arrays y Colecciones",
      description: "Manejo de arrays y colecciones de datos",
      difficulty: 'intermediate',
      duration: 25,
      completed: false,
      content: `Los arrays y colecciones nos permiten almacenar múltiples elementos.`,
      codeExample: `int[] numeros = {1, 2, 3, 4, 5};\nArrayList<String> lista = new ArrayList<>();`,
      exercise: `Crea y manipula arrays y colecciones.`,
      expectedOutput: "Arrays creados correctamente"
    },
    // Avanzado
    {
      id: 6,
      title: "Métodos y Funciones",
      description: "Definición y uso de métodos",
      difficulty: 'advanced',
      duration: 30,
      completed: false,
      content: `Los métodos nos permiten reutilizar código y organizar la lógica.`,
      codeExample: `public static String saludar(String nombre) {\n    return "Hola, " + nombre;\n}`,
      exercise: `Crea métodos personalizados.`,
      expectedOutput: "Métodos definidos correctamente"
    },
    {
      id: 7,
      title: "Clases y Objetos",
      description: "Programación orientada a objetos",
      difficulty: 'advanced',
      duration: 35,
      completed: false,
      content: `La programación orientada a objetos organiza el código en clases.`,
      codeExample: `public class Persona {\n    private String nombre;\n    \n    public Persona(String nombre) {\n        this.nombre = nombre;\n    }\n}`,
      exercise: `Crea clases y objetos.`,
      expectedOutput: "Clases definidas correctamente"
    }
  ];

  const achievements = [
    { id: 'first_lesson', title: 'Primera Lección', description: 'Completaste tu primera lección' },
    { id: 'java_basics', title: 'Fundamentos Java', description: 'Dominaste los conceptos básicos' },
    { id: 'java_intermediate', title: 'Nivel Intermedio', description: 'Completaste 3 lecciones' },
    { id: 'java_master', title: 'Maestro Java', description: 'Completaste 5 lecciones' },
  ];

  const filteredLessons = lessons.filter(lesson => lesson.difficulty === selectedDifficulty);
  const completedLessons = lessons.filter(lesson => lesson.completed).length;
  const totalLessons = lessons.length;
  const progressPercentage = (completedLessons / totalLessons) * 100;

  const openLesson = (lesson: Lesson) => {
    history.push(`/lesson/java/${lesson.id}`);
  };

  const checkAchievements = () => {
    const newAchievements = [];
    
    if (completedLessons === 1 && !unlockedAchievements.includes('first_lesson')) {
      newAchievements.push('first_lesson');
    }
    
    if (completedLessons === 3 && !unlockedAchievements.includes('java_basics')) {
      newAchievements.push('java_basics');
    }
    
    if (completedLessons === 5 && !unlockedAchievements.includes('java_intermediate')) {
      newAchievements.push('java_intermediate');
    }
    
    if (completedLessons === 7 && !unlockedAchievements.includes('java_master')) {
      newAchievements.push('java_master');
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
        <div className="java-learning-container">
          <div className="hero-section">
            <div className="hero-content">
              <IonText>
                <h1>Aprende Java</h1>
                <p>Domina la programación orientada a objetos</p>
              </IonText>
              
              <div className="progress-section">
                <IonText>
                  <h3>Tu Progreso</h3>
                  <p>{completedLessons} de {totalLessons} lecciones completadas</p>
                </IonText>
                <IonProgressBar value={progressPercentage / 100} color="warning" />
                <IonText>
                  <p>{Math.round(progressPercentage)}% completado</p>
                </IonText>
              </div>
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
                                color={lesson.completed ? "success" : "warning"}
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

export default JavaLearning;
