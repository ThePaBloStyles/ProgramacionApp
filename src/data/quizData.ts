export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

// Importar preguntas de Java desde archivo separado
import { javaQuizzes as importedJavaQuizzes } from './javaQuizData';

export const javaQuizzes: { [key: number]: QuizQuestion[] } = importedJavaQuizzes;

export const pythonQuizzes: { [key: number]: QuizQuestion[] } = {
  1: [ // Introducción a Python
    {
      id: 1,
      question: "¿Cuál es la sintaxis correcta para imprimir 'Hola Mundo' en Python?",
      options: [
        "print('Hola Mundo')",
        "echo('Hola Mundo')",
        "printf('Hola Mundo')",
        "cout << 'Hola Mundo'"
      ],
      correctAnswer: 0,
      explanation: "En Python, se usa la función print() para mostrar texto en la consola."
    },
    {
      id: 2,
      question: "¿Cuál es la extensión de archivo para programas Python?",
      options: [
        ".py",
        ".python",
        ".pyt",
        ".pt"
      ],
      correctAnswer: 0,
      explanation: "Los archivos de Python tienen la extensión .py"
    }
  ],
  17: [ // Examen Final Python
    {
      id: 1,
      question: "¿Cuál es la principal diferencia entre listas y tuplas en Python?",
      options: [
        "No hay diferencia",
        "Las listas son mutables, las tuplas son inmutables",
        "Las tuplas son más rápidas",
        "Las listas no pueden contener números"
      ],
      correctAnswer: 1,
      explanation: "Las listas se pueden modificar después de crearlas (mutables), mientras que las tuplas no se pueden cambiar (inmutables)."
    },
    {
      id: 2,
      question: "¿Qué es el 'duck typing' en Python?",
      options: [
        "Un tipo de variable",
        "Si camina como un pato y habla como un pato, es un pato",
        "Un error de sintaxis",
        "Un tipo de bucle"
      ],
      correctAnswer: 1,
      explanation: "Duck typing es un concepto donde el tipo de un objeto se determina por su comportamiento, no por su clase."
    },
    {
      id: 3,
      question: "¿Cuál es el resultado de este código? print(2 ** 3 ** 2)",
      options: [
        "64",
        "512",
        "256",
        "Error"
      ],
      correctAnswer: 1,
      explanation: "El operador ** es asociativo por la derecha, por lo que se evalúa como 2 ** (3 ** 2) = 2 ** 9 = 512."
    },
    {
      id: 4,
      question: "¿Qué hace la función enumerate() en Python?",
      options: [
        "Cuenta elementos",
        "Retorna índice y valor de cada elemento",
        "Ordena una lista",
        "Convierte a números"
      ],
      correctAnswer: 1,
      explanation: "enumerate() retorna un objeto que contiene pares de (índice, valor) para cada elemento de una secuencia."
    },
    {
      id: 5,
      question: "¿Cuál es la diferencia entre __str__ y __repr__?",
      options: [
        "Son idénticos",
        "__str__ es para usuarios, __repr__ es para desarrolladores",
        "__str__ es más rápido",
        "__repr__ es para strings"
      ],
      correctAnswer: 1,
      explanation: "__str__ retorna una representación legible para usuarios, __repr__ retorna una representación útil para desarrolladores."
    },
    {
      id: 6,
      question: "¿Qué hace el decorador @property?",
      options: [
        "Crea una variable",
        "Convierte un método en un atributo",
        "Hace el método privado",
        "Crea una clase"
      ],
      correctAnswer: 1,
      explanation: "@property permite acceder a un método como si fuera un atributo, sin necesidad de usar paréntesis."
    },
    {
      id: 7,
      question: "¿Cuál es el resultado de list(range(5, 0, -1))?",
      options: [
        "[5, 4, 3, 2, 1]",
        "[1, 2, 3, 4, 5]",
        "[0, 1, 2, 3, 4]",
        "Error"
      ],
      correctAnswer: 0,
      explanation: "range(5, 0, -1) genera números desde 5 hasta 1 (0 exclusivo) con paso -1."
    },
    {
      id: 8,
      question: "¿Qué es un closure en Python?",
      options: [
        "Un tipo de bucle",
        "Una función que recuerda variables del ámbito externo",
        "Un método de clase",
        "Un error de sintaxis"
      ],
      correctAnswer: 1,
      explanation: "Un closure es una función que tiene acceso a variables de su ámbito externo, incluso después de que el ámbito externo haya terminado."
    },
    {
      id: 9,
      question: "¿Cuál es el resultado de {1, 2, 3} & {2, 3, 4}?",
      options: [
        "{1, 2, 3, 4}",
        "{2, 3}",
        "{1, 4}",
        "Error"
      ],
      correctAnswer: 1,
      explanation: "El operador & realiza la intersección de sets, retornando elementos comunes: {2, 3}."
    },
    {
      id: 10,
      question: "¿Qué hace el método __call__ en una clase?",
      options: [
        "Llama a otros métodos",
        "Hace que los objetos sean invocables como funciones",
        "Crea nuevos objetos",
        "Destruye objetos"
      ],
      correctAnswer: 1,
      explanation: "__call__ permite que un objeto sea usado como una función, llamándolo con paréntesis."
    },
    {
      id: 11,
      question: "¿Cuál es la diferencia entre deepcopy y copy?",
      options: [
        "No hay diferencia",
        "deepcopy copia recursivamente, copy solo la superficie",
        "deepcopy es más rápido",
        "copy es para listas, deepcopy para diccionarios"
      ],
      correctAnswer: 1,
      explanation: "copy() crea una copia superficial, deepcopy() crea una copia profunda incluyendo objetos anidados."
    },
    {
      id: 12,
      question: "¿Qué hace el operador := (walrus operator)?",
      options: [
        "Compara valores",
        "Asigna y retorna el valor en una expresión",
        "Crea variables",
        "Es un comentario"
      ],
      correctAnswer: 1,
      explanation: "El walrus operator (:=) permite asignar un valor a una variable dentro de una expresión."
    },
    {
      id: 13,
      question: "¿Cuál es el resultado de [1, 2, 3] * 3?",
      options: [
        "[3, 6, 9]",
        "[1, 2, 3, 1, 2, 3, 1, 2, 3]",
        "[1, 2, 3, 3]",
        "Error"
      ],
      correctAnswer: 1,
      explanation: "El operador * en listas replica la lista el número de veces especificado."
    },
    {
      id: 14,
      question: "¿Qué es un context manager en Python?",
      options: [
        "Un tipo de variable",
        "Un objeto que define métodos __enter__ y __exit__",
        "Un gestor de memoria",
        "Un tipo de función"
      ],
      correctAnswer: 1,
      explanation: "Un context manager es un objeto que define los métodos __enter__ y __exit__ para usar con la declaración 'with'."
    },
    {
      id: 15,
      question: "¿Cuál es el resultado de any([False, False, True])?",
      options: [
        "False",
        "True",
        "[False, False, True]",
        "Error"
      ],
      correctAnswer: 1,
      explanation: "any() retorna True si al menos uno de los elementos es verdadero."
    },
    {
      id: 16,
      question: "¿Qué hace el método __getitem__ en una clase?",
      options: [
        "Obtiene todos los elementos",
        "Permite acceso con corchetes []",
        "Crea elementos",
        "Elimina elementos"
      ],
      correctAnswer: 1,
      explanation: "__getitem__ permite que un objeto sea accedido usando la sintaxis de corchetes obj[key]."
    },
    {
      id: 17,
      question: "¿Cuál es la diferencia entre @staticmethod y @classmethod?",
      options: [
        "No hay diferencia",
        "@staticmethod no recibe self ni cls, @classmethod recibe cls",
        "@staticmethod es más rápido",
        "@classmethod es para variables"
      ],
      correctAnswer: 1,
      explanation: "@staticmethod no recibe referencia automática, @classmethod recibe cls (la clase) como primer argumento."
    },
    {
      id: 18,
      question: "¿Qué hace la función zip() en Python?",
      options: [
        "Comprime archivos",
        "Combina elementos de múltiples iterables",
        "Ordena listas",
        "Crea tuplas"
      ],
      correctAnswer: 1,
      explanation: "zip() toma múltiples iterables y retorna tuplas combinando elementos en la misma posición."
    },
    {
      id: 19,
      question: "¿Cuál es el resultado de dict.fromkeys(['a', 'b', 'c'], 0)?",
      options: [
        "{'a': 0, 'b': 0, 'c': 0}",
        "['a', 'b', 'c']",
        "Error",
        "{0: 'a', 0: 'b', 0: 'c'}"
      ],
      correctAnswer: 0,
      explanation: "fromkeys() crea un diccionario con las claves especificadas, todas con el mismo valor."
    },
    {
      id: 20,
      question: "¿Qué es el GIL (Global Interpreter Lock) en Python?",
      options: [
        "Un tipo de variable",
        "Un mecanismo que permite solo un thread ejecutar código Python",
        "Un error común",
        "Un tipo de función"
      ],
      correctAnswer: 1,
      explanation: "El GIL es un mutex que protege el acceso a objetos Python, permitiendo solo un thread ejecutar código Python a la vez."
    }
  ]
};
