import React, { useState } from 'react';
import {
  IonCard,
  IonCardContent,
  IonButton,
  IonRadioGroup,
  IonRadio,
  IonItem,
  IonLabel,
  IonText,
  IonIcon,
  IonProgressBar,
  IonAlert
} from '@ionic/react';
import { checkmarkCircle, closeCircle, trophy } from 'ionicons/icons';
import './QuizComponent.css';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface QuizComponentProps {
  questions: QuizQuestion[];
  title: string;
  onComplete: (score: number) => void;
  passingScore?: number;
}

const QuizComponent: React.FC<QuizComponentProps> = ({ 
  questions, 
  title, 
  onComplete, 
  passingScore = 70 
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (answer: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    const finalScore = Math.round((correct / questions.length) * 100);
    setScore(finalScore);
    setShowResults(true);
    setShowAlert(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setShowAlert(false);
    setScore(0);
  };

  const finishQuiz = () => {
    onComplete(score);
    setShowAlert(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];

  if (showResults) {
    return (
      <IonCard className="quiz-results">
        <IonCardContent>
          <div className={`results-header ${score >= passingScore ? '' : 'failed'}`}>
            <IonIcon 
              icon={score >= passingScore ? trophy : closeCircle} 
              color="light"
              style={{ fontSize: '48px' }}
            />
            <IonText>
              <h2>{score >= passingScore ? '¡Felicidades!' : 'Necesitas mejorar'}</h2>
              <p>Tu puntuación: {score}%</p>
              <p>Puntuación mínima: {passingScore}%</p>
            </IonText>
          </div>

          <div className="results-details">
            <h3>Resumen de respuestas:</h3>
            {questions.map((question, index) => {
              const isCorrect = selectedAnswers[index] === question.correctAnswer;
              return (
                <div key={index} className={`result-item ${isCorrect ? 'correct' : 'incorrect'}`}>
                  <IonIcon 
                    icon={isCorrect ? checkmarkCircle : closeCircle}
                    color={isCorrect ? "success" : "danger"}
                  />
                  <div>
                    <p><strong>Pregunta {index + 1}:</strong> {question.question}</p>
                    <p><strong>Tu respuesta:</strong> {question.options[selectedAnswers[index]] || 'Sin respuesta'}</p>
                    <p><strong>Respuesta correcta:</strong> {question.options[question.correctAnswer]}</p>
                    {question.explanation && (
                      <p><strong>Explicación:</strong> {question.explanation}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="results-actions">
            <IonButton 
              expand="block" 
              onClick={resetQuiz}
              color="medium"
            >
              Reintentar Quiz
            </IonButton>
            <IonButton 
              expand="block" 
              onClick={finishQuiz}
              color={score >= passingScore ? "success" : "warning"}
            >
              {score >= passingScore ? 'Continuar' : 'Volver a estudiar'}
            </IonButton>
          </div>
        </IonCardContent>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={score >= passingScore ? "¡Excelente trabajo!" : "Sigue practicando"}
          message={score >= passingScore ? 
            `Has obtenido ${score}% y has pasado la prueba. ¡Continúa con la siguiente lección!` :
            `Has obtenido ${score}%. Necesitas al menos ${passingScore}% para continuar. ¡Revisa el material y vuelve a intentarlo!`
          }
          buttons={[
            {
              text: 'Entendido',
              handler: () => {
                setShowAlert(false);
              }
            }
          ]}
        />
      </IonCard>
    );
  }

  return (
    <IonCard className="quiz-container">
      <IonCardContent>
        <div className="quiz-header">
          <IonText>
            <h2>{title}</h2>
            <p>Pregunta {currentQuestion + 1} de {questions.length}</p>
          </IonText>
          <IonProgressBar value={progress / 100} color="primary" />
        </div>

        <div className="quiz-question">
          <IonText>
            <h3>{currentQ.question}</h3>
          </IonText>
          
          <IonRadioGroup
            value={selectedAnswers[currentQuestion]}
            onIonChange={e => handleAnswerSelect(e.detail.value)}
          >
            {currentQ.options.map((option, index) => (
              <IonItem key={index}>
                <IonLabel>{option}</IonLabel>
                <IonRadio slot="start" value={index} />
              </IonItem>
            ))}
          </IonRadioGroup>
        </div>

        <div className="quiz-navigation">
          <IonButton 
            fill="outline" 
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
          >
            Anterior
          </IonButton>
          
          <IonButton 
            onClick={handleNextQuestion}
            disabled={selectedAnswers[currentQuestion] === undefined}
          >
            {currentQuestion === questions.length - 1 ? 'Finalizar' : 'Siguiente'}
          </IonButton>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default QuizComponent;
