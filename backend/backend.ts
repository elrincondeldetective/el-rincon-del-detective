// /webapps/erd-ecosystem/apps/el-rincon-del-detective/backend/backend.ts
import { defineBackend, defineHosting } from "@aws-amplify/backend";

// Aquí podrías definir la autenticación, datos, etc. en el futuro.
// por ejemplo: const auth = defineAuth({...})

const backend = defineBackend({
  hosting: defineHosting({
    // CAMBIO FASE 4.1: Alineado con Next.js 'output: export'
    // Next.js genera la carpeta 'out', no 'dist' (que es de Vite).
    path: "./frontend/out",
  }),
  // auth, <--- descomentarías esto si añades autenticación.......
});