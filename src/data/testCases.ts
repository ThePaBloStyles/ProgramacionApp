// Casos de prueba para las lecciones de Python y Java

export interface TestCase {
  input: string;
  expectedOutput: string;
  description: string;
}

// Casos de prueba para Python
export const pythonTestCases: { [key: number]: TestCase[] } = {
  1: [
    {
      input: '',
      expectedOutput: '¡Hola, Python!\nMi nombre es [Tu nombre]',
      description: 'Debe imprimir saludo y tu nombre'
    },
    {
      input: '',
      expectedOutput: '¡Hola, Python!',
      description: 'Debe contener el saludo básico'
    }
  ],
  2: [
    {
      input: '',
      expectedOutput: '<class \'str\'>\n<class \'int\'>\n<class \'float\'>\n<class \'bool\'>',
      description: 'Debe mostrar los tipos de datos correctos'
    }
  ],
  3: [
    {
      input: '',
      expectedOutput: '13\n1000\n3\n1',
      description: 'Operaciones: suma, potencia, división entera, módulo'
    }
  ],
  4: [
    {
      input: 'Juan\n25',
      expectedOutput: 'Hola Juan, tienes 25 años',
      description: 'Debe formatear correctamente la entrada del usuario'
    }
  ],
  5: [
    {
      input: '',
      expectedOutput: 'HOLA MUNDO PYTHON\nhola mundo python\nHola-Mundo-Python',
      description: 'Debe manipular cadenas correctamente'
    }
  ],
  6: [
    {
      input: '85',
      expectedOutput: 'Excelente',
      description: 'Calificación mayor a 80'
    },
    {
      input: '75',
      expectedOutput: 'Bueno',
      description: 'Calificación entre 70-80'
    },
    {
      input: '65',
      expectedOutput: 'Regular',
      description: 'Calificación entre 60-70'
    },
    {
      input: '45',
      expectedOutput: 'Reprobado',
      description: 'Calificación menor a 60'
    }
  ],
  7: [
    {
      input: '',
      expectedOutput: '1\n2\n3\n4\n5',
      description: 'Bucle for del 1 al 5'
    }
  ],
  8: [
    {
      input: '',
      expectedOutput: '[1, 4, 9, 16, 25]',
      description: 'Lista de cuadrados usando list comprehension'
    }
  ],
  9: [
    {
      input: '',
      expectedOutput: 'Juan: 25',
      description: 'Debe mostrar información del diccionario'
    }
  ],
  10: [
    {
      input: 'Ana',
      expectedOutput: 'Hola, Ana!',
      description: 'Función que saluda'
    }
  ]
};

// Casos de prueba para Java
export const javaTestCases: { [key: number]: TestCase[] } = {
  1: [
    {
      input: '',
      expectedOutput: '¡Hola, Java!\nMi nombre es [Tu nombre]',
      description: 'Debe imprimir saludo y tu nombre'
    },
    {
      input: '',
      expectedOutput: '¡Hola, Java!',
      description: 'Debe contener el saludo básico'
    }
  ],
  2: [
    {
      input: '',
      expectedOutput: 'Nombre: Juan\nEdad: 25\nAltura: 1.75',
      description: 'Debe mostrar las variables correctamente'
    }
  ],
  3: [
    {
      input: '',
      expectedOutput: 'Suma: 13\nPotencia: 1000\nDivisión: 3\nMódulo: 1',
      description: 'Operaciones matemáticas básicas'
    }
  ],
  4: [
    {
      input: 'Juan\n25',
      expectedOutput: 'Hola Juan, tienes 25 años',
      description: 'Debe formatear correctamente la entrada del usuario'
    }
  ],
  5: [
    {
      input: '',
      expectedOutput: 'HOLA MUNDO JAVA\nhola mundo java\nHola-Mundo-Java',
      description: 'Debe manipular cadenas correctamente'
    }
  ],
  6: [
    {
      input: '85',
      expectedOutput: 'Excelente',
      description: 'Calificación mayor a 80'
    },
    {
      input: '75',
      expectedOutput: 'Bueno',
      description: 'Calificación entre 70-80'
    },
    {
      input: '65',
      expectedOutput: 'Regular',
      description: 'Calificación entre 60-70'
    },
    {
      input: '45',
      expectedOutput: 'Reprobado',
      description: 'Calificación menor a 60'
    }
  ],
  7: [
    {
      input: '',
      expectedOutput: '1\n2\n3\n4\n5',
      description: 'Bucle for del 1 al 5'
    }
  ],
  8: [
    {
      input: '',
      expectedOutput: '[10, 20, 30, 40, 50]',
      description: 'Array con valores inicializados'
    }
  ],
  9: [
    {
      input: '',
      expectedOutput: 'Resultado: 15',
      description: 'Método que suma dos números'
    }
  ],
  10: [
    {
      input: '',
      expectedOutput: 'Estudiante: Ana, Edad: 20',
      description: 'Clase con constructor y métodos'
    }
  ]
};

// Función para obtener casos de prueba por lección
export const getTestCasesForLesson = (language: 'python' | 'java', lessonId: number): TestCase[] => {
  const testCases = language === 'python' ? pythonTestCases : javaTestCases;
  return testCases[lessonId] || [
    {
      input: '',
      expectedOutput: 'Salida esperada',
      description: 'Completa el ejercicio correctamente'
    }
  ];
};
