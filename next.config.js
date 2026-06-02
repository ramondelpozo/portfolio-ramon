/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Opciones de configuración */
  devIndicators: {
    appIsrStatus: false, // Oculta el indicador de estado dinámico/estático
    buildActivity: false, // Oculta la burbuja cuando está compilando
  },
};

module.exports = nextConfig;
