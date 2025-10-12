# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
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

## 📂 Repositorio

🔗 [The Boys Frontend](#)  

---
## 🌲Ramificacion y Estrategia de Versionamiento de ramas
- Se realiza la respectiva ramificacion creando las ramas `develop` y `feature` para desarrollar las nuevas funcionalidades de la aplicacion. Para los commits manejamos el estandar `feat/modulo: Accion Realizada - Nombre Quien Lo Hizo` para que se entienda con claridad lo elaborado.
---
## 🎨 Mockups del proyecto

A continuación se presentan los mockups de las diferentes vistas del sistema.  

### 🧑‍🤝‍🧑 Vista de Usuarios  

🔗 https://www.figma.com/design/5FjLUpjz4JK90ODnYmOWz6/SIRHA?node-id=0-1&t=5uAXr3i0gTXRMYzx-1
 
![Mockup Vista de Usuarios](The-Boys-SIRHA/docs/mockups/vista_usuarios.png)

---

### 📋 Vista de Gestión  
![Mockup Vista de Gestión](The-Boys-SIRHA/docs/mockups/vista_gestion.png)


---

### ⚙️ Vista de Configuración  
![Mockup Vista de Configuración](The-Boys-SIRHA/docs/mockups/image.png)
---

### 📊 Vista de Reportes  
![Mockup Vista de Reportes](The-Boys-SIRHA/docs/mockups/vista_reportes.png)

---

## 🚀 Cómo ejecutar el proyecto

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tulio3101/TheBoys-FrontEnd.git
