import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon,
  IonText,
  IonCard,
  IonCardContent,
  IonTextarea,
  IonToast,
  IonBackButton,
  IonButtons,
  IonChip,
  IonLabel
} from '@ionic/react';
import { 
  checkmarkCircle, 
  codeSlash, 
  chevronBackOutline,
  timeOutline,
  bookOutline,
  school
} from 'ionicons/icons';
import { useParams, useHistory } from 'react-router-dom';
import QuizComponent from '../components/QuizComponent';
import { javaQuizzes, pythonQuizzes } from '../data/quizData';
import './LessonDetail.css';

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

interface LessonDetailParams {
  lessonId: string;
  language: string;
}

const LessonDetail: React.FC = () => {
  const { lessonId, language } = useParams<LessonDetailParams>();
  const history = useHistory();
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [userCode, setUserCode] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  // Lecciones de Java completas
  const javaLessons: Lesson[] = [
    // PRINCIPIANTE
    {
      id: 1,
      title: "Introducción a Java",
      description: "Conceptos básicos de Java y sintaxis fundamental",
      difficulty: 'beginner',
      duration: 18,
      completed: false,
      content: `Java es un lenguaje de programación orientado a objetos, robusto y seguro. Fue desarrollado por Sun Microsystems en 1995 y ahora es mantenido por Oracle.

Características principales:
• Write Once, Run Anywhere (WORA)
• Independiente de la plataforma
• Orientado a objetos
• Fuertemente tipado
• Gestión automática de memoria
• Multiplataforma`,
      codeExample: `public class HolaMundo {
    public static void main(String[] args) {
        System.out.println("¡Hola, mundo!");
        System.out.println("Bienvenido a Java");
    }
}`,
      exercise: `Crea un programa Java que imprima "¡Hola, Java!" y tu nombre en la consola.`,
      expectedOutput: "¡Hola, Java!\nTu nombre"
    },
    {
      id: 2,
      title: "Variables y Tipos de Datos",
      description: "Aprende sobre variables, tipos primitivos y declaraciones",
      difficulty: 'beginner',
      duration: 22,
      completed: false,
      content: `Java es un lenguaje fuertemente tipado con tipos primitivos y objetos.

Tipos primitivos:
• byte: 8 bits (-128 a 127)
• short: 16 bits (-32,768 a 32,767)
• int: 32 bits (-2,147,483,648 a 2,147,483,647)
• long: 64 bits (muy grandes)
• float: 32 bits (decimales)
• double: 64 bits (decimales de doble precisión)
• char: 16 bits (un carácter Unicode)
• boolean: true o false`,
      codeExample: `public class Variables {
    public static void main(String[] args) {
        int edad = 25;
        String nombre = "Juan";
        boolean esEstudiante = true;
        double altura = 1.75;
        char inicial = 'J';
        
        System.out.println("Nombre: " + nombre);
        System.out.println("Edad: " + edad);
        System.out.println("Altura: " + altura);
        System.out.println("Es estudiante: " + esEstudiante);
        System.out.println("Inicial: " + inicial);
    }
}`,
      exercise: `Declara variables de diferentes tipos y muestra sus valores.`,
      expectedOutput: "Variables correctamente definidas y mostradas"
    },
    {
      id: 3,
      title: "Operadores y Expresiones",
      description: "Operadores aritméticos, lógicos y de comparación",
      difficulty: 'beginner',
      duration: 20,
      completed: false,
      content: `Los operadores en Java nos permiten realizar operaciones.

Operadores aritméticos:
• + (suma)
• - (resta)
• * (multiplicación)
• / (división)
• % (módulo)

Operadores de comparación:
• == (igual)
• != (diferente)
• < (menor que)
• > (mayor que)
• <= (menor o igual)
• >= (mayor o igual)

Operadores lógicos:
• && (AND)
• || (OR)
• ! (NOT)`,
      codeExample: `public class Operadores {
    public static void main(String[] args) {
        int a = 10;
        int b = 5;
        
        // Aritméticos
        System.out.println("Suma: " + (a + b));
        System.out.println("Resta: " + (a - b));
        System.out.println("Multiplicación: " + (a * b));
        System.out.println("División: " + (a / b));
        System.out.println("Módulo: " + (a % b));
        
        // Comparación
        System.out.println("a > b: " + (a > b));
        System.out.println("a == b: " + (a == b));
        
        // Lógicos
        boolean x = true;
        boolean y = false;
        System.out.println("x && y: " + (x && y));
        System.out.println("x || y: " + (x || y));
        System.out.println("!x: " + (!x));
    }
}`,
      exercise: `Realiza operaciones matemáticas y lógicas con diferentes valores.`,
      expectedOutput: "Operaciones correctas"
    },
    {
      id: 4,
      title: "Entrada y Salida de Datos",
      description: "Lectura de datos del usuario con Scanner",
      difficulty: 'beginner',
      duration: 25,
      completed: false,
      content: `Para leer datos del usuario, usamos la clase Scanner del paquete java.util.

Métodos principales:
• nextInt(): lee un entero
• nextDouble(): lee un decimal
• nextLine(): lee una línea completa
• next(): lee una palabra
• nextBoolean(): lee un boolean`,
      codeExample: `import java.util.Scanner;

public class EntradaDatos {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Ingresa tu nombre: ");
        String nombre = scanner.nextLine();
        
        System.out.print("Ingresa tu edad: ");
        int edad = scanner.nextInt();
        
        System.out.print("Ingresa tu altura: ");
        double altura = scanner.nextDouble();
        
        System.out.println("Hola " + nombre);
        System.out.println("Tienes " + edad + " años");
        System.out.println("Mides " + altura + " metros");
        
        scanner.close();
    }
}`,
      exercise: `Crea un programa que solicite datos personales al usuario.`,
      expectedOutput: "Datos leídos correctamente"
    },
    {
      id: 5,
      title: "Cadenas de Texto (String)",
      description: "Manipulación de cadenas de texto en Java",
      difficulty: 'beginner',
      duration: 24,
      completed: false,
      content: `Las cadenas (String) son objetos en Java que representan texto.

Métodos útiles:
• length(): longitud de la cadena
• charAt(index): carácter en posición específica
• substring(start, end): subcadena
• toLowerCase(): a minúsculas
• toUpperCase(): a mayúsculas
• trim(): elimina espacios
• contains(text): contiene texto
• replace(old, new): reemplaza texto`,
      codeExample: `public class Cadenas {
    public static void main(String[] args) {
        String texto = "  Hola Mundo Java  ";
        
        System.out.println("Original: '" + texto + "'");
        System.out.println("Longitud: " + texto.length());
        System.out.println("Sin espacios: '" + texto.trim() + "'");
        System.out.println("Mayúsculas: " + texto.toUpperCase());
        System.out.println("Minúsculas: " + texto.toLowerCase());
        System.out.println("Primer carácter: " + texto.charAt(0));
        System.out.println("Contiene 'Java': " + texto.contains("Java"));
        System.out.println("Reemplazar: " + texto.replace("Mundo", "Universo"));
        System.out.println("Subcadena: " + texto.substring(2, 6));
    }
}`,
      exercise: `Manipula diferentes cadenas de texto usando varios métodos.`,
      expectedOutput: "Cadenas manipuladas correctamente"
    },

    // INTERMEDIO
    {
      id: 6,
      title: "Estructuras de Control - Condicionales",
      description: "if, else if, else y switch en Java",
      difficulty: 'intermediate',
      duration: 28,
      completed: false,
      content: `Las estructuras de control permiten dirigir el flujo del programa.

Condicionales:
• if: ejecuta código si la condición es verdadera
• else if: condición alternativa
• else: ejecuta si ninguna condición es verdadera
• switch: evalúa múltiples casos

Operador ternario: condición ? valorSiTrue : valorSiFalse`,
      codeExample: `public class Condicionales {
    public static void main(String[] args) {
        int edad = 20;
        String categoria;
        
        // if-else if-else
        if (edad < 13) {
            categoria = "Niño";
        } else if (edad < 18) {
            categoria = "Adolescente";
        } else if (edad < 65) {
            categoria = "Adulto";
        } else {
            categoria = "Adulto Mayor";
        }
        
        System.out.println("Categoría: " + categoria);
        
        // switch
        int dia = 3;
        String nombreDia;
        
        switch (dia) {
            case 1:
                nombreDia = "Lunes";
                break;
            case 2:
                nombreDia = "Martes";
                break;
            case 3:
                nombreDia = "Miércoles";
                break;
            default:
                nombreDia = "Día desconocido";
        }
        
        System.out.println("Día: " + nombreDia);
        
        // Operador ternario
        String mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
        System.out.println(mensaje);
    }
}`,
      exercise: `Crea un programa que evalúe notas y asigne calificaciones.`,
      expectedOutput: "Condicionales funcionando"
    },
    {
      id: 7,
      title: "Estructuras de Control - Bucles",
      description: "for, while, do-while y bucles anidados",
      difficulty: 'intermediate',
      duration: 30,
      completed: false,
      content: `Los bucles permiten repetir código múltiples veces.

Tipos de bucles:
• for: cuando conoces el número de iteraciones
• while: mientras la condición sea verdadera
• do-while: ejecuta al menos una vez
• for-each: para recorrer colecciones

Palabras clave:
• break: sale del bucle
• continue: salta a la siguiente iteración`,
      codeExample: `public class Bucles {
    public static void main(String[] args) {
        // for
        System.out.println("Bucle for:");
        for (int i = 1; i <= 5; i++) {
            System.out.println("Iteración: " + i);
        }
        
        // while
        System.out.println("\\nBucle while:");
        int contador = 1;
        while (contador <= 3) {
            System.out.println("Contador: " + contador);
            contador++;
        }
        
        // do-while
        System.out.println("\\nBucle do-while:");
        int numero = 1;
        do {
            System.out.println("Número: " + numero);
            numero++;
        } while (numero <= 3);
        
        // for-each con array
        System.out.println("\\nBucle for-each:");
        int[] numeros = {10, 20, 30, 40, 50};
        for (int num : numeros) {
            System.out.println("Valor: " + num);
        }
        
        // break y continue
        System.out.println("\\nBreak y continue:");
        for (int i = 1; i <= 10; i++) {
            if (i == 5) {
                continue; // Salta la iteración 5
            }
            if (i == 8) {
                break; // Sale del bucle
            }
            System.out.println("i: " + i);
        }
    }
}`,
      exercise: `Crea programas usando diferentes tipos de bucles.`,
      expectedOutput: "Bucles funcionando correctamente"
    },
    {
      id: 8,
      title: "Arrays y Arreglos",
      description: "Creación y manipulación de arrays unidimensionales y multidimensionales",
      difficulty: 'intermediate',
      duration: 32,
      completed: false,
      content: `Los arrays almacenan múltiples elementos del mismo tipo.

Características:
• Tamaño fijo una vez creado
• Índices comienzan en 0
• Acceso rápido por índice
• Pueden ser multidimensionales

Creación:
• tipo[] nombre = new tipo[tamaño];
• tipo[] nombre = {valor1, valor2, ...};`,
      codeExample: `public class Arrays {
    public static void main(String[] args) {
        // Array unidimensional
        int[] numeros = {10, 20, 30, 40, 50};
        
        System.out.println("Array original:");
        for (int i = 0; i < numeros.length; i++) {
            System.out.println("Índice " + i + ": " + numeros[i]);
        }
        
        // Array bidimensional (matriz)
        int[][] matriz = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        System.out.println("\\nMatriz 3x3:");
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                System.out.print(matriz[i][j] + " ");
            }
            System.out.println();
        }
    }
}`,
      exercise: `Crea y manipula arrays de diferentes tipos.`,
      expectedOutput: "Arrays creados y manipulados correctamente"
    },
    {
      id: 9,
      title: "Métodos y Funciones",
      description: "Definición, parámetros, retorno y sobrecarga de métodos",
      difficulty: 'intermediate',
      duration: 35,
      completed: false,
      content: `Los métodos permiten reutilizar código y organizar la lógica.

Estructura:
modificador tipoRetorno nombreMetodo(parámetros) {
    // código
    return valor; // si no es void
}

Características:
• Pueden recibir parámetros
• Pueden retornar valores
• Pueden ser sobrecargados
• Facilitan la reutilización`,
      codeExample: `public class Metodos {
    
    // Método sin parámetros y sin retorno
    public static void saludar() {
        System.out.println("¡Hola a todos!");
    }
    
    // Método con parámetros y retorno
    public static String saludarPersona(String nombre) {
        return "Hola, " + nombre + "!";
    }
    
    // Método con múltiples parámetros
    public static int sumar(int a, int b) {
        return a + b;
    }
    
    // Sobrecarga de métodos
    public static double sumar(double a, double b) {
        return a + b;
    }
    
    public static void main(String[] args) {
        saludar();
        
        String mensaje = saludarPersona("Ana");
        System.out.println(mensaje);
        
        int suma1 = sumar(5, 3);
        double suma2 = sumar(2.5, 3.7);
        
        System.out.println("Suma enteros: " + suma1);
        System.out.println("Suma decimales: " + suma2);
    }
}`,
      exercise: `Crea métodos para realizar diferentes operaciones matemáticas.`,
      expectedOutput: "Métodos funcionando correctamente"
    },
    {
      id: 10,
      title: "Colecciones - ArrayList",
      description: "Uso de ArrayList para listas dinámicas",
      difficulty: 'intermediate',
      duration: 30,
      completed: false,
      content: `ArrayList es una lista dinámica que puede cambiar de tamaño.

Características:
• Tamaño variable
• Permite duplicados
• Mantiene el orden de inserción
• Acceso por índice
• Parte del framework Collections

Métodos principales:
• add(): agregar elemento
• remove(): eliminar elemento
• get(): obtener elemento
• size(): tamaño
• contains(): contiene elemento
• clear(): limpiar lista`,
      codeExample: `import java.util.ArrayList;

public class ArrayListDemo {
    public static void main(String[] args) {
        // Crear ArrayList
        ArrayList<String> nombres = new ArrayList<>();
        
        // Agregar elementos
        nombres.add("Ana");
        nombres.add("Luis");
        nombres.add("María");
        
        System.out.println("Lista: " + nombres);
        System.out.println("Tamaño: " + nombres.size());
        
        // Acceder a elementos
        System.out.println("Primer elemento: " + nombres.get(0));
        
        // Verificar si contiene
        System.out.println("¿Contiene María? " + nombres.contains("María"));
        
        // Recorrer con for-each
        System.out.println("\\nRecorriendo la lista:");
        for (String nombre : nombres) {
            System.out.println("- " + nombre);
        }
    }
}`,
      exercise: `Crea una lista de estudiantes y manipúlala.`,
      expectedOutput: "ArrayList funcionando correctamente"
    },

    // AVANZADO
    {
      id: 11,
      title: "Programación Orientada a Objetos - Clases",
      description: "Creación de clases, constructores y métodos",
      difficulty: 'advanced',
      duration: 40,
      completed: false,
      content: `Las clases son plantillas para crear objetos.

Componentes de una clase:
• Atributos (variables de instancia)
• Constructores
• Métodos
• Modificadores de acceso

Modificadores:
• public: accesible desde cualquier lugar
• private: solo dentro de la clase
• protected: clase y subclases
• default: mismo paquete`,
      codeExample: `public class Persona {
    // Atributos privados
    private String nombre;
    private int edad;
    
    // Constructor
    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    // Métodos getter
    public String getNombre() {
        return nombre;
    }
    
    public int getEdad() {
        return edad;
    }
    
    // Métodos setter
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    public void setEdad(int edad) {
        if (edad >= 0) {
            this.edad = edad;
        }
    }
    
    // Método para mostrar información
    public void mostrarInfo() {
        System.out.println("Nombre: " + nombre);
        System.out.println("Edad: " + edad + " años");
    }
}`,
      exercise: `Crea una clase Estudiante con atributos y métodos.`,
      expectedOutput: "Clases y objetos funcionando correctamente"
    },
    {
      id: 12,
      title: "Herencia y Polimorfismo",
      description: "Conceptos de herencia, super, override y polimorfismo",
      difficulty: 'advanced',
      duration: 45,
      completed: false,
      content: `La herencia permite crear nuevas clases basadas en clases existentes.

Conceptos clave:
• Clase padre (superclase)
• Clase hija (subclase)
• extends: heredar de otra clase
• super: referencia a la clase padre
• @Override: sobrescribir métodos
• Polimorfismo: un objeto puede tomar múltiples formas`,
      codeExample: `// Clase padre
class Animal {
    protected String nombre;
    
    public Animal(String nombre) {
        this.nombre = nombre;
    }
    
    public void hacerSonido() {
        System.out.println(nombre + " hace un sonido");
    }
}

// Clase hija
class Perro extends Animal {
    public Perro(String nombre) {
        super(nombre);
    }
    
    @Override
    public void hacerSonido() {
        System.out.println(nombre + " ladra: ¡Guau!");
    }
}

// Demostración
public class HerenciaDemo {
    public static void main(String[] args) {
        Animal animal = new Animal("Genérico");
        Perro perro = new Perro("Rex");
        
        animal.hacerSonido();
        perro.hacerSonido();
    }
}`,
      exercise: `Crea una jerarquía de clases para vehículos.`,
      expectedOutput: "Herencia y polimorfismo funcionando"
    },
    {
      id: 13,
      title: "Interfaces y Clases Abstractas",
      description: "Definición e implementación de interfaces y clases abstractas",
      difficulty: 'advanced',
      duration: 38,
      completed: false,
      content: `Las interfaces definen contratos que las clases deben cumplir.

Interfaces:
• Definen métodos sin implementación
• Una clase puede implementar múltiples interfaces
• Todos los métodos son public abstract por defecto

Clases abstractas:
• No se pueden instanciar directamente
• Pueden tener métodos abstractos y concretos
• Se heredan con extends`,
      codeExample: `// Interface
interface Volador {
    void volar();
    void aterrizar();
}

// Clase abstracta
abstract class Animal {
    protected String nombre;
    
    public Animal(String nombre) {
        this.nombre = nombre;
    }
    
    public abstract void hacerSonido();
}

// Implementación
class Ave extends Animal implements Volador {
    public Ave(String nombre) {
        super(nombre);
    }
    
    @Override
    public void hacerSonido() {
        System.out.println(nombre + " hace pío pío");
    }
    
    @Override
    public void volar() {
        System.out.println(nombre + " está volando");
    }
    
    @Override
    public void aterrizar() {
        System.out.println(nombre + " está aterrizando");
    }
}`,
      exercise: `Crea interfaces para diferentes comportamientos.`,
      expectedOutput: "Interfaces funcionando correctamente"
    },
    {
      id: 14,
      title: "Manejo de Excepciones",
      description: "try-catch-finally, throw y throws",
      difficulty: 'advanced',
      duration: 35,
      completed: false,
      content: `Las excepciones manejan errores en tiempo de ejecución.

Estructura:
• try: código que puede generar excepción
• catch: maneja la excepción
• finally: siempre se ejecuta
• throw: lanza una excepción
• throws: declara que un método puede lanzar excepción

Tipos de excepciones:
• Checked: deben ser manejadas
• Unchecked: RuntimeException`,
      codeExample: `public class ExcepcionesDemo {
    
    public static int dividir(int a, int b) throws ArithmeticException {
        if (b == 0) {
            throw new ArithmeticException("No se puede dividir por cero");
        }
        return a / b;
    }
    
    public static void main(String[] args) {
        try {
            int resultado = dividir(10, 2);
            System.out.println("Resultado: " + resultado);
            
            // Esto causará una excepción
            int error = dividir(10, 0);
            
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            System.out.println("Bloque finally ejecutado");
        }
    }
}`,
      exercise: `Crea un programa que maneje diferentes tipos de excepciones.`,
      expectedOutput: "Excepciones manejadas correctamente"
    },
    {
      id: 15,
      title: "HashMap y Estructuras de Datos",
      description: "HashMap, TreeMap, HashSet y otras colecciones",
      difficulty: 'advanced',
      duration: 42,
      completed: false,
      content: `Las colecciones avanzadas proporcionan estructuras de datos eficientes.

HashMap:
• Almacena pares clave-valor
• Acceso O(1) promedio
• No mantiene orden
• Permite null

HashSet:
• Elementos únicos
• No mantiene orden
• Basado en HashMap`,
      codeExample: `import java.util.*;

public class ColeccionesDemo {
    public static void main(String[] args) {
        // HashMap
        HashMap<String, Integer> edades = new HashMap<>();
        edades.put("Ana", 25);
        edades.put("Luis", 30);
        edades.put("María", 28);
        
        System.out.println("HashMap de edades:");
        for (Map.Entry<String, Integer> entry : edades.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
        
        // HashSet
        HashSet<String> frutas = new HashSet<>();
        frutas.add("Manzana");
        frutas.add("Banana");
        frutas.add("Manzana"); // Duplicado - no se agrega
        
        System.out.println("\\nHashSet de frutas:");
        for (String fruta : frutas) {
            System.out.println("- " + fruta);
        }
        System.out.println("Tamaño: " + frutas.size());
    }
}`,
      exercise: `Crea un programa que use diferentes colecciones.`,
      expectedOutput: "Colecciones funcionando correctamente"
    }
  ];

  // Lecciones de Python básicas
  const pythonLessons: Lesson[] = [
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
      content: `Las variables en Python son contenedores para almacenar valores de datos.

Python tiene diferentes tipos de datos:
- int: números enteros
- float: números decimales
- str: cadenas de texto
- bool: verdadero/falso
- list: listas

No necesitas declarar el tipo, Python lo detecta automáticamente.`,
      codeExample: `# Variables en Python
edad = 25
nombre = "Ana"
altura = 1.65
es_estudiante = True

# Mostrar valores
print(f"Nombre: {nombre}")
print(f"Edad: {edad}")
print(f"Altura: {altura}")
print(f"Es estudiante: {es_estudiante}")

# Verificar tipos
print(f"Tipo de edad: {type(edad)}")
print(f"Tipo de nombre: {type(nombre)}")`,
      exercise: `Crea variables para almacenar tu información personal:
- nombre (string)
- edad (entero)
- altura (decimal)
- es_programador (booleano)

Luego imprime toda esta información de forma organizada.`,
      expectedOutput: "Información personal con variables correctamente definidas"
    },
    {
      id: 3,
      title: "Operadores y Expresiones",
      description: "Operadores aritméticos, lógicos y de comparación",
      difficulty: 'beginner',
      duration: 18,
      completed: false,
      content: `Los operadores en Python nos permiten realizar operaciones.

Operadores aritméticos:
• + (suma)
• - (resta)
• * (multiplicación)
• / (división)
• // (división entera)
• % (módulo)
• ** (potencia)

Operadores de comparación:
• == (igual)
• != (diferente)
• < (menor que)
• > (mayor que)
• <= (menor o igual)
• >= (mayor o igual)

Operadores lógicos:
• and (Y)
• or (O)
• not (NO)`,
      codeExample: `# Operadores aritméticos
a = 10
b = 3

print(f"Suma: {a + b}")
print(f"Resta: {a - b}")
print(f"Multiplicación: {a * b}")
print(f"División: {a / b}")
print(f"División entera: {a // b}")
print(f"Módulo: {a % b}")
print(f"Potencia: {a ** b}")

# Operadores de comparación
print(f"a > b: {a > b}")
print(f"a == b: {a == b}")

# Operadores lógicos
x = True
y = False
print(f"x and y: {x and y}")
print(f"x or y: {x or y}")
print(f"not x: {not x}")`,
      exercise: `Realiza operaciones matemáticas y lógicas con diferentes valores.`,
      expectedOutput: "Operaciones correctas"
    },
    {
      id: 4,
      title: "Entrada y Salida de Datos",
      description: "Lectura de datos del usuario con input()",
      difficulty: 'beginner',
      duration: 22,
      completed: false,
      content: `Para leer datos del usuario en Python, usamos la función input().

Funciones principales:
• input(): lee una línea como string
• int(): convierte a entero
• float(): convierte a decimal
• str(): convierte a string

La función input() siempre devuelve un string, así que necesitas convertir si quieres otros tipos.`,
      codeExample: `# Entrada y salida básica
nombre = input("Ingresa tu nombre: ")
edad = int(input("Ingresa tu edad: "))
altura = float(input("Ingresa tu altura: "))

print(f"Hola {nombre}")
print(f"Tienes {edad} años")
print(f"Mides {altura} metros")

# Cálculos con los datos
print(f"En 10 años tendrás {edad + 10} años")

# Verificar tipos
print(f"Tipo de nombre: {type(nombre)}")
print(f"Tipo de edad: {type(edad)}")
print(f"Tipo de altura: {type(altura)}")`,
      exercise: `Crea un programa que solicite datos personales al usuario y haga cálculos.`,
      expectedOutput: "Datos leídos correctamente"
    },
    {
      id: 5,
      title: "Cadenas de Texto (String)",
      description: "Manipulación de cadenas de texto en Python",
      difficulty: 'beginner',
      duration: 25,
      completed: false,
      content: `Las cadenas (strings) en Python son secuencias de caracteres.

Métodos útiles:
• len(): longitud de la cadena
• upper(): a mayúsculas
• lower(): a minúsculas
• strip(): elimina espacios
• replace(): reemplaza texto
• split(): divide en lista
• join(): une lista en string
• find(): busca posición
• count(): cuenta ocurrencias

Formateo de strings:
• f-strings: f"Hola {nombre}"
• format(): "Hola {}".format(nombre)
• % formatting: "Hola %s" % nombre`,
      codeExample: `texto = "  Hola Mundo Python  "

print(f"Original: '{texto}'")
print(f"Longitud: {len(texto)}")
print(f"Sin espacios: '{texto.strip()}'")
print(f"Mayúsculas: {texto.upper()}")
print(f"Minúsculas: {texto.lower()}")
print(f"Reemplazar: {texto.replace('Mundo', 'Universo')}")

# División y unión
palabras = texto.strip().split()
print(f"Palabras: {palabras}")
print(f"Unidas: {'-'.join(palabras)}")

# Búsqueda
print(f"Posición 'Python': {texto.find('Python')}")
print(f"Cuenta 'o': {texto.count('o')}")

# Formateo
nombre = "Ana"
edad = 25
print(f"F-string: Hola {nombre}, tienes {edad} años")
print("Format: Hola {}, tienes {} años".format(nombre, edad))
print("Percent: Hola %s, tienes %d años" % (nombre, edad))`,
      exercise: `Manipula diferentes cadenas de texto usando varios métodos.`,
      expectedOutput: "Cadenas manipuladas correctamente"
    },

    // INTERMEDIO
    {
      id: 6,
      title: "Estructuras de Control - Condicionales",
      description: "if, elif, else en Python",
      difficulty: 'intermediate',
      duration: 26,
      completed: false,
      content: `Las estructuras de control permiten dirigir el flujo del programa.

Condicionales en Python:
• if: ejecuta código si la condición es verdadera
• elif: condición alternativa (else if)
• else: ejecuta si ninguna condición es verdadera

Operador ternario: valor_si_true if condición else valor_si_false

Python usa indentación (espacios) para definir bloques de código.`,
      codeExample: `# Condicionales básicas
edad = 20

if edad < 13:
    categoria = "Niño"
elif edad < 18:
    categoria = "Adolescente"
elif edad < 65:
    categoria = "Adulto"
else:
    categoria = "Adulto Mayor"

print(f"Categoría: {categoria}")

# Condiciones múltiples
temperatura = 25
lluvia = False

if temperatura > 20 and not lluvia:
    print("Buen día para salir")
elif temperatura > 20 and lluvia:
    print("Lleva paraguas")
else:
    print("Mejor quedarse en casa")

# Operador ternario
mensaje = "Mayor de edad" if edad >= 18 else "Menor de edad"
print(mensaje)

# Verificar pertenencia
frutas = ["manzana", "banana", "naranja"]
fruta = "manzana"

if fruta in frutas:
    print(f"{fruta} está en la lista")
else:
    print(f"{fruta} no está en la lista")`,
      exercise: `Crea un programa que evalúe notas y asigne calificaciones.`,
      expectedOutput: "Condicionales funcionando"
    },
    {
      id: 7,
      title: "Estructuras de Control - Bucles",
      description: "for, while y control de bucles",
      difficulty: 'intermediate',
      duration: 28,
      completed: false,
      content: `Los bucles permiten repetir código múltiples veces.

Tipos de bucles:
• for: para iterar sobre secuencias
• while: mientras la condición sea verdadera
• range(): genera secuencias numéricas

Palabras clave:
• break: sale del bucle
• continue: salta a la siguiente iteración
• else: se ejecuta si el bucle termina normalmente`,
      codeExample: `# Bucle for con range
print("Bucle for con range:")
for i in range(1, 6):
    print(f"Iteración: {i}")

# Bucle for con lista
print("\\nBucle for con lista:")
frutas = ["manzana", "banana", "naranja"]
for fruta in frutas:
    print(f"Fruta: {fruta}")

# Bucle while
print("\\nBucle while:")
contador = 1
while contador <= 3:
    print(f"Contador: {contador}")
    contador += 1

# Bucle con enumerate
print("\\nBucle con enumerate:")
for indice, fruta in enumerate(frutas):
    print(f"Índice {indice}: {fruta}")

# Break y continue
print("\\nBreak y continue:")
for i in range(1, 11):
    if i == 5:
        continue  # Salta la iteración 5
    if i == 8:
        break  # Sale del bucle
    print(f"i: {i}")

# Bucle for-else
print("\\nBucle for-else:")
for i in range(3):
    print(f"Número: {i}")
else:
    print("Bucle terminado normalmente")`,
      exercise: `Crea programas usando diferentes tipos de bucles.`,
      expectedOutput: "Bucles funcionando correctamente"
    },
    {
      id: 8,
      title: "Listas y Tuplas",
      description: "Manejo de listas y tuplas en Python",
      difficulty: 'intermediate',
      duration: 30,
      completed: false,
      content: `Las listas y tuplas son estructuras de datos fundamentales.

Listas:
• Mutables (se pueden modificar)
• Ordenadas
• Permiten duplicados
• Sintaxis: [elemento1, elemento2, ...]

Tuplas:
• Inmutables (no se pueden modificar)
• Ordenadas
• Permiten duplicados
• Sintaxis: (elemento1, elemento2, ...)

Métodos comunes:
• append(): agregar al final
• insert(): insertar en posición
• remove(): eliminar elemento
• pop(): eliminar y retornar
• sort(): ordenar
• reverse(): invertir`,
      codeExample: `# Listas
numeros = [10, 20, 30, 40, 50]
print(f"Lista original: {numeros}")

# Acceso por índice
print(f"Primer elemento: {numeros[0]}")
print(f"Último elemento: {numeros[-1]}")

# Modificar elementos
numeros[2] = 99
print(f"Después de modificar: {numeros}")

# Métodos de lista
numeros.append(60)
print(f"Después de append: {numeros}")

numeros.insert(1, 15)
print(f"Después de insert: {numeros}")

# Slicing
print(f"Primeros 3: {numeros[:3]}")
print(f"Últimos 2: {numeros[-2:]}")
print(f"Cada 2: {numeros[::2]}")

# Tuplas
coordenadas = (10, 20)
print(f"Coordenadas: {coordenadas}")
print(f"X: {coordenadas[0]}, Y: {coordenadas[1]}")

# Desempaquetado
x, y = coordenadas
print(f"X: {x}, Y: {y}")

# Lista de tuplas
puntos = [(0, 0), (1, 1), (2, 4)]
for x, y in puntos:
    print(f"Punto: ({x}, {y})")

# Comprensiones de lista
cuadrados = [x**2 for x in range(1, 6)]
print(f"Cuadrados: {cuadrados}")

pares = [x for x in range(1, 11) if x % 2 == 0]
print(f"Pares: {pares}")`,
      exercise: `Crea y manipula listas y tuplas de diferentes tipos.`,
      expectedOutput: "Listas y tuplas manejadas correctamente"
    },
    {
      id: 9,
      title: "Funciones",
      description: "Definición y uso de funciones en Python",
      difficulty: 'intermediate',
      duration: 32,
      completed: false,
      content: `Las funciones permiten reutilizar código y organizar la lógica.

Sintaxis:
def nombre_funcion(parámetros):
    # código
    return valor  # opcional

Características:
• Pueden recibir parámetros
• Pueden retornar valores
• Scope (ámbito) local y global
• Argumentos por defecto
• *args y **kwargs
• Funciones lambda`,
      codeExample: `# Función básica
def saludar():
    print("¡Hola a todos!")

# Función con parámetros
def saludar_persona(nombre):
    return f"Hola, {nombre}!"

# Función con múltiples parámetros
def sumar(a, b):
    return a + b

# Función con parámetro por defecto
def presentar(nombre, edad=25):
    return f"Me llamo {nombre} y tengo {edad} años"

# Función con *args
def sumar_varios(*numeros):
    return sum(numeros)

# Función con **kwargs
def crear_perfil(**datos):
    for clave, valor in datos.items():
        print(f"{clave}: {valor}")

# Función lambda
cuadrado = lambda x: x**2
es_par = lambda x: x % 2 == 0

# Usar las funciones
saludar()
print(saludar_persona("Ana"))
print(f"Suma: {sumar(5, 3)}")
print(presentar("Luis"))
print(presentar("María", 30))
print(f"Suma varios: {sumar_varios(1, 2, 3, 4, 5)}")

crear_perfil(nombre="Pedro", edad=28, ciudad="Madrid")

print(f"Cuadrado de 5: {cuadrado(5)}")
print(f"¿Es 4 par? {es_par(4)}")

# Función recursiva
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(f"Factorial de 5: {factorial(5)}")`,
      exercise: `Crea funciones para realizar diferentes operaciones matemáticas.`,
      expectedOutput: "Funciones funcionando correctamente"
    },
    {
      id: 10,
      title: "Diccionarios y Conjuntos",
      description: "Manejo de diccionarios y conjuntos en Python",
      difficulty: 'intermediate',
      duration: 28,
      completed: false,
      content: `Los diccionarios y conjuntos son estructuras de datos avanzadas.

Diccionarios:
• Pares clave-valor
• Mutables
• Claves únicas
• Sintaxis: {clave: valor}

Conjuntos:
• Elementos únicos
• Mutables
• Sin orden
• Sintaxis: {elemento1, elemento2}

Métodos comunes:
• keys(): claves
• values(): valores
• items(): pares clave-valor
• get(): obtener valor
• update(): actualizar
• add(): agregar a conjunto
• remove(): eliminar de conjunto`,
      codeExample: `# Diccionarios
persona = {
    "nombre": "Ana",
    "edad": 25,
    "ciudad": "Madrid"
}

print(f"Diccionario: {persona}")
print(f"Nombre: {persona['nombre']}")
print(f"Edad: {persona.get('edad', 'No disponible')}")

# Agregar y modificar
persona["profesion"] = "Programadora"
persona["edad"] = 26
print(f"Después de modificar: {persona}")

# Iterar sobre diccionario
print("\\nIterando sobre diccionario:")
for clave, valor in persona.items():
    print(f"{clave}: {valor}")

# Métodos de diccionario
print(f"Claves: {list(persona.keys())}")
print(f"Valores: {list(persona.values())}")

# Conjuntos
frutas = {"manzana", "banana", "naranja"}
print(f"\\nConjunto de frutas: {frutas}")

# Agregar y eliminar
frutas.add("kiwi")
frutas.add("manzana")  # No se duplica
print(f"Después de agregar: {frutas}")

frutas.remove("banana")
print(f"Después de eliminar: {frutas}")

# Operaciones de conjuntos
numeros1 = {1, 2, 3, 4, 5}
numeros2 = {4, 5, 6, 7, 8}

print(f"\\nConjunto 1: {numeros1}")
print(f"Conjunto 2: {numeros2}")
print(f"Unión: {numeros1 | numeros2}")
print(f"Intersección: {numeros1 & numeros2}")
print(f"Diferencia: {numeros1 - numeros2}")

# Comprensiones de diccionario
cuadrados_dict = {x: x**2 for x in range(1, 6)}
print(f"\\nCuadrados dict: {cuadrados_dict}")`,
      exercise: `Crea un programa que use diccionarios y conjuntos.`,
      expectedOutput: "Diccionarios y conjuntos funcionando correctamente"
    },

    // AVANZADO
    {
      id: 11,
      title: "Programación Orientada a Objetos - Clases",
      description: "Creación de clases y objetos en Python",
      difficulty: 'advanced',
      duration: 35,
      completed: false,
      content: `La programación orientada a objetos permite crear estructuras complejas.

Conceptos clave:
• Clase: plantilla para crear objetos
• Objeto: instancia de una clase
• Atributos: variables de la clase
• Métodos: funciones de la clase
• __init__: constructor
• self: referencia al objeto actual

Encapsulación:
• Atributos públicos: nombre
• Atributos privados: _nombre (convención)
• Atributos muy privados: __nombre`,
      codeExample: `class Persona:
    # Atributo de clase
    especie = "Homo sapiens"
    
    def __init__(self, nombre, edad):
        # Atributos de instancia
        self.nombre = nombre
        self.edad = edad
        self._id = id(self)  # Atributo "privado"
    
    # Método de instancia
    def saludar(self):
        return f"Hola, soy {self.nombre}"
    
    def cumplir_anos(self):
        self.edad += 1
        return f"{self.nombre} ahora tiene {self.edad} años"
    
    # Método que usa atributos privados
    def get_id(self):
        return self._id
    
    # Método especial para representación
    def __str__(self):
        return f"Persona(nombre='{self.nombre}', edad={self.edad})"
    
    # Método especial para representación técnica
    def __repr__(self):
        return f"Persona('{self.nombre}', {self.edad})"

# Crear objetos
persona1 = Persona("Ana", 25)
persona2 = Persona("Luis", 30)

print(persona1.saludar())
print(persona2.saludar())
print(f"Especie: {Persona.especie}")

# Usar métodos
print(persona1.cumplir_anos())
print(f"ID de persona1: {persona1.get_id()}")

# Representaciones
print(f"str: {str(persona1)}")
print(f"repr: {repr(persona1)}")

# Atributos dinámicos
persona1.profesion = "Programadora"
print(f"Profesión: {persona1.profesion}")`,
      exercise: `Crea una clase Estudiante con atributos y métodos.`,
      expectedOutput: "Clases y objetos funcionando correctamente"
    },
    {
      id: 12,
      title: "Herencia y Polimorfismo",
      description: "Herencia de clases y polimorfismo en Python",
      difficulty: 'advanced',
      duration: 38,
      completed: false,
      content: `La herencia permite crear nuevas clases basadas en clases existentes.

Conceptos clave:
• Clase padre/base: clase original
• Clase hija/derivada: clase que hereda
• super(): acceso a la clase padre
• Polimorfismo: mismo método, diferentes comportamientos
• Método override: sobrescribir método del padre

Types de herencia:
• Simple: una clase padre
• Múltiple: múltiples clases padre
• Multinivel: cadena de herencia`,
      codeExample: `# Clase base
class Animal:
    def __init__(self, nombre, especie):
        self.nombre = nombre
        self.especie = especie
    
    def hacer_sonido(self):
        return f"{self.nombre} hace un sonido"
    
    def info(self):
        return f"{self.nombre} es un {self.especie}"

# Clase derivada
class Perro(Animal):
    def __init__(self, nombre, raza):
        super().__init__(nombre, "Perro")
        self.raza = raza
    
    def hacer_sonido(self):  # Override
        return f"{self.nombre} ladra: ¡Guau guau!"
    
    def buscar_pelota(self):
        return f"{self.nombre} está buscando la pelota"

class Gato(Animal):
    def __init__(self, nombre, color):
        super().__init__(nombre, "Gato")
        self.color = color
    
    def hacer_sonido(self):  # Override
        return f"{self.nombre} maúlla: ¡Miau miau!"
    
    def trepar(self):
        return f"{self.nombre} está trepando"

# Crear objetos
perro = Perro("Rex", "Labrador")
gato = Gato("Mimi", "Blanco")

print(perro.info())
print(gato.info())

# Polimorfismo
animales = [perro, gato]
for animal in animales:
    print(animal.hacer_sonido())

# Métodos específicos
print(perro.buscar_pelota())
print(gato.trepar())

# Verificar herencia
print(f"¿Es perro un Animal? {isinstance(perro, Animal)}")
print(f"¿Es perro un Perro? {isinstance(perro, Perro)}")
print(f"¿Es perro un Gato? {isinstance(perro, Gato)}")`,
      exercise: `Crea una jerarquía de clases para vehículos.`,
      expectedOutput: "Herencia y polimorfismo funcionando"
    },
    {
      id: 13,
      title: "Manejo de Archivos",
      description: "Lectura y escritura de archivos en Python",
      difficulty: 'advanced',
      duration: 30,
      completed: false,
      content: `Python facilita el manejo de archivos con funciones integradas.

Modos de apertura:
• 'r': lectura (por defecto)
• 'w': escritura (sobrescribe)
• 'a': añadir al final
• 'r+': lectura y escritura
• 'b': modo binario

Buenas prácticas:
• Usar with statement
• Manejar excepciones
• Cerrar archivos explícitamente
• Especificar encoding`,
      codeExample: `# Escribir archivo
with open('ejemplo.txt', 'w', encoding='utf-8') as archivo:
    archivo.write("¡Hola, mundo!\\n")
    archivo.write("Esta es la segunda línea\\n")
    archivo.write("Python es genial\\n")

print("Archivo escrito correctamente")

# Leer archivo completo
with open('ejemplo.txt', 'r', encoding='utf-8') as archivo:
    contenido = archivo.read()
    print("Contenido completo:")
    print(contenido)

# Leer línea por línea
with open('ejemplo.txt', 'r', encoding='utf-8') as archivo:
    print("\\nLínea por línea:")
    for numero, linea in enumerate(archivo, 1):
        print(f"Línea {numero}: {linea.strip()}")

# Leer todas las líneas en una lista
with open('ejemplo.txt', 'r', encoding='utf-8') as archivo:
    lineas = archivo.readlines()
    print(f"\\nTotal de líneas: {len(lineas)}")

# Añadir contenido
with open('ejemplo.txt', 'a', encoding='utf-8') as archivo:
    archivo.write("Esta línea se añadió después\\n")

# Manejo de errores
try:
    with open('archivo_inexistente.txt', 'r') as archivo:
        contenido = archivo.read()
except FileNotFoundError:
    print("\\nError: El archivo no existe")
except PermissionError:
    print("\\nError: No tienes permisos para leer el archivo")
except Exception as e:
    print(f"\\nError inesperado: {e}")

# Trabajar con CSV (simulado)
import csv

# Escribir CSV
datos = [
    ['Nombre', 'Edad', 'Ciudad'],
    ['Ana', '25', 'Madrid'],
    ['Luis', '30', 'Barcelona'],
    ['María', '28', 'Valencia']
]

with open('personas.csv', 'w', newline='', encoding='utf-8') as archivo:
    escritor = csv.writer(archivo)
    escritor.writerows(datos)

# Leer CSV
with open('personas.csv', 'r', encoding='utf-8') as archivo:
    lector = csv.reader(archivo)
    print("\\nDatos del CSV:")
    for fila in lector:
        print(fila)`,
      exercise: `Crea un programa que maneje archivos de texto.`,
      expectedOutput: "Archivos manejados correctamente"
    },
    {
      id: 14,
      title: "Manejo de Excepciones",
      description: "try, except, finally y manejo de errores",
      difficulty: 'advanced',
      duration: 32,
      completed: false,
      content: `El manejo de excepciones permite controlar errores en tiempo de ejecución.

Estructura:
• try: código que puede generar error
• except: maneja el error
• else: se ejecuta si no hay error
• finally: siempre se ejecuta
• raise: lanza una excepción
• assert: verifica condiciones

Tipos de excepciones comunes:
• ValueError: valor incorrecto
• TypeError: tipo incorrecto
• KeyError: clave no encontrada
• IndexError: índice fuera de rango
• FileNotFoundError: archivo no encontrado`,
      codeExample: `# Manejo básico de excepciones
def dividir(a, b):
    try:
        resultado = a / b
        return resultado
    except ZeroDivisionError:
        print("Error: No se puede dividir por cero")
        return None
    except TypeError:
        print("Error: Los argumentos deben ser números")
        return None

# Probar la función
print(f"10 / 2 = {dividir(10, 2)}")
print(f"10 / 0 = {dividir(10, 0)}")
print(f"10 / 'a' = {dividir(10, 'a')}")

# Manejo múltiple de excepciones
def procesar_lista(lista, indice):
    try:
        valor = lista[indice]
        numero = int(valor)
        return numero * 2
    except IndexError:
        print(f"Error: Índice {indice} fuera de rango")
    except ValueError:
        print(f"Error: '{valor}' no es un número válido")
    except Exception as e:
        print(f"Error inesperado: {e}")
    finally:
        print("Procesamiento terminado")

# Probar manejo múltiple
numeros = ["10", "20", "abc", "40"]
print("\\nProcesando lista:")
procesar_lista(numeros, 0)  # OK
procesar_lista(numeros, 2)  # ValueError
procesar_lista(numeros, 10)  # IndexError

# Lanzar excepciones personalizadas
class EdadInvalidaError(Exception):
    def __init__(self, edad):
        self.edad = edad
        super().__init__(f"Edad inválida: {edad}")

def validar_edad(edad):
    if edad < 0:
        raise EdadInvalidaError(edad)
    if edad > 150:
        raise EdadInvalidaError(edad)
    return True

# Probar excepción personalizada
try:
    validar_edad(25)
    print("\\nEdad válida")
    validar_edad(-5)
except EdadInvalidaError as e:
    print(f"\\nError: {e}")

# Usar assert
def calcular_raiz(numero):
    assert numero >= 0, "El número debe ser no negativo"
    return numero ** 0.5

try:
    print(f"\\nRaíz de 16: {calcular_raiz(16)}")
    print(f"Raíz de -4: {calcular_raiz(-4)}")
except AssertionError as e:
    print(f"Assertion Error: {e}")`,
      exercise: `Crea un programa que maneje diferentes tipos de excepciones.`,
      expectedOutput: "Excepciones manejadas correctamente"
    },
    {
      id: 15,
      title: "Módulos y Bibliotecas",
      description: "Importación y uso de módulos en Python",
      difficulty: 'advanced',
      duration: 35,
      completed: false,
      content: `Los módulos permiten organizar y reutilizar código.

Formas de importar:
• import modulo
• from modulo import funcion
• from modulo import *
• import modulo as alias

Bibliotecas estándar útiles:
• math: funciones matemáticas
• random: números aleatorios
• datetime: fechas y horas
• os: sistema operativo
• sys: sistema Python
• json: manejo de JSON
• re: expresiones regulares`,
      codeExample: `# Importar módulos estándar
import math
import random
import datetime
from collections import Counter

# Usar módulo math
print(f"Pi: {math.pi}")
print(f"Raíz de 16: {math.sqrt(16)}")
print(f"Seno de 90°: {math.sin(math.radians(90))}")

# Usar módulo random
print(f"\\nNúmero aleatorio: {random.random()}")
print(f"Entero aleatorio (1-10): {random.randint(1, 10)}")

colores = ["rojo", "azul", "verde", "amarillo"]
print(f"Color aleatorio: {random.choice(colores)}")

# Usar datetime
ahora = datetime.datetime.now()
print(f"\\nFecha actual: {ahora}")
print(f"Solo fecha: {ahora.date()}")
print(f"Solo hora: {ahora.time()}")

# Formatear fecha
fecha_formateada = ahora.strftime("%d/%m/%Y %H:%M:%S")
print(f"Fecha formateada: {fecha_formateada}")

# Usar Counter
texto = "python es genial python es poderoso"
palabras = texto.split()
contador = Counter(palabras)
print(f"\\nContador de palabras: {contador}")
print(f"Palabra más común: {contador.most_common(1)}")

# Crear un módulo simple (simulado)
def crear_modulo():
    codigo_modulo = '''
def saludar(nombre):
    return f"Hola, {nombre}!"

def despedir(nombre):
    return f"Adiós, {nombre}!"

PI = 3.14159
'''
    with open('mi_modulo.py', 'w') as archivo:
        archivo.write(codigo_modulo)
    print("Módulo 'mi_modulo.py' creado")

crear_modulo()

# Importar nuestro módulo (simulado)
# import mi_modulo
# print(mi_modulo.saludar("Ana"))
# print(f"Pi desde mi módulo: {mi_modulo.PI}")

# Trabajar con JSON
import json

datos = {
    "nombre": "Ana",
    "edad": 25,
    "hobbies": ["lectura", "música", "programación"]
}

# Convertir a JSON
json_string = json.dumps(datos, indent=2)
print(f"\\nJSON: {json_string}")

# Convertir de JSON
datos_restaurados = json.loads(json_string)
print(f"Datos restaurados: {datos_restaurados}")`,
      exercise: `Crea un programa que use diferentes módulos de Python.`,
      expectedOutput: "Módulos funcionando correctamente"
    }
  ];

  useEffect(() => {
    const lessons = language === 'python' ? pythonLessons : javaLessons;
    const foundLesson = lessons.find(l => l.id === parseInt(lessonId));
    if (foundLesson) {
      setLesson(foundLesson);
    }
  }, [lessonId, language]);

  const handleRunCode = () => {
    if (userCode.trim()) {
      setToastMessage('Código ejecutado correctamente!');
      setShowToast(true);
      // Aquí podrías agregar lógica para validar el código
    } else {
      setToastMessage('Por favor, escribe algo de código antes de ejecutar.');
      setShowToast(true);
    }
  };

  const handleCompleteLesson = () => {
    // Mostrar quiz antes de completar la lección
    setShowQuiz(true);
  };

  const handleQuizComplete = (score: number) => {
    setQuizScore(score);
    setQuizCompleted(true);
    setShowQuiz(false);
    
    if (score >= 70) {
      setToastMessage('¡Lección completada! Excelente trabajo.');
      setShowToast(true);
      
      // Aquí podrías actualizar el estado global o localStorage
      setTimeout(() => {
        history.push('/tabs/lessons');
      }, 1500);
    } else {
      setToastMessage('Necesitas obtener al menos 70% para completar la lección. ¡Revisa el material!');
      setShowToast(true);
    }
  };

  const retakeQuiz = () => {
    setShowQuiz(true);
    setQuizCompleted(false);
    setQuizScore(0);
  };

  if (!lesson) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
            <IonTitle>Lección no encontrada</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div className="lesson-detail-container">
            <IonText>
              <h2>Lección no encontrada</h2>
              <p>No se pudo encontrar la lección solicitada.</p>
            </IonText>
          </div>
        </IonContent>
      </IonPage>
    );
  }

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
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{lesson.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="lesson-detail-container">
          {/* Header de la lección */}
          <div className="lesson-header">
            <IonText>
              <h1>{lesson.title}</h1>
              <p className="lesson-description">{lesson.description}</p>
            </IonText>
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

          {/* Contenido teórico */}
          <IonCard className="theory-card">
            <IonCardContent>
              <div className="theory-header">
                <IonIcon icon={bookOutline} />
                <IonText>
                  <h3>Teoría</h3>
                </IonText>
              </div>
              <div className="theory-content">
                <pre>{lesson.content}</pre>
              </div>
            </IonCardContent>
          </IonCard>

          {/* Ejemplo de código */}
          <IonCard className="code-example-card">
            <IonCardContent>
              <div className="code-header">
                <IonIcon icon={codeSlash} />
                <IonText>
                  <h3>Ejemplo de código</h3>
                </IonText>
              </div>
              <div className="code-example">
                <pre><code>{lesson.codeExample}</code></pre>
              </div>
            </IonCardContent>
          </IonCard>

          {/* Ejercicio */}
          <IonCard className="exercise-card">
            <IonCardContent>
              <div className="exercise-header">
                <IonIcon icon={checkmarkCircle} />
                <IonText>
                  <h3>Ejercicio</h3>
                </IonText>
              </div>
              <div className="exercise-content">
                <p>{lesson.exercise}</p>
                <IonTextarea
                  value={userCode}
                  placeholder="Escribe tu código aquí..."
                  onIonInput={(e) => setUserCode(e.detail.value!)}
                  className="code-input"
                  rows={8}
                />
                <div className="exercise-actions">
                  <IonButton expand="block" onClick={handleRunCode} color="primary">
                    <IonIcon icon={codeSlash} slot="start" />
                    Ejecutar código
                  </IonButton>
                  <IonButton expand="block" onClick={handleCompleteLesson} color="success">
                    <IonIcon icon={school} slot="start" />
                    Tomar Quiz y Completar Lección
                  </IonButton>
                </div>
              </div>
            </IonCardContent>
          </IonCard>

          {/* Quiz */}
          {showQuiz && (
            <QuizComponent
              questions={language === 'python' ? pythonQuizzes[parseInt(lessonId)] || [] : javaQuizzes[parseInt(lessonId)] || []}
              title={`Quiz: ${lesson.title}`}
              onComplete={handleQuizComplete}
              passingScore={70}
            />
          )}

          {/* Resultado del Quiz */}
          {quizCompleted && (
            <IonCard className="quiz-result-card">
              <IonCardContent>
                <div className="quiz-result-header">
                  <IonIcon 
                    icon={quizScore >= 70 ? checkmarkCircle : school} 
                    color={quizScore >= 70 ? "success" : "warning"}
                    style={{ fontSize: '32px' }}
                  />
                  <IonText>
                    <h3>Resultado del Quiz</h3>
                    <p>Tu puntuación: {quizScore}%</p>
                  </IonText>
                </div>
                {quizScore < 70 && (
                  <div className="quiz-retry-section">
                    <p>Necesitas al menos 70% para completar la lección.</p>
                    <IonButton expand="block" onClick={retakeQuiz} color="warning">
                      <IonIcon icon={school} slot="start" />
                      Volver a tomar el Quiz
                    </IonButton>
                  </div>
                )}
              </IonCardContent>
            </IonCard>
          )}
        </div>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default LessonDetail;
