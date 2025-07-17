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
  bookOutline
} from 'ionicons/icons';
import { useParams, useHistory } from 'react-router-dom';
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
    setToastMessage('¡Lección completada! Excelente trabajo.');
    setShowToast(true);
    
    // Aquí podrías actualizar el estado global o localStorage
    setTimeout(() => {
      history.goBack();
    }, 1500);
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
                    <IonIcon icon={checkmarkCircle} slot="start" />
                    Completar lección
                  </IonButton>
                </div>
              </div>
            </IonCardContent>
          </IonCard>
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
