import React from 'react';
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonChip,
  IonLabel
} from '@ionic/react';
import { 
  logoJavascript, 
  logoHtml5, 
  logoReact, 
  logoNodejs,
  rocket,
  bulb,
  codeSlash,
  chatbubbleEllipses,
  library
} from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="home-container">
          {/* Hero Section */}
          <div className="hero-section">
            <IonIcon icon={rocket} className="hero-icon" />
            <IonText>
              <h1>Aprende a Programar con IA</h1>
              <p>Tu asistente personal para dominar Python y más lenguajes de programación</p>
            </IonText>
          </div>

          {/* Language Selection */}
          <div className="section">
            <IonText>
              <h2>Selecciona tu lenguaje</h2>
            </IonText>
            
            <IonGrid>
              <IonRow>
                <IonCol size="12" sizeMd="6">
                  <IonCard className="language-card python-card">
                    <IonCardHeader>
                      <div className="card-header">
                        <div className="python-icon">🐍</div>
                        <IonCardTitle>Python</IonCardTitle>
                      </div>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonText>
                        <p>Aprende Python desde cero con ejemplos prácticos y ejercicios interactivos.</p>
                      </IonText>
                      <div className="difficulty-chips">
                        <IonChip color="success">
                          <IonLabel>Principiante</IonLabel>
                        </IonChip>
                        <IonChip color="warning">
                          <IonLabel>Intermedio</IonLabel>
                        </IonChip>
                        <IonChip color="danger">
                          <IonLabel>Avanzado</IonLabel>
                        </IonChip>
                      </div>
                      <IonButton expand="block" color="primary" routerLink="/python">
                        Comenzar Python
                      </IonButton>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                
                <IonCol size="12" sizeMd="6">
                  <IonCard className="language-card java-card">
                    <IonCardHeader>
                      <div className="card-header">
                        <div className="java-icon">☕</div>
                        <IonCardTitle>Java</IonCardTitle>
                      </div>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonText>
                        <p>Aprende Java desde cero con programación orientada a objetos y desarrollo empresarial.</p>
                      </IonText>
                      <div className="difficulty-chips">
                        <IonChip color="success">
                          <IonLabel>Principiante</IonLabel>
                        </IonChip>
                        <IonChip color="warning">
                          <IonLabel>Intermedio</IonLabel>
                        </IonChip>
                        <IonChip color="danger">
                          <IonLabel>Avanzado</IonLabel>
                        </IonChip>
                      </div>
                      <IonButton expand="block" color="warning" routerLink="/java-hero">
                        Comenzar Java
                      </IonButton>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>

          {/* Features Section */}
          <div className="section">
            <IonText>
              <h2>Características principales</h2>
            </IonText>
            
            <IonGrid>
              <IonRow>
                <IonCol size="12" sizeMd="4">
                  <IonCard className="feature-card">
                    <IonCardContent className="feature-content">
                      <IonIcon icon={bulb} className="feature-icon" />
                      <IonCardTitle>Aprendizaje Interactivo</IonCardTitle>
                      <IonText>
                        <p>Lecciones paso a paso con ejemplos prácticos y ejercicios.</p>
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                
                <IonCol size="12" sizeMd="4">
                  <IonCard className="feature-card">
                    <IonCardContent className="feature-content">
                      <IonIcon icon={chatbubbleEllipses} className="feature-icon" />
                      <IonCardTitle>AI Assistant</IonCardTitle>
                      <IonText>
                        <p>Pregunta cualquier duda y obtén respuestas personalizadas.</p>
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                
                <IonCol size="12" sizeMd="4">
                  <IonCard className="feature-card">
                    <IonCardContent className="feature-content">
                      <IonIcon icon={codeSlash} className="feature-icon" />
                      <IonCardTitle>Corrección de Código</IonCardTitle>
                      <IonText>
                        <p>La IA revisa tu código y te ayuda a mejorarlo.</p>
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>

          {/* Quick Actions */}
          <div className="section">
            <IonText>
              <h2>Acciones rápidas</h2>
            </IonText>
            
            <IonGrid>
              <IonRow>
                <IonCol size="12" sizeMd="6">
                  <IonButton expand="block" size="large" color="primary" routerLink="/ai-chat">
                    <IonIcon icon={chatbubbleEllipses} slot="start" />
                    Hacer una pregunta
                  </IonButton>
                </IonCol>
                <IonCol size="12" sizeMd="6">
                  <IonButton expand="block" size="large" color="secondary" routerLink="/playground">
                    <IonIcon icon={library} slot="start" />
                    Playground de código
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

export default Home;
