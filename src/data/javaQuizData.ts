export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const javaQuizzes: { [key: number]: QuizQuestion[] } = {
  1: [ // Introducción a Java
    {
      id: 1,
      question: "¿Cuál es la principal característica de Java relacionada con la portabilidad?",
      options: [
        "Java es solo para Windows",
        "Write Once, Run Anywhere (WORA)",
        "Java solo funciona en servidores",
        "Java requiere recompilación para cada sistema"
      ],
      correctAnswer: 1,
      explanation: "WORA significa que el código Java compilado puede ejecutarse en cualquier sistema que tenga una JVM instalada."
    },
    {
      id: 2,
      question: "¿Cuál es el método principal que se ejecuta al iniciar un programa Java?",
      options: [
        "start()",
        "main(String[] args)",
        "begin()",
        "execute()"
      ],
      correctAnswer: 1,
      explanation: "El método main con la firma exacta 'public static void main(String[] args)' es el punto de entrada de cualquier aplicación Java."
    }
  ],
  17: [ // Examen Final Java
    {
      id: 1,
      question: "¿Cuál es la principal diferencia entre JDK, JRE y JVM?",
      options: [
        "No hay diferencia",
        "JDK incluye JRE y herramientas de desarrollo, JRE incluye JVM",
        "Solo JVM es necesario para ejecutar Java",
        "JRE es para desarrollo, JDK para ejecución"
      ],
      correctAnswer: 1,
      explanation: "JDK (Java Development Kit) incluye JRE y herramientas de desarrollo. JRE (Java Runtime Environment) incluye JVM y bibliotecas necesarias para ejecutar aplicaciones Java."
    },
    {
      id: 2,
      question: "¿Qué imprime este código? String str1 = \"Hello\"; String str2 = \"Hello\"; System.out.println(str1 == str2);",
      options: [
        "true",
        "false",
        "Error de compilación",
        "Depende de la JVM"
      ],
      correctAnswer: 0,
      explanation: "En Java, los literales de String se almacenan en el String Pool, por lo que str1 y str2 apuntan al mismo objeto en memoria."
    },
    {
      id: 3,
      question: "¿Cuál es el resultado de este código con un array y continue?",
      options: [
        "1 2 4 5",
        "1 2 3 4 5",
        "3",
        "1 2"
      ],
      correctAnswer: 0,
      explanation: "El enhanced for loop recorre el array, y continue salta la iteración cuando i == 3, imprimiendo 1 2 4 5."
    },
    {
      id: 4,
      question: "¿Qué es el 'garbage collection' en Java?",
      options: [
        "Un tipo de excepción",
        "Un proceso automático de liberación de memoria",
        "Una colección de objetos no utilizados",
        "Un método de la clase Object"
      ],
      correctAnswer: 1,
      explanation: "Garbage Collection es el proceso automático de Java para liberar memoria de objetos que ya no son referenciados."
    },
    {
      id: 5,
      question: "¿Cuál es el resultado cuando se ejecuta un método sobrescrito?",
      options: [
        "A",
        "B",
        "Error de compilación",
        "A y B"
      ],
      correctAnswer: 1,
      explanation: "Aunque la referencia es de tipo A, el objeto es de tipo B, por lo que se ejecuta el método sobrescrito en B debido al polimorfismo."
    },
    {
      id: 6,
      question: "¿Qué hace el método equals() en Java?",
      options: [
        "Compara referencias de objeto",
        "Compara el contenido de objetos",
        "Crea una copia del objeto",
        "Convierte el objeto a String"
      ],
      correctAnswer: 1,
      explanation: "El método equals() está diseñado para comparar el contenido de objetos, aunque la implementación por defecto compara referencias."
    },
    {
      id: 7,
      question: "¿Cuál es el resultado después de remover un elemento de una lista?",
      options: [
        "Java",
        "Python",
        "C++",
        "IndexOutOfBoundsException"
      ],
      correctAnswer: 2,
      explanation: "Después de remover el elemento en índice 1 (Python), C++ se mueve al índice 1."
    },
    {
      id: 8,
      question: "¿Qué es una excepción 'checked' en Java?",
      options: [
        "Una excepción que se verifica en tiempo de ejecución",
        "Una excepción que debe ser manejada o declarada",
        "Una excepción que no puede ocurrir",
        "Una excepción que se ignora automáticamente"
      ],
      correctAnswer: 1,
      explanation: "Las excepciones checked deben ser manejadas con try-catch o declaradas con throws en la firma del método."
    },
    {
      id: 9,
      question: "¿Cuál es el resultado al reemplazar un valor en HashMap?",
      options: [
        "1",
        "11",
        "Error",
        "null"
      ],
      correctAnswer: 1,
      explanation: "En un HashMap, cuando se añade una clave que ya existe, el valor anterior se reemplaza por el nuevo valor."
    },
    {
      id: 10,
      question: "¿Qué hace el método stream() en Java Collections?",
      options: [
        "Convierte la colección en un array",
        "Crea un flujo de datos para procesamiento funcional",
        "Serializa la colección",
        "Ordena los elementos"
      ],
      correctAnswer: 1,
      explanation: "El método stream() crea un Stream que permite procesamiento funcional de los elementos de la colección."
    },
    {
      id: 11,
      question: "¿Cuál es el resultado de substring(6, 11) en 'Hello World'?",
      options: [
        "World",
        "Hello",
        "Worl",
        "StringIndexOutOfBoundsException"
      ],
      correctAnswer: 0,
      explanation: "substring(6, 11) extrae desde el índice 6 hasta 10 (11 exclusivo), que es 'World'."
    },
    {
      id: 12,
      question: "¿Qué es el 'method overriding' en Java?",
      options: [
        "Tener múltiples métodos con el mismo nombre",
        "Redefinir un método de la clase padre en la clase hija",
        "Llamar a un método múltiples veces",
        "Crear métodos estáticos"
      ],
      correctAnswer: 1,
      explanation: "Method overriding es redefinir un método de la clase padre en la clase hija con la misma firma."
    },
    {
      id: 13,
      question: "¿Cuál es el resultado de try-catch-finally?",
      options: [
        "Error",
        "Finally",
        "Error\\nFinally",
        "Ninguna salida"
      ],
      correctAnswer: 2,
      explanation: "Se ejecuta el bloque catch (imprime Error) y luego el bloque finally (imprime Finally)."
    },
    {
      id: 14,
      question: "¿Qué hace la palabra clave 'static' en Java?",
      options: [
        "Hace que la variable sea constante",
        "Hace que el método o variable pertenezca a la clase, no a la instancia",
        "Hace que el método sea privado",
        "Hace que la clase sea final"
      ],
      correctAnswer: 1,
      explanation: "static hace que el método o variable pertenezca a la clase en lugar de a instancias específicas."
    },
    {
      id: 15,
      question: "¿Cuál es el resultado de sumar números pares usando streams?",
      options: [
        "6",
        "15",
        "8",
        "10"
      ],
      correctAnswer: 0,
      explanation: "Filtra números pares (2, 4), los convierte a int y suma: 2 + 4 = 6."
    },
    {
      id: 16,
      question: "¿Qué es un 'constructor' por defecto en Java?",
      options: [
        "Un constructor que toma parámetros por defecto",
        "Un constructor sin parámetros proporcionado automáticamente",
        "Un constructor estático",
        "Un constructor privado"
      ],
      correctAnswer: 1,
      explanation: "El constructor por defecto es un constructor sin parámetros que Java proporciona automáticamente si no se define ningún constructor."
    },
    {
      id: 17,
      question: "¿Cuál es el resultado de int x = 5; int y = ++x;?",
      options: [
        "5,5",
        "6,5",
        "5,6",
        "6,6"
      ],
      correctAnswer: 3,
      explanation: "++x incrementa x antes de asignarlo a y, por lo que ambos x e y son 6."
    },
    {
      id: 18,
      question: "¿Qué hace el método toString() en Java?",
      options: [
        "Convierte números a String",
        "Devuelve una representación en String del objeto",
        "Convierte el objeto a mayúsculas",
        "Compara objetos"
      ],
      correctAnswer: 1,
      explanation: "toString() devuelve una representación en String del objeto, usado por println() y concatenación de strings."
    },
    {
      id: 19,
      question: "¿Cuál es la diferencia entre ArrayList y LinkedList?",
      options: [
        "No hay diferencia",
        "ArrayList usa arrays, LinkedList usa nodos enlazados",
        "ArrayList es más lento",
        "LinkedList no puede crecer dinámicamente"
      ],
      correctAnswer: 1,
      explanation: "ArrayList usa un array interno redimensionable, mientras que LinkedList usa nodos doblemente enlazados."
    },
    {
      id: 20,
      question: "¿Cuál es el resultado de añadir elementos duplicados a un HashSet?",
      options: [
        "3",
        "2",
        "1",
        "Error"
      ],
      correctAnswer: 1,
      explanation: "HashSet no permite elementos duplicados, por lo que 'Java' se añade solo una vez. El tamaño es 2."
    }
  ]
};
