import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, codeSlashOutline, chatbubbleEllipsesOutline, libraryOutline, cafeOutline } from 'ionicons/icons';
import Home from './pages/Home';
import PythonLearning from './pages/PythonLearning';
import PythonHero from './pages/PythonHero';
import JavaLearning from './pages/JavaLearning';
import JavaHero from './pages/JavaHero';
import AIChat from './pages/AIChat';
import CodePlayground from './pages/CodePlayground';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/python">
            <PythonLearning />
          </Route>
          <Route exact path="/python-hero">
            <PythonHero />
          </Route>
          <Route exact path="/java">
            <JavaLearning />
          </Route>
          <Route exact path="/java-hero">
            <JavaHero />
          </Route>
          <Route exact path="/ai-chat">
            <AIChat />
          </Route>
          <Route path="/playground">
            <CodePlayground />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={homeOutline} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>
          <IonTabButton tab="python" href="/python">
            <IonIcon aria-hidden="true" icon={codeSlashOutline} />
            <IonLabel>Python</IonLabel>
          </IonTabButton>
          <IonTabButton tab="java" href="/java">
            <IonIcon aria-hidden="true" icon={cafeOutline} />
            <IonLabel>Java</IonLabel>
          </IonTabButton>
          <IonTabButton tab="ai-chat" href="/ai-chat">
            <IonIcon aria-hidden="true" icon={chatbubbleEllipsesOutline} />
            <IonLabel>AI Chat</IonLabel>
          </IonTabButton>
          <IonTabButton tab="playground" href="/playground">
            <IonIcon aria-hidden="true" icon={libraryOutline} />
            <IonLabel>Playground</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
