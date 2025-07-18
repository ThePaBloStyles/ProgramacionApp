// Preguntas de Java para añadir al archivo quizData.ts

export const javaQuizzes: { [key: number]: QuizQuestion[] } = {
  1: [ // Introducción a Java
    {
      id: 1,
      question: "¿Cuál es la principal característica de Java?",
      options: [
        "Es un lenguaje interpretado",
        "Es independiente de la plataforma",
        "Solo funciona en Windows",
        "No soporta programación orientada a objetos"
      ],
      correctAnswer: 1,
      explanation: "Java es independiente de la plataforma gracias a la JVM (Java Virtual Machine)."
    },
    {
      id: 2,
      question: "¿Qué significa 'Write Once, Run Anywhere' (WORA)?",
      options: [
        "Java se ejecuta solo en una plataforma",
        "El código Java se puede ejecutar en cualquier sistema con JVM",
        "Java requiere compilación para cada plataforma",
        "Java no necesita compilación"
      ],
      correctAnswer: 1,
      explanation: "WORA significa que el código Java compilado puede ejecutarse en cualquier sistema que tenga la JVM."
    },
    {
      id: 3,
      question: "¿Cuál es el método principal en una aplicación Java?",
      options: [
        "public static void main(String[] args)",
        "public void main(String args)",
        "static void main(String[] args)",
        "public main(String[] args)"
      ],
      correctAnswer: 0,
      explanation: "El método main debe ser public, static, void y recibir un array de String como parámetro."
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
      id: 20,
      question: "¿Cuál es el resultado de este código?\n\nSet<String> set = new HashSet<>();\nset.add(\"Java\");\nset.add(\"Python\");\nset.add(\"Java\");\nSystem.out.println(set.size());",
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
