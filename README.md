# 🏃🏻 Run Space

**Run Space** es una aplicación web moderna desarrollada con **React** que permite a corredores registrar, gestionar y visualizar sus carreras de forma estética y organizada. Más que un simple registro de tiempos y distancias, busca ser un espacio personal donde cada corredor pueda revivir y dar valor a sus experiencias deportivas.

---

## ✨ Motivación

El proyecto nació de mi propia experiencia como corredor. Después de cada competencia suelo escribir en un diario mis sensaciones, aprendizajes y emociones.

Esa práctica me ayudó a comprender que las carreras no se reducen a números: también son recuerdos, historias y logros personales.

**Run Space** busca trasladar esa costumbre al mundo digital, creando una herramienta práctica y visualmente atractiva para almacenar no solo resultados, sino también momentos significativos.

---

## ⚙️ Stack Tecnológico

### Frontend
- **[React 19.1.1](https://react.dev/)** – Librería principal con hooks modernos
- **[React Router 7.8.2](https://reactrouter.com/)** – Navegación SPA y manejo de rutas
- **[Vite 7.1.2](https://vitejs.dev/)** – Build tool y servidor de desarrollo

### UI/UX
- **[Radix UI](https://www.radix-ui.com/)** – Componentes accesibles para modales
- **[React Icons 5.5.0](https://react-icons.github.io/react-icons/)** – Iconografía consistente
- **CSS Variables** – Sistema de theming dinámico
- **Mobile-First Design** – Responsive en todos los dispositivos

### Persistencia
- **localStorage** – Almacenamiento local de datos del usuario
- **Context API** – Gestión de estado global para temas

---

## 🚀 Características Principales

### 🏃‍♂️ Gestión de Carreras
- ➕ **Agregar carreras** con detalles completos (título, distancia, tiempo, ritmo, posición, fecha, ubicación)
- ✏️ **Editar carreras** existentes con formulario pre-poblado
- 🖼️ **Soporte para imágenes** de cada carrera
- 🏅 **Marcado de récords personales (PR)** con indicador visual

### 🔍 Búsqueda y Filtrado
- 🔎 **Búsqueda en tiempo real** por nombre de carrera
- 🏷️ **Filtros por distancia** (5K, 10K, 21K, 42K, Ultra)
- 🎯 **Combinación de filtros** - búsqueda + distancia simultáneamente
- 📊 **Vista de récords** automática en sección dedicada

### 🎨 Experiencia de Usuario
- 🌙 **Modo oscuro/claro** con toggle y persistencia
- 📱 **Diseño responsive** optimizado para móvil, tablet y desktop
- ⚡ **Navegación fluida** entre secciones

---

## 📷 Vista previa

![Vista de Run Space](assets/screenshot.png)

---

## 🔧 Instalación y Configuración

### Prerrequisitos
- **Node.js** (versión 18 o superior)
- **npm** o **yarn**
- Navegador moderno con soporte para ES6+

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/juanbautistamalina/run-space
cd run-space

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev

# Abrir en el navegador
http://localhost:5173
```

### Scripts Disponibles
```bash
npm run dev      # Servidor de desarrollo con hot reload
npm run build    # Build de producción optimizado
npm run preview  # Preview del build de producción
npm run lint     # Análisis de código con ESLint
```

---

## 📁 Estructura del Proyecto

```
run-space/
├── public/
│   └── images/           # Imágenes de ejemplo
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── AddRaceModal.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── EditRaceModal.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   ├── NavBar.jsx
│   │   └── ThemeToggle.jsx
│   ├── contexts/         # Context providers
│   │   └── ThemeContext.jsx
│   ├── pages/           # Páginas principales
│   │   ├── home/
│   │   ├── records/
│   │   └── carrerasFuturas/
│   ├── App.jsx          # Componente raíz
│   ├── App.css          # Estilos globales y variables CSS
│   └── main.jsx         # Punto de entrada
├── assets/              # Assets estáticos
├── package.json         # Dependencias y scripts
└── vite.config.js       # Configuración de Vite
```

---

## 🎯 Flujo de Datos

### Estado Global
- **Race Data**: Gestión CRUD de carreras con persistencia en localStorage
- **Theme State**: Modo claro/oscuro con Context API
- **Search & Filters**: Estado local en componentes específicos

### Persistencia
- **localStorage**: Almacena automáticamente todas las carreras del usuario
- **Theme Preferences**: Guarda la preferencia de tema seleccionada
- **Error Handling**: Fallback a datos por defecto si localStorage falla

---

## 🔄 Ciclo de Vida de una Carrera

1. **Creación**: Usuario completa formulario en AddRaceModal
2. **Validación**: Campos requeridos y tipos de datos
3. **Almacenamiento**: Se agrega al estado y localStorage automáticamente
4. **Visualización**: Aparece como Card en la vista principal
5. **Filtrado**: Se puede buscar y filtrar por distancia
6. **Edición**: EditRaceModal pre-poblado con datos existentes
7. **Eliminación**: Confirmación y limpieza del estado/localStorage

---

## 🤝 Contribución

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guías de Contribución
- Seguir las convenciones de código existentes
- Agregar tests para nuevas funcionalidades
- Actualizar documentación cuando sea necesario
- Usar commits descriptivos y claros

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 👤 Autor

Desarrollado con ❤️ por **Juan Bautista Malina**

- 🌐 [Portfolio](https://juanbautistamalina.github.io/portfolio/)  
- 💻 [GitHub](https://github.com/juanbautistamalina)  
- 💼 [LinkedIn](https://www.linkedin.com/in/juan-bautista-malina)
