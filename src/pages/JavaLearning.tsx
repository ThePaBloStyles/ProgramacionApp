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
  IonChip,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonToast,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonProgressBar
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import {
  checkmarkCircle,
  playCircle,
  trophyOutline,
  bookOutline,
  timeOutline,
  lockClosedOutline
} from 'ionicons/icons';
import { javaQuizzes } from '../data/javaQuizData';
import './JavaLearning.css';

interface Lesson {
  id: number;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'final';
  duration: number;
  completed: boolean;
  content: string;
  codeExample: string;
  exercise: string;
  expectedOutput: string;
  isLocked?: boolean;
  unlockRequirement?: string;
}

const JavaLearning: React.FC = () => {
  const history = useHistory();
  const [selectedDifficulty, setSelectedDifficulty] = useState<'beginner' | 'intermediate' | 'advanced' | 'final'>('beginner');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);

  const lessons: Lesson[] = [
    // PRINCIPIANTE (6 lecciones)
    {
      id: 1,
      title: "Introducción a Java",
      description: "Conceptos básicos de Java y sintaxis fundamental",
      difficulty: 'beginner',
      duration: 18,
      completed: false,
      content: `Java es un lenguaje de programación orientado a objetos, robusto y seguro.
      
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
      exercise: `Crea un programa Java que imprima "¡Hola, Java!" y tu nombre.`,
      expectedOutput: "¡Hola, Java!\\nTu nombre"
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
      • +, -, *, /, %
      
      Operadores de comparación:
      • ==, !=, <, >, <=, >=
      
      Operadores lógicos:
      • &&, ||, !`,
      codeExample: `public class Operadores {
    public static void main(String[] args) {
        int a = 10, b = 5;
        
        System.out.println("Suma: " + (a + b));
        System.out.println("Resta: " + (a - b));
        System.out.println("Multiplicación: " + (a * b));
        System.out.println("División: " + (a / b));
        System.out.println("Módulo: " + (a % b));
        
        System.out.println("a > b: " + (a > b));
        System.out.println("a == b: " + (a == b));
        
        boolean x = true, y = false;
        System.out.println("x && y: " + (x && y));
        System.out.println("x || y: " + (x || y));
        System.out.println("!x: " + (!x));
    }
}`,
      exercise: `Realiza operaciones matemáticas y lógicas.`,
      expectedOutput: "Operaciones correctas"
    },
    {
      id: 4,
      title: "Entrada y Salida de Datos",
      description: "Lectura de datos del usuario con Scanner",
      difficulty: 'beginner',
      duration: 25,
      completed: false,
      content: `Para leer datos del usuario, usamos la clase Scanner.
      
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
      exercise: `Crea un programa que solicite datos personales.`,
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
      exercise: `Manipula diferentes cadenas de texto.`,
      expectedOutput: "Cadenas manipuladas correctamente"
    },
    {
      id: 6,
      title: "Estructuras de Control - Condicionales",
      description: "if, else if, else y switch en Java",
      difficulty: 'beginner',
      duration: 28,
      completed: false,
      content: `Las estructuras de control permiten dirigir el flujo del programa.
      
      Condicionales:
      • if: ejecuta código si la condición es verdadera
      • else if: condición alternativa
      • else: ejecuta si ninguna condición es verdadera
      • switch: evalúa múltiples casos
      • Operador ternario: condición ? valorSiTrue : valorSiFalse`,
      codeExample: `public class Condicionales {
    public static void main(String[] args) {
        int edad = 20;
        String categoria;
        
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
        
        int dia = 3;
        String nombreDia;
        
        switch (dia) {
            case 1: nombreDia = "Lunes"; break;
            case 2: nombreDia = "Martes"; break;
            case 3: nombreDia = "Miércoles"; break;
            default: nombreDia = "Día desconocido";
        }
        
        System.out.println("Día: " + nombreDia);
        
        String mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
        System.out.println(mensaje);
    }
}`,
      exercise: `Crea un programa que evalúe notas.`,
      expectedOutput: "Condicionales funcionando"
    },
    // INTERMEDIO (4 lecciones)
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
        
        // for-each
        int[] numeros = {10, 20, 30, 40, 50};
        System.out.println("\\nBucle for-each:");
        for (int num : numeros) {
            System.out.println("Valor: " + num);
        }
        
        // break y continue
        System.out.println("\\nBreak y continue:");
        for (int i = 1; i <= 10; i++) {
            if (i == 5) continue;
            if (i == 8) break;
            System.out.println("i: " + i);
        }
    }
}`,
      exercise: `Usa diferentes tipos de bucles.`,
      expectedOutput: "Bucles funcionando correctamente"
    },
    {
      id: 8,
      title: "Arrays y Arreglos",
      description: "Creación y manipulación de arrays",
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
        
        // Array bidimensional
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
        
        // Array de strings
        String[] nombres = {"Ana", "Luis", "María", "Pedro"};
        System.out.println("\\nNombres:");
        for (String nombre : nombres) {
            System.out.println("- " + nombre);
        }
        
        // Encontrar el mayor
        int mayor = numeros[0];
        for (int num : numeros) {
            if (num > mayor) {
                mayor = num;
            }
        }
        System.out.println("\\nMayor número: " + mayor);
    }
}`,
      exercise: `Crea y manipula arrays.`,
      expectedOutput: "Arrays funcionando correctamente"
    },
    {
      id: 9,
      title: "Métodos y Funciones",
      description: "Definición, parámetros, retorno y sobrecarga",
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
    
    public static void saludar() {
        System.out.println("¡Hola a todos!");
    }
    
    public static String saludarPersona(String nombre) {
        return "Hola, " + nombre + "!";
    }
    
    public static int sumar(int a, int b) {
        return a + b;
    }
    
    public static double sumar(double a, double b) {
        return a + b;
    }
    
    public static long factorial(int n) {
        if (n <= 1) return 1;
        long resultado = 1;
        for (int i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
    
    public static boolean esPrimo(int numero) {
        if (numero <= 1) return false;
        for (int i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i == 0) return false;
        }
        return true;
    }
    
    public static void main(String[] args) {
        saludar();
        System.out.println(saludarPersona("Ana"));
        System.out.println("Suma: " + sumar(5, 3));
        System.out.println("Factorial de 5: " + factorial(5));
        System.out.println("¿Es 17 primo? " + esPrimo(17));
    }
}`,
      exercise: `Crea métodos para operaciones matemáticas.`,
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
import java.util.Collections;

public class ArrayListDemo {
    public static void main(String[] args) {
        ArrayList<String> nombres = new ArrayList<>();
        
        nombres.add("Ana");
        nombres.add("Luis");
        nombres.add("María");
        nombres.add("Pedro");
        
        System.out.println("Lista: " + nombres);
        System.out.println("Tamaño: " + nombres.size());
        System.out.println("Primer elemento: " + nombres.get(0));
        
        nombres.add(1, "Carlos");
        System.out.println("Después de agregar: " + nombres);
        
        System.out.println("¿Contiene María? " + nombres.contains("María"));
        
        nombres.remove("Pedro");
        System.out.println("Después de eliminar: " + nombres);
        
        Collections.sort(nombres);
        System.out.println("Ordenado: " + nombres);
        
        for (String nombre : nombres) {
            System.out.println("- " + nombre);
        }
        
        ArrayList<Integer> numeros = new ArrayList<>();
        numeros.add(10);
        numeros.add(5);
        numeros.add(20);
        
        Collections.sort(numeros);
        System.out.println("Números ordenados: " + numeros);
        System.out.println("Mayor: " + Collections.max(numeros));
    }
}`,
      exercise: `Crea una lista de estudiantes.`,
      expectedOutput: "ArrayList funcionando correctamente"
    },
    // AVANZADO (6 lecciones)
    {
      id: 11,
      title: "Programación Orientada a Objetos - Clases",
      description: "Creación de clases, constructores y métodos",
      difficulty: 'advanced',
      duration: 40,
      completed: false,
      content: `Las clases son plantillas para crear objetos.
      
      Componentes:
      • Atributos (variables de instancia)
      • Constructores
      • Métodos
      • Modificadores de acceso (public, private, protected)`,
      codeExample: `public class Persona {
    private String nombre;
    private int edad;
    private double altura;
    
    public Persona() {
        this.nombre = "Sin nombre";
        this.edad = 0;
        this.altura = 0.0;
    }
    
    public Persona(String nombre, int edad, double altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
    }
    
    public String getNombre() { return nombre; }
    public int getEdad() { return edad; }
    public double getAltura() { return altura; }
    
    public void setNombre(String nombre) { this.nombre = nombre; }
    public void setEdad(int edad) { if (edad >= 0) this.edad = edad; }
    public void setAltura(double altura) { if (altura > 0) this.altura = altura; }
    
    public void mostrarInfo() {
        System.out.println("Nombre: " + nombre);
        System.out.println("Edad: " + edad + " años");
        System.out.println("Altura: " + altura + " metros");
    }
    
    @Override
    public String toString() {
        return "Persona{nombre='" + nombre + "', edad=" + edad + ", altura=" + altura + "}";
    }
}

class TestPersona {
    public static void main(String[] args) {
        Persona persona1 = new Persona();
        persona1.mostrarInfo();
        
        Persona persona2 = new Persona("Ana", 25, 1.65);
        persona2.mostrarInfo();
        
        System.out.println(persona2);
    }
}`,
      exercise: `Crea una clase Estudiante.`,
      expectedOutput: "Clases funcionando correctamente"
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
      codeExample: `class Animal {
    protected String nombre;
    protected int edad;
    
    public Animal(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    public void comer() {
        System.out.println(nombre + " está comiendo");
    }
    
    public void hacerSonido() {
        System.out.println(nombre + " hace un sonido");
    }
    
    public String getInfo() {
        return "Animal: " + nombre + ", Edad: " + edad;
    }
}

class Perro extends Animal {
    private String raza;
    
    public Perro(String nombre, int edad, String raza) {
        super(nombre, edad);
        this.raza = raza;
    }
    
    @Override
    public void hacerSonido() {
        System.out.println(nombre + " ladra: ¡Guau guau!");
    }
    
    public void jugar() {
        System.out.println(nombre + " está jugando");
    }
    
    @Override
    public String getInfo() {
        return super.getInfo() + ", Raza: " + raza;
    }
}

class Gato extends Animal {
    public Gato(String nombre, int edad) {
        super(nombre, edad);
    }
    
    @Override
    public void hacerSonido() {
        System.out.println(nombre + " maúlla: ¡Miau miau!");
    }
}

public class HerenciaDemo {
    public static void main(String[] args) {
        Animal[] animales = {
            new Animal("Genérico", 5),
            new Perro("Rex", 3, "Labrador"),
            new Gato("Mimi", 2)
        };
        
        for (Animal a : animales) {
            System.out.println(a.getInfo());
            a.hacerSonido();
            System.out.println();
        }
    }
}`,
      exercise: `Crea una jerarquía de vehículos.`,
      expectedOutput: "Herencia funcionando"
    },
    {
      id: 13,
      title: "Interfaces y Clases Abstractas",
      description: "Definición e implementación de interfaces",
      difficulty: 'advanced',
      duration: 38,
      completed: false,
      content: `Las interfaces definen contratos que las clases deben cumplir.
      
      Interfaces:
      • Definen métodos sin implementación
      • Una clase puede implementar múltiples interfaces
      • Todos los métodos son public abstract por defecto
      • Pueden tener constantes (public static final)
      
      Clases abstractas:
      • No se pueden instanciar directamente
      • Pueden tener métodos abstractos y concretos`,
      codeExample: `interface Volador {
    void volar();
    void aterrizar();
    
    default void planear() {
        System.out.println("Planeando...");
    }
}

interface Nadador {
    void nadar();
    void bucear();
}

abstract class AnimalAbs {
    protected String nombre;
    
    public AnimalAbs(String nombre) {
        this.nombre = nombre;
    }
    
    public void comer() {
        System.out.println(nombre + " está comiendo");
    }
    
    public abstract void hacerSonido();
}

class Pato extends AnimalAbs implements Volador, Nadador {
    
    public Pato(String nombre) {
        super(nombre);
    }
    
    @Override
    public void hacerSonido() {
        System.out.println(nombre + " hace cuac cuac");
    }
    
    @Override
    public void volar() {
        System.out.println(nombre + " está volando");
    }
    
    @Override
    public void aterrizar() {
        System.out.println(nombre + " está aterrizando");
    }
    
    @Override
    public void nadar() {
        System.out.println(nombre + " está nadando");
    }
    
    @Override
    public void bucear() {
        System.out.println(nombre + " está buceando");
    }
}

public class InterfaceDemo {
    public static void main(String[] args) {
        Pato pato = new Pato("Donald");
        
        pato.comer();
        pato.hacerSonido();
        pato.volar();
        pato.nadar();
        pato.planear();
    }
}`,
      exercise: `Crea interfaces para diferentes comportamientos.`,
      expectedOutput: "Interfaces funcionando"
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
      • throws: declara que un método puede lanzar excepción`,
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
            
            resultado = dividir(10, 0);
            System.out.println("Resultado: " + resultado);
            
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            System.out.println("Bloque finally ejecutado");
        }
        
        try {
            int[] numeros = {1, 2, 3};
            System.out.println(numeros[10]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Índice fuera de rango: " + e.getMessage());
        }
        
        try {
            String texto = "abc";
            int numero = Integer.parseInt(texto);
        } catch (NumberFormatException e) {
            System.out.println("Error de conversión: " + e.getMessage());
        }
    }
}`,
      exercise: `Maneja diferentes tipos de excepciones.`,
      expectedOutput: "Excepciones manejadas"
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
      
      TreeMap:
      • Mantiene orden por clave
      • Acceso O(log n)
      
      HashSet:
      • Elementos únicos
      • No mantiene orden`,
      codeExample: `import java.util.*;

public class ColeccionesDemo {
    public static void main(String[] args) {
        // HashMap
        HashMap<String, Integer> edades = new HashMap<>();
        edades.put("Ana", 25);
        edades.put("Luis", 30);
        edades.put("María", 28);
        
        System.out.println("HashMap:");
        for (Map.Entry<String, Integer> entry : edades.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
        
        // TreeMap (ordenado)
        TreeMap<String, Integer> ordenado = new TreeMap<>(edades);
        System.out.println("\\nTreeMap ordenado:");
        for (Map.Entry<String, Integer> entry : ordenado.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
        
        // HashSet
        HashSet<String> frutas = new HashSet<>();
        frutas.add("Manzana");
        frutas.add("Banana");
        frutas.add("Naranja");
        frutas.add("Manzana"); // Duplicado
        
        System.out.println("\\nHashSet:");
        for (String fruta : frutas) {
            System.out.println("- " + fruta);
        }
        
        // LinkedHashMap
        LinkedHashMap<String, String> paises = new LinkedHashMap<>();
        paises.put("MX", "México");
        paises.put("US", "Estados Unidos");
        paises.put("CA", "Canadá");
        
        System.out.println("\\nLinkedHashMap:");
        for (Map.Entry<String, String> entry : paises.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
        
        // PriorityQueue
        PriorityQueue<Integer> cola = new PriorityQueue<>();
        cola.offer(30);
        cola.offer(10);
        cola.offer(20);
        
        System.out.println("\\nPriorityQueue:");
        while (!cola.isEmpty()) {
            System.out.println(cola.poll());
        }
    }
}`,
      exercise: `Usa diferentes colecciones.`,
      expectedOutput: "Colecciones funcionando"
    },
    {
      id: 16,
      title: "Streams y Programación Funcional",
      description: "Streams, lambda expressions y programación funcional",
      difficulty: 'advanced',
      duration: 48,
      completed: false,
      content: `Los Streams y lambda expressions son características modernas de Java.
      
      Streams:
      • Flujo de datos
      • Operaciones intermedias (filter, map, sorted)
      • Operaciones terminales (collect, forEach, reduce)
      
      Lambda expressions:
      • Funciones anónimas
      • Sintaxis: (parámetros) -> expresión
      • Programación funcional`,
      codeExample: `import java.util.*;
import java.util.stream.*;

public class StreamsDemo {
    public static void main(String[] args) {
        List<String> nombres = Arrays.asList("Ana", "Luis", "María", "Pedro", "Carlos", "Sofía");
        
        // Filtrar nombres que empiecen con 'A' o 'M'
        List<String> filtrados = nombres.stream()
            .filter(nombre -> nombre.startsWith("A") || nombre.startsWith("M"))
            .collect(Collectors.toList());
        
        System.out.println("Nombres filtrados: " + filtrados);
        
        // Convertir a mayúsculas y ordenar
        List<String> mayusculas = nombres.stream()
            .map(String::toUpperCase)
            .sorted()
            .collect(Collectors.toList());
        
        System.out.println("Mayúsculas ordenadas: " + mayusculas);
        
        // Números
        List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        
        // Filtrar pares y multiplicar por 2
        List<Integer> paresDobles = numeros.stream()
            .filter(n -> n % 2 == 0)
            .map(n -> n * 2)
            .collect(Collectors.toList());
        
        System.out.println("Pares dobles: " + paresDobles);
        
        // Suma de números pares
        int sumaPares = numeros.stream()
            .filter(n -> n % 2 == 0)
            .reduce(0, Integer::sum);
        
        System.out.println("Suma de pares: " + sumaPares);
        
        // Estadísticas
        IntSummaryStatistics stats = numeros.stream()
            .mapToInt(Integer::intValue)
            .summaryStatistics();
        
        System.out.println("Estadísticas: " + stats);
        
        // Agrupar por longitud
        Map<Integer, List<String>> porLongitud = nombres.stream()
            .collect(Collectors.groupingBy(String::length));
        
        System.out.println("Agrupados por longitud: " + porLongitud);
        
        // Encontrar el más largo
        Optional<String> masLargo = nombres.stream()
            .max(Comparator.comparing(String::length));
        
        masLargo.ifPresent(nombre -> System.out.println("Más largo: " + nombre));
        
        // Crear stream infinito
        Stream.iterate(0, n -> n + 2)
            .limit(10)
            .forEach(System.out::println);
    }
}`,
      exercise: `Usa streams para manipular datos.`,
      expectedOutput: "Streams funcionando correctamente"
    },
    // EXAMEN FINAL
    {
      id: 17,
      title: "🎓 Examen Final Java",
      description: "Evaluación completa de todos los conceptos aprendidos",
      difficulty: 'final',
      duration: 90,
      completed: false,
      isLocked: true,
      unlockRequirement: "Completa todas las lecciones anteriores (1-16)",
      content: `¡Felicitaciones! Has llegado al examen final de Java.
      
      Este examen evalúa TODOS los conceptos que has aprendido:
      • Conceptos básicos y sintaxis
      • Variables, tipos de datos y operadores
      • Estructuras de control y bucles
      • Arrays y colecciones
      • Métodos y programación orientada a objetos
      • Herencia, polimorfismo e interfaces
      • Manejo de excepciones
      • Streams y programación funcional
      • Estructuras de datos avanzadas
      
      El examen incluye:
      • 20 preguntas de opción múltiple
      • 5 ejercicios prácticos de programación
      • 1 proyecto final integrador
      
      ¡Demuestra todo lo que has aprendido!`,
      codeExample: `// Proyecto Final: Sistema de Gestión de Empleados
import java.util.*;
import java.util.stream.*;

abstract class Empleado {
    protected String nombre;
    protected String id;
    protected double salarioBase;
    
    public Empleado(String nombre, String id, double salarioBase) {
        this.nombre = nombre;
        this.id = id;
        this.salarioBase = salarioBase;
    }
    
    public abstract double calcularSalario();
    
    public String getNombre() { return nombre; }
    public String getId() { return id; }
    public double getSalarioBase() { return salarioBase; }
    
    @Override
    public String toString() {
        return getClass().getSimpleName() + "{" +
                "nombre='" + nombre + "'" +
                ", id='" + id + "'" +
                ", salario=" + calcularSalario() +
                '}';
    }
}

class Programador extends Empleado {
    private String lenguajePrincipal;
    private int proyectosCompletados;
    
    public Programador(String nombre, String id, double salarioBase,
                       String lenguajePrincipal, int proyectosCompletados) {
        super(nombre, id, salarioBase);
        this.lenguajePrincipal = lenguajePrincipal;
        this.proyectosCompletados = proyectosCompletados;
    }
    
    @Override
    public double calcularSalario() {
        return salarioBase + (proyectosCompletados * 1000);
    }
    
    public String getLenguajePrincipal() { return lenguajePrincipal; }
    public int getProyectosCompletados() { return proyectosCompletados; }
}

class Gerente extends Empleado {
    private int equipoSize;
    
    public Gerente(String nombre, String id, double salarioBase, int equipoSize) {
        super(nombre, id, salarioBase);
        this.equipoSize = equipoSize;
    }
    
    @Override
    public double calcularSalario() {
        return salarioBase + (equipoSize * 500);
    }
    
    public int getEquipoSize() { return equipoSize; }
}

class Empresa {
    private List<Empleado> empleados;
    
    public Empresa() {
        this.empleados = new ArrayList<>();
    }
    
    public void agregarEmpleado(Empleado empleado) {
        empleados.add(empleado);
    }
    
    public void listarEmpleados() {
        empleados.forEach(System.out::println);
    }
    
    public double calcularNominaTotal() {
        return empleados.stream()
            .mapToDouble(Empleado::calcularSalario)
            .sum();
    }
    
    public List<Empleado> obtenerPorTipo(Class<? extends Empleado> tipo) {
        return empleados.stream()
            .filter(tipo::isInstance)
            .collect(Collectors.toList());
    }
    
    public Optional<Empleado> obtenerMejorPagado() {
        return empleados.stream()
            .max(Comparator.comparingDouble(Empleado::calcularSalario));
    }
}

// Implementa el sistema completo con:
// - Manejo de excepciones
// - Interfaz de usuario por consola
// - Persistencia en archivos
// - Validación de datos
// - Búsqueda y filtrado avanzado`,
      exercise: `Completa el sistema de gestión de empleados con todas las funcionalidades.`,
      expectedOutput: "Sistema de empleados completo y funcional"
    }
  ];

  const achievements = [
    { id: 'first_lesson', title: 'Primera Lección', description: 'Completaste tu primera lección' },
    { id: 'java_basics', title: 'Fundamentos Java', description: 'Completaste 6 lecciones básicas' },
    { id: 'java_beginner', title: 'Principiante Completo', description: 'Terminaste todas las lecciones básicas' },
    { id: 'java_intermediate', title: 'Nivel Intermedio', description: 'Dominaste las lecciones intermedias' },
    { id: 'java_advanced', title: 'Nivel Avanzado', description: 'Completaste lecciones avanzadas' },
    { id: 'java_expert', title: 'Experto Java', description: 'Terminaste todas las lecciones avanzadas' },
    { id: 'java_master', title: 'Maestro Java', description: 'Aprobaste el examen final' },
    { id: 'problem_solver', title: 'Solucionador', description: 'Resolviste 10 ejercicios' },
    { id: 'code_warrior', title: 'Guerrero del Código', description: 'Escribiste más de 1000 líneas' },
    { id: 'oop_master', title: 'Maestro POO', description: 'Dominaste la programación orientada a objetos' },
  ];

  const filteredLessons = lessons.filter(lesson => lesson.difficulty === selectedDifficulty);
  const completedLessons = lessons.filter(lesson => lesson.completed).length;
  const totalLessons = lessons.length;
  const progressPercentage = (completedLessons / totalLessons) * 100;

  // Función para verificar si una lección está desbloqueada
  const isLessonUnlocked = (lesson: Lesson) => {
    if (!lesson.isLocked) return true;
    
    // El examen final requiere que todas las lecciones anteriores estén completadas
    if (lesson.id === 17) {
      const previousLessons = lessons.filter(l => l.id < 17);
      return previousLessons.every(l => l.completed);
    }
    
    return false;
  };

  const openLesson = (lesson: Lesson) => {
    if (isLessonUnlocked(lesson)) {
      history.push(`/lesson/java/${lesson.id}`);
    } else {
      setToastMessage(lesson.unlockRequirement || 'Esta lección está bloqueada');
      setShowToast(true);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'success';
      case 'intermediate': return 'warning';
      case 'advanced': return 'danger';
      case 'final': return 'dark';
      default: return 'medium';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'Principiante';
      case 'intermediate': return 'Intermedio';
      case 'advanced': return 'Avanzado';
      case 'final': return 'Examen Final';
      default: return 'Desconocido';
    }
  };

  return (
    <IonPage>
      <IonContent>
        <div className="java-learning-container">
          <div className="hero-section">
            <div className="hero-content">
              <IonText>
                <h1>Aprende Java</h1>
                <p>Domina el lenguaje más popular del mundo empresarial</p>
              </IonText>
              
              <IonCard className="progress-card">
                <IonCardContent>
                  <div className="progress-header">
                    <IonIcon icon={trophyOutline} />
                    <IonText>
                      <h3>Tu Progreso</h3>
                    </IonText>
                  </div>
                  <div className="progress-content">
                    <IonText>
                      <p>{completedLessons} de {totalLessons} lecciones completadas</p>
                    </IonText>
                    <IonProgressBar value={progressPercentage / 100} color="primary" />
                    <IonText>
                      <p>{Math.round(progressPercentage)}% completado</p>
                    </IonText>
                  </div>
                </IonCardContent>
              </IonCard>
            </div>
          </div>

          <div className="section">
            <div className="section-header">
              <IonText>
                <h2>Selecciona el nivel de dificultad</h2>
              </IonText>
            </div>
            
            <IonSegment value={selectedDifficulty} onIonChange={e => setSelectedDifficulty(e.detail.value as any)}>
              <IonSegmentButton value="beginner">
                <IonLabel>PRINCIPIANTE</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="intermediate">
                <IonLabel>INTERMEDIO</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="advanced">
                <IonLabel>AVANZADO</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="final">
                <IonLabel>EXAMEN FINAL</IonLabel>
              </IonSegmentButton>
            </IonSegment>

            <IonCard className="lessons-card">
              <IonCardHeader>
                <IonCardTitle>
                  <IonIcon icon={bookOutline} />
                  Lecciones - {getDifficultyLabel(selectedDifficulty)}
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonGrid>
                  <IonRow>
                    {filteredLessons.map((lesson) => (
                      <IonCol size="12" sizeMd="6" key={lesson.id}>
                        <IonCard className={`lesson-card ${lesson.completed ? 'completed' : ''}`}>
                          <IonCardContent>
                            <div className="lesson-header">
                              <div className="lesson-info">
                                <h3>{lesson.title}</h3>
                                <p>{lesson.description}</p>
                              </div>
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
                            <div className="lesson-actions">
                              <IonButton
                                expand="block"
                                onClick={() => openLesson(lesson)}
                                color={lesson.completed ? "success" : isLessonUnlocked(lesson) ? "primary" : "medium"}
                                disabled={!isLessonUnlocked(lesson)}
                              >
                                <IonIcon icon={lesson.completed ? checkmarkCircle : isLessonUnlocked(lesson) ? playCircle : lockClosedOutline} slot="start" />
                                {lesson.completed ? 'Revisar' : isLessonUnlocked(lesson) ? 'Comenzar' : 'Bloqueado'}
                              </IonButton>
                              {lesson.isLocked && !isLessonUnlocked(lesson) && (
                                <IonText color="medium">
                                  <p style={{ fontSize: '12px', marginTop: '8px', textAlign: 'center' }}>
                                    {lesson.unlockRequirement}
                                  </p>
                                </IonText>
                              )}
                            </div>
                          </IonCardContent>
                        </IonCard>
                      </IonCol>
                    ))}
                  </IonRow>
                </IonGrid>
              </IonCardContent>
            </IonCard>
          </div>

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