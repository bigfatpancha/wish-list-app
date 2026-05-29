# Lista de Regalos - Wish List App

Una aplicación web simple para gestionar una lista de regalos compartida, construida con React, TypeScript, Vite y Firebase.

## Características

- ✅ **Mobile First Design** - Optimizada para dispositivos móviles
- ✅ **Interfaz Intuitiva** - Fácil de usar para cualquier usuario
- ✅ **Estado en Tiempo Real** - Los cambios se sincronizan instantáneamente
- ✅ **Sin Autenticación** - No requiere login ni registro
- ✅ **Animaciones Suaves** - Transiciones fluidas y feedback inmediato
- ✅ **Loading States** - Skeleton loaders y manejo de errores
- ✅ **Responsive Design** - Funciona en cualquier dispositivo

## Stack Tecnológico

- **Frontend**: React 18 + TypeScript
- **Bundler**: Vite
- **Estilos**: Tailwind CSS
- **Backend**: Firebase Firestore
- **Deploy**: Vercel (recomendado)

## Requisitos

- Node.js 18+
- npm o yarn
- Cuenta de Firebase (gratuita)

## Instalación y Configuración

### 1. Clonar el proyecto

```bash
git clone <repository-url>
cd wish-list-app
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Crea un nuevo proyecto
3. Habilita Firestore Database
4. En modo de prueba, permite lectura y escritura
5. Copia tu configuración de Firebase

### 4. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
```

### 5. Actualizar configuración de Firebase

Edita el archivo `src/firebase/config.ts` con tus credenciales:

```typescript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
```

### 6. Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Personalizar Colores

Edita `tailwind.config.js` para modificar la paleta de colores:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
      }
    }
  },
}
```

### Comandos Útiles

```bash
# Limpiar cache
npm run build -- --force

# Verificar tipos
npm run lint

# Preview de producción
npm run preview
```
