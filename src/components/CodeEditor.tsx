import React, { useState, useEffect } from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonIcon,
  IonText,
  IonTextarea,
  IonChip,
  IonLabel,
  IonToast,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonList,
  IonBadge
} from '@ionic/react';
import {
  playOutline,
  checkmarkCircle,
  closeCircle,
  bugOutline,
  codeSlash,
  stopwatch,
  refresh
} from 'ionicons/icons';
import './CodeEditor.css';

interface TestCase {
  input: string;
  expectedOutput: string;
  description: string;
}

interface CodeEditorProps {
  language: 'python' | 'java';
  initialCode?: string;
  testCases: TestCase[];
  onCodeChange?: (code: string) => void;
  onTestsComplete?: (passed: number, total: number) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  language,
  initialCode = '',
  testCases,
  onCodeChange,
  onTestsComplete
}) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState<boolean[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [executionTime, setExecutionTime] = useState(0);
  const [memoryUsage, setMemoryUsage] = useState(0);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    if (onCodeChange) {
      onCodeChange(code);
    }
  }, [code, onCodeChange]);

  const executeCode = async () => {
    setIsRunning(true);
    setOutput('');
    setErrors([]);
    const startTime = Date.now();
    
    try {
      // Simulamos la ejecución del código
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const result = simulateCodeExecution(code, language);
      setOutput(result.output);
      setErrors(result.errors);
      setExecutionTime(Date.now() - startTime);
      setMemoryUsage(Math.random() * 10 + 1); // Simulación de memoria
      
      if (result.errors.length === 0) {
        setToastMessage('¡Código ejecutado correctamente!');
        setShowToast(true);
      } else {
        setToastMessage('Se encontraron errores en el código');
        setShowToast(true);
      }
    } catch (error) {
      setOutput('Error de ejecución: ' + error);
      setErrors(['Error de ejecución']);
    } finally {
      setIsRunning(false);
    }
  };

  const runTests = async () => {
    setIsRunning(true);
    const results: boolean[] = [];
    
    for (const testCase of testCases) {
      try {
        const result = simulateCodeExecution(code, language, testCase.input);
        const passed = result.output.trim() === testCase.expectedOutput.trim();
        results.push(passed);
      } catch (error) {
        results.push(false);
      }
    }
    
    setTestResults(results);
    const passedCount = results.filter(r => r).length;
    
    if (onTestsComplete) {
      onTestsComplete(passedCount, testCases.length);
    }
    
    setToastMessage(`Tests completados: ${passedCount}/${testCases.length} pasaron`);
    setShowToast(true);
    setIsRunning(false);
  };

  const simulateCodeExecution = (code: string, lang: string, input?: string) => {
    // Simulación básica de ejecución de código
    const errors: string[] = [];
    let output = '';
    
    if (lang === 'python') {
      // Validaciones básicas para Python
      if (code.includes('print(')) {
        const printMatches = code.match(/print\(([^)]+)\)/g);
        if (printMatches) {
          printMatches.forEach(match => {
            const content = match.replace(/print\(|\)/g, '');
            if (content.includes('"') || content.includes("'")) {
              output += content.replace(/['"]/g, '') + '\n';
            } else {
              output += content + '\n';
            }
          });
        }
      }
      
      // Simulación de errores comunes
      if (code.includes('print(') && !code.includes(')')) {
        errors.push('SyntaxError: invalid syntax - falta cerrar paréntesis');
      }
      
      if (code.includes('def ') && !code.includes(':')) {
        errors.push('SyntaxError: invalid syntax - falta dos puntos después de def');
      }
      
      if (code.includes('if ') && !code.includes(':')) {
        errors.push('SyntaxError: invalid syntax - falta dos puntos después de if');
      }
      
    } else if (lang === 'java') {
      // Validaciones básicas para Java
      if (code.includes('System.out.println(')) {
        const printMatches = code.match(/System\.out\.println\(([^)]+)\)/g);
        if (printMatches) {
          printMatches.forEach(match => {
            const content = match.replace(/System\.out\.println\(|\)/g, '');
            if (content.includes('"')) {
              output += content.replace(/"/g, '') + '\n';
            } else {
              output += content + '\n';
            }
          });
        }
      }
      
      // Simulación de errores comunes
      if (!code.includes('public class')) {
        errors.push('Error: clase pública faltante');
      }
      
      if (code.includes('System.out.println(') && !code.includes(';')) {
        errors.push('Error: falta punto y coma');
      }
    }
    
    // Si hay input, simulamos su procesamiento
    if (input) {
      output = output.replace(/input\(\)/g, input);
    }
    
    return { output: output.trim(), errors };
  };

  const clearCode = () => {
    setCode('');
    setOutput('');
    setErrors([]);
    setTestResults([]);
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput('');
    setErrors([]);
    setTestResults([]);
  };

  return (
    <div className="code-editor-container">
      {/* Editor de Código */}
      <IonCard className="code-editor-card">
        <IonCardHeader>
          <IonCardTitle className="editor-title">
            <IonIcon icon={codeSlash} />
            Editor de Código - {language.toUpperCase()}
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonTextarea
            value={code}
            onIonInput={(e) => setCode(e.detail.value!)}
            placeholder={`Escribe tu código ${language} aquí...`}
            className="code-textarea"
            rows={15}
            spellcheck={false}
          />
          
          <div className="editor-actions">
            <IonButton
              onClick={executeCode}
              disabled={isRunning}
              color="primary"
              fill="solid"
            >
              <IonIcon icon={playOutline} slot="start" />
              {isRunning ? 'Ejecutando...' : 'Ejecutar'}
            </IonButton>
            
            <IonButton
              onClick={runTests}
              disabled={isRunning || testCases.length === 0}
              color="success"
              fill="outline"
            >
              <IonIcon icon={checkmarkCircle} slot="start" />
              Ejecutar Tests
            </IonButton>
            
            <IonButton
              onClick={clearCode}
              color="warning"
              fill="outline"
            >
              <IonIcon icon={refresh} slot="start" />
              Limpiar
            </IonButton>
            
            <IonButton
              onClick={resetCode}
              color="medium"
              fill="outline"
            >
              <IonIcon icon={refresh} slot="start" />
              Resetear
            </IonButton>
          </div>
          
          {/* Información de ejecución */}
          {executionTime > 0 && (
            <div className="execution-info">
              <IonChip color="primary">
                <IonIcon icon={stopwatch} />
                <IonLabel>Tiempo: {executionTime}ms</IonLabel>
              </IonChip>
              <IonChip color="secondary">
                <IonLabel>Memoria: {memoryUsage.toFixed(2)}MB</IonLabel>
              </IonChip>
            </div>
          )}
        </IonCardContent>
      </IonCard>

      <IonGrid>
        <IonRow>
          {/* Salida del código */}
          <IonCol size="12" sizeMd="6">
            <IonCard className="output-card">
              <IonCardHeader>
                <IonCardTitle>
                  <IonIcon icon={playOutline} />
                  Salida del Programa
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <div className="output-content">
                  {output ? (
                    <pre className="output-text">{output}</pre>
                  ) : (
                    <IonText color="medium">
                      <p>La salida aparecerá aquí...</p>
                    </IonText>
                  )}
                </div>
              </IonCardContent>
            </IonCard>
          </IonCol>

          {/* Errores y Debugger */}
          <IonCol size="12" sizeMd="6">
            <IonCard className="errors-card">
              <IonCardHeader>
                <IonCardTitle>
                  <IonIcon icon={bugOutline} />
                  Debugger Visual
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                {errors.length > 0 ? (
                  <IonList>
                    {errors.map((error, index) => (
                      <IonItem key={index} color="danger">
                        <IonIcon icon={closeCircle} slot="start" />
                        <IonLabel>
                          <p>{error}</p>
                        </IonLabel>
                      </IonItem>
                    ))}
                  </IonList>
                ) : (
                  <IonText color="success">
                    <p>✓ No se encontraron errores</p>
                  </IonText>
                )}
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>

      {/* Casos de Prueba */}
      {testCases.length > 0 && (
        <IonCard className="test-cases-card">
          <IonCardHeader>
            <IonCardTitle>
              <IonIcon icon={checkmarkCircle} />
              Casos de Prueba Automáticos
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              {testCases.map((testCase, index) => (
                <IonItem key={index}>
                  <div className="test-case-content">
                    <div className="test-case-header">
                      <IonText>
                        <h4>Test {index + 1}: {testCase.description}</h4>
                      </IonText>
                      {testResults[index] !== undefined && (
                        <IonBadge color={testResults[index] ? "success" : "danger"}>
                          {testResults[index] ? "PASÓ" : "FALLÓ"}
                        </IonBadge>
                      )}
                    </div>
                    <div className="test-case-details">
                      <IonText color="medium">
                        <p><strong>Entrada:</strong> {testCase.input || 'Sin entrada'}</p>
                        <p><strong>Salida esperada:</strong> {testCase.expectedOutput}</p>
                      </IonText>
                    </div>
                  </div>
                </IonItem>
              ))}
            </IonList>
          </IonCardContent>
        </IonCard>
      )}

      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={toastMessage}
        duration={3000}
        color={toastMessage.includes('correctamente') ? 'success' : 'warning'}
      />
    </div>
  );
};

export default CodeEditor;
