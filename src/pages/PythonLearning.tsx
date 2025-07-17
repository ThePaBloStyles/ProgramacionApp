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
  IonModal,
  IonTextarea,
  IonToast,
  IonSegment,
  IonSegmentButton,
  IonBadge,
  IonProgressBar
} from '@ionic/react';
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

const JavaLearning: React.FC = () => {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userCode, setUserCode] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
  const [showTraining, setShowTraining] = useState(false);
  const [codeSuggestions, setCodeSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
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
      content: `En Java, las variables deben declararse con un tipo específico:

Tipos primitivos:
- int: números enteros
- double: números decimales
- boolean: true/false
- char: caracteres
- String: texto (clase, no primitivo)

Declaración: tipo nombreVariable = valor;`,
      codeExample: `public class Variables {
    public static void main(String[] args) {
        int edad = 25;
        double altura = 1.75;
        boolean esEstudiante = true;
        String nombre = "Juan";
        
        System.out.println("Nombre: " + nombre);
        System.out.println("Edad: " + edad);
        System.out.println("Altura: " + altura);
        System.out.println("Es estudiante: " + esEstudiante);
    }
}`,
      exercise: `Declara las siguientes variables y muestra sus valores:
- Un entero llamado 'puntos' con valor 100
- Un String llamado 'jugador' con tu nombre
- Un boolean llamado 'activo' con valor true`,
      expectedOutput: "Puntos: 100\nJugador: [Tu nombre]\nActivo: true"
    },
    {
      id: 3,
      title: "Operadores y Expresiones",
      description: "Operadores aritméticos, lógicos y de comparación",
      difficulty: 'beginner',
      duration: 18,
      completed: false,
      content: `Java incluye varios tipos de operadores:

Aritméticos: +, -, *, /, %
Comparación: ==, !=, <, >, <=, >=
Lógicos: &&, ||, !
Asignación: =, +=, -=, *=, /=

Los operadores siguen precedencia matemática.`,
      codeExample: `public class Operadores {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;
        
        System.out.println("Suma: " + (a + b));
        System.out.println("División: " + (a / b));
        System.out.println("Módulo: " + (a % b));
        System.out.println("Mayor que: " + (a > b));
        System.out.println("Igual: " + (a == b));
    }
}`,
      exercise: `Crea un programa que calcule:
- El área de un rectángulo (base * altura)
- Determina si el área es mayor a 50
- Muestra ambos resultados`,
      expectedOutput: "Área: [resultado]\nMayor a 50: [true/false]"
    },

    // Intermedio
    {
      id: 4,
      title: "Estructuras de Control",
      description: "if/else, switch, loops (for, while)",
      difficulty: 'intermediate',
      duration: 25,
      completed: false,
      content: `Las estructuras de control permiten tomar decisiones y repetir código:

if/else: Decisiones condicionales
switch: Múltiples opciones
for: Bucles con contador
while: Bucles con condición
do-while: Bucles que ejecutan al menos una vez`,
      codeExample: `public class Estructuras {
    public static void main(String[] args) {
        int numero = 5;
        
        // if/else
        if (numero > 0) {
            System.out.println("Positivo");
        } else {
            System.out.println("No positivo");
        }
        
        // for loop
        for (int i = 1; i <= 5; i++) {
            System.out.println("Iteración: " + i);
        }
        
        // while loop
        int contador = 0;
        while (contador < 3) {
            System.out.println("Contador: " + contador);
            contador++;
        }
    }
}`,
      exercise: `Crea un programa que:
1. Use un bucle for para imprimir números del 1 al 10
2. Use if/else para determinar si cada número es par o impar
3. Cuenta cuántos números pares e impares hay`,
      expectedOutput: "1 - Impar\n2 - Par\n...\nPares: 5, Impares: 5"
    },
    {
      id: 5,
      title: "Arrays y Colecciones",
      description: "Trabajando con arrays y ArrayList",
      difficulty: 'intermediate',
      duration: 30,
      completed: false,
      content: `Arrays: Colecciones de elementos del mismo tipo con tamaño fijo.
ArrayList: Colección dinámica que puede crecer o decrecer.

Declaración de array: tipo[] nombre = new tipo[tamaño];
ArrayList: ArrayList<Tipo> lista = new ArrayList<>();`,
      codeExample: `import java.util.ArrayList;

public class Arrays {
    public static void main(String[] args) {
        // Array tradicional
        int[] numeros = {1, 2, 3, 4, 5};
        
        // ArrayList
        ArrayList<String> frutas = new ArrayList<>();
        frutas.add("Manzana");
        frutas.add("Banana");
        frutas.add("Naranja");
        
        // Recorrer array
        for (int num : numeros) {
            System.out.println("Número: " + num);
        }
        
        // Recorrer ArrayList
        for (String fruta : frutas) {
            System.out.println("Fruta: " + fruta);
        }
    }
}`,
      exercise: `Crea un programa que:
1. Declare un array de 5 números enteros
2. Calcule la suma y el promedio
3. Encuentre el número mayor y menor
4. Muestre todos los resultados`,
      expectedOutput: "Suma: [resultado]\nPromedio: [resultado]\nMayor: [resultado]\nMenor: [resultado]"
    },
    {
      id: 6,
      title: "Métodos y Funciones",
      description: "Creación y uso de métodos en Java",
      difficulty: 'intermediate',
      duration: 28,
      completed: false,
      content: `Los métodos permiten reutilizar código y organizar programas.

Sintaxis: 
modificador tipoRetorno nombreMetodo(parámetros) {
    // código
    return valor; // si no es void
}

Tipos de métodos:
- void: no retorna valor
- con retorno: retorna un valor específico
- static: pertenece a la clase, no a una instancia`,
      codeExample: `public class Metodos {
    public static void main(String[] args) {
        saludar("Juan");
        int resultado = sumar(5, 3);
        System.out.println("Resultado: " + resultado);
        
        double area = calcularAreaCirculo(5.0);
        System.out.println("Área: " + area);
    }
    
    public static void saludar(String nombre) {
        System.out.println("¡Hola, " + nombre + "!");
    }
    
    public static int sumar(int a, int b) {
        return a + b;
    }
    
    public static double calcularAreaCirculo(double radio) {
        return Math.PI * radio * radio;
    }
}`,
      exercise: `Crea los siguientes métodos:
1. esParOImpar(int numero) - retorna "Par" o "Impar"
2. calcularFactorial(int n) - retorna el factorial
3. esPrimo(int numero) - retorna true si es primo
Usa estos métodos en main para probar con diferentes números.`,
      expectedOutput: "5 es Impar\nFactorial de 5: 120\n5 es primo: true"
    },

    // Avanzado
    {
      id: 7,
      title: "Programación Orientada a Objetos",
      description: "Clases, objetos, encapsulación, herencia",
      difficulty: 'advanced',
      duration: 35,
      completed: false,
      content: `La POO en Java se basa en cuatro pilares:

1. Encapsulación: Ocultar datos internos
2. Herencia: Reutilizar código de otras clases
3. Polimorfismo: Mismo método, diferentes comportamientos
4. Abstracción: Simplificar complejidad

Clase: Plantilla para crear objetos
Objeto: Instancia de una clase
Constructor: Método especial para inicializar objetos`,
      codeExample: `public class Persona {
    private String nombre;
    private int edad;
    
    // Constructor
    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    // Getters y Setters
    public String getNombre() {
        return nombre;
    }
    
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    public int getEdad() {
        return edad;
    }
    
    public void setEdad(int edad) {
        this.edad = edad;
    }
    
    // Método personalizado
    public void presentarse() {
        System.out.println("Hola, soy " + nombre + " y tengo " + edad + " años");
    }
}

// Uso de la clase
public class Main {
    public static void main(String[] args) {
        Persona persona1 = new Persona("Ana", 25);
        persona1.presentarse();
        
        persona1.setEdad(26);
        System.out.println("Nueva edad: " + persona1.getEdad());
    }
}`,
      exercise: `Crea una clase 'Coche' con:
1. Atributos privados: marca, modelo, año
2. Constructor que inicialice todos los atributos
3. Getters y setters para todos los atributos
4. Método acelerar() que imprima "El coche está acelerando"
5. Método frenar() que imprima "El coche está frenando"
Crea un objeto y prueba todos los métodos.`,
      expectedOutput: "Coche: Toyota Corolla 2020\nEl coche está acelerando\nEl coche está frenando"
    },
    {
      id: 8,
      title: "Herencia y Polimorfismo",
      description: "Conceptos avanzados de POO en Java",
      difficulty: 'advanced',
      duration: 40,
      completed: false,
      content: `Herencia: Una clase puede heredar atributos y métodos de otra clase.
- Clase padre (superclase): La clase que se hereda
- Clase hija (subclase): La clase que hereda
- Palabra clave 'extends': Para heredar
- Palabra clave 'super': Para acceder a la clase padre

Polimorfismo: Mismo método, diferentes implementaciones.
- Override: Redefinir un método de la clase padre
- @Override: Anotación para indicar sobrescritura`,
      codeExample: `// Clase padre
public class Animal {
    protected String nombre;
    
    public Animal(String nombre) {
        this.nombre = nombre;
    }
    
    public void hacerSonido() {
        System.out.println("El animal hace un sonido");
    }
    
    public void dormir() {
        System.out.println(nombre + " está durmiendo");
    }
}

// Clase hija
public class Perro extends Animal {
    public Perro(String nombre) {
        super(nombre);
    }
    
    @Override
    public void hacerSonido() {
        System.out.println(nombre + " dice: ¡Guau!");
    }
    
    public void jugar() {
        System.out.println(nombre + " está jugando");
    }
}

// Uso
public class Main {
    public static void main(String[] args) {
        Animal animal = new Animal("Genérico");
        Perro perro = new Perro("Rex");
        
        animal.hacerSonido(); // "El animal hace un sonido"
        perro.hacerSonido();  // "Rex dice: ¡Guau!"
        
        perro.jugar();
        perro.dormir();
    }
}`,
      exercise: `Crea una jerarquía de clases:
1. Clase padre 'Vehiculo' con atributos marca, modelo y método acelerar()
2. Clase hija 'Coche' que herede de Vehiculo y añada atributo puertas
3. Clase hija 'Motocicleta' que herede de Vehiculo y añada atributo cilindrada
4. Sobrescribe el método acelerar() en ambas clases hijas
5. Crea objetos de cada tipo y prueba los métodos`,
      expectedOutput: "Coche Toyota acelerando...\nMotocicleta Honda acelerando..."
    },
    {
      id: 9,
      title: "Manejo de Excepciones",
      description: "Try-catch, throw, throws y excepciones personalizadas",
      difficulty: 'advanced',
      duration: 30,
      completed: false,
      content: `Las excepciones permiten manejar errores de manera controlada:

try-catch: Capturar y manejar errores
finally: Código que siempre se ejecuta
throw: Lanzar una excepción manualmente
throws: Declarar que un método puede lanzar excepciones

Tipos de excepciones:
- Checked: Deben ser manejadas obligatoriamente
- Unchecked: No es obligatorio manejarlas
- RuntimeException: Errores de tiempo de ejecución`,
      codeExample: `public class Excepciones {
    public static void main(String[] args) {
        // Manejo básico
        try {
            int resultado = dividir(10, 0);
            System.out.println("Resultado: " + resultado);
        } catch (ArithmeticException e) {
            System.out.println("Error: División por cero");
        } catch (Exception e) {
            System.out.println("Error general: " + e.getMessage());
        } finally {
            System.out.println("Operación terminada");
        }
        
        // Excepción personalizada
        try {
            validarEdad(15);
        } catch (EdadInvalidaException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
    
    public static int dividir(int a, int b) throws ArithmeticException {
        if (b == 0) {
            throw new ArithmeticException("No se puede dividir por cero");
        }
        return a / b;
    }
    
    public static void validarEdad(int edad) throws EdadInvalidaException {
        if (edad < 18) {
            throw new EdadInvalidaException("Debe ser mayor de edad");
        }
        System.out.println("Edad válida: " + edad);
    }
}

// Excepción personalizada
class EdadInvalidaException extends Exception {
    public EdadInvalidaException(String mensaje) {
        super(mensaje);
    }
}`,
      exercise: `Crea un programa que:
1. Defina una excepción personalizada 'SaldoInsuficienteException'
2. Cree una clase 'CuentaBancaria' con método retirar()
3. El método debe lanzar la excepción si el saldo es insuficiente
4. En main, maneja la excepción apropiadamente
5. Prueba con diferentes scenarios`,
      expectedOutput: "Retiro exitoso\nError: Saldo insuficiente para retirar 500"
    }
  ];

  const achievements = [
    { id: 'first_lesson', title: 'Primera Lección', description: 'Completaste tu primera lección' },
    { id: 'python_master', title: 'Maestro Python', description: 'Completaste 7 lecciones' },
    { id: 'code_warrior', title: 'Guerrero del Código', description: 'Escribiste 15 programas' },
    { id: 'problem_solver', title: 'Solucionador', description: 'Resolviste 5 ejercicios seguidos' }
  ];

  const filteredLessons = lessons.filter(lesson => lesson.difficulty === selectedDifficulty);
  const completedLessons = lessons.filter(lesson => lesson.completed).length;
  const totalLessons = lessons.length;
  const progressPercentage = (completedLessons / totalLessons) * 100;

  const openLesson = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setUserCode(lesson.codeExample);
    setIsModalOpen(true);
  };

  const checkCode = () => {
    if (selectedLesson) {
      // Simulación de verificación de código
      const isCorrect = userCode.includes('print') || 
                       userCode.includes('def ') ||
                       userCode.includes('class ') ||
                       userCode.includes('for ') ||
                       userCode.includes('if ');
      
      if (isCorrect) {
        // Marcar lección como completada
        const updatedLessons = lessons.map(lesson => 
          lesson.id === selectedLesson.id ? { ...lesson, completed: true } : lesson
        );
        
        setToastMessage('¡Excelente! Código correcto. Lección completada.');
        setShowToast(true);
        
        // Verificar logros
        checkAchievements();
        
        setTimeout(() => {
          setIsModalOpen(false);
        }, 2000);
      } else {
        setToastMessage('El código necesita algunas correcciones. ¡Inténtalo de nuevo!');
        setShowToast(true);
      }
    }
  };

  const checkAchievements = () => {
    const newAchievements = [];
    
    if (completedLessons === 1 && !unlockedAchievements.includes('first_lesson')) {
      newAchievements.push('first_lesson');
    }
    
    if (completedLessons >= 7 && !unlockedAchievements.includes('python_master')) {
      newAchievements.push('python_master');
    }
    
    if (newAchievements.length > 0) {
      setUnlockedAchievements([...unlockedAchievements, ...newAchievements]);
    }
  };

  const getSuggestions = () => {
    const suggestions = [
      'print("Hola mundo")',
      'def mi_funcion():',
      'for i in range(10):',
      'if condicion:',
      'variable = "valor"',
      'lista = [1, 2, 3]',
      'diccionario = {"clave": "valor"}',
      'try:\n    # código\nexcept Exception as e:\n    print(e)'
    ];
    
    setCodeSuggestions(suggestions);
    setShowSuggestions(true);
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
          {/* Header */}
          <div className="header-section">
            <div className="python-hero">
              <div className="python-icon">🐍</div>
              <IonText>
                <h1>Aprende Python</h1>
                <p>Domina uno de los lenguajes más versátiles del mundo</p>
              </IonText>
            </div>
            
            {/* Progress */}
            <IonCard className="progress-card">
              <IonCardContent>
                <div className="progress-info">
                  <IonText>
                    <h3>Tu Progreso</h3>
                    <p>{completedLessons} de {totalLessons} lecciones completadas</p>
                  </IonText>
                  <IonBadge color="primary" className="progress-badge">
                    {Math.round(progressPercentage)}%
                  </IonBadge>
                </div>
                <IonProgressBar value={progressPercentage / 100} color="primary" />
              </IonCardContent>
            </IonCard>
          </div>

          {/* Difficulty Selector */}
          <div className="difficulty-section">
            <IonText>
              <h3>Selecciona el nivel de dificultad</h3>
            </IonText>
            <IonSegment value={selectedDifficulty} onIonChange={e => setSelectedDifficulty(e.detail.value as any)}>
              <IonSegmentButton value="beginner">
                <IonLabel>Principiante</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="intermediate">
                <IonLabel>Intermedio</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="advanced">
                <IonLabel>Avanzado</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </div>

          {/* Lessons Grid */}
          <div className="lessons-section">
            <IonGrid>
              <IonRow>
                {filteredLessons.map(lesson => (
                  <IonCol size="12" sizeMd="6" key={lesson.id}>
                    <IonCard className={`lesson-card ${lesson.completed ? 'completed' : ''}`}>
                      <IonCardHeader>
                        <div className="lesson-header">
                          <IonCardTitle>{lesson.title}</IonCardTitle>
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
                      </IonCardHeader>
                      <IonCardContent>
                        <IonText>
                          <p>{lesson.description}</p>
                        </IonText>
                        <div className="lesson-actions">
                          <IonButton 
                            expand="block" 
                            fill={lesson.completed ? 'outline' : 'solid'}
                            color={lesson.completed ? 'success' : 'primary'}
                            onClick={() => openLesson(lesson)}
                          >
                            <IonIcon 
                              icon={lesson.completed ? checkmarkCircle : playCircle} 
                              slot="start" 
                            />
                            {lesson.completed ? 'Revisar' : 'Comenzar'}
                          </IonButton>
                        </div>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                ))}
              </IonRow>
            </IonGrid>
          </div>

          {/* Achievements */}
          <div className="achievements-section">
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>
                  <IonIcon icon={trophyOutline} />
                  Logros
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonGrid>
                  <IonRow>
                    {achievements.map(achievement => (
                      <IonCol size="6" sizeMd="3" key={achievement.id}>
                        <div className={`achievement ${unlockedAchievements.includes(achievement.id) ? 'unlocked' : 'locked'}`}>
                          <IonIcon icon={trophyOutline} />
                          <IonText>
                            <h4>{achievement.title}</h4>
                            <p>{achievement.description}</p>
                          </IonText>
                        </div>
                      </IonCol>
                    ))}
                  </IonRow>
                </IonGrid>
              </IonCardContent>
            </IonCard>
          </div>

          {/* Modal de Lección */}
          <IonModal isOpen={isModalOpen} onDidDismiss={() => setIsModalOpen(false)}>
            <IonContent>
              {selectedLesson && (
                <div className="lesson-modal">
                  <div className="modal-header">
                    <IonText>
                      <h2>{selectedLesson.title}</h2>
                      <p>{selectedLesson.description}</p>
                    </IonText>
                    <IonButton fill="clear" onClick={() => setIsModalOpen(false)}>
                      Cerrar
                    </IonButton>
                  </div>

                  <div className="modal-content">
                    <IonCard>
                      <IonCardHeader>
                        <IonCardTitle>
                          <IonIcon icon={bookOutline} />
                          Teoría
                        </IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <div className="lesson-content">
                          {selectedLesson.content.split('\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                          ))}
                        </div>
                      </IonCardContent>
                    </IonCard>

                    <IonCard>
                      <IonCardHeader>
                        <IonCardTitle>
                          <IonIcon icon={codeSlash} />
                          Ejemplo de Código
                        </IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <pre className="code-example">
                          {selectedLesson.codeExample}
                        </pre>
                      </IonCardContent>
                    </IonCard>

                    <IonCard>
                      <IonCardHeader>
                        <IonCardTitle>
                          <IonIcon icon={bulbOutline} />
                          Ejercicio
                        </IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <IonText>
                          <p>{selectedLesson.exercise}</p>
                        </IonText>
                        
                        <div className="code-editor">
                          <IonTextarea
                            value={userCode}
                            onIonInput={(e) => setUserCode(e.detail.value!)}
                            placeholder="Escribe tu código aquí..."
                            className="code-textarea"
                            rows={10}
                          />
                        </div>

                        <div className="code-actions">
                          <IonButton onClick={getSuggestions} fill="outline" color="medium">
                            <IonIcon icon={bulbOutline} slot="start" />
                            Ayuda
                          </IonButton>
                          <IonButton onClick={checkCode} color="success">
                            <IonIcon icon={checkmarkCircle} slot="start" />
                            Verificar Código
                          </IonButton>
                        </div>

                        {showSuggestions && (
                          <div className="suggestions">
                            <IonText>
                              <h4>Sugerencias:</h4>
                            </IonText>
                            <IonList>
                              {codeSuggestions.map((suggestion, index) => (
                                <IonItem key={index} button onClick={() => {
                                  setUserCode(userCode + '\n' + suggestion);
                                  setShowSuggestions(false);
                                }}>
                                  <IonLabel>
                                    <code>{suggestion}</code>
                                  </IonLabel>
                                </IonItem>
                              ))}
                            </IonList>
                          </div>
                        )}
                      </IonCardContent>
                    </IonCard>
                  </div>
                </div>
              )}
            </IonContent>
          </IonModal>

          {/* Toast */}
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
