# 📱 Cómo Ejecutar la Aplicación de Programación

## 🚀 Instrucciones de Ejecución

### 1. Abrir Terminal/PowerShell
- Abre **PowerShell** o **Terminal** en tu computadora
- Puedes usar `Win + R` → escribir `powershell` → Enter

### 2. Navegar al Directorio del Proyecto
```powershell
cd "d:\experimentos\Nueva carpeta (3)\ProgramacionApp"
```

### 3. Ejecutar la Aplicación
```powershell
npm run dev
```

### 4. Abrir en el Navegador
- Una vez que veas el mensaje de éxito, abre tu navegador
- Ve a: **http://localhost:5174/** (o el puerto que se muestre)

---

## 🛠️ Comandos Útiles

### Ejecutar la aplicación:
```powershell
npm run dev
```

### Construir para producción:
```powershell
npm run build
```

### Ejecutar tests:
```powershell
npm run test.unit
```

### Ejecutar linter:
```powershell
npm run lint
```

---

## 🔧 Solución de Problemas

### Si el puerto 5174 está ocupado:
- La aplicación automáticamente encontrará otro puerto disponible
- Revisa la terminal para ver qué puerto está usando

### Si hay errores de dependencias:
```powershell
npm install
```

### Si la aplicación no carga:
1. Verifica que estés en el directorio correcto
2. Asegúrate de que `package.json` existe en la carpeta
3. Revisa que `node_modules` esté presente

---

## 📁 Estructura del Proyecto

```
ProgramacionApp/
├── src/
│   ├── pages/
│   │   ├── Home.tsx              # Página principal
│   │   ├── PythonLearning.tsx    # Lecciones de Python
│   │   ├── JavaLearning.tsx      # Lecciones de Java
│   │   └── LessonDetail.tsx      # Página de lección individual
│   ├── App.tsx                   # Componente principal
│   └── main.tsx                  # Punto de entrada
├── package.json                  # Configuración y dependencias
└── vite.config.ts               # Configuración de Vite
```

---

## 🌟 Funcionalidades Principales

### ✅ Página Principal
- Selección de lenguajes (Python/Java)
- Navegación limpia y sencilla

### ✅ Páginas de Lecciones
- Progreso en bloques blancos
- Filtros por dificultad
- Lista de lecciones organizadas

### ✅ Lecciones Individuales
- Teoría explicada
- Ejemplos de código
- Ejercicios interactivos
- Botones para ejecutar y completar

---

## 🔄 Para Actualizar GitHub

Si haces cambios y quieres subirlos:
```powershell
git add .
git commit -m "Descripción de los cambios"
git push origin main
```

---

## 📞 Notas Importantes

- **Puerto por defecto**: http://localhost:5174/
- **Framework**: React + Ionic + Vite
- **Lenguaje**: TypeScript
- **Estilos**: CSS personalizado con bloques blancos

¡Disfruta programando! 🎉
