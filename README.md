# 🎁 Lista de Regalos - Wish List App

Una aplicación web simple para gestionar una lista de regalos compartida, construida con React, TypeScript, Vite y Firebase.

## 🚀 Características

- ✅ **Mobile First Design** - Optimizada para dispositivos móviles
- ✅ **Interfaz Intuitiva** - Fácil de usar para cualquier usuario
- ✅ **Estado en Tiempo Real** - Los cambios se sincronizan instantáneamente
- ✅ **Sin Autenticación** - No requiere login ni registro
- ✅ **Animaciones Suaves** - Transiciones fluidas y feedback inmediato
- ✅ **Loading States** - Skeleton loaders y manejo de errores
- ✅ **Responsive Design** - Funciona en cualquier dispositivo

## 🛠 Stack Tecnológico

- **Frontend**: React 18 + TypeScript
- **Bundler**: Vite
- **Estilos**: Tailwind CSS
- **Backend**: Firebase Firestore
- **Deploy**: Vercel (recomendado)

## 📋 Requisitos

- Node.js 18+
- npm o yarn
- Cuenta de Firebase (gratuita)

## 🚀 Instalación y Configuración

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
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
```

### 6. Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 🎯 Uso de la Aplicación

1. **Ver Regalos Disponibles**: Los regalos no seleccionados aparecen en verde
2. **Seleccionar un Regalo**: Haz clic en "Lo compro" para marcarlo como seleccionado
3. **Liberar un Regalo**: Si te arrepientes, haz clic en "Liberar" para desmarcarlo
4. **Ver Estadísticas**: El panel superior muestra cuántos regalos están disponibles y seleccionados

## 📱 Estructura de Componentes

```
src/
├── components/
│   ├── WishItem.tsx       # Componente individual de regalo
│   ├── WishList.tsx       # Lista principal de regalos
│   └── SkeletonLoader.tsx # Loading skeleton
├── services/
│   └── wishService.ts     # Servicio de Firebase
├── firebase/
│   └── config.ts          # Configuración de Firebase
├── types/
│   └── index.ts           # Tipos TypeScript
└── App.tsx                # Componente principal
```

## 🚀 Deploy en Vercel

### Método 1: GitHub Integration (Recomendado)

1. Sube tu código a GitHub
2. Ve a [Vercel](https://vercel.com/)
3. Importa tu repositorio de GitHub
4. Configura las variables de entorno en Vercel
5. Deploy automático

### Método 2: CLI de Vercel

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login en Vercel
vercel login

# Deploy
vercel --prod
```

### Variables de Entorno en Vercel

Configura estas variables en el dashboard de Vercel:

```
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
```

## 🔧 Configuración de Firestore

Para producción, configura las reglas de Firestore en Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /wishList/{documentId} {
      allow read, write: if true;
    }
  }
}
```

## 🎨 Personalización

### Cambiar la Lista de Regalos

Edita el archivo `src/services/wishService.ts`:

```typescript
const DEFAULT_ITEMS: Omit<WishItem, 'selected'>[] = [
  { id: 1, name: "Tu Regalo 1", image: "URL_IMAGEN" },
  { id: 2, name: "Tu Regalo 2", image: "URL_IMAGEN" },
  // Agrega más regalos...
];
```

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

## 🐛 Troubleshooting

### Problemas Comunes

1. **Error de Firebase**: Verifica que las credenciales sean correctas
2. **Error de CORS**: Habilita CORS en Firebase Console
3. **Build fallido**: Verifica las variables de entorno en producción

### Comandos Útiles

```bash
# Limpiar cache
npm run build -- --force

# Verificar tipos
npm run lint

# Preview de producción
npm run preview
```

## 📄 Licencia

MIT License - Siéntete libre de usar este proyecto para tus necesidades.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una feature branch
3. Commit tus cambios
4. Push a la branch
5. Abre un Pull Request

---

**¡Disfruta de tu aplicación de lista de regalos! 🎉**
