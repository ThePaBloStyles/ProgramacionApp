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
  playCircle, 
  checkmarkCircle, 
  timeOutline, 
  codeSlash, 
  school,
  close,
  send,
  bulb,
  logoApple,
  fitness,
  trophy,
  medal,
  star,
  flash,
  ribbon
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

const PythonLearning: React.FC = () => {
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
    // LECCIONES PRINCIPIANTES
    {
      id: 1,
      title: "Introducción a Python",
      description: "Aprende los conceptos básicos de Python y tu primer programa",
      difficulty: 'beginner',
      duration: 15,
      completed: false,
      content: `
        <h3>¿Qué es Python?</h3>
        <p>Python es un lenguaje de programación interpretado, de alto nivel y de propósito general. Es conocido por su sintaxis simple y legible.</p>
        
        <h3>Tu primer programa</h3>
        <p>Vamos a crear el clásico "Hola Mundo" en Python.</p>
      `,
      codeExample: `# Mi primer programa en Python
print("¡Hola, mundo!")
print("Bienvenido a Python")`,
      exercise: `# Ejercicio: Crea un programa que imprima tu nombre y edad
# Completa el código a continuación:

nombre = "Tu nombre aquí"
edad = 0

# Imprime una presentación personal`,
      expectedOutput: "Hola, mi nombre es [tu nombre] y tengo [tu edad] años"
    },
    {
      id: 2,
      title: "Variables y Tipos de Datos",
      description: "Aprende sobre variables, números, strings y booleanos",
      difficulty: 'beginner',
      duration: 20,
      completed: false,
      content: `
        <h3>Variables en Python</h3>
        <p>Las variables son contenedores para almacenar datos. En Python no necesitas declarar el tipo de variable.</p>
        
        <h3>Tipos de datos básicos</h3>
        <ul>
          <li><strong>int:</strong> Números enteros</li>
          <li><strong>float:</strong> Números decimales</li>
          <li><strong>str:</strong> Cadenas de texto</li>
          <li><strong>bool:</strong> Valores True/False</li>
        </ul>
      `,
      codeExample: `# Variables numéricas
edad = 25
altura = 1.75
precio = 19.99

# Variables de texto
nombre = "Ana"
mensaje = "Hola mundo"

# Variables booleanas
es_estudiante = True
tiene_descuento = False

# Imprimir variables
print(f"Nombre: {nombre}")
print(f"Edad: {edad}")
print(f"Altura: {altura}m")`,
      exercise: `# Ejercicio: Crea variables para una tienda
# Completa el código:

producto = ""  # Nombre del producto
precio = 0.0   # Precio del producto
stock = 0      # Cantidad en stock
disponible = True  # Si está disponible

# Imprime la información del producto usando f-strings`,
      expectedOutput: "Producto: [nombre], Precio: $[precio], Stock: [cantidad], Disponible: [True/False]"
    },
    {
      id: 3,
      title: "Operaciones y Expresiones",
      description: "Aprende operadores matemáticos, lógicos y de comparación",
      difficulty: 'beginner',
      duration: 25,
      completed: false,
      content: `
        <h3>Operadores Matemáticos</h3>
        <p>Python soporta todas las operaciones matemáticas básicas:</p>
        <ul>
          <li><strong>+</strong> Suma</li>
          <li><strong>-</strong> Resta</li>
          <li><strong>*</strong> Multiplicación</li>
          <li><strong>/</strong> División</li>
          <li><strong>**</strong> Exponente</li>
          <li><strong>%</strong> Módulo</li>
        </ul>
        
        <h3>Operadores de Comparación</h3>
        <p>Para comparar valores: ==, !=, <, >, <=, >=</p>
      `,
      codeExample: `# Operaciones matemáticas
a = 10
b = 3

suma = a + b
resta = a - b
multiplicacion = a * b
division = a / b
potencia = a ** b
modulo = a % b

print(f"Suma: {suma}")
print(f"División: {division}")
print(f"Potencia: {potencia}")

# Comparaciones
print(f"¿{a} > {b}? {a > b}")
print(f"¿{a} == {b}? {a == b}")`,
      exercise: `# Ejercicio: Calculadora simple
# Pide al usuario dos números y realiza operaciones básicas

numero1 = 15
numero2 = 4

# Realiza las operaciones y muestra los resultados
# Formato: "15 + 4 = 19"`,
      expectedOutput: "15 + 4 = 19\n15 - 4 = 11\n15 * 4 = 60\n15 / 4 = 3.75"
    },
    {
      id: 4,
      title: "Entrada de Datos y Input",
      description: "Aprende a recibir datos del usuario con input()",
      difficulty: 'beginner',
      duration: 20,
      completed: false,
      content: `
        <h3>Función input()</h3>
        <p>La función input() nos permite recibir datos del usuario. Siempre devuelve un string.</p>
        
        <h3>Conversión de tipos</h3>
        <p>Para convertir el input a números usamos:</p>
        <ul>
          <li><strong>int()</strong> para números enteros</li>
          <li><strong>float()</strong> para números decimales</li>
        </ul>
      `,
      codeExample: `# Recibir datos del usuario
nombre = input("¿Cuál es tu nombre? ")
edad_str = input("¿Cuál es tu edad? ")

# Convertir a número
edad = int(edad_str)

# Mostrar información
print(f"Hola {nombre}, tienes {edad} años")

# Cálculo con input
numero = float(input("Ingresa un número: "))
cuadrado = numero ** 2
print(f"El cuadrado de {numero} es {cuadrado}")`,
      exercise: `# Ejercicio: Calculadora interactiva
# Pide dos números al usuario y calcula su suma y producto

# Solicita los números (usa input y convierte a float)
# Calcula suma y producto
# Muestra los resultados`,
      expectedOutput: "Ingresa el primer número: [usuario ingresa]\nIngresa el segundo número: [usuario ingresa]\nSuma: [resultado]\nProducto: [resultado]"
    },
    {
      id: 5,
      title: "Condicionales (if, elif, else)",
      description: "Aprende a tomar decisiones en tu código",
      difficulty: 'beginner',
      duration: 30,
      completed: false,
      content: `
        <h3>Estructura condicional</h3>
        <p>Las condicionales nos permiten ejecutar código solo si se cumple una condición.</p>
        
        <h3>Sintaxis básica</h3>
        <pre>
if condicion:
    # código si es verdadero
elif otra_condicion:
    # código si la otra condición es verdadera
else:
    # código si ninguna condición es verdadera
        </pre>
      `,
      codeExample: `# Ejemplo de condicionales
edad = 18

if edad >= 18:
    print("Eres mayor de edad")
    print("Puedes votar")
else:
    print("Eres menor de edad")
    años_faltantes = 18 - edad
    print(f"Te faltan {años_faltantes} años para ser mayor")

# Múltiples condiciones
nota = 85

if nota >= 90:
    print("Excelente")
elif nota >= 80:
    print("Muy bueno")
elif nota >= 70:
    print("Bueno")
elif nota >= 60:
    print("Suficiente")
else:
    print("Insuficiente")`,
      exercise: `# Ejercicio: Sistema de calificaciones
# Pide una calificación (0-100) y muestra la letra correspondiente
# A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: 0-59

calificacion = 85  # Cambia este valor para probar

# Escribe las condicionales aquí`,
      expectedOutput: "Calificación: 85\nLetra: B\nEstado: Aprobado"
    },
    {
      id: 6,
      title: "Bucles (for y while)",
      description: "Aprende a repetir código con bucles",
      difficulty: 'beginner',
      duration: 35,
      completed: false,
      content: `
        <h3>Bucle for</h3>
        <p>El bucle for se usa para iterar sobre secuencias (rangos, listas, strings).</p>
        
        <h3>Bucle while</h3>
        <p>El bucle while se ejecuta mientras una condición sea verdadera.</p>
        
        <h3>Función range()</h3>
        <p>range(inicio, fin, paso) genera una secuencia de números.</p>
      `,
      codeExample: `# Bucle for con range
print("Números del 1 al 5:")
for i in range(1, 6):
    print(f"Número: {i}")

# Bucle for con string
nombre = "Python"
for letra in nombre:
    print(f"Letra: {letra}")

# Bucle while
contador = 0
while contador < 3:
    print(f"Contador: {contador}")
    contador += 1

# Suma de números
suma = 0
for num in range(1, 11):
    suma += num
print(f"Suma del 1 al 10: {suma}")`,
      exercise: `# Ejercicio: Tabla de multiplicar
# Crea una tabla de multiplicar del 1 al 10 para un número dado

numero = 7  # Cambia este número

# Usa un bucle for para mostrar: "7 x 1 = 7", "7 x 2 = 14", etc.`,
      expectedOutput: "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n...\n7 x 10 = 70"
    },
    
    // LECCIONES INTERMEDIAS
    {
      id: 7,
      title: "Listas y Métodos",
      description: "Trabaja con listas y sus métodos más útiles",
      difficulty: 'intermediate',
      duration: 40,
      completed: false,
      content: `
        <h3>Listas en Python</h3>
        <p>Las listas son colecciones ordenadas y mutables que pueden contener diferentes tipos de datos.</p>
        
        <h3>Métodos importantes</h3>
        <ul>
          <li><strong>append()</strong> - Agregar elemento al final</li>
          <li><strong>insert()</strong> - Insertar en posición específica</li>
          <li><strong>remove()</strong> - Eliminar elemento específico</li>
          <li><strong>pop()</strong> - Eliminar y retornar elemento</li>
          <li><strong>sort()</strong> - Ordenar lista</li>
        </ul>
      `,
      codeExample: `# Crear y manipular listas
frutas = ["manzana", "banana", "naranja"]
numeros = [1, 2, 3, 4, 5]

# Agregar elementos
frutas.append("uva")
frutas.insert(1, "pera")

# Acceder a elementos
print(f"Primera fruta: {frutas[0]}")
print(f"Última fruta: {frutas[-1]}")

# Eliminar elementos
frutas.remove("banana")
ultima = frutas.pop()

# List comprehension
cuadrados = [x**2 for x in range(1, 6)]
pares = [x for x in numeros if x % 2 == 0]

print(f"Cuadrados: {cuadrados}")
print(f"Números pares: {pares}")`,
      exercise: `# Ejercicio: Administrador de tareas
# Crea un sistema para gestionar una lista de tareas

tareas = []

# Implementa las siguientes funciones:
# 1. Agregar tarea
# 2. Marcar como completada (usar otro enfoque)
# 3. Mostrar todas las tareas
# 4. Eliminar tarea

# Simula agregar algunas tareas y manipularlas`,
      expectedOutput: "Tareas: ['Estudiar Python', 'Hacer ejercicio', 'Leer libro']\nTarea completada: Estudiar Python\nTareas restantes: ['Hacer ejercicio', 'Leer libro']"
    },
    {
      id: 8,
      title: "Diccionarios y Conjuntos",
      description: "Aprende sobre estructuras de datos avanzadas",
      difficulty: 'intermediate',
      duration: 45,
      completed: false,
      content: `
        <h3>Diccionarios</h3>
        <p>Los diccionarios almacenan pares clave-valor y son muy útiles para organizar datos.</p>
        
        <h3>Conjuntos (Sets)</h3>
        <p>Los conjuntos son colecciones de elementos únicos, útiles para eliminar duplicados.</p>
        
        <h3>Operaciones útiles</h3>
        <ul>
          <li><strong>keys()</strong> - Obtener todas las claves</li>
          <li><strong>values()</strong> - Obtener todos los valores</li>
          <li><strong>items()</strong> - Obtener pares clave-valor</li>
        </ul>
      `,
      codeExample: `# Diccionarios
estudiante = {
    "nombre": "Ana",
    "edad": 20,
    "carrera": "Informática",
    "materias": ["Python", "JavaScript", "HTML"]
}

# Acceder y modificar
print(f"Nombre: {estudiante['nombre']}")
estudiante["edad"] = 21
estudiante["promedio"] = 8.5

# Iterar sobre diccionario
for clave, valor in estudiante.items():
    print(f"{clave}: {valor}")

# Conjuntos
numeros = {1, 2, 3, 4, 5}
numeros_duplicados = [1, 2, 2, 3, 3, 4, 5]
numeros_unicos = set(numeros_duplicados)

print(f"Números únicos: {numeros_unicos}")

# Operaciones con conjuntos
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
union = set1.union(set2)
interseccion = set1.intersection(set2)`,
      exercise: `# Ejercicio: Inventario de tienda
# Crea un sistema de inventario usando diccionarios

inventario = {
    "laptop": {"precio": 1200, "stock": 5},
    "mouse": {"precio": 25, "stock": 15},
    "teclado": {"precio": 80, "stock": 8}
}

# Implementa:
# 1. Mostrar inventario completo
# 2. Buscar producto por nombre
# 3. Actualizar stock
# 4. Calcular valor total del inventario`,
      expectedOutput: "Inventario completo:\nlaptop: $1200 (5 unidades)\nmouse: $25 (15 unidades)\nteclado: $80 (8 unidades)\nValor total: $6,600"
    },
    {
      id: 9,
      title: "Funciones y Parámetros",
      description: "Crea funciones reutilizables con parámetros",
      difficulty: 'intermediate',
      duration: 50,
      completed: false,
      content: `
        <h3>Definir funciones</h3>
        <p>Las funciones nos permiten reutilizar código y organizar mejor nuestros programas.</p>
        
        <h3>Tipos de parámetros</h3>
        <ul>
          <li><strong>Posicionales:</strong> Se pasan en orden específico</li>
          <li><strong>Por nombre:</strong> Se especifica el nombre del parámetro</li>
          <li><strong>Por defecto:</strong> Tienen un valor predeterminado</li>
          <li><strong>*args:</strong> Número variable de argumentos</li>
          <li><strong>**kwargs:</strong> Argumentos con nombre variable</li>
        </ul>
      `,
      codeExample: `# Función básica
def saludar(nombre):
    return f"Hola, {nombre}!"

# Función con múltiples parámetros
def calcular_area(base, altura):
    return base * altura

# Parámetros con valores por defecto
def presentar(nombre, edad=18, ciudad="No especificada"):
    return f"Soy {nombre}, tengo {edad} años y vivo en {ciudad}"

# Función con *args
def sumar(*numeros):
    return sum(numeros)

# Función con **kwargs
def crear_perfil(**datos):
    perfil = "Perfil del usuario:\n"
    for clave, valor in datos.items():
        perfil += f"{clave}: {valor}\n"
    return perfil

# Ejemplos de uso
print(saludar("Ana"))
print(calcular_area(10, 5))
print(presentar("Carlos", 25, "Madrid"))
print(sumar(1, 2, 3, 4, 5))
print(crear_perfil(nombre="Luis", edad=30, profesion="Ingeniero"))`,
      exercise: `# Ejercicio: Calculadora con funciones
# Crea una calculadora que use funciones para cada operación

# Define funciones para: suma, resta, multiplicación, división
# Incluye una función principal que tome operación y números
# Maneja división por cero

def calculadora(operacion, a, b):
    # Implementa aquí la lógica
    pass

# Prueba la calculadora con diferentes operaciones`,
      expectedOutput: "calculadora('suma', 10, 5) = 15\ncalculadora('division', 10, 0) = 'Error: División por cero'"
    },
    {
      id: 10,
      title: "Manejo de Archivos",
      description: "Aprende a leer y escribir archivos",
      difficulty: 'intermediate',
      duration: 40,
      completed: false,
      content: `
        <h3>Trabajar con archivos</h3>
        <p>Python nos permite leer y escribir archivos de texto de manera sencilla.</p>
        
        <h3>Modos de apertura</h3>
        <ul>
          <li><strong>'r':</strong> Lectura (modo por defecto)</li>
          <li><strong>'w':</strong> Escritura (sobrescribe)</li>
          <li><strong>'a':</strong> Agregar al final</li>
          <li><strong>'r+':</strong> Lectura y escritura</li>
        </ul>
        
        <h3>Buenas prácticas</h3>
        <p>Siempre usar <strong>with</strong> para manejar archivos automáticamente.</p>
      `,
      codeExample: `# Escribir archivo
with open('datos.txt', 'w') as archivo:
    archivo.write("Línea 1\\n")
    archivo.write("Línea 2\\n")
    archivo.write("Línea 3\\n")

# Leer archivo completo
with open('datos.txt', 'r') as archivo:
    contenido = archivo.read()
    print(contenido)

# Leer línea por línea
with open('datos.txt', 'r') as archivo:
    for linea in archivo:
        print(f"Línea: {linea.strip()}")

# Agregar contenido
with open('datos.txt', 'a') as archivo:
    archivo.write("Línea adicional\\n")

# Trabajar con CSV básico
import csv

datos = [
    ['Nombre', 'Edad', 'Ciudad'],
    ['Ana', '25', 'Madrid'],
    ['Carlos', '30', 'Barcelona']
]

with open('personas.csv', 'w', newline='') as archivo:
    writer = csv.writer(archivo)
    writer.writerows(datos)`,
      exercise: `# Ejercicio: Diario personal
# Crea un sistema de diario que guarde entradas en un archivo

from datetime import datetime

# Implementa las siguientes funciones:
# 1. agregar_entrada(texto) - Agrega una nueva entrada con fecha
# 2. leer_diario() - Muestra todas las entradas
# 3. buscar_por_fecha(fecha) - Busca entradas de una fecha específica

# Formato de entrada: "2023-12-07 14:30 - [texto de la entrada]"`,
      expectedOutput: "Entrada agregada: 2023-12-07 14:30 - Hoy aprendí sobre archivos en Python\nEntradas del diario:\n2023-12-07 14:30 - Hoy aprendí sobre archivos en Python"
    },
    
    // LECCIONES AVANZADAS
    {
      id: 11,
      title: "Programación Orientada a Objetos",
      description: "Aprende clases, objetos, herencia y polimorfismo",
      difficulty: 'advanced',
      duration: 60,
      completed: false,
      content: `
        <h3>Clases y Objetos</h3>
        <p>La POO nos permite crear estructuras de datos complejas y reutilizables.</p>
        
        <h3>Conceptos clave</h3>
        <ul>
          <li><strong>Clase:</strong> Plantilla para crear objetos</li>
          <li><strong>Objeto:</strong> Instancia de una clase</li>
          <li><strong>Atributos:</strong> Variables del objeto</li>
          <li><strong>Métodos:</strong> Funciones del objeto</li>
          <li><strong>Herencia:</strong> Crear clases basadas en otras</li>
          <li><strong>Polimorfismo:</strong> Métodos que actúan diferente según el objeto</li>
        </ul>
      `,
      codeExample: `# Clase básica
class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
    
    def saludar(self):
        return f"Hola, soy {self.nombre} y tengo {self.edad} años"
    
    def cumplir_años(self):
        self.edad += 1
        return f"{self.nombre} ahora tiene {self.edad} años"

# Herencia
class Estudiante(Persona):
    def __init__(self, nombre, edad, carrera):
        super().__init__(nombre, edad)
        self.carrera = carrera
        self.materias = []
    
    def agregar_materia(self, materia):
        self.materias.append(materia)
    
    def saludar(self):  # Polimorfismo
        return f"Hola, soy {self.nombre}, estudio {self.carrera}"

class Profesor(Persona):
    def __init__(self, nombre, edad, departamento):
        super().__init__(nombre, edad)
        self.departamento = departamento
    
    def enseñar(self, materia):
        return f"{self.nombre} está enseñando {materia}"

# Uso de las clases
persona1 = Persona("Ana", 25)
estudiante1 = Estudiante("Carlos", 20, "Informática")
profesor1 = Profesor("Dr. López", 45, "Matemáticas")

print(persona1.saludar())
print(estudiante1.saludar())
print(profesor1.enseñar("Cálculo"))`,
      exercise: `# Ejercicio: Sistema de biblioteca
# Crea un sistema de biblioteca con clases para Libro, Usuario y Biblioteca

class Libro:
    def __init__(self, titulo, autor, isbn):
        # Implementa el constructor
        pass
    
    def __str__(self):
        # Retorna representación del libro
        pass

class Usuario:
    def __init__(self, nombre, id_usuario):
        # Implementa el constructor
        pass
    
    def prestar_libro(self, libro):
        # Implementa préstamo
        pass

class Biblioteca:
    def __init__(self):
        # Implementa el constructor
        pass
    
    def agregar_libro(self, libro):
        # Implementa agregar libro
        pass
    
    def buscar_libro(self, titulo):
        # Implementa búsqueda
        pass

# Crea instancias y prueba el sistema`,
      expectedOutput: "Libro agregado: El Quijote por Cervantes\nUsuario Ana prestó: El Quijote\nLibros disponibles: 2"
    },
    {
      id: 12,
      title: "Decoradores y Generadores",
      description: "Conceptos avanzados: decoradores, generadores y yield",
      difficulty: 'advanced',
      duration: 55,
      completed: false,
      content: `
        <h3>Decoradores</h3>
        <p>Los decoradores modifican el comportamiento de funciones o clases sin cambiar su código.</p>
        
        <h3>Generadores</h3>
        <p>Los generadores producen valores bajo demanda, siendo más eficientes en memoria.</p>
        
        <h3>Yield</h3>
        <p>La palabra clave <strong>yield</strong> convierte una función en generador.</p>
      `,
      codeExample: `# Decorador básico
def medir_tiempo(func):
    import time
    def wrapper(*args, **kwargs):
        inicio = time.time()
        resultado = func(*args, **kwargs)
        fin = time.time()
        print(f"{func.__name__} tardó {fin - inicio:.4f} segundos")
        return resultado
    return wrapper

@medir_tiempo
def operacion_lenta():
    import time
    time.sleep(1)
    return "Operación completada"

# Decorador con parámetros
def repetir(veces):
    def decorador(func):
        def wrapper(*args, **kwargs):
            for _ in range(veces):
                resultado = func(*args, **kwargs)
            return resultado
        return wrapper
    return decorador

@repetir(3)
def saludar(nombre):
    print(f"Hola, {nombre}")

# Generador simple
def contador(max_num):
    num = 1
    while num <= max_num:
        yield num
        num += 1

# Generador de Fibonacci
def fibonacci(n):
    a, b = 0, 1
    count = 0
    while count < n:
        yield a
        a, b = b, a + b
        count += 1

# Uso de generadores
for num in contador(5):
    print(num)

fib_gen = fibonacci(10)
print(list(fib_gen))`,
      exercise: `# Ejercicio: Sistema de cache con decoradores
# Crea un decorador que cache los resultados de funciones

def cache(func):
    # Implementa un decorador que guarde resultados
    # Usa un diccionario para almacenar resultados previos
    pass

@cache
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

@cache
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# Crea también un generador para números primos
def numeros_primos(limite):
    # Implementa un generador que produzca números primos
    pass

# Prueba las funciones y el generador`,
      expectedOutput: "factorial(5) = 120 (cacheado)\nfibonacci(10) = 55 (cacheado)\nPrimos hasta 20: [2, 3, 5, 7, 11, 13, 17, 19]"
    },
    {
      id: 13,
      title: "Manejo de Excepciones Avanzado",
      description: "Manejo robusto de errores y excepciones personalizadas",
      difficulty: 'advanced',
      duration: 45,
      completed: false,
      content: `
        <h3>Manejo de Excepciones</h3>
        <p>Un manejo adecuado de errores hace que nuestros programas sean más robustos.</p>
        
        <h3>Tipos de excepciones</h3>
        <ul>
          <li><strong>ValueError:</strong> Valor incorrecto</li>
          <li><strong>TypeError:</strong> Tipo incorrecto</li>
          <li><strong>FileNotFoundError:</strong> Archivo no encontrado</li>
          <li><strong>ZeroDivisionError:</strong> División por cero</li>
          <li><strong>IndexError:</strong> Índice fuera de rango</li>
        </ul>
        
        <h3>Crear excepciones personalizadas</h3>
        <p>Podemos crear nuestras propias excepciones heredando de Exception.</p>
      `,
      codeExample: `# Excepciones personalizadas
class EdadInvalidaError(Exception):
    def __init__(self, edad, mensaje="Edad inválida"):
        self.edad = edad
        self.mensaje = mensaje
        super().__init__(self.mensaje)

class SaldoInsuficienteError(Exception):
    def __init__(self, saldo, cantidad):
        self.saldo = saldo
        self.cantidad = cantidad
        super().__init__(f"Saldo insuficiente: {saldo}, se necesita: {cantidad}")

# Clase con manejo de excepciones
class CuentaBancaria:
    def __init__(self, saldo_inicial=0):
        self.saldo = saldo_inicial
    
    def depositar(self, cantidad):
        if cantidad <= 0:
            raise ValueError("La cantidad debe ser positiva")
        self.saldo += cantidad
        return self.saldo
    
    def retirar(self, cantidad):
        if cantidad <= 0:
            raise ValueError("La cantidad debe ser positiva")
        if cantidad > self.saldo:
            raise SaldoInsuficienteError(self.saldo, cantidad)
        self.saldo -= cantidad
        return self.saldo

# Función con manejo robusto
def procesar_edad(edad_str):
    try:
        edad = int(edad_str)
        if edad < 0 or edad > 120:
            raise EdadInvalidaError(edad)
        return edad
    except ValueError:
        raise EdadInvalidaError(edad_str, "Debe ser un número válido")

# Ejemplo de uso
try:
    cuenta = CuentaBancaria(1000)
    cuenta.retirar(1500)
except SaldoInsuficienteError as e:
    print(f"Error: {e}")
except ValueError as e:
    print(f"Error de valor: {e}")
finally:
    print("Operación finalizada")`,
      exercise: `# Ejercicio: Validador de datos robusto
# Crea un sistema de validación con excepciones personalizadas

class EmailInvalidoError(Exception):
    pass

class PasswordDebiilError(Exception):
    pass

class ValidadorDatos:
    @staticmethod
    def validar_email(email):
        # Implementa validación básica de email
        # Debe contener @ y .
        pass
    
    @staticmethod
    def validar_password(password):
        # Implementa validación de contraseña
        # Mínimo 8 caracteres, debe tener números y letras
        pass
    
    @staticmethod
    def validar_usuario(email, password, edad):
        # Usa las validaciones anteriores
        # Maneja todas las excepciones posibles
        pass

# Prueba el validador con diferentes datos
test_cases = [
    ("usuario@email.com", "password123", "25"),
    ("email_invalido", "123", "abc"),
    ("test@test.com", "pass", "15")
]

# Procesa cada caso y maneja las excepciones`,
      expectedOutput: "Email válido: usuario@email.com\nError: Password debe tener al menos 8 caracteres\nError: Email inválido: email_invalido"
    },
    {
      id: 14,
      title: "Módulos y Paquetes",
      description: "Organiza tu código en módulos y paquetes reutilizables",
      difficulty: 'advanced',
      duration: 50,
      completed: false,
      content: `
        <h3>Módulos</h3>
        <p>Los módulos nos permiten organizar código en archivos separados y reutilizables.</p>
        
        <h3>Paquetes</h3>
        <p>Los paquetes son directorios que contienen múltiples módulos relacionados.</p>
        
        <h3>Importaciones</h3>
        <ul>
          <li><strong>import modulo:</strong> Importa todo el módulo</li>
          <li><strong>from modulo import funcion:</strong> Importa función específica</li>
          <li><strong>import modulo as alias:</strong> Importa con alias</li>
          <li><strong>from modulo import *:</strong> Importa todo (no recomendado)</li>
        </ul>
      `,
      codeExample: `# Ejemplo de módulo (matemáticas.py)
"""
Módulo de operaciones matemáticas avanzadas
"""

import math

def factorial(n):
    """Calcula el factorial de un número"""
    if n < 0:
        raise ValueError("El factorial no está definido para números negativos")
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)

def es_primo(n):
    """Verifica si un número es primo"""
    if n < 2:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True

def mcd(a, b):
    """Calcula el máximo común divisor"""
    while b:
        a, b = b, a % b
    return a

class Calculadora:
    """Calculadora con operaciones avanzadas"""
    
    @staticmethod
    def potencia(base, exponente):
        return base ** exponente
    
    @staticmethod
    def raiz_cuadrada(numero):
        if numero < 0:
            raise ValueError("No se puede calcular la raíz cuadrada de un número negativo")
        return math.sqrt(numero)

# Uso del módulo
if __name__ == "__main__":
    # Este código solo se ejecuta si el archivo se ejecuta directamente
    print(f"Factorial de 5: {factorial(5)}")
    print(f"¿Es 17 primo? {es_primo(17)}")
    
    calc = Calculadora()
    print(f"2^10 = {calc.potencia(2, 10)}")

# En otro archivo (main.py):
# import matematicas
# from matematicas import factorial, es_primo
# from matematicas import Calculadora as Calc

# print(matematicas.factorial(5))
# print(factorial(5))
# 
# mi_calc = Calc()
# print(mi_calc.potencia(2, 8))`,
      exercise: `# Ejercicio: Sistema de gestión de empleados
# Crea un paquete con módulos para gestionar empleados

# Módulo empleado.py
class Empleado:
    def __init__(self, nombre, id_empleado, salario):
        # Implementa el constructor
        pass
    
    def calcular_salario_anual(self):
        # Implementa cálculo de salario anual
        pass

# Módulo departamento.py
class Departamento:
    def __init__(self, nombre):
        # Implementa el constructor
        pass
    
    def agregar_empleado(self, empleado):
        # Implementa agregar empleado
        pass
    
    def calcular_nomina_total(self):
        # Implementa cálculo de nómina total
        pass

# Módulo utils.py
def formatear_salario(salario):
    # Implementa formateo de salario
    pass

def generar_reporte(departamento):
    # Implementa generación de reporte
    pass

# Archivo principal main.py
# Importa los módulos y crea un sistema funcional`,
      expectedOutput: "Empleado agregado: Juan Pérez (ID: 001)\nNómina total del departamento IT: $150,000\nReporte generado exitosamente"
    }
  ];

  // Retos de programación
  const challenges = [
    {
      id: 'first-hello',
      title: 'Primer Hola Mundo',
      description: 'Completa tu primer programa Python',
      difficulty: 'beginner',
      points: 50,
      icon: star,
      unlocked: true
    },
    {
      id: 'variables-master',
      title: 'Maestro de Variables',
      description: 'Completa 3 lecciones sobre variables',
      difficulty: 'beginner',
      points: 100,
      icon: trophy,
      unlocked: true
    },
    {
      id: 'loop-champion',
      title: 'Campeón de Bucles',
      description: 'Domina todos los tipos de bucles',
      difficulty: 'intermediate',
      points: 150,
      icon: flash,
      unlocked: true
    },
    {
      id: 'function-guru',
      title: 'Gurú de Funciones',
      description: 'Crea 5 funciones diferentes',
      difficulty: 'intermediate',
      points: 200,
      icon: medal,
      unlocked: true
    },
    {
      id: 'oop-master',
      title: 'Maestro de POO',
      description: 'Completa todas las lecciones de POO',
      difficulty: 'advanced',
      points: 300,
      icon: ribbon,
      unlocked: false
    }
  ];

  // Logros disponibles
  const achievements = [
    {
      id: 'first-lesson',
      title: 'Primer Paso',
      description: 'Completaste tu primera lección',
      icon: star,
      unlocked: false
    },
    {
      id: 'week-streak',
      title: 'Semana Activa',
      description: 'Programaste durante 7 días seguidos',
      icon: flash,
      unlocked: false
    },
    {
      id: 'speed-learner',
      title: 'Aprendiz Veloz',
      description: 'Completaste 3 lecciones en un día',
      icon: trophy,
      unlocked: false
    },
    {
      id: 'help-seeker',
      title: 'Buscador de Ayuda',
      description: 'Usaste la IA 10 veces',
      icon: bulb,
      unlocked: false
    },
    {
      id: 'perfectionist',
      title: 'Perfeccionista',
      description: 'Completaste 5 lecciones sin errores',
      icon: medal,
      unlocked: false
    },
    {
      id: 'python-master',
      title: 'Maestro Python',
      description: 'Completaste todas las lecciones',
      icon: ribbon,
      unlocked: false
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'success';
      case 'intermediate': return 'warning';
      case 'advanced': return 'danger';
      default: return 'medium';
    }
  };

  const openLesson = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setUserCode(lesson.exercise);
    setIsModalOpen(true);
  };

  const generateCodeSuggestions = (code: string, lessonContext: string) => {
    const suggestions: string[] = [];
    
    // Sugerencias basadas en el contexto de la lección
    if (lessonContext.includes('print') && !code.includes('print')) {
      suggestions.push("Intenta usar print() para mostrar el resultado");
    }
    
    if (lessonContext.includes('variable') && !code.includes('=')) {
      suggestions.push("Recuerda crear una variable usando el signo =");
    }
    
    if (lessonContext.includes('if') && !code.includes('if')) {
      suggestions.push("Usa una estructura if para la condición");
    }
    
    if (lessonContext.includes('for') && !code.includes('for')) {
      suggestions.push("Considera usar un bucle for para iterar");
    }
    
    if (lessonContext.includes('while') && !code.includes('while')) {
      suggestions.push("Un bucle while podría ser útil aquí");
    }
    
    if (lessonContext.includes('función') && !code.includes('def')) {
      suggestions.push("Define una función usando def");
    }
    
    if (lessonContext.includes('lista') && !code.includes('[')) {
      suggestions.push("Crea una lista usando corchetes []");
    }
    
    if (lessonContext.includes('input') && !code.includes('input')) {
      suggestions.push("Usa input() para obtener datos del usuario");
    }
    
    // Sugerencias para errores comunes
    if (code.includes('print(') && !code.includes('"') && !code.includes("'")) {
      suggestions.push("Agrega comillas para el texto: print('mi texto')");
    }
    
    if (code.includes('=') && code.includes('if') && !code.includes('==')) {
      suggestions.push("Para comparar usa == en lugar de =");
    }
    
    return suggestions;
  };

  const checkCodeAndSuggest = (code: string) => {
    if (!selectedLesson) return;
    
    const suggestions = generateCodeSuggestions(code, selectedLesson.content);
    setCodeSuggestions(suggestions);
    setShowSuggestions(suggestions.length > 0);
  };

  const runCode = () => {
    if (!userCode.trim()) {
      setToastMessage("Por favor, escribe algo de código para ejecutar.");
      setShowToast(true);
      return;
    }
    
    // Análisis básico del código
    const codeAnalysis = analyzeCode(userCode);
    
    if (codeAnalysis.hasErrors) {
      setToastMessage(`⚠️ Posibles errores encontrados: ${codeAnalysis.errors.join(", ")}`);
    } else {
      setToastMessage("Código ejecutado correctamente! 🎉");
    }
    
    setShowToast(true);
    
    // Aquí normalmente enviarías el código a un servidor para ejecutarlo
    // Por ahora solo mostramos un mensaje de éxito
  };

  const analyzeCode = (code: string) => {
    const errors: string[] = [];
    const warnings: string[] = [];
    
    // Análisis básico de sintaxis común
    if (code.includes('print(') && !code.includes('print("') && !code.includes("print('")) {
      errors.push("print() necesita comillas para strings");
    }
    
    if (code.includes('=') && !code.includes('==') && code.includes('if')) {
      // Buscar posibles errores de asignación en if
      const lines = code.split('\n');
      lines.forEach(line => {
        if (line.includes('if') && line.includes('=') && !line.includes('==')) {
          warnings.push("¿Quisiste usar '==' en lugar de '='?");
        }
      });
    }
    
    // Verificar indentación básica
    if (code.includes('if') || code.includes('for') || code.includes('while')) {
      const lines = code.split('\n');
      let insideBlock = false;
      lines.forEach(line => {
        if (line.trim().endsWith(':')) {
          insideBlock = true;
        } else if (insideBlock && line.trim() && !line.startsWith(' ') && !line.startsWith('\t')) {
          errors.push("Problemas de indentación");
          insideBlock = false;
        }
      });
    }
    
    return {
      hasErrors: errors.length > 0,
      errors: errors,
      warnings: warnings
    };
  };

  const markAsCompleted = () => {
    if (selectedLesson) {
      // Actualizar el estado de la lección como completada
      setToastMessage(`¡Lección "${selectedLesson.title}" completada! 🎊`);
      setShowToast(true);
      
      // Aquí normalmente guardarías el progreso en una base de datos
      // Por ahora solo mostramos el mensaje
    }
  };

  const askAI = () => {
    if (!selectedLesson) return;
    
    // Preparar el contexto para la IA
    const context = {
      lesson: selectedLesson.title,
      description: selectedLesson.description,
      codeExample: selectedLesson.codeExample,
      exercise: selectedLesson.exercise,
      userCode: userCode,
      expectedOutput: selectedLesson.expectedOutput
    };
    
    // Simular envío a la IA con contexto específico
    const aiPrompt = `
CONTEXTO DE LA LECCIÓN:
- Título: ${context.lesson}
- Descripción: ${context.description}

CÓDIGO DEL USUARIO:
${context.userCode}

RESULTADO ESPERADO:
${context.expectedOutput}

CÓDIGO DE EJEMPLO:
${context.codeExample}

Por favor, analiza el código del usuario y proporciona:
1. Errores encontrados
2. Código corregido
3. Explicación de las correcciones
4. Sugerencias de mejora
`;

    // Aquí normalmente enviarías este prompt a la API de OpenAI
    // Por ahora simulamos la respuesta
    setToastMessage("Pregunta enviada a la IA con contexto de la lección. Revisa el chat para la respuesta detallada.");
    setShowToast(true);
    
    // Opcional: Redirigir al chat con el contexto
    console.log("Contexto enviado a la IA:", aiPrompt);
  };

  const filteredLessons = lessons.filter(lesson => lesson.difficulty === selectedDifficulty);
  const completedLessons = lessons.filter(lesson => lesson.completed).length;
  const totalLessons = lessons.length;
  const progressPercentage = totalLessons > 0 ? completedLessons / totalLessons : 0;

  const getDifficultyStats = () => {
    const stats = {
      beginner: { total: 0, completed: 0 },
      intermediate: { total: 0, completed: 0 },
      advanced: { total: 0, completed: 0 }
    };

    lessons.forEach(lesson => {
      stats[lesson.difficulty].total++;
      if (lesson.completed) {
        stats[lesson.difficulty].completed++;
      }
    });

    return stats;
  };

  const stats = getDifficultyStats();

  const startTraining = () => {
    setShowTraining(true);
  };

  const goBackToMenu = () => {
    setShowTraining(false);
    setIsModalOpen(false);
    setSelectedLesson(null);
  };

  return (
    <IonPage>
      <IonContent fullscreen>

        {!showTraining ? (
          // Pantalla principal con botón de entrenamiento
          <div className="python-main-container">
            <IonCard className="welcome-card">
              <IonCardContent>
                <div className="welcome-content">
                  <div className="python-logo">
                    <IonIcon icon={codeSlash} size="large" color="primary" />
                  </div>
                  <IonText>
                    <h1>Aprende Python</h1>
                    <p>Domina uno de los lenguajes de programación más populares del mundo con nuestro sistema interactivo de entrenamiento.</p>
                  </IonText>
                  
                  <div className="features-grid">
                    <div className="feature-item">
                      <IonIcon icon={school} color="success" />
                      <IonLabel>14 Lecciones</IonLabel>
                    </div>
                    <div className="feature-item">
                      <IonIcon icon={playCircle} color="warning" />
                      <IonLabel>Ejercicios Prácticos</IonLabel>
                    </div>
                    <div className="feature-item">
                      <IonIcon icon={bulb} color="secondary" />
                      <IonLabel>Asistencia IA</IonLabel>
                    </div>
                  </div>

                  <IonButton 
                    expand="block" 
                    size="large" 
                    onClick={startTraining}
                    className="training-button"
                  >
                    <IonIcon icon={fitness} slot="start" />
                    Entrenar Python
                  </IonButton>
                </div>
              </IonCardContent>
            </IonCard>

            <IonCard className="info-card">
              <IonCardHeader>
                <IonCardTitle>¿Qué aprenderás?</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonGrid>
                  <IonRow>
                    <IonCol size="12" sizeMd="4">
                      <div className="level-info">
                        <IonBadge color="success" className="level-badge">Principiante</IonBadge>
                        <IonText>
                          <p>Sintaxis básica, variables, operadores, condicionales y bucles.</p>
                        </IonText>
                      </div>
                    </IonCol>
                    <IonCol size="12" sizeMd="4">
                      <div className="level-info">
                        <IonBadge color="warning" className="level-badge">Intermedio</IonBadge>
                        <IonText>
                          <p>Listas, diccionarios, funciones y manejo de archivos.</p>
                        </IonText>
                      </div>
                    </IonCol>
                    <IonCol size="12" sizeMd="4">
                      <div className="level-info">
                        <IonBadge color="danger" className="level-badge">Avanzado</IonBadge>
                        <IonText>
                          <p>POO, decoradores, excepciones y módulos.</p>
                        </IonText>
                      </div>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCardContent>
            </IonCard>
          </div>
        ) : (
          // Pantalla de entrenamiento (contenido original)
          <div className="python-container">
          {/* Progress Section */}
          <IonCard className="progress-card">
            <IonCardContent>
              <IonText>
                <h3>Tu progreso general</h3>
                <p>{completedLessons} de {totalLessons} lecciones completadas</p>
              </IonText>
              <IonProgressBar value={progressPercentage} className="progress-bar"></IonProgressBar>
              
              {/* Estadísticas por dificultad */}
              <IonGrid className="stats-grid">
                <IonRow>
                  <IonCol size="4">
                    <div className="stat-item">
                      <IonBadge color="success">{stats.beginner.completed}/{stats.beginner.total}</IonBadge>
                      <IonLabel>Principiante</IonLabel>
                    </div>
                  </IonCol>
                  <IonCol size="4">
                    <div className="stat-item">
                      <IonBadge color="warning">{stats.intermediate.completed}/{stats.intermediate.total}</IonBadge>
                      <IonLabel>Intermedio</IonLabel>
                    </div>
                  </IonCol>
                  <IonCol size="4">
                    <div className="stat-item">
                      <IonBadge color="danger">{stats.advanced.completed}/{stats.advanced.total}</IonBadge>
                      <IonLabel>Avanzado</IonLabel>
                    </div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>

          {/* Retos y Logros */}
          <IonCard className="achievements-card">
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={trophy} /> Retos y Logros
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {/* Retos activos */}
              <div className="challenges-section">
                <h4>🎯 Retos Activos</h4>
                <IonGrid>
                  <IonRow>
                    {challenges.filter(challenge => challenge.unlocked).map((challenge) => (
                      <IonCol size="12" sizeMd="6" key={challenge.id}>
                        <div className={`challenge-item ${completedChallenges.includes(challenge.id) ? 'completed' : ''}`}>
                          <div className="challenge-icon">
                            <IonIcon icon={challenge.icon} color={completedChallenges.includes(challenge.id) ? 'success' : 'warning'} />
                          </div>
                          <div className="challenge-info">
                            <h5>{challenge.title}</h5>
                            <p>{challenge.description}</p>
                            <IonBadge color={challenge.difficulty === 'beginner' ? 'success' : challenge.difficulty === 'intermediate' ? 'warning' : 'danger'}>
                              {challenge.points} pts
                            </IonBadge>
                          </div>
                        </div>
                      </IonCol>
                    ))}
                  </IonRow>
                </IonGrid>
              </div>

              {/* Logros desbloqueados */}
              <div className="achievements-section">
                <h4>🏆 Logros Desbloqueados</h4>
                <IonGrid>
                  <IonRow>
                    {achievements.map((achievement) => (
                      <IonCol size="6" sizeMd="4" key={achievement.id}>
                        <div className={`achievement-item ${unlockedAchievements.includes(achievement.id) ? 'unlocked' : 'locked'}`}>
                          <div className="achievement-icon">
                            <IonIcon 
                              icon={achievement.icon} 
                              color={unlockedAchievements.includes(achievement.id) ? 'warning' : 'medium'} 
                            />
                          </div>
                          <div className="achievement-info">
                            <h6>{achievement.title}</h6>
                            <p>{achievement.description}</p>
                          </div>
                        </div>
                      </IonCol>
                    ))}
                  </IonRow>
                </IonGrid>
              </div>
            </IonCardContent>
          </IonCard>

          {/* Difficulty Selector */}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Selecciona el nivel de dificultad</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonSegment 
                value={selectedDifficulty} 
                onIonChange={e => setSelectedDifficulty(e.detail.value as 'beginner' | 'intermediate' | 'advanced')}
              >
                <IonSegmentButton value="beginner">
                  <IonLabel>
                    <div>🟢 Principiante</div>
                    <IonBadge color="success">{stats.beginner.total}</IonBadge>
                  </IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="intermediate">
                  <IonLabel>
                    <div>🟡 Intermedio</div>
                    <IonBadge color="warning">{stats.intermediate.total}</IonBadge>
                  </IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="advanced">
                  <IonLabel>
                    <div>🔴 Avanzado</div>
                    <IonBadge color="danger">{stats.advanced.total}</IonBadge>
                  </IonLabel>
                </IonSegmentButton>
              </IonSegment>
              
              {/* Descripción del nivel */}
              <div className="difficulty-description">
                {selectedDifficulty === 'beginner' && (
                  <IonText color="success">
                    <p><strong>Nivel Principiante:</strong> Conceptos básicos de Python, sintaxis fundamental, variables, tipos de datos, operadores y estructuras de control básicas.</p>
                  </IonText>
                )}
                {selectedDifficulty === 'intermediate' && (
                  <IonText color="warning">
                    <p><strong>Nivel Intermedio:</strong> Estructuras de datos avanzadas, funciones, manejo de archivos, programación modular y conceptos de programación más complejos.</p>
                  </IonText>
                )}
                {selectedDifficulty === 'advanced' && (
                  <IonText color="danger">
                    <p><strong>Nivel Avanzado:</strong> Programación orientada a objetos, decoradores, generadores, manejo de excepciones avanzado y organización de código en módulos y paquetes.</p>
                  </IonText>
                )}
              </div>
            </IonCardContent>
          </IonCard>

          {/* Lessons List */}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={school} /> Lecciones de Python - {selectedDifficulty}
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonList>
                {filteredLessons.map((lesson) => (
                  <IonItem key={lesson.id} button onClick={() => openLesson(lesson)}>
                    <IonIcon 
                      icon={lesson.completed ? checkmarkCircle : playCircle} 
                      slot="start"
                      color={lesson.completed ? 'success' : 'primary'}
                    />
                    <IonLabel>
                      <h2>{lesson.title}</h2>
                      <p>{lesson.description}</p>
                      <div className="lesson-meta">
                        <IonChip color={getDifficultyColor(lesson.difficulty)}>
                          <IonLabel>{lesson.difficulty}</IonLabel>
                        </IonChip>
                        <IonChip color="medium">
                          <IonIcon icon={timeOutline} />
                          <IonLabel>{lesson.duration} min</IonLabel>
                        </IonChip>
                      </div>
                    </IonLabel>
                  </IonItem>
                ))}
              </IonList>
            </IonCardContent>
          </IonCard>
        </div>
        )}

        {/* Lesson Modal */}
        <IonModal isOpen={isModalOpen} onDidDismiss={() => setIsModalOpen(false)}>
          <IonContent>
            {selectedLesson && (
              <div className="lesson-content">
                {/* Close button */}
                <div style={{ textAlign: 'right', padding: '10px' }}>
                  <IonButton fill="clear" onClick={() => setIsModalOpen(false)}>
                    <IonIcon icon={close} />
                  </IonButton>
                </div>
                
                {/* Theory Section */}
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>📚 {selectedLesson.title}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <div dangerouslySetInnerHTML={{ __html: selectedLesson.content }} />
                  </IonCardContent>
                </IonCard>

                {/* Code Example */}
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>
                      <IonIcon icon={codeSlash} /> Ejemplo de código
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <pre className="code-block">
                      <code>{selectedLesson.codeExample}</code>
                    </pre>
                  </IonCardContent>
                </IonCard>

                {/* Exercise */}
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>💻 Ejercicio práctico</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonTextarea
                      value={userCode}
                      onIonInput={(e) => {
                        setUserCode(e.detail.value!);
                        checkCodeAndSuggest(e.detail.value!);
                      }}
                      placeholder="Escribe tu código aquí..."
                      className="code-editor"
                      rows={10}
                    />
                    
                    {/* Sugerencias de código */}
                    {showSuggestions && codeSuggestions.length > 0 && (
                      <div className="code-suggestions">
                        <h4>💡 Sugerencias:</h4>
                        {codeSuggestions.map((suggestion, index) => (
                          <div key={index} className="suggestion-item">
                            <IonIcon icon={bulb} />
                            <span>{suggestion}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <IonGrid>
                      <IonRow>
                        <IonCol size="12" sizeMd="4">
                          <IonButton expand="block" onClick={runCode}>
                            <IonIcon icon={playCircle} slot="start" />
                            Ejecutar código
                          </IonButton>
                        </IonCol>
                        <IonCol size="12" sizeMd="4">
                          <IonButton expand="block" color="secondary" onClick={askAI}>
                            <IonIcon icon={bulb} slot="start" />
                            Pedir ayuda a la IA
                          </IonButton>
                        </IonCol>
                        <IonCol size="12" sizeMd="4">
                          <IonButton expand="block" color="success" onClick={markAsCompleted}>
                            <IonIcon icon={checkmarkCircle} slot="start" />
                            Marcar completada
                          </IonButton>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonCardContent>
                </IonCard>

                {/* Expected Output */}
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>🎯 Resultado esperado</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <pre className="expected-output">
                      {selectedLesson.expectedOutput}
                    </pre>
                  </IonCardContent>
                </IonCard>
              </div>
            )}
          </IonContent>
        </IonModal>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={3000}
        />
      </IonContent>
    </IonPage>
  );
};

export default PythonLearning;
