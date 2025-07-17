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
  IonLabel,
  IonBadge
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
  library,
  trophy,
  flash,
  school,
  trendingUp,
  star,
  time,
  people,
  checkmarkCircle
} from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="home-container">
          {/* Hero Section */}
          <div className="hero-section">
            <div className="hero-background">
              <div className="hero-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
              </div>
              <div className="hero-content">
                <div className="hero-icon-container">
                  <IonIcon icon={rocket} className="hero-icon" />
                </div>
                <IonText>
                  <h1>Aprende a Programar con IA</h1>
                  <p>Tu asistente personal para dominar Python, Java y más lenguajes de programación</p>
                </IonText>
              </div>
            </div>
          </div>

          {/* Language Selection */}
          <div className="section">
            <div className="section-header">
              <IonText>
                <h2>Selecciona tu lenguaje</h2>
                <p>Comienza tu aventura de programación</p>
              </IonText>
            </div>
            
            <IonGrid>
              <IonRow>
                <IonCol size="12" sizeMd="6">
                  <IonCard className="language-card python-card">
                    <div className="card-glow python-glow"></div>
                    <IonCardHeader>
                      <div className="card-header">
                        <div className="language-icon-container python-container">
                          <div className="python-icon">🐍</div>
                        </div>
                        <div className="card-title-section">
                          <IonCardTitle>Python</IonCardTitle>
                          <IonBadge color="success" className="popularity-badge">
                            <IonIcon icon={trendingUp} />
                            Popular
                          </IonBadge>
                        </div>
                      </div>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonText>
                        <p>Aprende Python desde cero con ejemplos prácticos y ejercicios interactivos. Ideal para principiantes.</p>
                      </IonText>
                      <div className="course-stats">
                        <div className="stat-item">
                          <IonIcon icon={time} />
                          <span>40 horas</span>
                        </div>
                        <div className="stat-item">
                          <IonIcon icon={star} />
                          <span>4.9/5</span>
                        </div>
                        <div className="stat-item">
                          <IonIcon icon={school} />
                          <span>25 lecciones</span>
                        </div>
                      </div>
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
                      <IonButton expand="block" color="primary" routerLink="/python-hero" className="cta-button">
                        <IonIcon icon={rocket} slot="start" />
                        Comenzar Python
                      </IonButton>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                
                <IonCol size="12" sizeMd="6">
                  <IonCard className="language-card java-card">
                    <div className="card-glow java-glow"></div>
                    <IonCardHeader>
                      <div className="card-header">
                        <div className="language-icon-container java-container">
                          <div className="java-icon">☕</div>
                        </div>
                        <div className="card-title-section">
                          <IonCardTitle>Java</IonCardTitle>
                          <IonBadge color="warning" className="popularity-badge">
                            <IonIcon icon={flash} />
                            Potente
                          </IonBadge>
                        </div>
                      </div>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonText>
                        <p>Aprende Java desde cero con programación orientada a objetos y desarrollo empresarial robusto.</p>
                      </IonText>
                      <div className="course-stats">
                        <div className="stat-item">
                          <IonIcon icon={time} />
                          <span>45 horas</span>
                        </div>
                        <div className="stat-item">
                          <IonIcon icon={star} />
                          <span>4.8/5</span>
                        </div>
                        <div className="stat-item">
                          <IonIcon icon={school} />
                          <span>30 lecciones</span>
                        </div>
                      </div>
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
                      <IonButton expand="block" color="warning" routerLink="/java-hero" className="cta-button">
                        <IonIcon icon={rocket} slot="start" />
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
            <div className="section-header">
              <IonText>
                <h2>Características principales</h2>
                <p>Todo lo que necesitas para aprender programación</p>
              </IonText>
            </div>
            
            <IonGrid>
              <IonRow>
                <IonCol size="12" sizeMd="4">
                  <IonCard className="feature-card interactive-card">
                    <div className="feature-glow"></div>
                    <IonCardContent className="feature-content">
                      <div className="feature-icon-container">
                        <IonIcon icon={bulb} className="feature-icon" />
                      </div>
                      <IonCardTitle>Aprendizaje Interactivo</IonCardTitle>
                      <IonText>
                        <p>Lecciones paso a paso con ejemplos prácticos y ejercicios que se adaptan a tu ritmo.</p>
                      </IonText>
                      <div className="feature-benefits">
                        <div className="benefit">
                          <IonIcon icon={checkmarkCircle} />
                          <span>Ejercicios prácticos</span>
                        </div>
                        <div className="benefit">
                          <IonIcon icon={checkmarkCircle} />
                          <span>Retroalimentación inmediata</span>
                        </div>
                      </div>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                
                <IonCol size="12" sizeMd="4">
                  <IonCard className="feature-card ai-card">
                    <div className="feature-glow ai-glow"></div>
                    <IonCardContent className="feature-content">
                      <div className="feature-icon-container">
                        <IonIcon icon={chatbubbleEllipses} className="feature-icon" />
                      </div>
                      <IonCardTitle>AI Assistant</IonCardTitle>
                      <IonText>
                        <p>Pregunta cualquier duda y obtén respuestas personalizadas las 24 horas.</p>
                      </IonText>
                      <div className="feature-benefits">
                        <div className="benefit">
                          <IonIcon icon={checkmarkCircle} />
                          <span>Respuestas instantáneas</span>
                        </div>
                        <div className="benefit">
                          <IonIcon icon={checkmarkCircle} />
                          <span>Explicaciones detalladas</span>
                        </div>
                      </div>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                
                <IonCol size="12" sizeMd="4">
                  <IonCard className="feature-card code-card">
                    <div className="feature-glow code-glow"></div>
                    <IonCardContent className="feature-content">
                      <div className="feature-icon-container">
                        <IonIcon icon={codeSlash} className="feature-icon" />
                      </div>
                      <IonCardTitle>Corrección de Código</IonCardTitle>
                      <IonText>
                        <p>La IA revisa tu código y te ayuda a mejorarlo con sugerencias inteligentes.</p>
                      </IonText>
                      <div className="feature-benefits">
                        <div className="benefit">
                          <IonIcon icon={checkmarkCircle} />
                          <span>Detección de errores</span>
                        </div>
                        <div className="benefit">
                          <IonIcon icon={checkmarkCircle} />
                          <span>Mejores prácticas</span>
                        </div>
                      </div>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>

          {/* Quick Actions */}
          <div className="section">
            <div className="section-header">
              <IonText>
                <h2>Acciones rápidas</h2>
                <p>Herramientas para acelerar tu aprendizaje</p>
              </IonText>
            </div>
            
            <IonGrid>
              <IonRow>
                <IonCol size="12" sizeMd="6">
                  <IonCard className="action-card chat-action">
                    <div className="action-glow chat-glow"></div>
                    <IonCardContent className="action-content">
                      <div className="action-icon-container">
                        <IonIcon icon={chatbubbleEllipses} />
                      </div>
                      <div className="action-info">
                        <h3>Hacer una pregunta</h3>
                        <p>Pregunta cualquier duda a la IA</p>
                      </div>
                      <IonButton fill="clear" size="large" routerLink="/ai-chat" className="action-button">
                        <IonIcon icon={chatbubbleEllipses} slot="start" />
                        Preguntar
                      </IonButton>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size="12" sizeMd="6">
                  <IonCard className="action-card playground-action">
                    <div className="action-glow playground-glow"></div>
                    <IonCardContent className="action-content">
                      <div className="action-icon-container">
                        <IonIcon icon={library} />
                      </div>
                      <div className="action-info">
                        <h3>Playground de código</h3>
                        <p>Practica y experimenta con código</p>
                      </div>
                      <IonButton fill="clear" size="large" routerLink="/playground" className="action-button">
                        <IonIcon icon={library} slot="start" />
                        Practicar
                      </IonButton>
                    </IonCardContent>
                  </IonCard>
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
