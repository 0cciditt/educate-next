# English Teaching Platform

_Started 2026-05-17 01:04 UTC_

---

## User

ok I want to create a system design for this website of an english teaching company, I want something professional but friendly and approachable, I want everything necessary for the development of the website (design) main background, colors accents fonts etc

## Assistant

_[tool: questions_v2]_

Before I build, a few quick questions so the system fits the brand — the logo gives me strong color cues (orange, navy, yellow, green, red, burgundy) and a bold geometric wordmark, but I want to make sure the rest matches your audience and the website's purpose.

## User

Questions answered:
- audience: Kids and parents
- tone_balance: Decide for me
- logo_color_role: Decide for me
- background_mood: 0
- type_personality: Modern geometric (matches the logo wordmark — clean & confident)
- shape_language: Soft & rounded — friendly counterbalance to the geometric logo
- imagery_style: Real candid photography of students/teachers
- deliverable_format: A multi-page brand book (cover, color, type, components, examples)
- components_needed: Buttons (primary/secondary/ghost), Form inputs, Cards (course cards, testimonial cards), Navigation header, Footer, Badges/tags, Hero section variants, Stats blocks
- variations: Yes — give me 2–3 distinct directions to choose from

## Assistant

_[tool: view_image]_

_[tool: update_todos]_

Plan locked in. I'll build a multi-page brand book (deck format so each spread reads as a polished page), with a "Three directions" page near the top showing distinct visual takes, then deepen one recommended direction across all the tokens & components.

Setting up:

_[tool: copy_files]_

_[tool: copy_starter_component]_

_[tool: write_file]_

I'll split the design system into a tokens/components stylesheet, then build the brand book HTML referencing it.

_[tool: write_file]_

Now the brand book. I'll write it as one cohesive file with each slide tightly designed.

_[tool: update_todos]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Done — **Educate Brand Book.html** is a 19-page system covering everything you'll need to start building:

- **Cover + North Star** (personality pillars, voice do/don't)
- **3 visual directions** (Confident Stack · Building Blocks ★recommended · Playful Palette)
- **Logo** (clear space, min sizes, variations, don'ts)
- **Color** (6 brand colors with deep + soft tints, 8 neutrals, 60/30/10 ratio, level coding, tinted sections)
- **Typography** (Archivo Black display + Nunito body, full scale + hierarchy in use)
- **Tokens** (spacing, radius, shadows, motion)
- **Iconography + imagery** (Lucide 2px stroke, photography rules)
- **Components**: buttons (5 variants × 6 states), form inputs, course/testimonial cards, full navigation + mega menu + mobile, footer, level chips + badges
- **Patterns**: 3 hero variants, stats blocks, full sample landing page tying it all together

Use ←/→ to navigate, or click the thumbnail rail. The whole system is driven by `system.css` so you can pull tokens straight into your dev codebase.

**Worth flagging:**
- Photos are placeholders — drop in real candid student/teacher shots when you have them.
- I picked **Direction B (Building Blocks)** as the foundation for the rest of the book. If you'd rather commit to Direction A (more professional) or C (more kid-forward), say the word and I'll re-thread the components.
- I added a 6th brand color role (burgundy = "advanced/C1–C2") — if you'd rather not give it semantic weight, easy to dial back.

## User

ok translate that to spanish and give me the way to download it is perfect. just change the footer arrangement since it is overlapping

## Assistant

_[tool: write_file]_

I'll translate everything to Spanish (using "tú" for the warm parent/kid tone), fix the footer overlap by replacing the top-right decoration with a clean colored ribbon along the bottom of the card, and bundle it all for download.

_[tool: done]_

_[tool: present_fs_item_for_download]_

Listo — **Educate Brand Book ES.html** está traducido al español (con "tú", tono cálido para padres y niños) y el footer ya no se traslapa: cambié la decoración de bloques por una cinta de colores de marca al pie del cuadro.

La descarga de arriba incluye todo el proyecto: ambas versiones (ES + EN), `system.css`, `deck-stage.js` y el logo en `brand/`.

## User

Export this design as an editable PPTX: Educate Brand Book ES.html

## User

ok now based on this design system create the proposed landing page for this (copy in spanish) here is the mission and vision of educate:Misión 
Formamos niños, jóvenes y adultos como líderes globales, desarrollando habilidades comunicativas en múltiples lenguas y competencias interculturales, mediante metodologías y tecnología educativa innovadora. Nos comprometemos con la calidad, el crecimiento continuo y la formación integral de nuestros estudiantes, generando un impacto positivo en la sociedad colombiana y contribuyendo a un mundo más conectado y sostenible.

Visión 
Para el año 2030, Educate Learning Center® será reconocido en el valle del cauca como un referente en educación multilingüe de alta calidad, consolidando una infraestructura moderna y ambientes de aprendizaje innovadores que integren modalidades flexibles (presenciales, virtuales e híbridas). Se destacará por formar estudiantes con liderazgo, competencias interculturales y pensamiento global, contribuyendo de manera sostenible al desarrollo social, educativo y cultural de la región.

## Assistant

_[tool: update_todos]_

_[tool: write_file]_

_[tool: update_todos]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Listo — **Educate Landing Page.html** está en línea, en español y construida 100% con el sistema de diseño (`system.css`).

**Secciones:**
1. **Nav sticky** con CTA naranja y subrayado activo
2. **Hero** — "Líderes globales empiezan aquí" + chips de niveles A1–C2 + sticker "Primera clase gratis"
3. **Tira multilingüe** — Inglés / Francés / Portugués (+ Mandarín y Alemán como "Próximamente")
4. **Stats** — 12 años, 3.2k estudiantes, 76% sube nivel/año, 98% aprueba Cambridge
5. **Programas** — Niños · Jóvenes · Adultos (codificados por nivel + color)
6. **Misión & Visión** — dos tarjetas grandes (naranja suave + azul marino) con tus textos íntegros
7. **Metodología** — 4 pilares: Hablar primero, Competencia intercultural, Progreso medible, Tecnología que sirve
8. **Modalidades** — Presencial · Virtual · Híbrida (las tres que mencionas en la visión)
9. **Testimonios** — 5 reseñas con familias de Cali, Yumbo y Palmira
10. **CTA + formulario** — agendar clase gratis con campos relevantes
11. **Footer** con cinta de marca al pie (la versión arreglada)

**Vale la pena revisar:**
- Las fotos son placeholders (envíame fotos reales del centro y las cambio).
- Precios y datos del NIT son ficticios — reemplázalos con los reales.
- La visión menciona "Valle del Cauca" → asumí sedes Cali / Yumbo / Palmira; cámbialo si las sedes son otras.

## User

it is just an english academy. I want something similar to this one https://learnenglish.edu.co/explore/

## Assistant

_[tool: copy_files]_

_[tool: web_fetch]_

_[tool: web_search]_

Pivoting the landing to a single-purpose English academy (in the spirit of learnenglish.edu.co) — adding a trust bar with certifications, a clearer English-only programs grid, a "¿Qué nos diferencia?" section, and sedes. Removing the multilingual strip.

_[tool: snip]_

_[tool: write_file]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Listo — landing reorientada solo a inglés, en el espíritu de learnenglish.edu.co:

**Cambios principales:**
- **Top bar** con sede, teléfono y WhatsApp (estilo "PBX: ...")
- **Hero** ahora dice "Aprende inglés que te lleva al mundo" + pill de "Inscripciones abiertas"
- **Trust bar** nueva con 4 respaldos: Marco Común Europeo, Cambridge Authorized, Profes certificados, 12 años en el Valle
- **Programas** rediseñados — 4 cursos por edad, todos en inglés, con módulos × 51h (al estilo de su programa "Explore 4 Learning")
  - Little Explorers (6–10)
  - Explore 4 Learning (10–13)
  - Confident Voices (jóvenes y adultos)
  - Global Leaders (Cambridge CAE/CPE/IELTS)
  - + botón al programa empresarial
- **Metodología** rebautizada como "Integral Learning · 100% conversacional"
- **¿Qué nos diferencia?** nueva sección con 6 razones (grupos pequeños, certificación oficial, garantía de nivel, etc.)
- **Sedes** nueva sección con 3 ubicaciones tipo Ciudad Jardín / Tequendama / Norte
- Formulario actualizado: selector de sede en vez de idioma
- Footer: "Academia de inglés" + lista de sedes

La versión anterior la guardé como `Educate Landing Page v1.html` por si quieres volver.

**Lo que vale la pena ajustar con datos reales:**
- Direcciones y teléfono de las sedes (usé las de referencia como placeholder)
- NIT y razón social
- Nombres de los cursos si tienen los suyos propios

## User

give me another variation. I want the hero section to be white (bg)

## Assistant

_[tool: copy_files]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Listo — **Educate Landing Page (Hero blanco).html** abierto en tu vista. La versión anterior con fondo crema sigue intacta en **Educate Landing Page.html**.

**Lo que cambió en el hero:**
- Fondo blanco con una sutil cuadrícula de puntos azul marino con desvanecido
- La foto ahora va enmarcada entre **dos bloques diagonales** (navy detrás-izquierda, naranja suave detrás-derecha) — el motivo de bloques del logo, en grande
- **Badge flotante** "4,9 ★ · 412 familias" en la esquina superior izquierda de la foto
- Mosaico **3×3 de cuadrados** de la paleta completa en la esquina inferior izquierda
- Cuadrado amarillo inclinado flotando en la esquina superior derecha
- Trust bar abajo cambió a fondo crema para separarse visualmente del hero blanco

El verificador está mirando el render — te aviso si encuentra algo.

## User

Verifier agent check completed

## Assistant

Verificado por el agente ✓ — los 5 elementos del hero renderizan correctamente. El cuadrado amarillo está en posición correcta pero queda fuera del viewport del screenshot porque la página está diseñada a 1440 px (en una pantalla real se ve). Sin errores en consola.

## User

those patterns of the hero section the ones at the bottom left, are overlapping with the 5 star rating. make it so it doesnt overlap. also which font/fonts are being used for this landing page?

## Assistant

_[tool: str_replace_edit]_

Sobre las fuentes — el landing usa **4 familias**, todas de Google Fonts:

| Uso | Fuente |
|---|---|
| Titulares grandes (display) | **Archivo Black** — 900 |
| H3, subtítulos, botones, etiquetas | **Archivo** — 500/600/700/800 |
| Cuerpo de texto, párrafos, UI | **Nunito** — 400/500/600/700/800 |
| Microcopia, códigos hex, eyebrows | **JetBrains Mono** — 400/500 |

Definidas como variables en `system.css`: `--font-display`, `--font-heading`, `--font-body`, `--font-mono`.

Ahora arreglo el overlap — los voy a reubicar lejos del texto:

_[tool: done]_

Listo — moví el mosaico de bloques a la **esquina superior derecha** del hero (lejos del texto y de las estrellas), los hice un poco más pequeños (28 px) y reduje la opacidad. Ya no se cruzan con nada del contenido.

## User

can you show me the new version again? I deleted the tab hahaha

## Assistant

_[tool: show_to_user]_

Ahí está de nuevo 😄

## User

show me the variation I told you to do earlier, the one with the white background on the hero section

## Assistant

_[tool: show_to_user]_

Ahí está la versión con hero blanco 👌

## User

make it so it is changing between white bg and the other background happens sequentially and 1/1. cause after the hero section I see 2 consecutive sections with the same background

## Assistant

_[tool: str_replace_edit]_

_[tool: done]_

Listo — ahora alternan estricto 1/1:

| # | Sección | Fondo |
|---|---|---|
| 1 | Hero | blanco |
| 2 | Trust bar | crema |
| 3 | Stats | blanco |
| 4 | Programas | crema |
| 5 | Misión + Visión | blanco |
| 6 | Metodología | crema |
| 7 | ¿Qué nos diferencia? | blanco |
| 8 | Modalidades | crema |
| 9 | Testimonios | blanco |
| 10 | Sedes | crema |
| 11 | CTA | naranja suave |
| 12 | Footer | azul marino |

También invertí los fondos de las tarjetas interiores (pilares, diferenciadores, sedes) para que contrasten contra el nuevo fondo de cada sección.

## User

ok in the section that says donde tu puedas, cuando tu puedas. the blue card that has a black color title to a white one

## Assistant

_[tool: str_replace_edit]_

Listo — el título "Presencial." ahora está en blanco sobre la tarjeta azul.

