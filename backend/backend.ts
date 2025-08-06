// backend/backend.ts
import { defineBackend, defineHosting } from '@aws-amplify/backend';

// Aquí podrías definir la autenticación, datos, etc. en el futuro.
// por ejemplo: const auth = defineAuth({...})

const backend = defineBackend({
  hosting: defineHosting({
    // Esta es la ruta a la carpeta de salida DESPUÉS de compilar tu frontend.
    // Es relativo a la raíz del proyecto.
    path: './frontend/dist',
  }),
  // auth, <--- descomentarías esto si añades autenticación
});