import React, { useState } from 'react';
import {
  IonContent,
  IonPage,
  IonButton,
  IonIcon,
  IonTextarea,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonChip,
  IonLabel,
  IonToast,
  IonSelect,
  IonSelectOption,
  IonItem,
  IonModal,
  IonList
} from '@ionic/react';
import { 
  playCircle, 
  save, 
  trash, 
  copy, 
  share, 
  download,
  bulb,
  close,
  checkmark,
  code,
  terminal
} from 'ionicons/icons';
import ThemeToggle from '../components/ThemeToggle';
import './CodePlayground.css';

interface CodeExample {
  id: number;
  title: string;
  code: string;
  language: string;
  description: string;
  category: string;
}

const CodePlayground: React.FC = () => {
  const [code, setCode] = useState('');  // Playground vacío para que sea obligatorio escribir código

  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showExamples, setShowExamples] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('python');

  const codeExamples: CodeExample[] = [
    {
      id: 1,
      title: "Hola Mundo",
      code: `# El clásico primer programa
print("¡Hola, mundo!")
print("Bienvenido a Python")

# Variables básicas
nombre = "Programador"
print(f"Hola, {nombre}!")`,
      language: "python",
      description: "Tu primer programa en Python",
      category: "Básico"
    },
    {
      id: 2,
      title: "Calculadora Avanzada",
      code: `# Calculadora con funciones y validación
def calculadora():
    def suma(a, b):
        return a + b
    
    def resta(a, b):
        return a - b
    
    def multiplicacion(a, b):
        return a * b
    
    def division(a, b):
        if b == 0:
            return "Error: División por cero"
        return a / b
    
    # Menú de operaciones
    operaciones = {
        "1": suma,
        "2": resta,
        "3": multiplicacion,
        "4": division
    }
    
    print("=== CALCULADORA AVANZADA ===")
    print("1. Suma")
    print("2. Resta")
    print("3. Multiplicación")
    print("4. División")
    
    # Simulamos selección del usuario
    opcion = "1"  # Suma
    num1 = 15
    num2 = 7
    
    print(f"\\nSeleccionaste: Opción {opcion}")
    print(f"Números: {num1} y {num2}")
    
    if opcion in operaciones:
        resultado = operaciones[opcion](num1, num2)
        print(f"Resultado: {resultado}")
    else:
        print("Opción no válida")
    
    # Probamos todas las operaciones
    print("\\n=== PRUEBA DE TODAS LAS OPERACIONES ===")
    for op, func in operaciones.items():
        resultado = func(num1, num2)
        nombres = ["Suma", "Resta", "Multiplicación", "División"]
        print(f"{nombres[int(op)-1]}: {num1} y {num2} = {resultado}")

calculadora()`,
      language: "python",
      description: "Calculadora con funciones y menú interactivo",
      category: "Intermedio"
    },
    {
      id: 3,
      title: "Análisis de Datos",
      code: `# Análisis de datos con funciones avanzadas
import random
import math

def generar_datos(n):
    """Genera una lista de datos aleatorios"""
    return [random.randint(1, 100) for _ in range(n)]

def estadisticas(datos):
    """Calcula estadísticas básicas"""
    if not datos:
        return None
    
    n = len(datos)
    suma = sum(datos)
    promedio = suma / n
    
    # Calcular mediana
    datos_ordenados = sorted(datos)
    if n % 2 == 0:
        mediana = (datos_ordenados[n//2 - 1] + datos_ordenados[n//2]) / 2
    else:
        mediana = datos_ordenados[n//2]
    
    # Calcular moda (valor más frecuente)
    frecuencias = {}
    for valor in datos:
        frecuencias[valor] = frecuencias.get(valor, 0) + 1
    
    moda = max(frecuencias, key=frecuencias.get)
    
    # Calcular desviación estándar
    varianza = sum((x - promedio) ** 2 for x in datos) / n
    desviacion = math.sqrt(varianza)
    
    return {
        'n': n,
        'suma': suma,
        'promedio': promedio,
        'mediana': mediana,
        'moda': moda,
        'min': min(datos),
        'max': max(datos),
        'desviacion': desviacion
    }

def clasificar_datos(datos):
    """Clasifica datos en categorías"""
    bajos = []
    medios = []
    altos = []
    
    for valor in datos:
        if valor < 33:
            bajos.append(valor)
        elif valor < 67:
            medios.append(valor)
        else:
            altos.append(valor)
    
    return bajos, medios, altos

# Generar datos de ejemplo
print("=== ANÁLISIS DE DATOS ===")
datos = generar_datos(20)
print(f"Datos generados ({len(datos)} valores):")
print(datos)

# Calcular estadísticas
stats = estadisticas(datos)
print(f"\\n=== ESTADÍSTICAS ===")
print(f"Promedio: {stats['promedio']:.2f}")
print(f"Mediana: {stats['mediana']}")
print(f"Moda: {stats['moda']}")
print(f"Mínimo: {stats['min']}")
print(f"Máximo: {stats['max']}")
print(f"Desviación estándar: {stats['desviacion']:.2f}")

# Clasificar datos
bajos, medios, altos = clasificar_datos(datos)
print(f"\\n=== CLASIFICACIÓN ===")
print(f"Valores bajos (1-33): {len(bajos)} valores")
print(f"Valores medios (34-66): {len(medios)} valores")
print(f"Valores altos (67-100): {len(altos)} valores")

# Encontrar outliers (valores extremos)
outliers = []
for valor in datos:
    if abs(valor - stats['promedio']) > 2 * stats['desviacion']:
        outliers.append(valor)

print(f"\\n=== OUTLIERS ===")
if outliers:
    print(f"Valores extremos encontrados: {outliers}")
else:
    print("No se encontraron valores extremos")`,
      language: "python",
      description: "Análisis estadístico completo de datos",
      category: "Avanzado"
    },
    {
      id: 4,
      title: "Analizador de Texto",
      code: `# Analizador de texto con funciones avanzadas
import random

def generar_texto_ejemplo():
    """Genera un texto de ejemplo para análisis"""
    frases = [
        "Python es un lenguaje de programación potente y versátil.",
        "La programación es una habilidad esencial en el mundo digital.",
        "Los algoritmos son la base fundamental de la informática moderna.",
        "El aprendizaje automático está revolucionando múltiples industrias.",
        "Los desarrolladores deben mantenerse actualizados constantemente.",
        "La inteligencia artificial transforma la manera de trabajar.",
        "Python facilita el desarrollo de aplicaciones complejas."
    ]
    return " ".join(random.sample(frases, 4))

def analizar_texto(texto):
    """Analiza un texto y devuelve estadísticas completas"""
    # Estadísticas básicas
    palabras = texto.split()
    caracteres = len(texto)
    caracteres_sin_espacios = len(texto.replace(' ', ''))
    oraciones = len([s for s in texto.split('.') if s.strip()])
    
    # Análisis de palabras
    frecuencia_palabras = {}
    longitudes_palabras = []
    
    for palabra in palabras:
        palabra_limpia = palabra.lower().strip('.,!?;:"()')
        if len(palabra_limpia) > 2:  # Ignorar palabras muy cortas
            frecuencia_palabras[palabra_limpia] = frecuencia_palabras.get(palabra_limpia, 0) + 1
            longitudes_palabras.append(len(palabra_limpia))
    
    # Palabras más comunes
    palabras_comunes = sorted(frecuencia_palabras.items(), key=lambda x: x[1], reverse=True)
    
    # Estadísticas de longitud
    promedio_longitud = sum(longitudes_palabras) / len(longitudes_palabras) if longitudes_palabras else 0
    palabra_mas_larga = max(palabras, key=len) if palabras else ""
    
    return {
        'total_palabras': len(palabras),
        'total_caracteres': caracteres,
        'caracteres_sin_espacios': caracteres_sin_espacios,
        'total_oraciones': oraciones,
        'palabras_comunes': palabras_comunes[:5],
        'promedio_longitud': promedio_longitud,
        'palabra_mas_larga': palabra_mas_larga,
        'palabras_unicas': len(frecuencia_palabras)
    }

def cifrar_cesar(texto, desplazamiento=3):
    """Aplica el cifrado César al texto"""
    resultado = ""
    for char in texto:
        if char.isalpha():
            base = ord('A') if char.isupper() else ord('a')
            char_cifrado = chr((ord(char) - base + desplazamiento) % 26 + base)
            resultado += char_cifrado
        else:
            resultado += char
    return resultado

def contar_vocales_consonantes(texto):
    """Cuenta vocales y consonantes en el texto"""
    vocales = "aeiouAEIOU"
    contador_vocales = 0
    contador_consonantes = 0
    
    for char in texto:
        if char.isalpha():
            if char in vocales:
                contador_vocales += 1
            else:
                contador_consonantes += 1
    
    return contador_vocales, contador_consonantes

def extraer_palabras_clave(texto):
    """Extrae palabras clave eliminando palabras comunes"""
    palabras_comunes = ['el', 'la', 'de', 'que', 'y', 'a', 'en', 'un', 'es', 'se', 'no', 'te', 'lo', 'le', 'da', 'su', 'por', 'son', 'con', 'para', 'al', 'del', 'los', 'las', 'una', 'está', 'este', 'como', 'pero', 'han', 'muy', 'más', 'son', 'ser', 'uso', 'puede', 'hace', 'debe', 'mundo', 'cada', 'sobre', 'entre', 'durante', 'también', 'sin', 'hasta', 'bajo', 'desde', 'donde', 'mientras', 'porque', 'aunque', 'cuando', 'antes', 'después', 'dentro', 'fuera', 'contra', 'desde', 'hacia', 'según']
    
    palabras = texto.lower().split()
    palabras_clave = []
    
    for palabra in palabras:
        palabra_limpia = palabra.strip('.,!?;:"()')
        if len(palabra_limpia) > 4 and palabra_limpia not in palabras_comunes:
            if palabra_limpia not in palabras_clave:
                palabras_clave.append(palabra_limpia)
    
    return palabras_clave

# Generar y analizar texto
print("=== ANALIZADOR DE TEXTO AVANZADO ===")
texto = generar_texto_ejemplo()
print(f"Texto a analizar:")
print(f'"{texto}"')

# Realizar análisis completo
analisis = analizar_texto(texto)
print(f"\\n=== ESTADÍSTICAS GENERALES ===")
print(f"Total de palabras: {analisis['total_palabras']}")
print(f"Total de caracteres: {analisis['total_caracteres']}")
print(f"Caracteres sin espacios: {analisis['caracteres_sin_espacios']}")
print(f"Total de oraciones: {analisis['total_oraciones']}")
print(f"Palabras únicas: {analisis['palabras_unicas']}")
print(f"Promedio de longitud de palabra: {analisis['promedio_longitud']:.1f}")
print(f"Palabra más larga: '{analisis['palabra_mas_larga']}'")

# Mostrar palabras más comunes
print(f"\\n=== PALABRAS MÁS FRECUENTES ===")
for palabra, frecuencia in analisis['palabras_comunes']:
    print(f"{palabra}: {frecuencia} veces")

# Contar vocales y consonantes
vocales, consonantes = contar_vocales_consonantes(texto)
print(f"\\n=== ANÁLISIS DE LETRAS ===")
print(f"Vocales: {vocales}")
print(f"Consonantes: {consonantes}")
print(f"Ratio vocales/consonantes: {vocales/consonantes:.2f}" if consonantes > 0 else "N/A")

# Extraer palabras clave
palabras_clave = extraer_palabras_clave(texto)
print(f"\\n=== PALABRAS CLAVE ===")
print(f"Palabras clave encontradas: {len(palabras_clave)}")
for palabra in palabras_clave[:5]:  # Mostrar solo las primeras 5
    print(f"- {palabra}")

# Cifrar texto
texto_cifrado = cifrar_cesar(texto, 3)
print(f"\\n=== CIFRADO CÉSAR ===")
print(f"Texto cifrado (desplazamiento 3):")
print(f"'{texto_cifrado[:60]}...'")

# Análisis adicional
print(f"\\n=== ANÁLISIS ADICIONAL ===")
print(f"Densidad de información: {analisis['palabras_unicas']/analisis['total_palabras']:.2f}")
print(f"Palabras por oración: {analisis['total_palabras']/analisis['total_oraciones']:.1f}")
print(f"Complejidad léxica: {'Alta' if analisis['promedio_longitud'] > 6 else 'Media' if analisis['promedio_longitud'] > 4 else 'Baja'}")`,
      language: "python",
      description: "Análisis completo de texto con estadísticas avanzadas",
      category: "Avanzado"
    }
  ];

  const runCode = () => {
    if (!code.trim()) {
      setToastMessage('Por favor, escribe código antes de ejecutar');
      setShowToast(true);
      return;
    }

    setIsRunning(true);
    setOutput('');
    
    // Simular ejecución de código real
    setTimeout(() => {
      const result = simulateCodeExecution(code, selectedLanguage);
      setOutput(result.output || 'El programa no produjo salida');
      setIsRunning(false);
      
      if (result.errors.length === 0) {
        setToastMessage('Código ejecutado correctamente!');
      } else {
        setToastMessage('Se encontraron errores en el código');
      }
      setShowToast(true);
    }, 1000);
  };

  const simulateCodeExecution = (code: string, lang: string) => {
    const errors: string[] = [];
    let output = '';
    
    if (lang === 'python') {
      try {
        // Crear un contexto de ejecución más completo
        const context = {
          variables: {} as { [key: string]: any },
          functions: {} as { [key: string]: any },
          output: '',
          imports: {} as { [key: string]: any }
        };
        
        // Simular algunas librerías básicas
        context.imports['random'] = {
          randint: (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min,
          random: () => Math.random(),
          choice: (arr: any[]) => arr[Math.floor(Math.random() * arr.length)]
        };
        
        context.imports['math'] = {
          pi: Math.PI,
          sqrt: Math.sqrt,
          pow: Math.pow,
          abs: Math.abs,
          floor: Math.floor,
          ceil: Math.ceil,
          round: Math.round
        };
        
        // Procesar el código línea por línea
        const lines = code.split('\n');
        let i = 0;
        
        while (i < lines.length) {
          const line = lines[i].trim();
          
          // Ignorar comentarios y líneas vacías
          if (line.startsWith('#') || line === '') {
            i++;
            continue;
          }
          
          // Manejar imports
          if (line.startsWith('import ')) {
            const moduleName = line.replace('import ', '').trim();
            if (context.imports[moduleName]) {
              context.variables[moduleName] = context.imports[moduleName];
            }
            i++;
            continue;
          }
          
          // Manejar from import
          if (line.startsWith('from ') && line.includes(' import ')) {
            const parts = line.split(' import ');
            const moduleName = parts[0].replace('from ', '').trim();
            const imports = parts[1].split(',').map(s => s.trim());
            
            if (context.imports[moduleName]) {
              imports.forEach(imp => {
                if (context.imports[moduleName][imp]) {
                  context.variables[imp] = context.imports[moduleName][imp];
                }
              });
            }
            i++;
            continue;
          }
          
          // Manejar definición de funciones
          if (line.startsWith('def ')) {
            const funcResult = parseFunction(lines, i, context);
            i = funcResult.nextIndex;
            continue;
          }
          
          // Manejar estructuras de control
          if (line.startsWith('if ') || line.startsWith('elif ') || line.startsWith('else:')) {
            const ifResult = parseIfStatement(lines, i, context);
            i = ifResult.nextIndex;
            continue;
          }
          
          if (line.startsWith('for ')) {
            const forResult = parseForLoop(lines, i, context);
            i = forResult.nextIndex;
            continue;
          }
          
          if (line.startsWith('while ')) {
            const whileResult = parseWhileLoop(lines, i, context);
            i = whileResult.nextIndex;
            continue;
          }
          
          // Ejecutar línea individual
          executeLine(line, context);
          i++;
        }
        
        return { output: context.output.trim(), errors };
        
      } catch (error) {
        errors.push(`Error: ${error}`);
        return { output: '', errors };
      }
    }
    
    return { output: output.trim(), errors };
  };

  // Función para parsear funciones
  const parseFunction = (lines: string[], startIndex: number, context: any) => {
    const funcLine = lines[startIndex].trim();
    const funcMatch = funcLine.match(/def\s+(\w+)\s*\(([^)]*)\):/);
    
    if (!funcMatch) {
      return { nextIndex: startIndex + 1 };
    }
    
    const funcName = funcMatch[1];
    const params = funcMatch[2].split(',').map(p => p.trim()).filter(p => p);
    
    let i = startIndex + 1;
    const funcBody: string[] = [];
    
    // Recopilar el cuerpo de la función
    while (i < lines.length) {
      const line = lines[i];
      if (line.trim() === '' || line.startsWith('    ') || line.startsWith('\t')) {
        funcBody.push(line);
        i++;
      } else {
        break;
      }
    }
    
    // Crear la función
    context.functions[funcName] = {
      params,
      body: funcBody,
      execute: (args: any[]) => {
        const localContext = { ...context };
        
        // Asignar parámetros
        params.forEach((param, index) => {
          localContext.variables[param] = args[index];
        });
        
        // Ejecutar cuerpo de la función
        let result;
        for (const bodyLine of funcBody) {
          const trimmedLine = bodyLine.trim();
          if (trimmedLine.startsWith('return ')) {
            result = evaluateExpression(trimmedLine.replace('return ', ''), localContext);
            break;
          } else if (trimmedLine) {
            executeLine(trimmedLine, localContext);
          }
        }
        
        return result;
      }
    };
    
    return { nextIndex: i };
  };

  // Función para parsear if statements
  const parseIfStatement = (lines: string[], startIndex: number, context: any) => {
    const ifLine = lines[startIndex].trim();
    let condition = '';
    
    if (ifLine.startsWith('if ')) {
      condition = ifLine.replace('if ', '').replace(':', '');
    } else if (ifLine.startsWith('elif ')) {
      condition = ifLine.replace('elif ', '').replace(':', '');
    } else if (ifLine === 'else:') {
      condition = 'True';
    }
    
    let i = startIndex + 1;
    const ifBody: string[] = [];
    
    // Recopilar el cuerpo del if
    while (i < lines.length) {
      const line = lines[i];
      if (line.trim() === '' || line.startsWith('    ') || line.startsWith('\t')) {
        ifBody.push(line);
        i++;
      } else {
        break;
      }
    }
    
    // Evaluar condición
    const conditionResult = evaluateExpression(condition, context);
    
    if (conditionResult) {
      // Ejecutar cuerpo del if
      for (const bodyLine of ifBody) {
        const trimmedLine = bodyLine.trim();
        if (trimmedLine) {
          executeLine(trimmedLine, context);
        }
      }
    }
    
    return { nextIndex: i };
  };

  // Función para parsear for loops
  const parseForLoop = (lines: string[], startIndex: number, context: any) => {
    const forLine = lines[startIndex].trim();
    const forMatch = forLine.match(/for\s+(\w+)\s+in\s+(.+):/);
    
    if (!forMatch) {
      return { nextIndex: startIndex + 1 };
    }
    
    const varName = forMatch[1];
    const iterable = forMatch[2];
    
    let i = startIndex + 1;
    const forBody: string[] = [];
    
    // Recopilar el cuerpo del for
    while (i < lines.length) {
      const line = lines[i];
      if (line.trim() === '' || line.startsWith('    ') || line.startsWith('\t')) {
        forBody.push(line);
        i++;
      } else {
        break;
      }
    }
    
    // Evaluar iterable
    let iterableValue;
    if (iterable.startsWith('range(')) {
      const rangeMatch = iterable.match(/range\(([^)]+)\)/);
      if (rangeMatch) {
        const args = rangeMatch[1].split(',').map(s => parseInt(s.trim()));
        if (args.length === 1) {
          iterableValue = Array.from({ length: args[0] }, (_, i) => i);
        } else if (args.length === 2) {
          iterableValue = Array.from({ length: args[1] - args[0] }, (_, i) => i + args[0]);
        }
      }
    } else if (iterable.startsWith('enumerate(')) {
      const enumMatch = iterable.match(/enumerate\(([^)]+)\)/);
      if (enumMatch) {
        const arrName = enumMatch[1].trim();
        const arr = evaluateExpression(arrName, context);
        if (Array.isArray(arr)) {
          iterableValue = arr.map((item, index) => [index, item]);
        }
      }
    } else {
      iterableValue = evaluateExpression(iterable, context);
    }
    
    // Ejecutar bucle
    if (Array.isArray(iterableValue)) {
      for (const item of iterableValue) {
        context.variables[varName] = item;
        
        // Ejecutar cuerpo del for
        for (const bodyLine of forBody) {
          const trimmedLine = bodyLine.trim();
          if (trimmedLine) {
            executeLine(trimmedLine, context);
          }
        }
      }
    }
    
    return { nextIndex: i };
  };

  // Función para parsear while loops
  const parseWhileLoop = (lines: string[], startIndex: number, context: any) => {
    const whileLine = lines[startIndex].trim();
    const condition = whileLine.replace('while ', '').replace(':', '');
    
    let i = startIndex + 1;
    const whileBody: string[] = [];
    
    // Recopilar el cuerpo del while
    while (i < lines.length) {
      const line = lines[i];
      if (line.trim() === '' || line.startsWith('    ') || line.startsWith('\t')) {
        whileBody.push(line);
        i++;
      } else {
        break;
      }
    }
    
    // Ejecutar while loop (con límite de seguridad)
    let iterations = 0;
    const maxIterations = 1000;
    
    while (evaluateExpression(condition, context) && iterations < maxIterations) {
      for (const bodyLine of whileBody) {
        const trimmedLine = bodyLine.trim();
        if (trimmedLine) {
          executeLine(trimmedLine, context);
        }
      }
      iterations++;
    }
    
    return { nextIndex: i };
  };

  // Función para ejecutar una línea individual
  const executeLine = (line: string, context: any) => {
    // Asignación de variables
    if (line.includes('=') && !line.includes('==') && !line.includes('!=') && !line.includes('<=') && !line.includes('>=')) {
      const [varName, value] = line.split('=').map(s => s.trim());
      
      // Manejar listas
      if (value.startsWith('[') && value.endsWith(']')) {
        const listContent = value.slice(1, -1);
        if (listContent.trim() === '') {
          context.variables[varName] = [];
        } else {
          context.variables[varName] = listContent.split(',').map(item => evaluateExpression(item.trim(), context));
        }
      }
      // Manejar diccionarios
      else if (value.startsWith('{') && value.endsWith('}')) {
        context.variables[varName] = {};
      }
      // Manejar strings multilínea
      else if (value.startsWith('"""') || value.startsWith("'''")) {
        context.variables[varName] = value.slice(3, -3);
      }
      // Llamadas a funciones
      else if (value.includes('(') && value.includes(')')) {
        context.variables[varName] = evaluateExpression(value, context);
      }
      // Otros valores
      else {
        context.variables[varName] = evaluateExpression(value, context);
      }
    }
    // Print statements
    else if (line.startsWith('print(') && line.endsWith(')')) {
      const content = line.slice(6, -1);
      const result = evaluateExpression(content, context);
      context.output += result + '\n';
    }
    // Llamadas a funciones
    else if (line.includes('(') && line.includes(')')) {
      evaluateExpression(line, context);
    }
    // Operaciones con listas
    else if (line.includes('.append(') || line.includes('.extend(') || line.includes('.pop(')) {
      const [varName, operation] = line.split('.').map(s => s.trim());
      const variable = context.variables[varName];
      
      if (Array.isArray(variable)) {
        if (operation.startsWith('append(')) {
          const value = evaluateExpression(operation.slice(7, -1), context);
          variable.push(value);
        } else if (operation.startsWith('extend(')) {
          const value = evaluateExpression(operation.slice(7, -1), context);
          if (Array.isArray(value)) {
            variable.push(...value);
          }
        } else if (operation.startsWith('pop(')) {
          const indexStr = operation.slice(4, -1);
          if (indexStr === '') {
            variable.pop();
          } else {
            const index = evaluateExpression(indexStr, context);
            variable.splice(index, 1);
          }
        }
      }
    }
  };

  // Función para evaluar expresiones
  const evaluateExpression = (expr: string, context: any): any => {
    expr = expr.trim();
    
    // String literals
    if ((expr.startsWith('"') && expr.endsWith('"')) || (expr.startsWith("'") && expr.endsWith("'"))) {
      return expr.slice(1, -1);
    }
    
    // F-strings
    if (expr.includes('f"') || expr.includes("f'")) {
      let fString = expr;
      if (fString.startsWith('f"') && fString.endsWith('"')) {
        fString = fString.slice(2, -1);
      } else if (fString.startsWith("f'") && fString.endsWith("'")) {
        fString = fString.slice(2, -1);
      }
      
      return fString.replace(/\{([^}]+)\}/g, (match, varExpr) => {
        return evaluateExpression(varExpr.trim(), context);
      });
    }
    
    // Números
    if (!isNaN(Number(expr))) {
      return Number(expr);
    }
    
    // Booleanos
    if (expr === 'True') return true;
    if (expr === 'False') return false;
    if (expr === 'None') return null;
    
    // Variables
    if (context.variables[expr] !== undefined) {
      return context.variables[expr];
    }
    
    // Llamadas a funciones
    if (expr.includes('(') && expr.includes(')')) {
      const funcMatch = expr.match(/(\w+)\(([^)]*)\)/);
      if (funcMatch) {
        const funcName = funcMatch[1];
        const argsStr = funcMatch[2];
        const args = argsStr ? argsStr.split(',').map(arg => evaluateExpression(arg.trim(), context)) : [];
        
        // Funciones built-in
        if (funcName === 'len') {
          return args[0]?.length || 0;
        }
        if (funcName === 'str') {
          return String(args[0]);
        }
        if (funcName === 'int') {
          return parseInt(args[0]);
        }
        if (funcName === 'float') {
          return parseFloat(args[0]);
        }
        if (funcName === 'list') {
          return Array.isArray(args[0]) ? args[0] : [args[0]];
        }
        if (funcName === 'sorted') {
          return [...args[0]].sort();
        }
        
        // Funciones definidas por el usuario
        if (context.functions[funcName]) {
          return context.functions[funcName].execute(args);
        }
        
        // Métodos de objetos importados
        if (context.variables[funcName]) {
          return context.variables[funcName];
        }
      }
    }
    
    // Operaciones matemáticas y lógicas
    try {
      const result = eval(expr.replace(/[a-zA-Z_][a-zA-Z0-9_]*/g, (match) => {
        if (context.variables[match] !== undefined) {
          return JSON.stringify(context.variables[match]);
        }
        return match;
      }));
      return result;
    } catch {
      return expr;
    }
  };

  const clearCode = () => {
    setCode(`# Playground de Python - Consola Funcional
# Ahora soporta funciones, bucles, condicionales y más!

# Ejemplo básico
def saludar(nombre):
    return f"¡Hola, {nombre}!"

nombre = "Programador"
mensaje = saludar(nombre)
print(mensaje)

# Prueba con un bucle
for i in range(3):
    print(f"Iteración {i + 1}")

# Tu código aquí...
`);
    setOutput('');
    setToastMessage('Código limpiado');
    setShowToast(true);
  };

  const saveCode = () => {
    // Simular guardado
    setToastMessage('Código guardado en tu dispositivo');
    setShowToast(true);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setToastMessage('Código copiado al portapapeles');
    setShowToast(true);
  };

  const shareCode = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Mi código Python',
        text: code,
      });
    } else {
      copyCode();
    }
  };

  const loadExample = (example: CodeExample) => {
    setCode(example.code);
    setOutput('');
    setShowExamples(false);
    setToastMessage(`Ejemplo "${example.title}" cargado`);
    setShowToast(true);
  };

  const askAIHelp = () => {
    setToastMessage('Enviando código a la IA para revisión...');
    setShowToast(true);
    // Aquí se redirigiría al chat de IA con el código
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="playground-container">
          {/* Toolbar */}
          <IonCard className="toolbar-card">
            <IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol size="auto">
                    <IonItem>
                      <IonSelect 
                        value={selectedLanguage} 
                        onIonChange={(e) => setSelectedLanguage(e.detail.value)}
                      >
                        <IonSelectOption value="python">Python</IonSelectOption>
                        <IonSelectOption value="javascript">JavaScript (Próximamente)</IonSelectOption>
                      </IonSelect>
                    </IonItem>
                  </IonCol>
                  <IonCol>
                    <div className="toolbar-buttons">
                      <IonButton 
                        fill="solid" 
                        color="success" 
                        onClick={runCode}
                        disabled={isRunning}
                      >
                        <IonIcon icon={playCircle} slot="start" />
                        {isRunning ? 'Ejecutando...' : 'Ejecutar'}
                      </IonButton>
                      
                      <IonButton fill="outline" onClick={() => setShowExamples(true)}>
                        <IonIcon icon={code} slot="start" />
                        Ejemplos
                      </IonButton>
                      
                      <IonButton fill="clear" onClick={saveCode}>
                        <IonIcon icon={save} />
                      </IonButton>
                      
                      <IonButton fill="clear" onClick={copyCode}>
                        <IonIcon icon={copy} />
                      </IonButton>
                      
                      <IonButton fill="clear" onClick={shareCode}>
                        <IonIcon icon={share} />
                      </IonButton>
                      
                      <IonButton fill="clear" color="danger" onClick={clearCode}>
                        <IonIcon icon={trash} />
                      </IonButton>
                      
                      <ThemeToggle />
                    </div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>

          {/* Code Editor */}
          <IonGrid>
            <IonRow>
              <IonCol size="12" sizeLg="6">
                <IonCard className="editor-card">
                  <IonCardHeader>
                    <IonCardTitle>
                      <IonIcon icon={code} /> Editor de Código
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonTextarea
                      value={code}
                      onIonInput={(e) => setCode(e.detail.value!)}
                      className="code-editor"
                      placeholder="¡Escribe tu código Python aquí para empezar a programar! 🐍
                      
Ejemplo básico:
print('¡Hola, mundo!')

# Puedes usar variables, funciones, bucles y más...
# ¡Usa los ejemplos como guía o crea algo completamente nuevo!"
                      rows={20}
                    />
                    <div className="editor-actions">
                      <IonButton fill="outline" size="small" onClick={askAIHelp}>
                        <IonIcon icon={bulb} slot="start" />
                        Pedir ayuda a la IA
                      </IonButton>
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              
              <IonCol size="12" sizeLg="6">
                <IonCard className="output-card">
                  <IonCardHeader>
                    <IonCardTitle>
                      <IonIcon icon={terminal} /> Salida
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <div className="output-area">
                      {isRunning ? (
                        <div className="loading-output">
                          <div className="loading-spinner"></div>
                          <IonText>Ejecutando código...</IonText>
                        </div>
                      ) : output ? (
                        <pre className="output-text">{output}</pre>
                      ) : (
                        <IonText color="medium">
                          <p>La salida de tu código aparecerá aquí...</p>
                        </IonText>
                      )}
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>

          {/* Tips */}
          <IonCard className="tips-card">
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={bulb} /> Tips del Playground
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol size="12" sizeMd="6">
                    <div className="tip">
                      <h4>🚀 Atajos de teclado</h4>
                      <ul>
                        <li>Ctrl + Enter: Ejecutar código</li>
                        <li>Ctrl + S: Guardar código</li>
                        <li>Ctrl + A: Seleccionar todo</li>
                      </ul>
                    </div>
                  </IonCol>
                  <IonCol size="12" sizeMd="6">
                    <div className="tip">
                      <h4>💡 Consejos</h4>
                      <ul>
                        <li>Usa print() para depurar tu código</li>
                        <li>Prueba con diferentes valores</li>
                        <li>Pide ayuda a la IA si tienes dudas</li>
                      </ul>
                    </div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
        </div>

        {/* Examples Modal */}
        <IonModal isOpen={showExamples} onDidDismiss={() => setShowExamples(false)}>
          <IonContent>
            <div className="examples-container">
              {/* Close button */}
              <div style={{ textAlign: 'right', padding: '10px' }}>
                <IonButton fill="clear" onClick={() => setShowExamples(false)}>
                  <IonIcon icon={close} />
                </IonButton>
              </div>
              
              <IonList>
                {codeExamples.map((example) => (
                  <IonItem key={example.id} button onClick={() => loadExample(example)}>
                    <IonLabel>
                      <h2>{example.title}</h2>
                      <p>{example.description}</p>
                      <IonChip color="primary">
                        <IonLabel>{example.category}</IonLabel>
                      </IonChip>
                    </IonLabel>
                  </IonItem>
                ))}
              </IonList>
            </div>
          </IonContent>
        </IonModal>

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

export default CodePlayground;
