export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
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
    },
    {
      id: 3,
      question: "¿Qué empresa desarrolló originalmente Java?",
      options: [
        "Microsoft",
        "Sun Microsystems",
        "Oracle",
        "IBM"
      ],
      correctAnswer: 1,
      explanation: "Java fue desarrollado por Sun Microsystems en 1995, aunque ahora es mantenido por Oracle."
    }
  ],
  2: [ // Variables y Tipos de Datos
    {
      id: 1,
      question: "¿Cuál es el rango de valores para el tipo 'byte' en Java?",
      options: [
        "0 a 255",
        "-128 a 127",
        "-32,768 a 32,767",
        "0 a 127"
      ],
      correctAnswer: 1,
      explanation: "El tipo byte en Java es de 8 bits con signo, por lo que su rango es de -128 a 127."
    },
    {
      id: 2,
      question: "¿Cuál de estos NO es un tipo primitivo en Java?",
      options: [
        "int",
        "boolean",
        "String",
        "double"
      ],
      correctAnswer: 2,
      explanation: "String es una clase en Java, no un tipo primitivo. Los tipos primitivos son byte, short, int, long, float, double, char, boolean."
    },
    {
      id: 3,
      question: "¿Qué tipo de dato usarías para almacenar un número decimal en Java?",
      options: [
        "int",
        "char",
        "double",
        "boolean"
      ],
      correctAnswer: 2,
      explanation: "double es el tipo de dato más común para números decimales de doble precisión en Java."
    }
  ],
  3: [ // Operadores y Expresiones
    {
      id: 1,
      question: "¿Cuál es el resultado de 17 % 5 en Java?",
      options: [
        "3",
        "2",
        "3.4",
        "5"
      ],
      correctAnswer: 1,
      explanation: "El operador módulo (%) devuelve el resto de la división. 17 dividido por 5 es 3 con resto 2."
    },
    {
      id: 2,
      question: "¿Cuál es el resultado de la expresión lógica: true && false || true?",
      options: [
        "true",
        "false",
        "Error de compilación",
        "Depende del contexto"
      ],
      correctAnswer: 0,
      explanation: "La expresión se evalúa como (true && false) || true = false || true = true. El operador || tiene menor precedencia que &&."
    },
    {
      id: 3,
      question: "¿Qué operador se usa para comparar si dos valores son iguales en Java?",
      options: [
        "=",
        "==",
        "equals()",
        "==="
      ],
      correctAnswer: 1,
      explanation: "El operador == compara valores primitivos. Para objetos como String, se debe usar equals()."
    }
  ],
  4: [ // Entrada y Salida de Datos
    {
      id: 1,
      question: "¿Qué clase se usa para leer datos del usuario en Java?",
      options: [
        "Reader",
        "Scanner",
        "Input",
        "Console"
      ],
      correctAnswer: 1,
      explanation: "Scanner es la clase más común para leer entrada del usuario desde la consola."
    },
    {
      id: 2,
      question: "¿Qué método de Scanner se usa para leer un número entero?",
      options: [
        "nextInt()",
        "readInt()",
        "getInt()",
        "scanInt()"
      ],
      correctAnswer: 0,
      explanation: "nextInt() es el método correcto para leer un entero usando Scanner."
    },
    {
      id: 3,
      question: "¿Por qué es importante cerrar el Scanner después de usarlo?",
      options: [
        "Para evitar errores de compilación",
        "Para liberar recursos del sistema",
        "Para mejorar el rendimiento",
        "No es necesario cerrarlo"
      ],
      correctAnswer: 1,
      explanation: "Es importante cerrar el Scanner para liberar los recursos del sistema y evitar posibles memory leaks."
    }
  ],
  5: [ // Cadenas de Texto
    {
      id: 1,
      question: "¿Cuál es la longitud de la cadena 'Hello World'?",
      options: [
        "10",
        "11",
        "12",
        "9"
      ],
      correctAnswer: 1,
      explanation: "La cadena 'Hello World' tiene 11 caracteres, incluyendo el espacio."
    },
    {
      id: 2,
      question: "¿Qué método se usa para convertir una cadena a mayúsculas?",
      options: [
        "toUpper()",
        "toUpperCase()",
        "upperCase()",
        "toCapital()"
      ],
      correctAnswer: 1,
      explanation: "toUpperCase() es el método correcto para convertir una cadena a mayúsculas."
    },
    {
      id: 3,
      question: "¿Cuál es el resultado de 'Hello'.substring(1, 4)?",
      options: [
        "Hell",
        "ell",
        "ello",
        "llo"
      ],
      correctAnswer: 1,
      explanation: "substring(1, 4) extrae desde el índice 1 hasta el 3 (4 es exclusivo), resultando en 'ell'."
    }
  ],
  6: [ // Estructuras de Control - Condicionales
    {
      id: 1,
      question: "¿Cuál es la sintaxis correcta para una declaración if en Java?",
      options: [
        "if (condition) { }",
        "if condition { }",
        "if (condition) then { }",
        "if: condition { }"
      ],
      correctAnswer: 0,
      explanation: "En Java, las condiciones del if deben ir entre paréntesis: if (condition) { }"
    },
    {
      id: 2,
      question: "¿Cuántas condiciones else if puedes tener en una estructura if?",
      options: [
        "Solo una",
        "Máximo tres",
        "Tantas como necesites",
        "Ninguna"
      ],
      correctAnswer: 2,
      explanation: "Puedes tener tantas condiciones else if como necesites en Java."
    },
    {
      id: 3,
      question: "¿Cuál es el resultado de: int x = 5; String result = x > 3 ? 'mayor' : 'menor';?",
      options: [
        "mayor",
        "menor",
        "Error de compilación",
        "5"
      ],
      correctAnswer: 0,
      explanation: "El operador ternario evalúa x > 3 (5 > 3 es true), por lo que devuelve 'mayor'."
    }
  ],
  10: [ // Colecciones - ArrayList
    {
      id: 1,
      question: "¿Cuál es la principal diferencia entre Array y ArrayList en Java?",
      options: [
        "Array es más rápido",
        "ArrayList tiene tamaño fijo",
        "Array tiene tamaño fijo, ArrayList es dinámico",
        "No hay diferencia"
      ],
      correctAnswer: 2,
      explanation: "Los arrays tienen tamaño fijo, mientras que ArrayList puede cambiar de tamaño dinámicamente."
    },
    {
      id: 2,
      question: "¿Qué método se usa para agregar un elemento al final de un ArrayList?",
      options: [
        "append()",
        "add()",
        "insert()",
        "push()"
      ],
      correctAnswer: 1,
      explanation: "add() es el método para agregar elementos al final de un ArrayList."
    },
    {
      id: 3,
      question: "¿Cómo obtienes el tamaño de un ArrayList?",
      options: [
        "length",
        "length()",
        "size()",
        "count()"
      ],
      correctAnswer: 2,
      explanation: "size() es el método que devuelve el número de elementos en un ArrayList."
    }
  ],
  7: [ // Bucles
    {
      id: 1,
      question: "¿Cuál es la sintaxis correcta para un bucle for en Java?",
      options: [
        "for (int i = 0; i < 10; i++)",
        "for i in range(10)",
        "for (i = 0; i < 10; i++)",
        "foreach (int i = 0; i < 10; i++)"
      ],
      correctAnswer: 0,
      explanation: "En Java, la sintaxis correcta es: for (int i = 0; i < 10; i++) con declaración de tipo."
    },
    {
      id: 2,
      question: "¿Qué palabra clave se usa para salir de un bucle en Java?",
      options: [
        "exit",
        "break",
        "stop",
        "return"
      ],
      correctAnswer: 1,
      explanation: "break se usa para salir inmediatamente de un bucle en Java."
    },
    {
      id: 3,
      question: "¿Cuál es la diferencia entre while y do-while en Java?",
      options: [
        "No hay diferencia",
        "while es más rápido",
        "do-while se ejecuta al menos una vez",
        "while se ejecuta al menos una vez"
      ],
      correctAnswer: 2,
      explanation: "do-while ejecuta el bloque al menos una vez antes de verificar la condición."
    }
  ],
  8: [ // Arrays
    {
      id: 1,
      question: "¿Cuál es la sintaxis correcta para declarar un array de enteros en Java?",
      options: [
        "int[] numeros = new int[5];",
        "int numeros[] = new int[5];",
        "Ambas son correctas",
        "array<int> numeros = new array<int>(5);"
      ],
      correctAnswer: 2,
      explanation: "Tanto int[] numeros como int numeros[] son sintaxis válidas para declarar arrays en Java."
    },
    {
      id: 2,
      question: "¿Cómo se obtiene la longitud de un array en Java?",
      options: [
        "array.size()",
        "array.length()",
        "array.length",
        "array.count()"
      ],
      correctAnswer: 2,
      explanation: "array.length es la propiedad que devuelve la longitud de un array en Java (sin paréntesis)."
    },
    {
      id: 3,
      question: "¿Cuál es el índice del primer elemento en un array de Java?",
      options: [
        "1",
        "0",
        "-1",
        "Depende del array"
      ],
      correctAnswer: 1,
      explanation: "Los arrays en Java son zero-indexed, por lo que el primer elemento está en el índice 0."
    }
  ],
  9: [ // Programación Orientada a Objetos - Clases
    {
      id: 1,
      question: "¿Cuál es la sintaxis correcta para definir una clase en Java?",
      options: [
        "class MiClase { }",
        "public class MiClase { }",
        "Ambas son correctas",
        "define class MiClase { }"
      ],
      correctAnswer: 2,
      explanation: "Tanto 'class MiClase' como 'public class MiClase' son sintaxis válidas, dependiendo del nivel de acceso."
    },
    {
      id: 2,
      question: "¿Qué palabra clave se usa para crear una instancia de una clase en Java?",
      options: [
        "create",
        "new",
        "instance",
        "make"
      ],
      correctAnswer: 1,
      explanation: "new es la palabra clave para crear nuevas instancias de una clase en Java."
    },
    {
      id: 3,
      question: "¿Cómo se llama el método especial que se ejecuta cuando se crea un objeto?",
      options: [
        "init()",
        "create()",
        "Constructor",
        "start()"
      ],
      correctAnswer: 2,
      explanation: "El constructor es el método especial que se ejecuta automáticamente cuando se crea un objeto."
    }
  ],
  11: [ // Métodos
    {
      id: 1,
      question: "¿Cuál es la sintaxis correcta para definir un método público en Java?",
      options: [
        "public void miMetodo() { }",
        "public miMetodo() { }",
        "void public miMetodo() { }",
        "method public void miMetodo() { }"
      ],
      correctAnswer: 0,
      explanation: "La sintaxis correcta es: public void miMetodo() { } con modificador de acceso, tipo de retorno y nombre."
    },
    {
      id: 2,
      question: "¿Qué palabra clave se usa para llamar a un método de la clase padre?",
      options: [
        "parent",
        "super",
        "base",
        "father"
      ],
      correctAnswer: 1,
      explanation: "super se usa para llamar métodos o acceder a propiedades de la clase padre."
    },
    {
      id: 3,
      question: "¿Qué significa 'void' en la declaración de un método?",
      options: [
        "El método es privado",
        "El método no devuelve valor",
        "El método es estático",
        "El método acepta parámetros"
      ],
      correctAnswer: 1,
      explanation: "void indica que el método no devuelve ningún valor."
    }
  ],
  12: [ // Herencia
    {
      id: 1,
      question: "¿Qué palabra clave se usa para heredar de una clase en Java?",
      options: [
        "inherits",
        "extends",
        "implements",
        "super"
      ],
      correctAnswer: 1,
      explanation: "extends se usa para heredar de una clase padre en Java."
    },
    {
      id: 2,
      question: "¿Puede una clase heredar de múltiples clases en Java?",
      options: [
        "Sí, siempre",
        "No, solo herencia simple",
        "Solo con interfaces",
        "Depende del compilador"
      ],
      correctAnswer: 1,
      explanation: "Java solo permite herencia simple de clases, pero puede implementar múltiples interfaces."
    },
    {
      id: 3,
      question: "¿Qué palabra clave se usa para implementar una interfaz?",
      options: [
        "extends",
        "implements",
        "uses",
        "includes"
      ],
      correctAnswer: 1,
      explanation: "implements se usa para implementar interfaces en Java."
    }
  ],
  13: [ // Polimorfismo
    {
      id: 1,
      question: "¿Qué permite el polimorfismo en Java?",
      options: [
        "Crear múltiples clases",
        "Usar un objeto de diferentes formas",
        "Heredar de múltiples clases",
        "Crear interfaces"
      ],
      correctAnswer: 1,
      explanation: "El polimorfismo permite que un objeto pueda ser tratado como instancia de diferentes tipos."
    },
    {
      id: 2,
      question: "¿Cuál es un ejemplo de polimorfismo en Java?",
      options: [
        "Sobrecarga de métodos",
        "Sobrescritura de métodos",
        "Ambas son correctas",
        "Herencia múltiple"
      ],
      correctAnswer: 2,
      explanation: "Tanto la sobrecarga (overloading) como la sobrescritura (overriding) son ejemplos de polimorfismo."
    },
    {
      id: 3,
      question: "¿Qué anotación se usa para indicar que un método sobrescribe otro?",
      options: [
        "@Override",
        "@Overwrite",
        "@Super",
        "@Inherit"
      ],
      correctAnswer: 0,
      explanation: "@Override es la anotación que indica que un método sobrescribe un método de la clase padre."
    }
  ],
  14: [ // Manejo de Excepciones
    {
      id: 1,
      question: "¿Cuál es la sintaxis correcta para manejar excepciones en Java?",
      options: [
        "try/catch",
        "try/except",
        "catch/finally",
        "error/handle"
      ],
      correctAnswer: 0,
      explanation: "Java usa try/catch para manejar excepciones."
    },
    {
      id: 2,
      question: "¿Qué bloque se ejecuta siempre en el manejo de excepciones?",
      options: [
        "try",
        "catch",
        "finally",
        "throw"
      ],
      correctAnswer: 2,
      explanation: "El bloque finally se ejecuta siempre, haya o no excepciones."
    },
    {
      id: 3,
      question: "¿Qué palabra clave se usa para lanzar una excepción manualmente?",
      options: [
        "throw",
        "throws",
        "exception",
        "error"
      ],
      correctAnswer: 0,
      explanation: "throw se usa para lanzar una excepción manualmente en Java."
    }
  ],
  15: [ // Examen Final Java
    {
      id: 1,
      question: "¿Cuál es la principal diferencia entre ArrayList y Array en Java?",
      options: [
        "ArrayList es más rápido",
        "Array tiene tamaño fijo, ArrayList es dinámico",
        "Array solo almacena primitivos",
        "No hay diferencia"
      ],
      correctAnswer: 1,
      explanation: "La principal diferencia es que los arrays tienen tamaño fijo mientras que ArrayList puede cambiar de tamaño dinámicamente."
    },
    {
      id: 2,
      question: "¿Qué palabra clave se usa para heredar de una clase en Java?",
      options: [
        "inherits",
        "extends",
        "implements",
        "super"
      ],
      correctAnswer: 1,
      explanation: "extends se usa para heredar de una clase. implements se usa para implementar interfaces."
    },
    {
      id: 3,
      question: "¿Cuál es el propósito del bloque 'finally' en manejo de excepciones?",
      options: [
        "Ejecutar código solo si hay excepción",
        "Ejecutar código solo si no hay excepción",
        "Ejecutar código siempre, haya o no excepción",
        "Capturar excepciones específicas"
      ],
      correctAnswer: 2,
      explanation: "El bloque finally se ejecuta siempre, independientemente de si ocurre una excepción o no."
    },
    {
      id: 4,
      question: "¿Qué estructura de datos es más eficiente para búsquedas rápidas por clave?",
      options: [
        "ArrayList",
        "LinkedList",
        "HashMap",
        "TreeSet"
      ],
      correctAnswer: 2,
      explanation: "HashMap proporciona acceso O(1) promedio para búsquedas por clave, siendo la más eficiente para este propósito."
    },
    {
      id: 5,
      question: "En programación orientada a objetos, ¿qué principio permite que un objeto tome múltiples formas?",
      options: [
        "Encapsulación",
        "Herencia",
        "Polimorfismo",
        "Abstracción"
      ],
      correctAnswer: 2,
      explanation: "El polimorfismo permite que un objeto pueda ser tratado como instancia de diferentes tipos a través de herencia e interfaces."
    },
    {
      id: 6,
      question: "Ejercicio Práctico: ¿Cuál sería el resultado de ejecutar este código?\n\nArrayList<Integer> nums = new ArrayList<>();\nnums.add(10);\nnums.add(20);\nnums.add(30);\nSystem.out.println(nums.get(1));",
      options: [
        "10",
        "20",
        "30",
        "Error de compilación"
      ],
      correctAnswer: 1,
      explanation: "get(1) obtiene el elemento en el índice 1, que es 20 (los índices empiezan en 0)."
    },
    {
      id: 7,
      question: "Ejercicio Práctico: Si tienes una clase Persona con método saludar(), ¿cómo crearías una instancia y llamarías el método?",
      options: [
        "Persona p = new Persona(); p.saludar();",
        "Persona p = Persona(); p.saludar();",
        "new Persona p; p.saludar();",
        "Persona p; p.saludar();"
      ],
      correctAnswer: 0,
      explanation: "La sintaxis correcta es usar 'new' para crear la instancia y luego llamar al método con el operador punto."
    }
  ]
};

export const pythonQuizzes: { [key: number]: QuizQuestion[] } = {
  1: [ // Introducción a Python
    {
      id: 1,
      question: "¿Cuál es una característica principal de Python?",
      options: [
        "Requiere compilación manual",
        "Sintaxis simple y legible",
        "Solo funciona en Windows",
        "Es un lenguaje de bajo nivel"
      ],
      correctAnswer: 1,
      explanation: "Python es conocido por su sintaxis simple y legible, lo que lo hace ideal para principiantes."
    },
    {
      id: 2,
      question: "¿Qué función se usa para mostrar texto en la consola en Python?",
      options: [
        "console.log()",
        "System.out.println()",
        "print()",
        "echo()"
      ],
      correctAnswer: 2,
      explanation: "print() es la función estándar para mostrar texto en la consola en Python."
    },
    {
      id: 3,
      question: "¿Python es un lenguaje compilado o interpretado?",
      options: [
        "Compilado",
        "Interpretado",
        "Ambos",
        "Ninguno"
      ],
      correctAnswer: 1,
      explanation: "Python es un lenguaje interpretado, lo que significa que el código se ejecuta línea por línea sin necesidad de compilación previa."
    }
  ],
  2: [ // Variables y Tipos de Datos
    {
      id: 1,
      question: "¿Cómo se declara una variable en Python?",
      options: [
        "var nombre = 'Juan'",
        "String nombre = 'Juan'",
        "nombre = 'Juan'",
        "declare nombre = 'Juan'"
      ],
      correctAnswer: 2,
      explanation: "En Python, las variables se declaran simplemente asignando un valor: nombre = 'Juan'."
    },
    {
      id: 2,
      question: "¿Qué función se usa para conocer el tipo de una variable en Python?",
      options: [
        "typeof()",
        "type()",
        "getType()",
        "checkType()"
      ],
      correctAnswer: 1,
      explanation: "type() es la función que devuelve el tipo de una variable en Python."
    },
    {
      id: 3,
      question: "¿Cuál de estos es un tipo de dato válido en Python?",
      options: [
        "int",
        "float",
        "str",
        "Todas las anteriores"
      ],
      correctAnswer: 3,
      explanation: "int (entero), float (decimal) y str (cadena) son todos tipos de datos válidos en Python."
    }
  ],
  3: [ // Operadores y Expresiones
    {
      id: 1,
      question: "¿Cuál es el resultado de 2 ** 3 en Python?",
      options: [
        "6",
        "8",
        "9",
        "Error"
      ],
      correctAnswer: 1,
      explanation: "El operador ** es para potenciación en Python. 2 ** 3 = 2³ = 8."
    },
    {
      id: 2,
      question: "¿Cuál es el resultado de 17 // 5 en Python?",
      options: [
        "3.4",
        "3",
        "4",
        "2"
      ],
      correctAnswer: 1,
      explanation: "El operador // es división entera en Python. 17 // 5 = 3 (sin decimales)."
    },
    {
      id: 3,
      question: "¿Qué operador lógico se usa para 'Y' en Python?",
      options: [
        "&&",
        "and",
        "AND",
        "&"
      ],
      correctAnswer: 1,
      explanation: "En Python se usa 'and' para el operador lógico Y, a diferencia de otros lenguajes que usan &&."
    }
  ],
  4: [ // Entrada y Salida de Datos
    {
      id: 1,
      question: "¿Qué función se usa para leer datos del usuario en Python?",
      options: [
        "read()",
        "input()",
        "scan()",
        "get()"
      ],
      correctAnswer: 1,
      explanation: "input() es la función estándar para leer datos del usuario en Python."
    },
    {
      id: 2,
      question: "¿Qué tipo de dato devuelve la función input() por defecto?",
      options: [
        "int",
        "float",
        "str",
        "bool"
      ],
      correctAnswer: 2,
      explanation: "input() siempre devuelve un string (str), incluso si el usuario ingresa números."
    },
    {
      id: 3,
      question: "¿Cómo convertirías la entrada del usuario a un número entero?",
      options: [
        "integer(input())",
        "int(input())",
        "number(input())",
        "parse(input())"
      ],
      correctAnswer: 1,
      explanation: "int(input()) convierte la cadena devuelta por input() a un número entero."
    }
  ],
  5: [ // Cadenas de Texto
    {
      id: 1,
      question: "¿Cómo se llama el formateo de strings que usa {} en Python?",
      options: [
        "String formatting",
        "f-strings",
        "format() method",
        "Template strings"
      ],
      correctAnswer: 2,
      explanation: "El método format() usa {} como marcadores de posición para formatear strings."
    },
    {
      id: 2,
      question: "¿Cuál es la sintaxis correcta para f-strings en Python?",
      options: [
        "f'Hola {nombre}'",
        "'Hola {nombre}'f",
        "format('Hola {nombre}')",
        "string.format('Hola {nombre}')"
      ],
      correctAnswer: 0,
      explanation: "f-strings se escriben con una 'f' antes de las comillas: f'Hola {nombre}'."
    },
    {
      id: 3,
      question: "¿Qué método se usa para dividir una cadena en una lista?",
      options: [
        "divide()",
        "split()",
        "separate()",
        "break()"
      ],
      correctAnswer: 1,
      explanation: "split() divide una cadena en una lista basándose en un separador."
    }
  ],
  6: [ // Estructuras de Control - Condicionales
    {
      id: 1,
      question: "¿Cuál es la sintaxis correcta para una declaración if en Python?",
      options: [
        "if condition:",
        "if (condition):",
        "if condition then:",
        "if: condition"
      ],
      correctAnswer: 0,
      explanation: "En Python, la sintaxis es 'if condition:' seguido de código indentado."
    },
    {
      id: 2,
      question: "¿Qué se usa en Python en lugar de llaves {} para delimitar bloques de código?",
      options: [
        "Paréntesis",
        "Corchetes",
        "Indentación",
        "Puntos y comas"
      ],
      correctAnswer: 2,
      explanation: "Python usa indentación (espacios o tabs) para delimitar bloques de código."
    },
    {
      id: 3,
      question: "¿Cuál es la palabra clave para 'si no' en Python?",
      options: [
        "else",
        "elseif",
        "otherwise",
        "endif"
      ],
      correctAnswer: 0,
      explanation: "else es la palabra clave para el bloque que se ejecuta cuando la condición if es falsa."
    }
  ],
  7: [ // Bucles
    {
      id: 1,
      question: "¿Qué bucle se usa para iterar sobre una secuencia en Python?",
      options: [
        "while",
        "for",
        "loop",
        "iterate"
      ],
      correctAnswer: 1,
      explanation: "El bucle for se usa para iterar sobre secuencias como listas, strings, etc."
    },
    {
      id: 2,
      question: "¿Qué función se usa para generar una secuencia de números en Python?",
      options: [
        "sequence()",
        "range()",
        "numbers()",
        "generate()"
      ],
      correctAnswer: 1,
      explanation: "range() genera una secuencia de números, comúnmente usada con bucles for."
    },
    {
      id: 3,
      question: "¿Qué palabra clave se usa para salir prematuramente de un bucle?",
      options: [
        "exit",
        "break",
        "stop",
        "end"
      ],
      correctAnswer: 1,
      explanation: "break termina la ejecución del bucle actual inmediatamente."
    }
  ],
  8: [ // Listas
    {
      id: 1,
      question: "¿Cómo se crea una lista vacía en Python?",
      options: [
        "lista = []",
        "lista = list()",
        "Ambas son correctas",
        "lista = empty()"
      ],
      correctAnswer: 2,
      explanation: "Tanto lista = [] como lista = list() crean una lista vacía en Python."
    },
    {
      id: 2,
      question: "¿Qué método se usa para agregar un elemento al final de una lista?",
      options: [
        "add()",
        "append()",
        "insert()",
        "push()"
      ],
      correctAnswer: 1,
      explanation: "append() agrega un elemento al final de la lista."
    },
    {
      id: 3,
      question: "¿Cómo se accede al primer elemento de una lista llamada 'numeros'?",
      options: [
        "numeros[1]",
        "numeros[0]",
        "numeros.first()",
        "numeros.get(0)"
      ],
      correctAnswer: 1,
      explanation: "Los índices en Python empiezan en 0, por lo que el primer elemento es numeros[0]."
    }
  ],
  9: [ // Diccionarios
    {
      id: 1,
      question: "¿Cómo se crea un diccionario vacío en Python?",
      options: [
        "dict = []",
        "dict = {}",
        "dict = dict()",
        "Ambas b y c son correctas"
      ],
      correctAnswer: 3,
      explanation: "Tanto dict = {} como dict = dict() crean un diccionario vacío en Python."
    },
    {
      id: 2,
      question: "¿Qué característica tienen las claves en un diccionario?",
      options: [
        "Pueden ser cualquier tipo",
        "Deben ser únicas",
        "Deben ser números",
        "Deben estar ordenadas"
      ],
      correctAnswer: 1,
      explanation: "Las claves en un diccionario deben ser únicas; no puede haber claves duplicadas."
    },
    {
      id: 3,
      question: "¿Cómo se accede al valor asociado con la clave 'nombre' en un diccionario llamado 'persona'?",
      options: [
        "persona['nombre']",
        "persona.nombre",
        "persona.get('nombre')",
        "Ambas a y c son correctas"
      ],
      correctAnswer: 3,
      explanation: "Tanto persona['nombre'] como persona.get('nombre') permiten acceder al valor de la clave 'nombre'."
    }
  ],
  10: [ // Funciones
    {
      id: 1,
      question: "¿Cuál es la sintaxis correcta para definir una función en Python?",
      options: [
        "function nombre():",
        "def nombre():",
        "define nombre():",
        "func nombre():"
      ],
      correctAnswer: 1,
      explanation: "def es la palabra clave para definir funciones en Python."
    },
    {
      id: 2,
      question: "¿Qué palabra clave se usa para devolver un valor desde una función?",
      options: [
        "return",
        "give",
        "send",
        "output"
      ],
      correctAnswer: 0,
      explanation: "return se usa para devolver un valor desde una función."
    },
    {
      id: 3,
      question: "¿Qué pasa si una función no tiene declaración return?",
      options: [
        "Error",
        "Devuelve None",
        "Devuelve 0",
        "Devuelve una cadena vacía"
      ],
      correctAnswer: 1,
      explanation: "Si una función no tiene return explícito, devuelve None automáticamente."
    }
  ],
  11: [ // Manejo de Archivos
    {
      id: 1,
      question: "¿Cuál es la forma correcta de abrir un archivo para lectura en Python?",
      options: [
        "file = open('archivo.txt', 'r')",
        "file = read('archivo.txt')",
        "file = load('archivo.txt')",
        "file = access('archivo.txt')"
      ],
      correctAnswer: 0,
      explanation: "open('archivo.txt', 'r') abre un archivo en modo lectura ('r' = read)."
    },
    {
      id: 2,
      question: "¿Qué modo se usa para escribir en un archivo (sobrescribiendo el contenido existente)?",
      options: [
        "'r'",
        "'w'",
        "'a'",
        "'x'"
      ],
      correctAnswer: 1,
      explanation: "El modo 'w' (write) abre un archivo para escritura, sobrescribiendo el contenido existente."
    },
    {
      id: 3,
      question: "¿Por qué es importante cerrar un archivo después de usarlo?",
      options: [
        "Para evitar errores de sintaxis",
        "Para liberar recursos del sistema",
        "Para mejorar el rendimiento",
        "No es necesario cerrarlo"
      ],
      correctAnswer: 1,
      explanation: "Es importante cerrar archivos para liberar recursos del sistema y evitar problemas de acceso."
    }
  ],
  12: [ // Manejo de Excepciones
    {
      id: 1,
      question: "¿Cuál es la sintaxis correcta para manejar excepciones en Python?",
      options: [
        "try/catch",
        "try/except",
        "catch/finally",
        "error/handle"
      ],
      correctAnswer: 1,
      explanation: "Python usa try/except para manejar excepciones, no try/catch como otros lenguajes."
    },
    {
      id: 2,
      question: "¿Qué bloque se ejecuta siempre, independientemente de si hay excepciones?",
      options: [
        "try",
        "except",
        "finally",
        "else"
      ],
      correctAnswer: 2,
      explanation: "El bloque finally se ejecuta siempre, haya o no excepciones."
    },
    {
      id: 3,
      question: "¿Cuál es una excepción común cuando se divide por cero?",
      options: [
        "ValueError",
        "ZeroDivisionError",
        "TypeError",
        "IndexError"
      ],
      correctAnswer: 1,
      explanation: "ZeroDivisionError se produce cuando se intenta dividir un número por cero."
    }
  ],
  15: [ // Examen Final Python
    {
      id: 1,
      question: "¿Cuál es la principal diferencia entre listas y tuplas en Python?",
      options: [
        "Las listas son más rápidas",
        "Las tuplas son mutables, las listas no",
        "Las listas son mutables, las tuplas no",
        "No hay diferencia"
      ],
      correctAnswer: 2,
      explanation: "Las listas son mutables (se pueden modificar) mientras que las tuplas son inmutables (no se pueden modificar después de creadas)."
    },
    {
      id: 2,
      question: "¿Qué palabra clave se usa para definir una función en Python?",
      options: [
        "function",
        "def",
        "func",
        "define"
      ],
      correctAnswer: 1,
      explanation: "def es la palabra clave para definir funciones en Python."
    },
    {
      id: 3,
      question: "¿Cuál es el propósito del bloque 'finally' en manejo de excepciones?",
      options: [
        "Ejecutar código solo si hay excepción",
        "Ejecutar código solo si no hay excepción",
        "Ejecutar código siempre, haya o no excepción",
        "Capturar excepciones específicas"
      ],
      correctAnswer: 2,
      explanation: "El bloque finally se ejecuta siempre, independientemente de si ocurre una excepción o no."
    },
    {
      id: 4,
      question: "¿Qué estructura de datos usarías para almacenar elementos únicos en Python?",
      options: [
        "list",
        "tuple",
        "set",
        "dict"
      ],
      correctAnswer: 2,
      explanation: "set es la estructura de datos que almacena elementos únicos, eliminando automáticamente duplicados."
    },
    {
      id: 5,
      question: "En programación orientada a objetos con Python, ¿cómo se llama el método constructor?",
      options: [
        "__new__",
        "__init__",
        "__create__",
        "__constructor__"
      ],
      correctAnswer: 1,
      explanation: "__init__ es el método constructor que se llama automáticamente cuando se crea una instancia de una clase."
    },
    {
      id: 6,
      question: "Ejercicio Práctico: ¿Cuál sería el resultado de ejecutar este código?\n\nnumeros = [1, 2, 3, 4, 5]\nresultado = [x * 2 for x in numeros if x % 2 == 0]\nprint(resultado)",
      options: [
        "[2, 4, 6, 8, 10]",
        "[4, 8]",
        "[2, 6, 10]",
        "[1, 3, 5]"
      ],
      correctAnswer: 1,
      explanation: "La list comprehension filtra números pares (2, 4) y los multiplica por 2, resultando en [4, 8]."
    },
    {
      id: 7,
      question: "Ejercicio Práctico: Si defines una función que calcula el factorial de un número, ¿cuál sería el resultado de factorial(4)?",
      options: [
        "10",
        "16",
        "24",
        "4"
      ],
      correctAnswer: 2,
      explanation: "El factorial de 4 es 4! = 4 × 3 × 2 × 1 = 24."
    },
    {
      id: 8,
      question: "Ejercicio Práctico: ¿Cuál es el resultado de este código?\n\ndiccionario = {'a': 1, 'b': 2, 'c': 3}\nprint(len(diccionario.keys()))",
      options: [
        "3",
        "6",
        "{'a': 1, 'b': 2, 'c': 3}",
        "Error"
      ],
      correctAnswer: 0,
      explanation: "diccionario.keys() devuelve las claves del diccionario, y len() cuenta cuántas hay: 3."
    },
    {
      id: 9,
      question: "Ejercicio Práctico: ¿Cuál es el resultado de 'Python'[::-1]?",
      options: [
        "Python",
        "nohtyP",
        "Pyth",
        "Error"
      ],
      correctAnswer: 1,
      explanation: "[::-1] invierte la cadena, por lo que 'Python' se convierte en 'nohtyP'."
    },
    {
      id: 10,
      question: "Ejercicio Práctico: ¿Qué imprime este código?\n\nfor i in range(3):\n    if i == 1:\n        continue\n    print(i)",
      options: [
        "0 1 2",
        "0 2",
        "1 2",
        "0 1"
      ],
      correctAnswer: 1,
      explanation: "continue omite el resto de la iteración actual, por lo que no imprime 1, solo 0 y 2."
    }
  ]
};
