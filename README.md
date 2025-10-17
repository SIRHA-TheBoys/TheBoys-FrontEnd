# 🌟 The Boys Frontend

Este proyecto corresponde al desarrollo de la interfaz gráfica del sistema **SIRHA**, donde se construye la experiencia de usuario enfocada en simplicidad, eficiencia y diseño moderno.

---

## 👥 Integrantes

- **Julian Camilo Lopez Barrero**
- **Tulio Riaño Sanchez**
- **Daniel Patiño Mejia**
- **Nestor David Lopez Castañeda**
- **Juan Sebastian Puentes Julio**

---

## 🌲Ramificacion y Estrategia de Versionamiento de ramas

- Para mantener un control claro del desarrollo, seguimos una estructura de ramas basada en Git Flow:

  - `main`: Contiene el código estable y listo para producción.
  - `develop`: Rama principal de desarrollo.
  - `feature/<funcionalidadRealizada>`: Se crea a partir de develop para implementar una nueva característica o mejora.

---

## 🎨 Mockups del proyecto

A continuación se presentan los mockups de las diferentes vistas del sistema.

### 🧑‍🤝‍🧑 Vista de Usuarios

🔗 https://www.figma.com/design/5FjLUpjz4JK90ODnYmOWz6/SIRHA?node-id=0-1&t=5uAXr3i0gTXRMYzx-1

![Mockup Vista de Usuarios](/docs/mockups/vista_usuarios.png)

---

### 📋 Vista de Gestión

![Mockup Vista de Gestión](/docs/mockups/vista_gestion.png)

---

### ⚙️ Vista de Configuración

## ![Mockup Vista de Configuración](/docs/mockups/image.png)

### 📊 Vista de Reportes

![Mockup Vista de Reportes](/docs/mockups/vista_reportes.png)

---
### Diagramas de flujo de pantallas
Para realizar diagramas de flujo optimos a pesar de que nuestras pantallas no sean tan diferentes se decidio dividirlo en dos.
La primera que va a remarcar el flujo de un administrador el cual es el que va a tener mas tareas.  En este diagrama lo que buscamos mostrar
es una muestra de como va a ser nuestro front y como van a interactuar las pantallas planeadas entre si.
![Diagrama de flujo admin/decano](/docs/diagramas/Diagramaciondepantallas.png)
Para el segundo de diagrama se considero uno mas simple, ya que el estudiante no va a tener un flujo tan extenso y su principal funcion es
consultar y crear solicitudes, a pesar de eso se tuvo en cuenta el flujo y las respectivas pantallas que va a usar el estudiante.
![Diagrama de flujo estudiante](/docs/diagramas/DiagramaFlujoDePantallasEstudiante.png)

## 🚀 Cómo ejecutar el proyecto

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/SIRHA-TheBoys/TheBoys-FrontEnd
   ```
2. Acceder al directorio del proyecto
   ```bash
   cd SIRHA-TheBoys/TheBoys-FrontEnd
   ```
3. Instalar todas las dependencias
   ```bash
   npm install
   ```
4. Iniciar el proyecto
   ```bash
   npm run dev
   ```
