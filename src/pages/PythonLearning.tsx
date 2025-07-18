import React, { useState, useEffect } from 'react';
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
  timeOutline,
  lockClosedOutline
} from 'ionicons/icons';
import './PythonLearning.css';

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

const PythonLearning: React.FC = () => {
  const history = useHistory();
  const [selectedDifficulty, setSelectedDifficulty] = useState<'beginner' | 'intermediate' | 'advanced' | 'final'>('beginner');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);
  const [completedLessonsData, setCompletedLessonsData] = useState<{ [key: string]: any }>({});

  // Cargar progreso al iniciar
  useEffect(() => {
    const progressKey = 'lesson_progress_python';
    const savedProgress = JSON.parse(localStorage.getItem(progressKey) || '{}');
    setCompletedLessonsData(savedProgress);
  }, []);

  // Función para verificar si una lección está completada
  const isLessonCompleted = (lessonId: number) => {
    return completedLessonsData[lessonId.toString()]?.completed || false;
  };

  const lessons: Lesson[] = [
    // PRINCIPIANTE (6 lecciones)
    {
      id: 1,
      title: "Introducción a Python",
      description: "Conceptos básicos de Python y sintaxis fundamental",
      difficulty: 'beginner',
      duration: 15,
      completed: false,
      content: `Python es un lenguaje de programación interpretado, interactivo y orientado a objetos.
      
Características principales:
• Sintaxis simple y legible
• Interpretado (no requiere compilación)
• Multiplataforma
• Tipado dinámico
• Gran comunidad y librerías`,
      codeExample: `# Mi primer programa en Python
print("¡Hola, mundo!")
print("Bienvenido a Python")

# Esto es un comentario
# Python es fácil de aprender`,
      exercise: `Crea un programa que imprima "¡Hola, Python!" y tu nombre.`,
      expectedOutput: "¡Hola, Python!"
    },
    {
      id: 2,
      title: "Variables y Tipos de Datos",
      description: "Variables, tipos primitivos y conversiones",
      difficulty: 'beginner',
      duration: 20,
      completed: false,
      content: `Las variables en Python son contenedores para almacenar valores.
      
Tipos de datos básicos:
• int: números enteros
• float: números decimales
• str: cadenas de texto
• bool: valores booleanos (True/False)
• None: valor nulo`,
      codeExample: `# Variables y tipos de datos
nombre = "Juan"
edad = 25
altura = 1.75
es_programador = True
salario = None

# Verificar tipos
print(type(nombre))
print(type(edad))
print(type(altura))`,
      exercise: `Crea variables para tu información personal y muestra sus tipos.`,
      expectedOutput: "Variables correctamente definidas"
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
• +, -, *, / (básicos)
• ** (potencia)
• // (división entera)
• % (módulo)

Operadores de comparación:
• ==, !=, <, >, <=, >=

Operadores lógicos:
• and, or, not`,
      codeExample: `# Operadores aritméticos
a = 10
b = 3
print(f"Suma: {a + b}")
print(f"Potencia: {a ** b}")
print(f"División entera: {a // b}")
print(f"Módulo: {a % b}")

# Operadores lógicos
x = True
y = False
print(f"x and y: {x and y}")
print(f"x or y: {x or y}")
print(f"not x: {not x}")`,
      exercise: `Realiza operaciones matemáticas y lógicas básicas.`,
      expectedOutput: "Operaciones correctas"
    },
    {
      id: 4,
      title: "Entrada y Salida de Datos",
      description: "Interacción con el usuario y formateo de texto",
      difficulty: 'beginner',
      duration: 22,
      completed: false,
      content: `Python proporciona funciones para interactuar con el usuario.
      
Entrada de datos:
• input(): lee texto del usuario
• int(input()): convierte a entero
• float(input()): convierte a decimal

Formateo de salida:
• print(): salida básica
• f-strings: f"Hola {nombre}"
• format(): "Hola {}".format(nombre)`,
      codeExample: `# Entrada de datos
nombre = input("¿Cuál es tu nombre? ")
edad = int(input("¿Cuántos años tienes? "))

# Formateo de salida
print(f"Hola {nombre}, tienes {edad} años")
print("En 10 años tendrás {} años".format(edad + 10))

# f-strings avanzados
precio = 19.99
print(f"Precio: $precio:.2f")`,
      exercise: `Crea un programa que pida datos al usuario y los formatee.`,
      expectedOutput: "Interacción con usuario correcta"
    },
    {
      id: 5,
      title: "Cadenas de Texto",
      description: "Manipulación y métodos de strings",
      difficulty: 'beginner',
      duration: 25,
      completed: false,
      content: `Las cadenas de texto son secuencias de caracteres.
      
Métodos importantes:
• upper(), lower(): cambiar caso
• strip(): eliminar espacios
• split(): dividir en lista
• join(): unir lista en string
• replace(): reemplazar texto
• find(): buscar subcadena`,
      codeExample: `# Manipulación de cadenas
texto = "  Hola Mundo Python  "
print(f"Original: '{texto}'")
print(f"Limpio: '{texto.strip()}'")
print(f"Mayúsculas: '{texto.upper()}'")
print(f"Reemplazar: '{texto.replace('Mundo', 'Universo')}'")

# División y unión
palabras = "Python es genial".split()
print(f"Palabras: {palabras}")
print(f"Unidas: {'-'.join(palabras)}")`,
      exercise: `Manipula cadenas usando diferentes métodos.`,
      expectedOutput: "Cadenas manipuladas correctamente"
    },
    {
      id: 6,
      title: "Estructuras de Control - Condicionales",
      description: "if, elif, else y operadores de comparación",
      difficulty: 'beginner',
      duration: 28,
      completed: false,
      content: `Las estructuras condicionales controlan el flujo del programa.
      
Sintaxis:
• if condición:
• elif otra_condición:
• else:

Nota: Python usa indentación para delimitar bloques`,
      codeExample: `# Condicionales
edad = 20
nombre = "Ana"

if edad >= 18:
    print("Eres mayor de edad")
    if edad >= 65:
        print("Eres adulto mayor")
    else:
        print("Eres adulto joven")
elif edad >= 13:
    print("Eres adolescente")
else:
    print("Eres niño")

# Operador ternario
mensaje = "Mayor" if edad >= 18 else "Menor"
print(f"Estado: {mensaje}")`,
      exercise: `Crea un programa que evalúe notas y asigne calificaciones.`,
      expectedOutput: "Condicionales funcionando"
    },

    // INTERMEDIO (4 lecciones)
    {
      id: 7,
      title: "Bucles",
      description: "for, while y control de bucles",
      difficulty: 'intermediate',
      duration: 30,
      completed: false,
      content: `Los bucles permiten repetir código múltiples veces.
      
Tipos de bucles:
• for: para iterar sobre secuencias
• while: mientras una condición sea verdadera
• range(): generar secuencias numéricas

Control de bucles:
• break: salir del bucle
• continue: saltar a la siguiente iteración
• else: ejecutar si el bucle termina normalmente`,
      codeExample: `# Bucle for
print("Números del 1 al 5:")
for i in range(1, 6):
    print(f"Número: {i}")

# Bucle while
print("\\nContador:")
contador = 0
while contador < 3:
    print(f"Contador: {contador}")
    contador += 1

# break y continue
print("\\nBreak y continue:")
for i in range(10):
    if i == 5:
        continue
    if i == 8:
        break
    print(f"i: {i}")`,
      exercise: `Crea programas usando diferentes tipos de bucles.`,
      expectedOutput: "Bucles funcionando correctamente"
    },
    {
      id: 8,
      title: "Listas y Tuplas",
      description: "Colecciones ordenadas y sus métodos",
      difficulty: 'intermediate',
      duration: 35,
      completed: false,
      content: `Las listas y tuplas son colecciones ordenadas de elementos.
      
Listas (mutables):
• append(): agregar elemento
• extend(): agregar múltiples elementos
• remove(): eliminar elemento
• pop(): eliminar y retornar elemento
• sort(): ordenar lista

Tuplas (inmutables):
• No se pueden modificar después de crear
• Útiles para datos que no cambian`,
      codeExample: `# Listas
frutas = ["manzana", "banana", "naranja"]
print(f"Frutas: {frutas}")

frutas.append("uva")
frutas.extend(["kiwi", "mango"])
print(f"Después de agregar: {frutas}")

# List comprehension
numeros = [1, 2, 3, 4, 5]
cuadrados = [x**2 for x in numeros]
print(f"Cuadrados: {cuadrados}")

# Tuplas
coordenadas = (10, 20)
print(f"Coordenadas: {coordenadas}")
x, y = coordenadas  # Desempaquetado
print(f"X: {x}, Y: {y}")`,
      exercise: `Crea y manipula listas y tuplas.`,
      expectedOutput: "Colecciones creadas correctamente"
    },
    {
      id: 9,
      title: "Diccionarios",
      description: "Estructuras de datos clave-valor",
      difficulty: 'intermediate',
      duration: 32,
      completed: false,
      content: `Los diccionarios almacenan pares clave-valor.
      
Características:
• Claves únicas
• Valores mutables
• Acceso rápido por clave
• No ordenados (hasta Python 3.6)

Métodos importantes:
• keys(): obtener claves
• values(): obtener valores
• items(): obtener pares clave-valor
• get(): obtener valor con default`,
      codeExample: `# Diccionarios
persona = {
    "nombre": "María",
    "edad": 30,
    "ciudad": "Madrid",
    "profesion": "Programadora"
}

print(f"Nombre: {persona['nombre']}")
print(f"Edad: {persona.get('edad', 'No especificada')}")

# Agregar y modificar
persona["email"] = "maria@email.com"
persona["edad"] = 31

# Iterar
for clave, valor in persona.items():
    print(f"{clave}: {valor}")

# Dictionary comprehension
numeros = [1, 2, 3, 4, 5]
cuadrados_dict = {x: x**2 for x in numeros}
print(f"Cuadrados dict: {cuadrados_dict}")`,
      exercise: `Crea un diccionario con información personal y manipúlalo.`,
      expectedOutput: "Diccionario funcionando correctamente"
    },
    {
      id: 10,
      title: "Funciones",
      description: "Definición, parámetros y valores de retorno",
      difficulty: 'intermediate',
      duration: 38,
      completed: false,
      content: `Las funciones permiten reutilizar código y organizarlo mejor.
      
Conceptos clave:
• def: palabra clave para definir funciones
• Parámetros: valores que recibe la función
• return: valor que devuelve la función
• Argumentos posicionales y por nombre
• Valores por defecto
• *args y **kwargs`,
      codeExample: `# Función básica
def saludar(nombre):
    return f"Hola, {nombre}!"

print(saludar("Ana"))

# Función con parámetros por defecto
def presentar(nombre, edad=25, ciudad="Madrid"):
    return f"Soy {nombre}, tengo {edad} años y vivo en {ciudad}"

print(presentar("Carlos"))
print(presentar("María", 30, "Barcelona"))

# Función con *args y **kwargs
def info_completa(*args, **kwargs):
    print(f"Args: {args}")
    print(f"Kwargs: {kwargs}")

info_completa(1, 2, 3, nombre="Juan", edad=25)`,
      exercise: `Crea funciones con diferentes tipos de parámetros.`,
      expectedOutput: "Funciones definidas correctamente"
    },

    // AVANZADO (4 lecciones)
    {
      id: 11,
      title: "Manejo de Archivos",
      description: "Lectura y escritura de archivos",
      difficulty: 'advanced',
      duration: 40,
      completed: false,
      content: `Python permite trabajar con archivos de manera sencilla.
      
Modos de apertura:
• 'r': lectura (por defecto)
• 'w': escritura (sobrescribe)
• 'a': agregar al final
• 'r+': lectura y escritura

Buenas prácticas:
• Usar with para manejo automático
• Especificar encoding
• Manejar excepciones`,
      codeExample: `# Escribir archivo
with open("datos.txt", "w", encoding="utf-8") as archivo:
    archivo.write("Línea 1\\n")
    archivo.write("Línea 2\\n")
    archivo.write("Línea 3\\n")

# Leer archivo línea por línea
with open("datos.txt", "r", encoding="utf-8") as archivo:
    for numero_linea, linea in enumerate(archivo, 1):
        print(f"Línea {numero_linea}: {linea.strip()}")

# Leer todo el archivo
with open("datos.txt", "r", encoding="utf-8") as archivo:
    contenido = archivo.read()
    print(f"Contenido completo:\\n{contenido}")`,
      exercise: `Crea un programa que escriba y lea archivos.`,
      expectedOutput: "Archivos manejados correctamente"
    },
    {
      id: 12,
      title: "Manejo de Excepciones",
      description: "try, except, finally y excepciones personalizadas",
      difficulty: 'advanced',
      duration: 42,
      completed: false,
      content: `Las excepciones manejan errores en tiempo de ejecución.
      
Estructura:
• try: código que puede generar excepción
• except: maneja la excepción
• else: se ejecuta si no hay excepción
• finally: se ejecuta siempre

Excepciones comunes:
• ValueError: valor incorrecto
• TypeError: tipo incorrecto
• FileNotFoundError: archivo no encontrado
• ZeroDivisionError: división por cero`,
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
    finally:
        print("Operación de división terminada")

# Ejemplos de uso
print(dividir(10, 2))
print(dividir(10, 0))
print(dividir("10", 2))

# Excepciones personalizadas
class EdadInvalidaError(Exception):
    def __init__(self, edad):
        self.edad = edad
        super().__init__(f"Edad inválida: {edad}")

def validar_edad(edad):
    if edad < 0 or edad > 150:
        raise EdadInvalidaError(edad)
    return "Edad válida"

try:
    print(validar_edad(25))
    print(validar_edad(-5))
except EdadInvalidaError as e:
    print(f"Error capturado: {e}")`,
      exercise: `Crea un programa que maneje diferentes tipos de excepciones.`,
      expectedOutput: "Excepciones manejadas correctamente"
    },
    {
      id: 13,
      title: "Programación Orientada a Objetos",
      description: "Clases, objetos, herencia y polimorfismo",
      difficulty: 'advanced',
      duration: 45,
      completed: false,
      content: `La POO organiza el código en clases y objetos.
      
Conceptos clave:
• Clase: plantilla para crear objetos
• Objeto: instancia de una clase
• __init__: constructor
• self: referencia al objeto actual
• Herencia: crear clases basadas en otras
• Polimorfismo: diferentes formas de un método`,
      codeExample: `# Clase básica
class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
    
    def saludar(self):
        return f"Hola, soy {self.nombre} y tengo {self.edad} años"
    
    def cumplir_anos(self):
        self.edad += 1
        print(f"{self.nombre} ahora tiene {self.edad} años")

# Herencia
class Estudiante(Persona):
    def __init__(self, nombre, edad, carrera):
        super().__init__(nombre, edad)
        self.carrera = carrera
        self.materias = []
    
    def estudiar(self, materia):
        self.materias.append(materia)
        print(f"{self.nombre} está estudiando {materia}")
    
    def saludar(self):  # Polimorfismo
        return f"{super().saludar()} y estudio {self.carrera}"

# Uso
persona = Persona("Juan", 25)
print(persona.saludar())

estudiante = Estudiante("María", 20, "Ingeniería")
print(estudiante.saludar())
estudiante.estudiar("Python")`,
      exercise: `Crea clases con herencia y polimorfismo.`,
      expectedOutput: "POO implementada correctamente"
    },
    {
      id: 14,
      title: "Módulos y Paquetes",
      description: "Organización de código y librerías",
      difficulty: 'advanced',
      duration: 40,
      completed: false,
      content: `Los módulos y paquetes organizan el código en archivos separados.
      
Conceptos:
• Módulo: archivo .py con código Python
• Paquete: carpeta con múltiples módulos
• import: importar código
• from ... import: importar específicamente
• as: crear alias
• __init__.py: inicializar paquete`,
      codeExample: `# Importar módulos estándar
import math
import datetime
from random import randint, choice

# Usar módulos importados
print(f"Pi: {math.pi}")
print(f"Raíz cuadrada de 16: {math.sqrt(16)}")

ahora = datetime.datetime.now()
print(f"Fecha y hora actual: {ahora}")

# Funciones aleatorias
numero_aleatorio = randint(1, 100)
colores = ["rojo", "azul", "verde", "amarillo"]
color_aleatorio = choice(colores)
print(f"Número aleatorio: {numero_aleatorio}")
print(f"Color aleatorio: {color_aleatorio}")

# Crear módulo personalizado (ejemplo conceptual)
# En un archivo llamado 'utilidades.py':
def calcular_area_circulo(radio):
    return math.pi * radio ** 2

def es_par(numero):
    return numero % 2 == 0

# Para importar: from utilidades import calcular_area_circulo`,
      exercise: `Usa diferentes módulos estándar de Python.`,
      expectedOutput: "Módulos utilizados correctamente"
    },

    // LECCIONES AVANZADAS COMPLEJAS (2 lecciones adicionales)
    {
      id: 15,
      title: "Decoradores y Generadores",
      description: "Conceptos avanzados: decoradores, generadores y yield",
      difficulty: 'advanced',
      duration: 50,
      completed: false,
      content: `Los decoradores y generadores son características avanzadas de Python.
      
Decoradores:
• Función que modifica otra función
• @decorator sintaxis
• functools.wraps para preservar metadata

Generadores:
• Función que produce valores con yield
• Memoria eficiente para secuencias grandes
• Protocolo iterator`,
      codeExample: `import functools
import time

# Decorador básico
def medir_tiempo(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        inicio = time.time()
        resultado = func(*args, **kwargs)
        fin = time.time()
        print(f"{func.__name__} tardó {fin - inicio:.4f} segundos")
        return resultado
    return wrapper

@medir_tiempo
def operacion_lenta():
    time.sleep(1)
    return "Operación completada"

# Generador básico
def contador(maximo):
    num = 0
    while num < maximo:
        yield num
        num += 1

# Generador con expresión
cuadrados = (x**2 for x in range(10))

# Uso
print(operacion_lenta())

print("Contador:")
for num in contador(5):
    print(num)

print("Cuadrados:")
for cuadrado in cuadrados:
    print(cuadrado)

# Generador para números Fibonacci
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

print("Fibonacci:")
for fib in fibonacci(10):
    print(fib, end=" ")`,
      exercise: `Crea decoradores y generadores personalizados.`,
      expectedOutput: "Decoradores y generadores funcionando"
    },
    {
      id: 16,
      title: "Programación Funcional Avanzada",
      description: "map, filter, reduce, lambda y comprehensions avanzadas",
      difficulty: 'advanced',
      duration: 48,
      completed: false,
      content: `La programación funcional enfatiza funciones puras y transformaciones.
      
Conceptos clave:
• lambda: funciones anónimas
• map(): aplicar función a secuencia
• filter(): filtrar elementos
• reduce(): reducir secuencia a un valor
• Comprehensions avanzadas
• Funciones de orden superior`,
      codeExample: `from functools import reduce

# Funciones lambda
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# map: aplicar función a cada elemento
cuadrados = list(map(lambda x: x**2, numeros))
print(f"Cuadrados: {cuadrados}")

# filter: filtrar elementos
pares = list(filter(lambda x: x % 2 == 0, numeros))
print(f"Pares: {pares}")

# reduce: reducir a un solo valor
suma = reduce(lambda x, y: x + y, numeros)
print(f"Suma: {suma}")

# Comprehensions avanzadas
# List comprehension con condición
pares_cuadrados = [x**2 for x in numeros if x % 2 == 0]
print(f"Cuadrados de pares: {pares_cuadrados}")

# Dict comprehension
cuadrados_dict = {x: x**2 for x in numeros if x <= 5}
print(f"Dict cuadrados: {cuadrados_dict}")

# Set comprehension
vocales = {letra for letra in "programacion" if letra in "aeiou"}
print(f"Vocales: {vocales}")

# Función de orden superior
def aplicar_operacion(lista, operacion):
    return [operacion(x) for x in lista]

def duplicar(x):
    return x * 2

def elevar_al_cubo(x):
    return x ** 3

print(f"Duplicados: {aplicar_operacion([1, 2, 3], duplicar)}")
print(f"Cubos: {aplicar_operacion([1, 2, 3], elevar_al_cubo)}")`,
      exercise: `Implementa soluciones usando programación funcional.`,
      expectedOutput: "Programación funcional aplicada correctamente"
    },

    // EXAMEN FINAL (solo se desbloquea después de completar todas las lecciones anteriores)
    {
      id: 17,
      title: "🎓 Examen Final Python",
      description: "Evaluación completa de todos los conceptos aprendidos",
      difficulty: 'final',
      duration: 90,
      completed: false,
      isLocked: true,
      unlockRequirement: "Completa todas las lecciones anteriores (1-16)",
      content: `¡Felicitaciones! Has llegado al examen final de Python.
      
Este examen evalúa TODOS los conceptos que has aprendido:
• Conceptos básicos y sintaxis
• Variables, tipos de datos y operadores
• Estructuras de control y bucles
• Funciones y módulos
• Estructuras de datos (listas, diccionarios, etc.)
• Programación orientada a objetos
• Manejo de archivos y excepciones
• Conceptos avanzados (decoradores, generadores)
• Programación funcional

El examen incluye:
• 15 preguntas de opción múltiple
• 5 ejercicios prácticos de programación
• 1 proyecto final integrador

¡Demuestra todo lo que has aprendido!`,
      codeExample: `# Proyecto Final: Sistema de Gestión de Biblioteca
class Libro:
    def __init__(self, titulo, autor, isbn):
        self.titulo = titulo
        self.autor = autor
        self.isbn = isbn
        self.disponible = True
    
    def __str__(self):
        estado = "Disponible" if self.disponible else "Prestado"
        return f"{self.titulo} por {self.autor} - {estado}"

class Biblioteca:
    def __init__(self):
        self.libros = []
        self.usuarios = []
    
    def agregar_libro(self, libro):
        self.libros.append(libro)
        print(f"Libro agregado: {libro.titulo}")
    
    def prestar_libro(self, isbn, usuario):
        for libro in self.libros:
            if libro.isbn == isbn and libro.disponible:
                libro.disponible = False
                print(f"Libro prestado a {usuario}: {libro.titulo}")
                return True
        print("Libro no disponible")
        return False
    
    def devolver_libro(self, isbn):
        for libro in self.libros:
            if libro.isbn == isbn and not libro.disponible:
                libro.disponible = True
                print(f"Libro devuelto: {libro.titulo}")
                return True
        print("Libro no encontrado o ya disponible")
        return False
    
    def listar_libros(self):
        if not self.libros:
            print("No hay libros en la biblioteca")
        else:
            for libro in self.libros:
                print(libro)

# Implementa el sistema completo con manejo de archivos,
# excepciones y una interfaz de usuario por consola`,
      exercise: `Completa el sistema de gestión de biblioteca con todas las funcionalidades requeridas.`,
      expectedOutput: "Sistema de biblioteca completo y funcional"
    }
  ];

  const achievements = [
    { id: 'first_lesson', title: 'Primera Lección', description: 'Completaste tu primera lección' },
    { id: 'python_basics', title: 'Fundamentos Python', description: 'Completaste 6 lecciones básicas' },
    { id: 'python_beginner', title: 'Principiante Completo', description: 'Terminaste todas las lecciones básicas' },
    { id: 'python_intermediate', title: 'Nivel Intermedio', description: 'Dominaste las lecciones intermedias' },
    { id: 'python_advanced', title: 'Nivel Avanzado', description: 'Completaste lecciones avanzadas' },
    { id: 'python_expert', title: 'Experto Python', description: 'Terminaste todas las lecciones avanzadas' },
    { id: 'python_master', title: 'Maestro Python', description: 'Aprobaste el examen final' },
    { id: 'problem_solver', title: 'Solucionador', description: 'Resolviste 10 ejercicios' },
    { id: 'code_warrior', title: 'Guerrero del Código', description: 'Escribiste más de 1000 líneas' },
  ];

  const filteredLessons = lessons.filter(lesson => lesson.difficulty === selectedDifficulty);
  const completedLessonsCount = Object.keys(completedLessonsData).filter(key => completedLessonsData[key]?.completed).length;
  const totalLessons = lessons.length;
  const progressPercentage = (completedLessonsCount / totalLessons) * 100;

  // Función para verificar si una lección está desbloqueada
  const isLessonUnlocked = (lesson: Lesson) => {
    if (!lesson.isLocked) return true;
    
    // El examen final requiere que todas las lecciones anteriores estén completadas
    if (lesson.id === 17) {
      const previousLessons = lessons.filter(l => l.id < 17);
      return previousLessons.every(l => isLessonCompleted(l.id));
    }
    
    return false;
  };

  const openLesson = (lesson: Lesson) => {
    if (isLessonUnlocked(lesson)) {
      history.push(`/lesson/python/${lesson.id}`);
    } else {
      setToastMessage(lesson.unlockRequirement || 'Esta lección está bloqueada');
      setShowToast(true);
    }
  };

  const checkAchievements = () => {
    const newAchievements = [];
    
    if (completedLessonsCount === 1 && !unlockedAchievements.includes('first_lesson')) {
      newAchievements.push('first_lesson');
    }
    
    if (completedLessonsCount === 6 && !unlockedAchievements.includes('python_basics')) {
      newAchievements.push('python_basics');
    }
    
    if (completedLessonsCount === 6 && !unlockedAchievements.includes('python_beginner')) {
      newAchievements.push('python_beginner');
    }
    
    if (completedLessonsCount === 10 && !unlockedAchievements.includes('python_intermediate')) {
      newAchievements.push('python_intermediate');
    }
    
    if (completedLessonsCount === 16 && !unlockedAchievements.includes('python_advanced')) {
      newAchievements.push('python_advanced');
    }
    
    if (completedLessonsCount === 16 && !unlockedAchievements.includes('python_expert')) {
      newAchievements.push('python_expert');
    }
    
    if (completedLessonsCount === 17 && !unlockedAchievements.includes('python_master')) {
      newAchievements.push('python_master');
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
        <div className="python-learning-container">
          <div className="hero-section">
            <div className="hero-content">
              <IonText>
                <h1>Aprende Python</h1>
                <p>Domina uno de los lenguajes más versátiles del mundo</p>
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
                      <p>{completedLessonsCount} de {totalLessons} lecciones completadas</p>
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
                        <IonCard className={`lesson-card ${isLessonCompleted(lesson.id) ? 'completed' : ''}`}>
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
                                color={isLessonCompleted(lesson.id) ? "success" : isLessonUnlocked(lesson) ? "primary" : "medium"}
                                disabled={!isLessonUnlocked(lesson)}
                              >
                                <IonIcon icon={isLessonCompleted(lesson.id) ? checkmarkCircle : isLessonUnlocked(lesson) ? playCircle : lockClosedOutline} slot="start" />
                                {isLessonCompleted(lesson.id) ? 'Revisar' : isLessonUnlocked(lesson) ? 'Comenzar' : 'Bloqueado'}
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

export default PythonLearning;
