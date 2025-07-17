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
  IonToast,
  IonSegment,
  IonSegmentButton,
  IonBadge,
  IonProgressBar
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
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
import './JavaLearning.css';

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
  const history = useHistory();
  const [selectedDifficulty, setSelectedDifficulty] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);

  const lessons: Lesson[] = [
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
        
        // Modificar valores
        numeros[2] = 99;
        System.out.println("\\nDespués de modificar:");
        for (int num : numeros) {
            System.out.print(num + " ");
        }
        
        // Array bidimensional (matriz)
        int[][] matriz = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        System.out.println("\\n\\nMatriz 3x3:");
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
    
    public static int sumar(int a, int b, int c) {
        return a + b + c;
    }
    
    // Método que calcula factorial
    public static long factorial(int n) {
        if (n <= 1) {
            return 1;
        }
        long resultado = 1;
        for (int i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
    
    // Método que verifica si un número es primo
    public static boolean esPrimo(int numero) {
        if (numero <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i == 0) {
                return false;
            }
        }
        return true;
    }
    
    public static void main(String[] args) {
        // Llamadas a métodos
        saludar();
        
        String mensaje = saludarPersona("Ana");
        System.out.println(mensaje);
        
        int suma1 = sumar(5, 3);
        double suma2 = sumar(2.5, 3.7);
        int suma3 = sumar(1, 2, 3);
        
        System.out.println("Suma enteros: " + suma1);
        System.out.println("Suma decimales: " + suma2);
        System.out.println("Suma tres números: " + suma3);
        
        System.out.println("Factorial de 5: " + factorial(5));
        System.out.println("¿Es 17 primo? " + esPrimo(17));
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
import java.util.Collections;

public class ArrayListDemo {
    public static void main(String[] args) {
        // Crear ArrayList
        ArrayList<String> nombres = new ArrayList<>();
        
        // Agregar elementos
        nombres.add("Ana");
        nombres.add("Luis");
        nombres.add("María");
        nombres.add("Pedro");
        
        System.out.println("Lista original: " + nombres);
        System.out.println("Tamaño: " + nombres.size());
        
        // Acceder a elementos
        System.out.println("Primer elemento: " + nombres.get(0));
        System.out.println("Último elemento: " + nombres.get(nombres.size() - 1));
        
        // Agregar en posición específica
        nombres.add(1, "Carlos");
        System.out.println("Después de agregar Carlos: " + nombres);
        
        // Verificar si contiene
        System.out.println("¿Contiene María? " + nombres.contains("María"));
        
        // Modificar elemento
        nombres.set(2, "Sofía");
        System.out.println("Después de cambiar: " + nombres);
        
        // Eliminar elemento
        nombres.remove("Pedro");
        nombres.remove(0); // Por índice
        System.out.println("Después de eliminar: " + nombres);
        
        // Ordenar
        Collections.sort(nombres);
        System.out.println("Ordenado: " + nombres);
        
        // Recorrer con for-each
        System.out.println("\\nRecorriendo la lista:");
        for (String nombre : nombres) {
            System.out.println("- " + nombre);
        }
        
        // ArrayList de números
        ArrayList<Integer> numeros = new ArrayList<>();
        numeros.add(10);
        numeros.add(5);
        numeros.add(20);
        numeros.add(15);
        
        System.out.println("\\nNúmeros: " + numeros);
        Collections.sort(numeros);
        System.out.println("Números ordenados: " + numeros);
        
        // Encontrar el mayor
        int mayor = Collections.max(numeros);
        System.out.println("Mayor número: " + mayor);
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
    private double altura;
    
    // Constructor por defecto
    public Persona() {
        this.nombre = "Sin nombre";
        this.edad = 0;
        this.altura = 0.0;
    }
    
    // Constructor con parámetros
    public Persona(String nombre, int edad, double altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
    }
    
    // Métodos getter
    public String getNombre() {
        return nombre;
    }
    
    public int getEdad() {
        return edad;
    }
    
    public double getAltura() {
        return altura;
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
    
    public void setAltura(double altura) {
        if (altura > 0) {
            this.altura = altura;
        }
    }
    
    // Método para mostrar información
    public void mostrarInfo() {
        System.out.println("Nombre: " + nombre);
        System.out.println("Edad: " + edad + " años");
        System.out.println("Altura: " + altura + " metros");
    }
    
    // Método para calcular IMC
    public double calcularIMC(double peso) {
        return peso / (altura * altura);
    }
    
    // Método toString
    @Override
    public String toString() {
        return "Persona{" +
                "nombre='" + nombre + '\'' +
                ", edad=" + edad +
                ", altura=" + altura +
                '}';
    }
}

// Clase principal para probar
class TestPersona {
    public static void main(String[] args) {
        // Crear objetos
        Persona persona1 = new Persona();
        persona1.mostrarInfo();
        
        Persona persona2 = new Persona("Ana", 25, 1.65);
        persona2.mostrarInfo();
        
        // Usar métodos
        double imc = persona2.calcularIMC(60.0);
        System.out.println("IMC: " + imc);
        
        System.out.println("\\nToString: " + persona2);
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
    protected int edad;
    
    public Animal(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    public void comer() {
        System.out.println(nombre + " está comiendo");
    }
    
    public void dormir() {
        System.out.println(nombre + " está durmiendo");
    }
    
    public void hacerSonido() {
        System.out.println(nombre + " hace un sonido");
    }
    
    public String getInfo() {
        return "Animal: " + nombre + ", Edad: " + edad;
    }
}

// Clase hija
class Perro extends Animal {
    private String raza;
    
    public Perro(String nombre, int edad, String raza) {
        super(nombre, edad); // Llamar al constructor del padre
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
    private boolean esInterior;
    
    public Gato(String nombre, int edad, boolean esInterior) {
        super(nombre, edad);
        this.esInterior = esInterior;
    }
    
    @Override
    public void hacerSonido() {
        System.out.println(nombre + " maúlla: ¡Miau miau!");
    }
    
    public void trepar() {
        System.out.println(nombre + " está trepando");
    }
    
    @Override
    public String getInfo() {
        return super.getInfo() + ", Interior: " + esInterior;
    }
}

// Demostración
public class HerenciaDemo {
    public static void main(String[] args) {
        // Crear objetos
        Animal animal = new Animal("Genérico", 5);
        Perro perro = new Perro("Rex", 3, "Labrador");
        Gato gato = new Gato("Mimi", 2, true);
        
        // Usar métodos
        animal.hacerSonido();
        perro.hacerSonido();
        gato.hacerSonido();
        
        perro.jugar();
        gato.trepar();
        
        // Polimorfismo
        System.out.println("\\nPolimorfismo:");
        Animal[] animales = {animal, perro, gato};
        
        for (Animal a : animales) {
            System.out.println(a.getInfo());
            a.hacerSonido();
            a.comer();
            System.out.println();
        }
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
• Pueden tener constantes (public static final)

Clases abstractas:
• No se pueden instanciar directamente
• Pueden tener métodos abstractos y concretos
• Se heredan con extends`,
      codeExample: `// Interface
interface Volador {
    void volar();
    void aterrizar();
    
    // Método default (Java 8+)
    default void planear() {
        System.out.println("Planeando...");
    }
}

interface Nadador {
    void nadar();
    void bucear();
}

// Clase abstracta
abstract class AnimalAbs {
    protected String nombre;
    
    public AnimalAbs(String nombre) {
        this.nombre = nombre;
    }
    
    // Método concreto
    public void comer() {
        System.out.println(nombre + " está comiendo");
    }
    
    // Método abstracto
    public abstract void hacerSonido();
}

// Implementación
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

class Avion implements Volador {
    private String modelo;
    
    public Avion(String modelo) {
        this.modelo = modelo;
    }
    
    @Override
    public void volar() {
        System.out.println("El avión " + modelo + " está volando");
    }
    
    @Override
    public void aterrizar() {
        System.out.println("El avión " + modelo + " está aterrizando");
    }
}

// Demostración
public class InterfaceDemo {
    public static void main(String[] args) {
        Pato pato = new Pato("Donald");
        Avion avion = new Avion("Boeing 747");
        
        // Usar métodos de la clase abstracta
        pato.comer();
        pato.hacerSonido();
        
        // Usar métodos de las interfaces
        pato.volar();
        pato.nadar();
        pato.planear();
        
        avion.volar();
        avion.aterrizar();
        
        // Polimorfismo con interfaces
        System.out.println("\\nPolimorfismo con interfaces:");
        Volador[] voladores = {pato, avion};
        
        for (Volador v : voladores) {
            v.volar();
            v.planear();
        }
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
      codeExample: `import java.io.FileReader;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ExcepcionesDemo {
    
    // Método que puede lanzar excepción
    public static int dividir(int a, int b) throws ArithmeticException {
        if (b == 0) {
            throw new ArithmeticException("No se puede dividir por cero");
        }
        return a / b;
    }
    
    // Método con manejo de archivo
    public static void leerArchivo(String nombreArchivo) {
        try {
            FileReader archivo = new FileReader(nombreArchivo);
            System.out.println("Archivo leído correctamente");
            archivo.close();
        } catch (FileNotFoundException e) {
            System.out.println("Error: El archivo no existe - " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Error general: " + e.getMessage());
        } finally {
            System.out.println("Bloque finally ejecutado");
        }
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Manejo de división por cero
        try {
            System.out.print("Ingresa el primer número: ");
            int num1 = scanner.nextInt();
            System.out.print("Ingresa el segundo número: ");
            int num2 = scanner.nextInt();
            
            int resultado = dividir(num1, num2);
            System.out.println("Resultado: " + resultado);
            
        } catch (ArithmeticException e) {
            System.out.println("Error matemático: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Error de entrada: " + e.getMessage());
        }
        
        // Manejo de arrays
        try {
            int[] numeros = {1, 2, 3, 4, 5};
            System.out.println("\\nAccediendo al índice 10:");
            System.out.println(numeros[10]); // Índice fuera de rango
            
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Índice fuera de rango - " + e.getMessage());
        }
        
        // Manejo de conversión
        try {
            String texto = "abc";
            int numero = Integer.parseInt(texto);
            System.out.println("Número: " + numero);
            
        } catch (NumberFormatException e) {
            System.out.println("Error: No se puede convertir a número - " + e.getMessage());
        }
        
        // Manejo de archivo
        System.out.println("\\nIntentando leer archivo:");
        leerArchivo("archivo_inexistente.txt");
        
        // Try-with-resources (Java 7+)
        try (Scanner sc = new Scanner(System.in)) {
            System.out.println("\\nRecurso manejado automáticamente");
        } catch (Exception e) {
            System.out.println("Error con el recurso: " + e.getMessage());
        }
        
        scanner.close();
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

TreeMap:
• Mantiene orden por clave
• Acceso O(log n)
• No permite null en clave

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
        edades.put("Pedro", 35);
        
        System.out.println("HashMap de edades:");
        for (Map.Entry<String, Integer> entry : edades.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
        
        // Acceso y modificación
        System.out.println("\\nEdad de Ana: " + edades.get("Ana"));
        edades.put("Ana", 26); // Actualizar
        System.out.println("Nueva edad de Ana: " + edades.get("Ana"));
        
        // Verificaciones
        System.out.println("¿Contiene Luis? " + edades.containsKey("Luis"));
        System.out.println("¿Hay alguien de 30 años? " + edades.containsValue(30));
        
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
        frutas.add("Manzana"); // Duplicado - no se agrega
        
        System.out.println("\\nHashSet de frutas:");
        for (String fruta : frutas) {
            System.out.println("- " + fruta);
        }
        System.out.println("Tamaño: " + frutas.size());
        
        // LinkedHashMap (mantiene orden de inserción)
        LinkedHashMap<String, String> paises = new LinkedHashMap<>();
        paises.put("MX", "México");
        paises.put("US", "Estados Unidos");
        paises.put("CA", "Canadá");
        
        System.out.println("\\nLinkedHashMap de países:");
        for (Map.Entry<String, String> entry : paises.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
        
        // ArrayList vs LinkedList
        ArrayList<Integer> arrayList = new ArrayList<>();
        LinkedList<Integer> linkedList = new LinkedList<>();
        
        // Agregar elementos
        for (int i = 1; i <= 5; i++) {
            arrayList.add(i);
            linkedList.add(i);
        }
        
        System.out.println("\\nArrayList: " + arrayList);
        System.out.println("LinkedList: " + linkedList);
        
        // Operaciones específicas de LinkedList
        linkedList.addFirst(0);
        linkedList.addLast(6);
        System.out.println("LinkedList modificada: " + linkedList);
        
        // Priority Queue
        PriorityQueue<Integer> cola = new PriorityQueue<>();
        cola.offer(30);
        cola.offer(10);
        cola.offer(20);
        cola.offer(5);
        
        System.out.println("\\nPriorityQueue:");
        while (!cola.isEmpty()) {
            System.out.println("Elemento: " + cola.poll());
        }
        
        // Ejemplo práctico: Contador de palabras
        String texto = "java es genial java es potente java es versatil";
        HashMap<String, Integer> contadorPalabras = new HashMap<>();
        
        String[] palabras = texto.split(" ");
        for (String palabra : palabras) {
            contadorPalabras.put(palabra, contadorPalabras.getOrDefault(palabra, 0) + 1);
        }
        
        System.out.println("\\nContador de palabras:");
        for (Map.Entry<String, Integer> entry : contadorPalabras.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}`,
      exercise: `Crea un programa que use diferentes colecciones.`,
      expectedOutput: "Colecciones funcionando correctamente"
    }
  ];

  const achievements = [
    { id: 'first_lesson', title: 'Primera Lección', description: 'Completaste tu primera lección' },
    { id: 'java_basics', title: 'Fundamentos Java', description: 'Completaste 3 lecciones básicas' },
    { id: 'java_beginner', title: 'Principiante Completo', description: 'Terminaste todas las lecciones básicas' },
    { id: 'java_intermediate', title: 'Nivel Intermedio', description: 'Dominaste las lecciones intermedias' },
    { id: 'java_advanced', title: 'Nivel Avanzado', description: 'Completaste lecciones avanzadas' },
    { id: 'java_master', title: 'Maestro Java', description: 'Completaste todas las lecciones' },
    { id: 'problem_solver', title: 'Solucionador', description: 'Resolviste 10 ejercicios' },
    { id: 'code_warrior', title: 'Guerrero del Código', description: 'Escribiste más de 1000 líneas' },
  ];

  const filteredLessons = lessons.filter(lesson => lesson.difficulty === selectedDifficulty);
  const completedLessons = lessons.filter(lesson => lesson.completed).length;
  const totalLessons = lessons.length;
  const progressPercentage = (completedLessons / totalLessons) * 100;

  const openLesson = (lesson: Lesson) => {
    history.push(`/lesson/java/${lesson.id}`);
  };

  const checkAchievements = () => {
    const newAchievements = [];
    
    if (completedLessons === 1 && !unlockedAchievements.includes('first_lesson')) {
      newAchievements.push('first_lesson');
    }
    
    if (completedLessons === 3 && !unlockedAchievements.includes('java_basics')) {
      newAchievements.push('java_basics');
    }
    
    if (completedLessons === 5 && !unlockedAchievements.includes('java_beginner')) {
      newAchievements.push('java_beginner');
    }
    
    if (completedLessons === 10 && !unlockedAchievements.includes('java_intermediate')) {
      newAchievements.push('java_intermediate');
    }
    
    if (completedLessons === 13 && !unlockedAchievements.includes('java_advanced')) {
      newAchievements.push('java_advanced');
    }
    
    if (completedLessons === 15 && !unlockedAchievements.includes('java_master')) {
      newAchievements.push('java_master');
    }
    
    if (newAchievements.length > 0) {
      setUnlockedAchievements([...unlockedAchievements, ...newAchievements]);
      setToastMessage(`¡Nuevo logro desbloqueado! ${newAchievements.length} logro(s)`);
      setShowToast(true);
    }
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
        <div className="java-learning-container">
          <div className="hero-section">
            <div className="hero-content">
              <IonText>
                <h1>Aprende Java</h1>
                <p>Domina la programación orientada a objetos</p>
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
                    <IonProgressBar value={progressPercentage / 100} color="warning" />
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
                                color={lesson.completed ? "success" : "warning"}
                              >
                                <IonIcon icon={lesson.completed ? checkmarkCircle : playCircle} slot="start" />
                                {lesson.completed ? 'Revisar' : 'Comenzar'}
                              </IonButton>
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
