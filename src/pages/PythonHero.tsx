import React from 'react';
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonButton,
  IonText,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import { codeSlash, school, chatbubbleEllipses, library } from 'ionicons/icons';
import './PythonHero.css';

const PythonHero: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="python-hero-container">
          {/* Hero Section */}
          <div className="python-hero-section">
            <IonIcon icon={codeSlash} className="python-hero-icon" />
            <IonText>
              <h1>Aprende Python</h1>
              <p>Domina uno de los lenguajes de programación más populares del mundo con nuestro sistema interactivo de entrenamiento.</p>
            </IonText>
          </div>

          {/* Action Card */}
          <div className="python-action-card">
            <IonCard>
              <IonCardContent>
                <div className="python-training-section">
                  <div className="python-features">
                    <div className="python-feature">
                      <div className="python-feature-icon">🐍</div>
                      <IonText className="python-feature-text">14 Lecciones</IonText>
                    </div>
                    <div className="python-feature">
                      <div className="python-feature-icon">💻</div>
                      <IonText className="python-feature-text">Ejercicios Prácticos</IonText>
                    </div>
                    <div className="python-feature">
                      <div className="python-feature-icon">🤖</div>
                      <IonText className="python-feature-text">Asistencia IA</IonText>
                    </div>
                  </div>
                  
                  <IonButton 
                    expand="block" 
                    color="primary" 
                    size="large"
                    routerLink="/python"
                    className="python-training-button"
                  >
                    <IonIcon icon={school} slot="start" />
                    ENTRENAR PYTHON
                  </IonButton>
                </div>
              </IonCardContent>
            </IonCard>
          </div>

          {/* Learning Path */}
          <div className="python-learning-path">
            <IonCard>
              <IonCardContent>
                <IonText>
                  <h2>Curso estructurado</h2>
                </IonText>
                <IonGrid>
                  <IonRow>
                    <IonCol size="4">
                      <div className="python-level-card python-beginner">
                        <div className="python-level-icon">🟢</div>
                        <IonText>
                          <h3>Principiante</h3>
                          <p>Sintaxis básica, variables, operadores, condicionales y bucles.</p>
                        </IonText>
                      </div>
                    </IonCol>
                    <IonCol size="4">
                      <div className="python-level-card python-intermediate">
                        <div className="python-level-icon">🟡</div>
                        <IonText>
                          <h3>Intermedio</h3>
                          <p>Listas, diccionarios, funciones y manejo de archivos.</p>
                        </IonText>
                      </div>
                    </IonCol>
                    <IonCol size="4">
                      <div className="python-level-card python-advanced">
                        <div className="python-level-icon">🔴</div>
                        <IonText>
                          <h3>Avanzado</h3>
                          <p>POO, decoradores, excepciones y módulos.</p>
                        </IonText>
                      </div>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCardContent>
            </IonCard>
          </div>

          {/* Quick Actions */}
          <div className="python-quick-actions">
            <IonText>
              <h2>Acciones rápidas</h2>
            </IonText>
            
            <IonGrid>
              <IonRow>
                <IonCol size="12" sizeMd="6">
                  <IonButton 
                    expand="block" 
                    size="large" 
                    color="primary" 
                    routerLink="/ai-chat"
                    className="python-action-button"
                  >
                    <IonIcon icon={chatbubbleEllipses} slot="start" />
                    HACER UNA PREGUNTA
                  </IonButton>
                </IonCol>
                <IonCol size="12" sizeMd="6">
                  <IonButton 
                    expand="block" 
                    size="large" 
                    color="secondary" 
                    routerLink="/playground"
                    className="python-action-button"
                  >
                    <IonIcon icon={library} slot="start" />
                    PLAYGROUND DE CÓDIGO
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PythonHero;
