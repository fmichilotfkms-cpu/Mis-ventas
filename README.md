# Mis Ventas

App para registrar las ventas del día y llevar un pequeño stock, desde el celular.

- Funciona **sin internet** una vez instalada.
- Los datos se guardan **solo en el celular** (no necesita cuentas ni pagos).
- Resumen del día y del mes, con total en soles y lo vendido por producto.
- Respaldo y restauración de datos en un archivo.

---

## 1. Subirla a GitHub (una sola vez)

1. Entra a [github.com](https://github.com) e inicia sesión.
2. Arriba a la derecha toca **+** → **New repository**.
3. Nombre: `mis-ventas`. Déjalo en **Public**. Toca **Create repository**.
4. En la página del repositorio vacío, toca el enlace **uploading an existing file**.
5. Arrastra **todos los archivos de esta carpeta** (incluido `.nojekyll`) y toca **Commit changes**.

## 2. Activar GitHub Pages

1. En el repositorio, entra a **Settings** → **Pages** (menú de la izquierda).
2. En **Source** elige **Deploy from a branch**.
3. En **Branch** elige `main` y carpeta `/ (root)`. Toca **Save**.
4. Espera 1–2 minutos. Arriba aparecerá la dirección de tu app, algo como:
   `https://TU-USUARIO.github.io/mis-ventas/`

## 3. Instalarla en el celular

**Android (Chrome)**
1. Abre la dirección de la app en Chrome.
2. Toca **Instalar** cuando aparezca el aviso, o el botón de descarga (arriba a la derecha de la app) → **Instalar Mis Ventas**. También sirve el menú ⋮ → **Instalar app**.

**iPhone (Safari)**
1. Abre la dirección en Safari.
2. Toca **Compartir** (cuadrado con flecha) → **Agregar a inicio**.

Listo: queda un ícono **Mis Ventas** en la pantalla de inicio y funciona sin internet.

## 4. Respaldos (¡importante!)

Como los datos viven solo en el celular, conviene guardar un respaldo **cada semana**:

1. En la app, toca el botón de descarga (arriba a la derecha).
2. Toca **Enviar respaldo** (para mandarlo por WhatsApp o correo) o **Descargar respaldo**.

Para recuperar los datos en otro celular: instala la app, toca el mismo botón → **Restaurar desde un respaldo** y elige el archivo `.json`.

La app avisa si pasan más de 7 días sin respaldo.

> No borres los datos del navegador ni desinstales la app sin tener un respaldo.

## 5. Actualizar la app

Si cambias algún archivo, súbelo de nuevo a GitHub y en `sw.js` cambia la primera línea
(`mis-ventas-v1` → `mis-ventas-v2`). El celular tomará la nueva versión al abrir la app una o dos veces.
Los datos de ventas no se pierden al actualizar.

---

Animaciones hechas con [Anime.js](https://animejs.com/) (licencia MIT, ver `anime-LICENSE.md`).
