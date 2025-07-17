# 🐍 Learn Programming App

Una plataforma interactiva de aprendizaje de programación construida con **React** e **Ionic**, enfocada en Python con integración de IA.

## ✨ Características

### 🎯 **Entrenamiento Python**
- **14 lecciones estructuradas** en 3 niveles de dificultad
- **Ejercicios prácticos** con editor de código integrado
- **Sistema de progreso** con seguimiento visual
- **Niveles progresivos**: Principiante → Intermedio → Avanzado

### 🤖 **Chat con IA**
- **Asistente virtual** para resolver dudas de programación
- **Integración con OpenAI** para respuestas inteligentes
- **Interfaz conversacional** amigable

### 💻 **Playground de Código**
- **Editor de código** con resaltado de sintaxis
- **Ejecución simulada** de código
- **Múltiples lenguajes** soportados

### 📱 **Diseño Responsivo**
- **Interfaz moderna** con Ionic Components
- **Optimizado para móviles** y escritorio
- **Navegación intuitiva**

## 🚀 Instalación

### Prerrequisitos
- Node.js (v14 o superior)
- npm o yarn
- Git

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/TU_USUARIO/learn-programming-app.git
cd learn-programming-app
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
# Crear archivo .env en la raíz del proyecto
echo "VITE_OPENAI_API_KEY=tu_api_key_aquí" > .env
```

4. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

5. **Abrir en el navegador**
```
http://localhost:5173
```

## 🎓 Contenido del Curso Python

### 🟢 **Nivel Principiante** (6 lecciones)
1. **Introducción a Python** - Conceptos básicos y primer programa
2. **Variables y Tipos de Datos** - Números, strings, booleanos
3. **Operaciones y Expresiones** - Operadores matemáticos y de comparación
4. **Entrada de Datos y Input** - Función input() y conversión de tipos
5. **Condicionales (if, elif, else)** - Toma de decisiones en código
6. **Bucles (for y while)** - Repetición de código

### 🟡 **Nivel Intermedio** (4 lecciones)
7. **Listas y Métodos** - Manipulación de listas y list comprehensions
8. **Diccionarios y Conjuntos** - Estructuras de datos avanzadas
9. **Funciones y Parámetros** - Funciones reutilizables
10. **Manejo de Archivos** - Lectura y escritura de archivos

### 🔴 **Nivel Avanzado** (4 lecciones)
11. **Programación Orientada a Objetos** - Clases, herencia, polimorfismo
12. **Decoradores y Generadores** - Conceptos avanzados con yield
13. **Manejo de Excepciones** - Excepciones personalizadas
14. **Módulos y Paquetes** - Organización de código

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18 + TypeScript
- **UI Framework**: Ionic 7
- **Styling**: CSS3 + Ionic Components
- **Build Tool**: Vite
- **IA Integration**: OpenAI API
- **Icons**: Ionicons
- **Mobile**: Capacitor (para apps móviles)

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
├── pages/              # Páginas principales
│   ├── Home.tsx        # Página principal
│   ├── PythonLearning.tsx  # Sistema de entrenamiento Python
│   ├── AIChat.tsx      # Chat con IA
│   └── CodePlayground.tsx  # Editor de código
├── theme/              # Estilos y temas
└── App.tsx             # Componente principal
```

## 🎯 Funcionalidades Principales

### **Sistema de Entrenamiento Python**
- ✅ Lecciones interactivas con teoría y práctica
- ✅ Editor de código integrado
- ✅ Sistema de progreso visual
- ✅ Ejercicios prácticos
- ✅ Tres niveles de dificultad

### **Chat con IA**
- ✅ Asistente virtual para programación
- ✅ Respuestas contextuales
- ✅ Historial de conversaciones
- ✅ Interfaz conversacional

### **Playground de Código**
- ✅ Editor con resaltado de sintaxis
- ✅ Ejecución simulada
- ✅ Múltiples lenguajes
- ✅ Interfaz limpia y moderna

## 🚀 Despliegue

### **Desarrollo**
```bash
npm run dev
```

### **Producción**
```bash
npm run build
npm run preview
```

### **Aplicación móvil**
```bash
# iOS
npx cap add ios
npx cap open ios

# Android
npx cap add android
npx cap open android
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Tu Nombre** - [Tu GitHub](https://github.com/TU_USUARIO)

## 🙏 Agradecimientos

- [Ionic Framework](https://ionicframework.com/) por el excelente framework UI
- [OpenAI](https://openai.com/) por la integración de IA
- [React](https://reactjs.org/) por el framework frontend
- [Vite](https://vitejs.dev/) por la herramienta de build

---

⭐ **¡No olvides dar una estrella al proyecto si te gustó!** ⭐
