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
import './JavaHero.css';

const JavaHero: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="java-hero-container">
          {/* Hero Section */}
          <div className="java-hero-section">
            <IonIcon icon={codeSlash} className="java-hero-icon" />
            <IonText>
              <h1>Aprende Java</h1>
              <p>Domina uno de los lenguajes de programación más utilizados del mundo con nuestro sistema interactivo de entrenamiento.</p>
            </IonText>
          </div>

          {/* Action Card */}
          <div className="java-action-card">
            <IonCard>
              <IonCardContent>
                <div className="java-training-section">
                  <div className="java-features">
                    <div className="java-feature">
                      <div className="java-feature-icon">☕</div>
                      <IonText className="java-feature-text">14 Lecciones</IonText>
                    </div>
                    <div className="java-feature">
                      <div className="java-feature-icon">💻</div>
                      <IonText className="java-feature-text">Ejercicios Prácticos</IonText>
                    </div>
                    <div className="java-feature">
                      <div className="java-feature-icon">🤖</div>
                      <IonText className="java-feature-text">Asistencia IA</IonText>
                    </div>
                  </div>
                  
                  <IonButton 
                    expand="block" 
                    color="warning" 
                    size="large"
                    routerLink="/java"
                    className="java-training-button"
                  >
                    <IonIcon icon={school} slot="start" />
                    ENTRENAR JAVA
                  </IonButton>
                </div>
              </IonCardContent>
            </IonCard>
          </div>

          {/* Learning Path */}
          <div className="java-learning-path">
            <IonCard>
              <IonCardContent>
                <IonText>
                  <h2>Curso estructurado</h2>
                </IonText>
                <IonGrid>
                  <IonRow>
                    <IonCol size="4">
                      <div className="java-level-card java-beginner">
                        <div className="java-level-icon">🟢</div>
                        <IonText>
                          <h3>Principiante</h3>
                          <p>Sintaxis básica, variables, operadores, condicionales y bucles.</p>
                        </IonText>
                      </div>
                    </IonCol>
                    <IonCol size="4">
                      <div className="java-level-card java-intermediate">
                        <div className="java-level-icon">🟡</div>
                        <IonText>
                          <h3>Intermedio</h3>
                          <p>Arrays, colecciones, métodos y manejo de archivos.</p>
                        </IonText>
                      </div>
                    </IonCol>
                    <IonCol size="4">
                      <div className="java-level-card java-advanced">
                        <div className="java-level-icon">🔴</div>
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
          <div className="java-quick-actions">
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
                    className="java-action-button"
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
                    className="java-action-button"
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

export default JavaHero;
