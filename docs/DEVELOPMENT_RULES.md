# Reglas de Desarrollo - Burjassot Llars

## Idioma y Textos

### Español correcto
- **SIEMPRE** usar acentos y ñ en todos los textos en español
- Revisar gramática y ortografía antes de cada commit
- Ejemplos correctos:
  - ✅ Navegación, Dirección, Teléfono, Política, España
  - ❌ Navegacion, Direccion, Telefono, Politica, Espana

### Checklist antes de commit
- [ ] Todos los textos visibles tienen acentos correctos (á, é, í, ó, ú)
- [ ] Se usa ñ donde corresponde
- [ ] Gramática revisada
- [ ] Sin errores ortográficos

## Interactividad y Hover

### Regla de hover
- **SOLO** añadir efectos hover a elementos clickables (links, botones)
- Si un elemento NO es interactivo, NO debe tener hover
- Esto mejora la UX y no confunde al usuario

### Ejemplos
- **Cards no clickables**: usar `hoverable={false}` en el componente Card
- **Links dentro de cards**: estos SÍ deben tener hover ya que son clickables
- **Botones**: siempre deben tener feedback visual en hover

## Otras reglas
(se irán añadiendo según el proyecto avance)
