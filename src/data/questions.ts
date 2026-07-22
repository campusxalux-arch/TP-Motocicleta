/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0-indexed (0=A, 1=B, 2=C, 3=D)
  category: "Mecánica" | "Situaciones de conducción" | "Infraestructura" | "Normativa vial";
}

export const QUESTION_BANK: Question[] = [
  {
    "id": 1,
    "question": "¿Cuál es la proporción adecuada para el uso del freno delantero y trasero en condiciones de asfalto seco?",
    "options": [
      "50% delantero y 50% trasero",
      "70% delantero y 30% trasero",
      "30% delantero y 70% trasero",
      "100% delantero únicamente"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 2,
    "question": "¿Qué función cumple la holgura o juego libre en la manigueta del embrague (guaya)?",
    "options": [
      "Evitar que las direccionales de la moto fallen",
      "Garantizar que el embrague acople completamente y no se patine",
      "Reducir la vibración del manubrio a altas velocidades",
      "Aumentar automáticamente la velocidad máxima del motor"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 3,
    "question": "¿Con qué frecuencia se debe verificar la presión de aire de las llantas?",
    "options": [
      "Cada 6 meses",
      "Al menos una vez a la semana o antes de un viaje largo",
      "Únicamente cuando la llanta se observe visiblemente desinflada",
      "Solo durante la Revisión Técnico-Mecánica anual"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 4,
    "question": "Si el pedal de freno trasero se siente \"esponjoso\" en un sistema hidráulico, ¿cuál es la causa más probable?",
    "options": [
      "La cadena de transmisión está demasiado tensa",
      "Aire atrapado en el circuito del líquido de frenos",
      "Exceso de aceite en el cárter del motor",
      "El filtro de aire está sucio o tapado"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 5,
    "question": "¿Qué mide el indicador de viscosidad SAE en el aceite de motor (ej. 10W-40)?",
    "options": [
      "El nivel de octanaje que requiere la gasolina",
      "La resistencia del fluido a fluir a distintas temperaturas",
      "La cantidad exacta de kilómetros que dura el aceite",
      "El porcentaje de aditivos detergentes presentes"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 6,
    "question": "¿Qué componente del kit de arrastre se desgasta con mayor rapidez si no se lubrica periódicamente?",
    "options": [
      "El tambor de freno",
      "El disco de embrague",
      "La cadena de transmisión",
      "El eje de levas"
    ],
    "correctAnswer": 2,
    "category": "Mecánica"
  },
  {
    "id": 7,
    "question": "¿Qué indica el código DOT grabado en el costado de una llanta de motocicleta?",
    "options": [
      "La fecha de fabricación (semana y año) y homologación",
      "La presión máxima de aire en libras por pulgada cuadrada (PSI)",
      "El tipo de aceite recomendado para el motor",
      "El peso total del chasis de la motocicleta"
    ],
    "correctAnswer": 0,
    "category": "Mecánica"
  },
  {
    "id": 8,
    "question": "¿Cuál es la función principal del filtro de aceite?",
    "options": [
      "Enfriar la gasolina antes de entrar al carburador o inyector",
      "Retener impurezas y partículas metálicas en circulación",
      "Regular la presión de las llantas traseras",
      "Reducir el ruido del tubo de escape"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 9,
    "question": "¿Qué síntoma indica que la batería de la motocicleta está perdiendo su capacidad de carga?",
    "options": [
      "El motor se apaga repentinamente en quinta marcha",
      "La luz principal baja de intensidad al tocar el pito/bocina en ralentí",
      "El pedal de freno se endurece excesivamente",
      "El humo del escape sale de color azul continuo"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 10,
    "question": "¿Cuál es el riesgo de conducir con la cadena de transmisión demasiado tensionada?",
    "options": [
      "Pérdida total de líquido de frenos",
      "Desgaste prematuro de los rodamientos del eje de salida y rotura de cadena",
      "Aumento desmedido de la presión de las llantas",
      "Fallo en el sistema de luces direccionales"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 11,
    "question": "¿Qué tipo de líquido se debe utilizar para reponer el nivel en el depósito de freno hidráulico?",
    "options": [
      "Aceite de motor 20W-50",
      "Agua destilada con refrigerante",
      "Líquido de frenos de la especificación recomendada (DOT 3, DOT 4, etc.)",
      "Valvolina de caja de cambios"
    ],
    "correctAnswer": 2,
    "category": "Mecánica"
  },
  {
    "id": 12,
    "question": "¿Qué significa la sigla ABS en el sistema de frenos de una motocicleta?",
    "options": [
      "Sistema de Aceleración Bajos Sensores",
      "Sistema de Antibloqueo de Ruedas (Anti-lock Braking System)",
      "Control Automático de Brillo en Salpicadero",
      "Ajuste Base de Suspensión Trasera"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 13,
    "question": "¿Qué ocurre si se llena el motor con más aceite del nivel máximo permitido en la varilla/visor?",
    "options": [
      "El motor genera el doble de potencia",
      "Se pueden dañar retenes/sellos por sobrepresión y generar fugas",
      "La motocicleta consume un 50% menos de combustible",
      "Las pastillas de freno se desgastan más rápido"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 14,
    "question": "¿Qué elemento de la motocicleta transmite la fuerza desde la caja de cambios hasta la rueda trasera?",
    "options": [
      "El carburador",
      "El kit de arrastre (o cardán/correa)",
      "El alternador",
      "La horquilla telescópica"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 15,
    "question": "¿Qué comprobación debe hacerse en los amortiguadores delanteros (barras)?",
    "options": [
      "Verificar que no presenten fugas de aceite por los retenedores",
      "Pintarlos cada tres meses para evitar oxidación",
      "Cambiarles el resorte cada 1.000 kilómetros",
      "Llenarlos de aire a 50 PSI semanalmente"
    ],
    "correctAnswer": 0,
    "category": "Mecánica"
  },
  {
    "id": 16,
    "question": "¿Cuál es la profundidad mínima del grabado (labrado) legal en las llantas de una moto en Colombia?",
    "options": [
      "0.5 mm",
      "1.0 mm",
      "3.0 mm",
      "5.0 mm"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 17,
    "question": "Si el motor de la moto no enciende y no da marcha al presionar el botón de encendido, ¿qué se debe revisar primero?",
    "options": [
      "La presión de la llanta delantera",
      "El interruptor de corte de corriente (run) y el estado de la batería",
      "El nivel de líquido de refrigerante",
      "El desgaste de la banda de freno trasera"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 18,
    "question": "¿Qué función cumple la bujía en un motor de gasolina de cuatro tiempos?",
    "options": [
      "Regular la mezcla de aire y combustible",
      "Generar la chispa para inflamar la mezcla de aire y combustible",
      "Inyectar la gasolina dentro del cilindro",
      "Medir la temperatura del aceite de motor"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 19,
    "question": "¿Cada cuánto tiempo se sugiere limpiar y lubricar la cadena de la motocicleta en uso urbano regular?",
    "options": [
      "Cada 500 a 1.000 km (o tras lavar la moto / andar bajo lluvia)",
      "Una vez al año durante el mantenimiento general",
      "Únicamente cuando empiece a generar ruidos metálicos fuertes",
      "Cada 10.000 km sin excepción"
    ],
    "correctAnswer": 0,
    "category": "Mecánica"
  },
  {
    "id": 20,
    "question": "¿Qué provoca un filtro de aire sucio o saturado en el motor?",
    "options": [
      "Aumento significativo del consumo de combustible y pérdida de potencia",
      "Bloqueo instantáneo del freno delantero",
      "Incremento indeseado de la tensión de la cadena",
      "Falla en las luces direccionales traseras"
    ],
    "correctAnswer": 0,
    "category": "Mecánica"
  },
  {
    "id": 21,
    "question": "¿Qué es el \"efecto fading\" o fatiga en los frenos?",
    "options": [
      "La pérdida de eficacia del frenado por sobrecalentamiento del sistema",
      "La aceleración involuntaria del motor en bajadas",
      "El estiramiento repentino de la guaya del acelerador",
      "La deformación del rin tras impactar un bache"
    ],
    "correctAnswer": 0,
    "category": "Mecánica"
  },
  {
    "id": 22,
    "question": "En una motocicleta con embrague manual, ¿qué sucede si la guaya no tiene holgura y queda muy tensionada?",
    "options": [
      "El motor se apaga cada vez que se pone primera marcha",
      "Los discos de embrague pueden quedar rozando y patinar permanentemente",
      "El freno trasero se activa de manera automática",
      "La batería se descarga por cortocircuito"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 23,
    "question": "¿Qué tipo de mantenimiento requiere una batería libre de mantenimiento?",
    "options": [
      "Agregar agua de grifo semanalmente",
      "Mantener los bornes limpios y apretados, y verificar el voltaje",
      "Cambiar el ácido interno cada 3.000 km",
      "Llenarla de aceite multiusos cada mes"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 24,
    "question": "¿Qué componente amortigua los impactos e irregularidades del terreno en la rueda trasera?",
    "options": [
      "El monoshock o los amortiguadores traseros",
      "El disco de freno",
      "El catalizador de escape",
      "La maza del embrague"
    ],
    "correctAnswer": 0,
    "category": "Mecánica"
  },
  {
    "id": 25,
    "question": "¿Cuál es la función del kit de cunas de dirección en el chasis de la motocicleta?",
    "options": [
      "Ajustar la presión de aire de las llantas",
      "Permitir un giro suave y preciso del manubrio sin juego excesivo",
      "Conectar el cable del velocímetro a la rueda trasera",
      "Filtrar las impurezas de la gasolina"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 26,
    "question": "¿Qué síntoma indica que las pastillas de freno están demasiado desgastadas?",
    "options": [
      "Un chirrido metálico al frenar y disminución del nivel de líquido de frenos",
      "Humo blanco por el tubo de escape al acelerar",
      "Dureza excesiva al accionar el pedal de cambios",
      "Pérdida de intensidad en el faro delantero"
    ],
    "correctAnswer": 0,
    "category": "Mecánica"
  },
  {
    "id": 27,
    "question": "¿Qué función cumple el termostato en una motocicleta refrigerada por líquido?",
    "options": [
      "Medir la presión de las llantas durante la marcha",
      "Regular el paso de líquido refrigerante para mantener la temperatura ideal del motor",
      "Encender las luces de parqueo cuando la moto se detiene",
      "Controlar el volumen de sonido del pito"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 28,
    "question": "¿Qué significa que una llanta sea \"Tubeless\"?",
    "options": [
      "Que es exclusiva para terrenos de barro y destapado",
      "Que no requiere neumático (cámara de aire) interno",
      "Que no se puede reparar bajo ninguna circunstancia",
      "Que está hecha exclusivamente de caucho reciclado"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 29,
    "question": "¿Qué consecuencia trae conducir con la suspensión delantera demasiado blanda o vencida?",
    "options": [
      "Mayor estabilidad en curvas a alta velocidad",
      "Hundimiento excesivo al frenar (frenado inestable) y pérdida de adherencia",
      "Reducción en el consumo de aceite de motor",
      "Mayor duración de la cadena de transmisión"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 30,
    "question": "¿Qué se debe verificar en el visor transparente del depósito de líquido de frenos?",
    "options": [
      "El color de la pintura del manubrio",
      "Que el nivel de líquido esté entre las marcas de mínimo y máximo",
      "La presencia de sedimentos de gasolina",
      "El kilometraje acumulado de la motocicleta"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 31,
    "question": "¿Qué es el octanaje en la gasolina empleada para motocicletas?",
    "options": [
      "El peso por litro del combustible",
      "La capacidad detonante y resistencia a la autoexplosión (detonación prematura)",
      "La cantidad de alcohol carburante mezclado con el agua",
      "La temperatura exacta a la que se congela el combustible"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 32,
    "question": "¿Qué causa común hace que la motocicleta tire o se desvíe hacia un lado al soltar levemente el manubrio?",
    "options": [
      "Desalineación de las ruedas, chasís doblado o presión desigual en las llantas",
      "Filtro de combustible parcialmente obstruido",
      "Nivel bajo de aceite en la caja de cambios",
      "Guaya del acelerador demasiado desajustada"
    ],
    "correctAnswer": 0,
    "category": "Mecánica"
  },
  {
    "id": 33,
    "question": "¿Qué componente convierte la energía mecánica del motor en energía eléctrica para cargar la batería?",
    "options": [
      "El estator / alternador",
      "El carburador",
      "El cilindro maestro de freno",
      "La bujía de encendido"
    ],
    "correctAnswer": 0,
    "category": "Mecánica"
  },
  {
    "id": 34,
    "question": "¿Qué se debe hacer si las llantas presentan desgaste irregular o en forma de \"escalón\"?",
    "options": [
      "Aumentar el doble de la presión de aire recomendada",
      "Revisar la presión de aire habitual, suspensión y alineación del rin",
      "Aplicar grasa sobre la banda de rodamiento",
      "Intercambiar la llanta delantera por la trasera inmediatamente"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 35,
    "question": "¿Cuál es el papel del fusible principal en el sistema eléctrico de la motocicleta?",
    "options": [
      "Regular la velocidad del motor en descensos",
      "Proteger el circuito eléctrico cortando el paso de corriente ante una sobrecarga",
      "Mantener encendido el testigo del neutral",
      "Incrementar el voltaje que llega a la bujía"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 36,
    "question": "¿Por qué es inadecuado usar agua de grifo en el sistema de refrigeración líquida del motor?",
    "options": [
      "Porque oxida los conductos internos y hierve a menor temperatura que el refrigerante",
      "Porque desgasta los discos de embrague inmediatamente",
      "Porque apaga el sistema eléctrico de las direccionales",
      "Porque aumenta el peso de la motocicleta de forma drástica"
    ],
    "correctAnswer": 0,
    "category": "Mecánica"
  },
  {
    "id": 37,
    "question": "¿Qué función cumple el catalizador en el sistema de escape de una moto moderna?",
    "options": [
      "Aumentar la potencia del motor a altas revoluciones",
      "Reducir las emisiones de gases contaminantes mediante reacciones químicas",
      "Filtrar el aceite que ingresa al motor",
      "Silenciar el sonido sin importar la velocidad"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 38,
    "question": "¿Qué verifica la prueba de holgura de válvulas durante el mantenimiento del motor?",
    "options": [
      "Que las llantas tengan el agarre suficiente",
      "La separación correcta entre los balancines y las válvulas para un correcto sellado",
      "El ajuste de las bandas del freno trasero",
      "La alineación de la luz del faro principal"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 39,
    "question": "¿Qué indica la presencia de humo negro saliendo por el escape de una motocicleta a gasolina?",
    "options": [
      "Entrada de líquido refrigerante a la cámara de combustión",
      "Mezcla rica (exceso de combustible o falta de aire)",
      "Desgaste severo en los anillos del pistón",
      "Aceite quemándose en el cilindro"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 40,
    "question": "¿Cuál es la función del kit de arrastre en una moto manual?",
    "options": [
      "Detener la marcha mediante fricción",
      "Transmitir la potencia del motor a la rueda trasera",
      "Regular la entrada de aire al carburador",
      "Estabilizar las barras de suspensión delantera"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 41,
    "question": "¿Qué se debe inspeccionar en los radios de una rueda tipo radiada?",
    "options": [
      "Que no estén flojos, rotos o con tensión desuniforme",
      "Que estén cubiertos de aceite mineral denso",
      "Que giren de manera independiente a la manzana",
      "Que sean de diferente grosor en el lado izquierdo y derecho"
    ],
    "correctAnswer": 0,
    "category": "Mecánica"
  },
  {
    "id": 42,
    "question": "¿Qué ocurre si se usa un aceite de motor para autos en una motocicleta con embrague sumergido en aceite (húmedo)?",
    "options": [
      "El motor gana más caballos de fuerza",
      "Los discos de embrague se pueden patinar debido a los modificadores de fricción",
      "La batería se descarga rápidamente",
      "El freno delantero pierde presión hidráulica"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 43,
    "question": "¿Cuál es la función del regulador/rectificador en la motocicleta?",
    "options": [
      "Cambiar las marchas de manera automática",
      "Convertir la corriente alterna en continua y regular el voltaje hacia la batería",
      "Limpiar los gases que emite el exosto",
      "Medir el nivel de combustible restante en el tanque"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 44,
    "question": "¿Qué provoca la desalineación de la Rueda Trasera tras tensionar la cadena?",
    "options": [
      "Desgaste irregular de llantas y rodamientos, y comportamiento inestable en curva",
      "Pérdida instantánea del refrigerante",
      "Que las luces direccionales parpadeen más rápido",
      "Un aumento involuntario del nivel de aceite del motor"
    ],
    "correctAnswer": 0,
    "category": "Mecánica"
  },
  {
    "id": 45,
    "question": "¿Para qué sirve el testigo de presión de aceite (rojo) en el tablero de instrumentos?",
    "options": [
      "Avisar que se debe cambiar la llanta trasera",
      "Advertir sobre la falta de presión en el sistema de lubricación del motor",
      "Indicar que el nivel de gasolina llegó a la reserva",
      "Confirmar que el freno ABS está desactivado"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 46,
    "question": "¿Qué tipo de desgaste se genera en una llanta inflada por encima de la presión recomendada?",
    "options": [
      "Desgaste excesivo únicamente en los bordes laterales",
      "Desgaste prematuro en el centro de la banda de rodamiento",
      "Desgaste exclusivo en el rin metálico",
      "No sufre ningún tipo de desgaste"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 47,
    "question": "¿Qué función cumplen los orings o retenedores de goma en las cadenas de transmisión modernas?",
    "options": [
      "Evitar que la cadena toque la rueda trasera",
      "Retener la lubricación interna entre los pasadores y bujes de la cadena",
      "Generar resistencia para reducir la velocidad",
      "Conectar la cadena con la batería para evitar estática"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 48,
    "question": "¿Qué componente del carburador se encarga de regular el paso de combustible en marcha mínima (ralentí)?",
    "options": [
      "El surtidor/chicler de alta",
      "El chicler/surtidor de baja (o piloto)",
      "El flotador de la llanta",
      "La guaya del freno delantero"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 49,
    "question": "¿Qué síntoma se presenta cuando la suspensión trasera tiene el rebote desajustado o muy blando?",
    "options": [
      "La motocicleta oscila o \"bambolea\" de forma insegura al pasar por baches o curvas",
      "El acelerador se traba en posición de máxima velocidad",
      "El motor consume más líquido refrigerante",
      "Las luces de freno permanecen encendidas permanentemente"
    ],
    "correctAnswer": 0,
    "category": "Mecánica"
  },
  {
    "id": 50,
    "question": "¿Cuál es la función del interruptor del soporte lateral (pata de cabra/gato lateral) en las motos modernas?",
    "options": [
      "Bloquear la dirección automáticamente",
      "Impedir que el motor arranque o avance si la pata está desplegada y con marcha engranada",
      "Desinflar la llanta trasera para evitar robos",
      "Enfriar el motor mientras la moto está parqueada"
    ],
    "correctAnswer": 1,
    "category": "Mecánica"
  },
  {
    "id": 51,
    "question": "Ante una frenada de emergencia sobre pavimento seco, ¿cuál es la técnica correcta?",
    "options": [
      "Accionar únicamente el freno trasero a fondo hasta bloquear la rueda",
      "Aplicar ambos frenos progresivamente y con firmeza, dosificando más el delantero sin bloquear",
      "Presionar el embrague y no tocar ninguno de los dos frenos",
      "Frenar únicamente con el freno delantero soltando el manubrio"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 52,
    "question": "¿Qué se debe hacer si la motocicleta empieza a experimentar un bamboleo violento del manubrio (tank slapper)?",
    "options": [
      "Frenar en seco con el freno delantero inmediatamente",
      "Mantener la calma, sujetar el manubrio con firmeza sin rigidez extrema y reducir suavemente el acelerador",
      "Pararse sobre los posapiés y acelerar a fondo",
      "Saltar de la motocicleta de inmediato"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 53,
    "question": "¿Cómo influye llevar un pasajero (pato/parrillero) en la distancia de frenado de la motocicleta?",
    "options": [
      "La distancia de frenado se reduce a la mitad",
      "La distancia de frenado aumenta debido al mayor peso e inercia",
      "La distancia de frenado permanece exactamente igual",
      "No afecta la distancia, pero anula el freno delantero"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 54,
    "question": "¿Cuál es la conducta recomendada al conducir con lluvia o sobre asfalto mojado?",
    "options": [
      "Conducir a la misma velocidad que en seco para no perder tiempo",
      "Reducir la velocidad, aumentar la distancia de seguimiento y evitar inclinaciones abruptas",
      "Transitar pegado al centro de la vía donde hay acumulaciones de aceite",
      "Desinflar totalmente ambas llantas para tener mayor superficie de contacto"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 55,
    "question": "¿Qué es el fenómeno del \"aquaplaning\" o hidroplaneo?",
    "options": [
      "El recalentamiento del motor por cruzar un charco profundo",
      "La pérdida de contacto de la llanta con el asfalto debido a una capa de agua interpuesta",
      "El frenado automático de la rueda trasera al entrar al agua",
      "El deslizamiento voluntario de la motocicleta en curvas mojadas"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 56,
    "question": "Al tomar una curva, ¿en qué momento se debe realizar la mayor parte de la reducción de velocidad?",
    "options": [
      "Justo en el punto medio (ápice) de la curva",
      "Antes de ingresar a la curva, en línea recta",
      "Al momento de salir de la curva acelerando",
      "No se debe frenar ni reducir velocidad en ningún momento"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 57,
    "question": "¿Qué es el \"punto ciego\" o ángulo muerto respecto a otros vehículos en la vía?",
    "options": [
      "La zona alrededor del vehículo que no se puede visibilizar mediante los espejos retrovisores",
      "La luz alta del vehículo que viene en sentido contrario de noche",
      "La zona oscura dentro de un túnel sin iluminación",
      "La franja peatonal señalizada en una intersección"
    ],
    "correctAnswer": 0,
    "category": "Situaciones de conducción"
  },
  {
    "id": 58,
    "question": "¿Qué técnica ayuda a inclinar la motocicleta con mayor agilidad en curvas a velocidades superiores a 30 km/h?",
    "options": [
      "El contravolante (empujar suavemente el manubrio del lado hacia donde se quiere girar)",
      "Halación de la guaya del embrague",
      "Tirar del freno de mano",
      "Bloquear la rueda trasera con el pedal de freno"
    ],
    "correctAnswer": 0,
    "category": "Situaciones de conducción"
  },
  {
    "id": 59,
    "question": "¿Cuál es la distancia de seguimiento prudente (en tiempo) con respecto al vehículo que antecede en condiciones normales?",
    "options": [
      "0.5 segundos",
      "Mínimo 3 segundos",
      "10 segundos",
      "30 segundos"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 60,
    "question": "¿Por qué es peligroso transitar sobre las líneas blancas o amarillas pintadas en el asfalto cuando está lloviendo?",
    "options": [
      "Porque se pueden manchar las llantas de pintura",
      "Porque la pintura vial reduce drásticamente la adherencia y se vuelve extremadamente resbaladiza",
      "Porque la ley prohíbe pisar las líneas en todo momento",
      "Porque activa los sensores de velocidad de la vía"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 61,
    "question": "Al conducir de noche en carretera, ¿qué acción se debe tomar ante el encandilamiento de un vehículo en sentido contrario?",
    "options": [
      "Mirar fijamente las luces del otro vehículo para medir la distancia",
      "Dirigir la mirada hacia la línea de demarcación derecha de la vía y reducir la velocidad",
      "Encender las luces altas y acelerar para pasarlo rápido",
      "Cerrar los ojos intermitentemente por varios segundos"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 62,
    "question": "¿Cómo se debe cruzar un riel de tren o una junta de dilatación metálica en un puente cuando se va en moto?",
    "options": [
      "De forma paralela al riel o junta",
      "Lo más perpendicular (cercano a 90 grados) posible y con la moto erguida",
      "Acelerando a fondo e inclinando la moto",
      "Frenando únicamente con el freno delantero sobre la superficie metálica"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 63,
    "question": "¿Qué postura debe adoptar el pasajero o acompañante en una curva?",
    "options": [
      "Inclinar su cuerpo en sentido contrario a la curva para compensar",
      "Acompañar suavemente el movimiento del conductor sin hacer movimientos bruscos",
      "Levantarse de los posapiés y sujetar los hombros del conductor fuertemente",
      "Sacar la pierna hacia el lado interior de la curva"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 64,
    "question": "¿Cuál es la causa principal de derrape de la rueda trasera al reducir marchas (bajar cambios) abruptamente?",
    "options": [
      "El bloqueo por el freno de motor en exceso (golpe de gas no realizado o falta de embrague antirrebote)",
      "El aumento súbito de la presión de aire en la rueda",
      "La desconexión del faro delantero",
      "La falla del sistema de dirección"
    ],
    "correctAnswer": 0,
    "category": "Situaciones de conducción"
  },
  {
    "id": 65,
    "question": "Si se revienta la llanta trasera mientras se conduce a velocidad media, ¿cuál es la reacción adecuada?",
    "options": [
      "Aplicar el freno delantero a fondo inmediatamente",
      "Sujetar con firmeza el manubrio, no frenar bruscamente y dejar que la moto pierda velocidad progresivamente",
      "Acelerar para intentar mantener el equilibrio",
      "Inclinarse fuertemente hacia un costado"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 66,
    "question": "¿Por qué se debe evitar transitar por el centro del carril detrás de otros vehículos, especialmente en semáforos o trancones?",
    "options": [
      "Porque el centro del carril suele acumular residuos de aceite y grasa de los carros",
      "Porque está prohibido por el código de tránsito",
      "Porque en esa zona las llantas se desgastan más rápido",
      "Porque la moto pierde potencia en el centro del carril"
    ],
    "correctAnswer": 0,
    "category": "Situaciones de conducción"
  },
  {
    "id": 67,
    "question": "¿Qué es la \"frenada combinada\" o CBS en motocicletas?",
    "options": [
      "Un sistema que distribuye parte de la fuerza de frenado a ambas ruedas al accionar una sola palanca/pedal",
      "Un dispositivo que acelera la moto mientras se frena",
      "Una maniobra donde se usan las manos y los pies para tocar el suelo",
      "El uso alternado de luces y pito para detenerse"
    ],
    "correctAnswer": 0,
    "category": "Situaciones de conducción"
  },
  {
    "id": 68,
    "question": "¿Cuál es el principal peligro de conducir paralelo a un camión o tractomula de gran tamaño?",
    "options": [
      "Que el camión consuma el aire que respira el motociclista",
      "Los grandes puntos ciegos del conductor del camión y las turbulencias de aire",
      "Que la moto acelere automáticamente por succión",
      "El ruido que genera el motor diésel"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 69,
    "question": "¿Cómo se debe actuar ante la presencia de gravilla o arena suelta en una curva?",
    "options": [
      "Inclinar más la motocicleta y acelerar",
      "Mantener la moto lo más erguida posible, evitar frenazos bruscos y trazar con suavidad",
      "Frenar con el freno delantero al máximo en medio de la gravilla",
      "Apagar el motor de inmediato"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 70,
    "question": "¿Qué se debe hacer antes de realizar un cambio de carril o un giro?",
    "options": [
      "Mirar por los espejos, verificar el punto ciego girando levemente la cabeza y colocar la direccional",
      "Acelerar a fondo y tocar el pito sin poner direccionales",
      "Colocar la luz alta únicamente",
      "Sacar el pie izquierdo para avisar a los demás vehículos"
    ],
    "correctAnswer": 0,
    "category": "Situaciones de conducción"
  },
  {
    "id": 71,
    "question": "¿Cuál es la manera correcta de subir un resalto o \"resalto parabólico\" en motocicleta?",
    "options": [
      "Acelerando fuertemente justo encima del resalto",
      "Reduciendo la velocidad antes del resalto, pasar con la moto recta y acelerar suavemente al salir",
      "Frenando a fondo con la rueda delantera mientras se pasa el resalto",
      "Cruzando el resalto totalmente inclinado de lado a lado"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 72,
    "question": "¿Qué efecto tiene el peso excesivo del equipaje colocado en la parte trasera (parrilla muy cargada) de la moto?",
    "options": [
      "Aliviana la dirección, disminuye el agarre de la rueda delantera y altera la estabilidad",
      "Aumenta la potencia del motor a la mitad",
      "Mejora la efectividad del freno delantero",
      "Permite alcanzar mayor velocidad en curvas"
    ],
    "correctAnswer": 0,
    "category": "Situaciones de conducción"
  },
  {
    "id": 73,
    "question": "En un descenso prolongado por montaña, ¿qué técnica evita el sobrecalentamiento de los frenos?",
    "options": [
      "Apagar el motor para bajar en neutro",
      "Usar el freno de motor (engranar marchas bajas) en combinación con frenadas cortas y dosificadas",
      "Dejar presionado el freno trasero durante todo el descenso sin soltarlo",
      "Bajar a máxima velocidad para que el aire enfríe los discos"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 74,
    "question": "¿Qué posición deben tener los pies del conductor sobre los posapiés mientras transita?",
    "options": [
      "Con los talones colgados apuntando hacia el suelo",
      "Apoyados sobre la parte media/metatarso del pie, paralelos a la moto y listos para accionar mandos",
      "Con las puntas abiertas hacia afuera rozando el asfalto",
      "Apoyados en los defensas del motor"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 75,
    "question": "¿Qué debe hacer un motociclista al aproximarse a una intersección con semáforo en verde?",
    "options": [
      "Acelerar al máximo para pasar antes de que cambie",
      "Mantener la precaución, reducir ligeramente y estar atento a peatones o vehículos que crucen en rojo",
      "Cerrar los ojos y continuar al mismo ritmo",
      "Tocar el pito de forma continua sin mirar a los lados"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 76,
    "question": "¿Qué riesgo genera la conducción con cansancio o fatiga acumulada?",
    "options": [
      "Disminución significativa en los tiempos de reacción y pérdida de concentración",
      "Incremento del rendimiento del motor",
      "Bloqueo de las luces de la motocicleta",
      "Reducción automática de la distancia de frenado"
    ],
    "correctAnswer": 0,
    "category": "Situaciones de conducción"
  },
  {
    "id": 77,
    "question": "¿Por qué es riesgoso conducir pegado a la parte trasera de un vehículo grande que no permite ver adelante?",
    "options": [
      "Porque el vehículo delantero le resta gasolina a la moto",
      "Porque se pierde visibilidad sobre baches, obstáculos u otros vehículos detenidos",
      "Porque la motocicleta se recalienta instantáneamente",
      "Porque el viento rasga la chaqueta del motociclista"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 78,
    "question": "¿Cuál es la forma correcta de reaccionar si la motocicleta empieza a deslizar (derrapar) de la rueda trasera sobre barro?",
    "options": [
      "Clavar el freno delantero a fondo",
      "Mantener la calma, no frenar bruscamente, corregir suavemente con el manubrio y controlar el acelerador",
      "Saltarse de la motocicleta hacia atrás",
      "Girar el manubrio en sentido totalmente contrario y acelerar al máximo"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 79,
    "question": "¿Qué maniobra es altamente peligrosa al adelantar a otro vehículo?",
    "options": [
      "Adelantar por el carril izquierdo habiendo colocado la direccional",
      "Adelantar por la derecha o en curvas de visibilidad ciega",
      "Verificar los espejos antes de salir del carril",
      "Mantener la distancia de seguridad lateral"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 80,
    "question": "¿Cómo afecta el viento lateral fuerte la conducción en carretera?",
    "options": [
      "Puede desplazar la motocicleta lateralmente fuera de su trayectoria",
      "Aumenta la capacidad de frenado del freno delantero",
      "Limpia el filtro de aire automáticamente",
      "No produce ningún efecto en las motocicletas"
    ],
    "correctAnswer": 0,
    "category": "Situaciones de conducción"
  },
  {
    "id": 81,
    "question": "¿Qué se recomienda al conducir con niebla densa?",
    "options": [
      "Encender la luz alta para encandilar la niebla",
      "Usar luz baja (y exploradoras si tiene), reducir la velocidad y guiarse por la señalización horizontal",
      "Aumentar la velocidad para salir rápido de la zona de niebla",
      "Conducir por el berma a alta velocidad con las luces apagadas"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 82,
    "question": "¿Cuál es el peligro de llevar la manigueta del freno delantero continuamente presionada \"por prevención\"?",
    "options": [
      "Encender las luces de parqueo",
      "Sobrecalentar el líquido de frenos, cristalizar pastillas y desgastar prematuramente el sistema",
      "Gastar la batería por completo en 5 minutos",
      "Desalinear la rueda delantera"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 83,
    "question": "Al entrar a una rotonda (glorieta), ¿quién tiene la prelación de paso según las normas de conducción general?",
    "options": [
      "El vehículo que va a ingresar a la glorieta",
      "El vehículo que ya se encuentra circulando dentro de la glorieta",
      "El vehículo de mayor tamaño sin importar dónde esté",
      "La motocicleta que avance a mayor velocidad"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 84,
    "question": "¿Qué técnica es recomendada para realizar un giro cerrado a baja velocidad (ej. maniobras en parqueaderos)?",
    "options": [
      "Inclinar el cuerpo hacia afuera de la curva (contrapesado) manteniendo el motor con suave tracción",
      "Poner el pie en el freno delantero a fondo",
      "Apagar el motor y empujar la moto con los pies acelerando",
      "Bloquear completamente la dirección hacia un lado a alta velocidad"
    ],
    "correctAnswer": 0,
    "category": "Situaciones de conducción"
  },
  {
    "id": 85,
    "question": "¿Qué beneficio ofrece el uso de indumentaria con protecciones homologadas (chaqueta, guantes, rodilleras)?",
    "options": [
      "Evita que la motocicleta consuma demasiado aceite",
      "Absorbe la energía del impacto y reduce la severidad de las abrasiones en caso de caída",
      "Exime al motociclista de presentar la Revisión Técnico-Mecánica",
      "Permite conducir a mayor velocidad de la permitida por la ley"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 86,
    "question": "¿Cuál es la forma adecuada de detener la motocicleta en una pendiente ascendente (subida)?",
    "options": [
      "Sostener la moto con el freno trasero (o pedal) mientras se equilibra con el pie izquierdo en el suelo",
      "Soltar todos los frenos y acelerar a fondo sin meter cambio",
      "Apoyar ambos pies en el aire y soltar la manigueta de embrague",
      "Cruzar la moto transversalmente bloqueando todo el carril"
    ],
    "correctAnswer": 0,
    "category": "Situaciones de conducción"
  },
  {
    "id": 87,
    "question": "¿Por qué es importante mirar hacia \"donde se quiere ir\" (fijación de la mirada) al conducir una moto?",
    "options": [
      "Porque el cuerpo y la motocicleta tienden a dirigirse de forma natural hacia donde se enfoca la visión",
      "Porque así se evita que los retrovisores se desajusten",
      "Porque es un requisito legal del Código de Tránsito",
      "Para evitar mirar el velocímetro en todo momento"
    ],
    "correctAnswer": 0,
    "category": "Situaciones de conducción"
  },
  {
    "id": 88,
    "question": "¿Qué se debe hacer si se encuentra con una mancha de aceite en la vía y no la puede esquivar?",
    "options": [
      "Inclinar la moto y frenar duro con el delantero",
      "Mantener la moto completamente recta, no frenar ni acelerar bruscamente y pasar con el vuelo",
      "Acelerar a fondo para pasarla más rápido",
      "Meter primera marcha de golpe para bloquear la rueda"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 89,
    "question": "¿Cuál es el principal riesgo de conducir con un casco que no corresponde a la talla correcta (muy grande)?",
    "options": [
      "Que se ensucie más rápido por dentro",
      "Que se salga o rote en caso de un impacto, dejando la cabeza desprotegida",
      "Que reduzca la velocidad de la motocicleta",
      "Que la visera se raye por el viento"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 90,
    "question": "¿Qué se debe hacer al transitar cerca de ciclistas en la vía?",
    "options": [
      "Pasarle lo más cerca posible para no invadir el otro carril",
      "Dejar una distancia lateral mínima de seguridad de 1.5 metros al adelantarlo",
      "Tocar la bocina/pito de forma estridente a centímetros del ciclista",
      "Obligar al ciclista a salirse de la vía"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 91,
    "question": "¿Qué consecuencia tiene frenar bruscamente con el freno delantero mientras la moto está inclinada en una curva?",
    "options": [
      "La moto tiende a levantarse bruscamente o la rueda delantera pierde adherencia y se produce una caída",
      "La moto frena en la mitad de distancia que en recta",
      "La suspensión trasera se bloquea sin peligro",
      "El motor se apaga y se encienden las luces de emergencia"
    ],
    "correctAnswer": 0,
    "category": "Situaciones de conducción"
  },
  {
    "id": 92,
    "question": "¿Qué significa conducir a la defensiva en motocicleta?",
    "options": [
      "Agredir verbalmente a los conductores que cometen errores",
      "Anticipar los posibles errores de los demás usuarios de la vía y reaccionar con tiempo de margen",
      "Transitar siempre con la luz alta encendida y pito constante",
      "Manejar únicamente por vías secundarias o destapadas"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 93,
    "question": "¿Cuál es la causa habitual de pérdida de control en zonas de obras en la vía?",
    "options": [
      "La acumulación de barro, gravilla, placas metálicas o arena en la calzada",
      "El exceso de señales informativas",
      "El aumento repentino del octanaje en la gasolina",
      "La baja temperatura de los amortiguadores"
    ],
    "correctAnswer": 0,
    "category": "Situaciones de conducción"
  },
  {
    "id": 94,
    "question": "¿Por qué no se debe transportar niños menores de cierta edad (según normativa nacional) en la moto?",
    "options": [
      "Porque no alcanzan con solidez los posapiés y carecen de la madurez física/fuerza para sostenerse",
      "Porque ensucian el tanque de combustible",
      "Porque aumentan el consumo de aceite",
      "Porque el casco protector no les queda bien estéticamente"
    ],
    "correctAnswer": 0,
    "category": "Situaciones de conducción"
  },
  {
    "id": 95,
    "question": "¿Qué acción es recomendable si debe conducir bajo una tormenta eléctrica intensa?",
    "options": [
      "Buscar un refugio seguro (estación de servicio, edificación) y detenerse alejado de árboles o estructuras metálicas",
      "Conducir a máxima velocidad para llegar rápido a casa",
      "Refugiarse inmediatamente debajo de un árbol alto en la carretera",
      "Quitarse el casco para ver mejor el camino"
    ],
    "correctAnswer": 0,
    "category": "Situaciones de conducción"
  },
  {
    "id": 96,
    "question": "¿Cómo influye el consumo de alcohol en la conducción de motocicletas, incluso en pequeñas cantidades?",
    "options": [
      "Aumenta los reflejos y mejora la visión nocturna",
      "Afecta el equilibrio, reduce la coordinación, altera el juicio del riesgo y ralentiza los reflejos",
      "Permite tomar curvas con mayor grado de inclinación de forma segura",
      "No produce ningún efecto si se toma café caliente antes de manejar"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 97,
    "question": "¿Cuál es la forma correcta de usar el freno de motor?",
    "options": [
      "Apagar el suiche de encendido mientras rueda",
      "Reducir de marchas progresivamente soltando el embrague para que la compresión del motor retenga la moto",
      "Poner la palanca en neutro y presionar el pedal del freno",
      "Desconectar la cadena de transmisión"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 98,
    "question": "¿Qué se debe verificar en los espejos retrovisores antes de iniciar la marcha?",
    "options": [
      "Que reflejen claramente el horizonte y los carriles adyacentes sin mostrar excesivamente los hombros del piloto",
      "Que apunten directamente hacia el suelo para ver las llantas",
      "Que estén enfocados hacia el cielo para ver las señales aéreas",
      "Que reflejen el rostro del conductor para verificar el casco"
    ],
    "correctAnswer": 0,
    "category": "Situaciones de conducción"
  },
  {
    "id": 99,
    "question": "¿Qué maniobra debe evitarse totalmente al transitar entre líneas de vehículos detenidos o en movimiento?",
    "options": [
      "Adelantar a alta velocidad en el mismo carril cuando los carros están circulando velozmente",
      "Mantener la luz baja encendida",
      "Estar atento a las puertas que puedan abrirse de los vehículos",
      "Usar los espejos antes de incorporarse"
    ],
    "correctAnswer": 0,
    "category": "Situaciones de conducción"
  },
  {
    "id": 100,
    "question": "¿Cuál es la conducta adecuada al notar que una ambulancia se aproxima con sirenas y luces encendidas?",
    "options": [
      "Competir con la ambulancia para abrirle paso",
      "Ceder el paso de inmediato orillándose a la derecha de forma segura y detenerse si es necesario",
      "Detenerse bruscamente en la mitad del carril sin avisar",
      "Acelerar para pegarse detrás de la ambulancia y avanzar rápido"
    ],
    "correctAnswer": 1,
    "category": "Situaciones de conducción"
  },
  {
    "id": 101,
    "question": "¿Qué indica una línea continua doble de color amarillo en el centro de una calzada?",
    "options": [
      "Que es un carril exclusivo para motocicletas",
      "Prohibición absoluta de adelantamiento en ambos sentidos de circulación",
      "Permitido adelantar solo si no vienen vehículos de frente",
      "Zona de estacionamiento permitido para todo tipo de vehículos"
    ],
    "correctAnswer": 1,
    "category": "Infraestructura"
  },
  {
    "id": 102,
    "question": "¿Qué función cumple la marca vial conocida como \"Resalto de Demarcación\" o estriado horizontal en el asfalto?",
    "options": [
      "Alertar al conductor por medio de vibración y sonido que debe reducir la velocidad por un peligro próximo",
      "Funcionar como carril preferencial de motocicletas",
      "Indicar el lugar exacto donde se puede parqueo nocturno",
      "Servir como punto de giro a la izquierda sin direccional"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 103,
    "question": "¿Qué diferencia a una autovía/autopista de una vía urbana convencional según la infraestructura?",
    "options": [
      "Que en la autopista no hay peatones ni cruces a nivel y tiene accesos controlados",
      "Que en la autopista los semáforos están instalados cada 100 metros",
      "Que en la autopista está permitido transitar en contravía",
      "Que las autopistas no tienen líneas horizontales demarcadas"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 104,
    "question": "¿De qué color son las señales de tránsito de carácter Reglamentario según el Código de Tránsito en Colombia?",
    "options": [
      "Fondo azul con símbolos blancos",
      "Fondo amarillo con bordes negros",
      "Fondo blanco, borde rojo y símbolos/letras en negro",
      "Fondo verde con letras amarillas"
    ],
    "correctAnswer": 2,
    "category": "Infraestructura"
  },
  {
    "id": 105,
    "question": "¿Qué representa una señal vertical de forma octogonal con fondo rojo y texto blanco?",
    "options": [
      "Ceda el paso",
      "Pare / Detención obligatoria",
      "Dirección obligatoria",
      "Peligro zona escolar"
    ],
    "correctAnswer": 1,
    "category": "Infraestructura"
  },
  {
    "id": 106,
    "question": "¿Para qué sirven las señales preventivas (generalmente amarillas con forma de rombo)?",
    "options": [
      "Para notificar prohibiciones y sanciones legales",
      "Para advertir al usuario sobre la existencia de un peligro o condición especial en la vía",
      "Para indicar direcciones y distancias hacia municipios",
      "Para informar sobre precios de peajes y gasolineras"
    ],
    "correctAnswer": 1,
    "category": "Infraestructura"
  },
  {
    "id": 107,
    "question": "¿Qué es una \"berma\" en una vía o carretera nacional?",
    "options": [
      "El carril destinado exclusivamente para adelantar por la derecha",
      "La faja lateral contigua a la calzada destinada a la detención de vehículos en emergencia y tránsito supletorio",
      "La zona verde central que divide dos autopistas",
      "La marca pintada sobre el asfalto para peatones"
    ],
    "correctAnswer": 1,
    "category": "Infraestructura"
  },
  {
    "id": 108,
    "question": "¿Qué indica la señalización horizontal de líneas discontinuas (punteadas) de color blanco?",
    "options": [
      "Separación de carriles en el mismo sentido de circulación, permitiendo el cambio de carril con precaución",
      "Prohibición total de cambiar de carril",
      "Separación de sentidos opuestos con prohibición de adelantar",
      "Zona de cruce peatonal exclusivo"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 109,
    "question": "¿Qué es un \"carril preferencial\" o \"solo bus\"?",
    "options": [
      "Un carril de la calzada destinado para el uso prioritario o exclusivo del transporte público",
      "Una pista para carreras de motocicletas dentro de la ciudad",
      "Una zona de parqueo gratis de 24 horas",
      "El carril izquierdo en autopistas nacionales"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 110,
    "question": "¿Qué representa la señal informativa con fondo azul y la letra \"P\" en blanco?",
    "options": [
      "Prohibido parquear",
      "Zona autorizada de Estacionamiento / Parqueadero",
      "Puente peatonal a 100 metros",
      "Peaje próximo"
    ],
    "correctAnswer": 1,
    "category": "Infraestructura"
  },
  {
    "id": 111,
    "question": "¿Qué es una \"ciclorruta\" o \"ciclovía permanente\"?",
    "options": [
      "La berma utilizada por las motocicletas en hora pico",
      "La infraestructura vial destinada de manera exclusiva para la circulación de bicicletas",
      "El carril central de una autopista rápida",
      "Una zona peatonal donde se permite el parqueo de motos"
    ],
    "correctAnswer": 1,
    "category": "Infraestructura"
  },
  {
    "id": 112,
    "question": "¿Qué función cumple el separador central (físico o verde) en una avenida de doble calzada?",
    "options": [
      "Dividir físicamente los flujos vehiculares de sentidos opuestos para evitar colisiones frontales",
      "Funcionar como carril de adelantamiento en emergencias",
      "Servir de parqueadero para motocicletas",
      "Acumular agua de lluvia para el riego de la ciudad"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 113,
    "question": "¿Qué indica una señal vertical con fondo verde y texto blanco en las carreteras nacionales?",
    "options": [
      "Prohibición de velocidad máxima",
      "Información de localización, destinos, rutas y distancias",
      "Advertencia de curvas peligrosas",
      "Presencia de retenes policiales"
    ],
    "correctAnswer": 1,
    "category": "Infraestructura"
  },
  {
    "id": 114,
    "question": "¿Qué es la \"zona de cebra\" o paso peatonal delimitado por franjas blancas en la calzada?",
    "options": [
      "El lugar donde las motos deben esperar el cambio de semáforo sobre las líneas",
      "La franja de la calzada destinada al cruce seguro de peatones donde estos tienen prelación",
      "La zona permitida para adelantar a otros vehículos en intersecciones",
      "Un espacio exclusivo para el cargue de mercancías"
    ],
    "correctAnswer": 1,
    "category": "Infraestructura"
  },
  {
    "id": 115,
    "question": "¿Qué indica la señal preventiva que muestra el dibujo de una curva pronunciada en forma de flecha?",
    "options": [
      "La proximidad de un peligro por alineación horizontal (curva) en la vía",
      "La obligación de girar a la derecha inmediatamente",
      "El fin de la carretera pavimentada",
      "La entrada a un túnel de un solo carril"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 116,
    "question": "¿Qué es un \"Paso a Nivel\"?",
    "options": [
      "Un cruce a la misma altura entre una vía vehicular y una vía férrea (tren/metro)",
      "Un puente elevado para peatones",
      "Una rotonda de más de tres carriles",
      "Un carril exclusivo para vehículos eléctricos"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 117,
    "question": "¿Qué función tienen los \"ojos de buey\" o tachas reflectivas amarillas/rojas en el asfalto?",
    "options": [
      "Reemplazar los semáforos en las noches",
      "Delimitar la vía y mejorar la visibilidad nocturna o con lluvia mediante el reflejo de las luces",
      "Pinchar las llantas de los vehículos que van a exceso de velocidad",
      "Medir la temperatura de las llantas de las motos"
    ],
    "correctAnswer": 1,
    "category": "Infraestructura"
  },
  {
    "id": 118,
    "question": "¿Qué significa la marca vial triangular pintada en el suelo en la entrada de una glorieta o vía principal?",
    "options": [
      "Símbolo de \"Ceda el Paso\"",
      "Símbolo de \"Pare\" absoluto",
      "Carril exclusivo para motocicletas",
      "Velocidad máxima de 100 km/h"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 119,
    "question": "¿Qué indica la señal vertical informativa que contiene el símbolo de un surtidor de gasolina?",
    "options": [
      "Prohibido transportar combustibles",
      "Proximidad de una estación de servicio / gasolinera",
      "Zona de talleres mecánicos exclusivamente",
      "Venta de repuestos para motocicletas"
    ],
    "correctAnswer": 1,
    "category": "Infraestructura"
  },
  {
    "id": 120,
    "question": "¿Qué se entiende por \"Calzada\"?",
    "options": [
      "La parte de la vía destinada a la circulación de los vehículos (compuesta por uno o varios carriles)",
      "El espacio pavimentado exclusivo para el uso de peatones",
      "La cerca o muro que protege la vía",
      "El canal de desagüe lateral de las lluvias"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 121,
    "question": "¿Qué indica una línea continua de color blanco en el borde derecho de la calzada?",
    "options": [
      "Delimita el límite exterior de la calzada (borde de pavimento/berma)",
      "Indica que se puede adelantar por el margen derecho",
      "Muestra que la vía es de un solo carril",
      "Señala la presencia de semáforos inteligentes"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 122,
    "question": "¿Qué es un \"depresible\" o \"paso subterráneo\"?",
    "options": [
      "Un túnel o tramo de vía construido por debajo del nivel del suelo para agilizar el tráfico",
      "Una falla en el asfalto producto de las lluvias",
      "Un tramo donde está prohibida la luz de la moto",
      "Una zona donde los vehículos deben apagar el motor"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 123,
    "question": "¿Qué significa la señal reglamentaria R-1 que tiene forma de triángulo invertido blanco con borde rojo?",
    "options": [
      "Pare",
      "Ceda el paso",
      "Prohibido girar a la izquierda",
      "Vía preferencial"
    ],
    "correctAnswer": 1,
    "category": "Infraestructura"
  },
  {
    "id": 124,
    "question": "¿Qué función cumple la \"Red box\" o caja de bloqueo amarillenta trazada en cuadrícula dentro de una intersección?",
    "options": [
      "Servir de zona de parqueo exprés",
      "Prohibir quedar detenido dentro del cruce para no bloquear el tráfico transversal",
      "Señalar el espacio de parqueo exclusivo de ambulancias",
      "Marcar la zona donde las motos pueden acelerar a fondo"
    ],
    "correctAnswer": 1,
    "category": "Infraestructura"
  },
  {
    "id": 125,
    "question": "¿Qué es una \"Vía Peatonal\"?",
    "options": [
      "Una calle destinada exclusivamente al tránsito de peatones, donde el tráfico vehicular está restringido o prohibido",
      "Un carril de alta velocidad para motocicletas pequeñas",
      "La berma de las carreteras nacionales",
      "El carril izquierdo de una glorieta"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 126,
    "question": "¿Qué indica una señal de obra con fondo de color naranja?",
    "options": [
      "Información sobre sitios turísticos",
      "Trabajos de mantenimiento o construcción temporales en la vía y condiciones especiales",
      "Prohibición permanente de circulación de carga pesada",
      "Presencia de zonas escolares permanentes"
    ],
    "correctAnswer": 1,
    "category": "Infraestructura"
  },
  {
    "id": 127,
    "question": "¿Qué representa la línea de parada (línea ancha y continua blanca antes de un semáforo o señal de PARE)?",
    "options": [
      "El punto límite donde el vehículo debe detenerse por completo ante la indicación de parada",
      "La línea donde las motos deben subirse a la acera",
      "El lugar donde se debe iniciar el adelantamiento de carros",
      "Una simple marca decorativa en el asfalto"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 128,
    "question": "¿Qué es un \"Gálibo\" en la infraestructura de un túnel o puente?",
    "options": [
      "La altura libre máxima permitida para que un vehículo pase sin impactar la estructura",
      "El ancho exacto del carril de las motocicletas",
      "El peso máximo que soporta el puente por eje",
      "La velocidad mínima permitida dentro del túnel"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 129,
    "question": "¿Qué indica la señal reglamentaria con un círculo rojo, una flecha hacia la derecha y una barra diagonal roja cruzada?",
    "options": [
      "Giro a la derecha obligatorio",
      "Prohibido girar a la derecha",
      "Conservar el carril derecho",
      "Salida por la derecha a 100 metros"
    ],
    "correctAnswer": 1,
    "category": "Infraestructura"
  },
  {
    "id": 130,
    "question": "¿Qué es el \"Paltó\" o bordillo/andén en la vía urbana?",
    "options": [
      "La estructura elevada que separa la calzada de la acera o zona peatonal",
      "El centro del carril de alta velocidad",
      "El espacio reservado para la revisión técnica de las motos",
      "El reductor de velocidad en plástico reflexivo"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 131,
    "question": "¿Qué indica la señal preventiva \"Superficie Rizada\" o \"Resalto\"?",
    "options": [
      "La cercanía de deformaciones, resaltos o irregularidades en el pavimento",
      "El inicio de una vía pavimentada de tres carriles",
      "La presencia de una zona de parqueo con adoquines",
      "La proximidad de un peaje automatizado"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 132,
    "question": "¿Qué significa una señal vertical de color café o marrón?",
    "options": [
      "Información turística, ecológica, de parques nacionales o interés cultural",
      "Prohibición de transporte de alimentos",
      "Advertencia de derrumbes en la vía",
      "Control de velocidad por fotodetección"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 133,
    "question": "¿Qué es una \"Sombra de Parada para Motos\" o \"Bici-carril / Moto-carril adelantado\" en semáforos?",
    "options": [
      "La zona delimitada al frente de los carros para que las motos esperen el semáforo de forma segura",
      "La sombra proyectada por los puentes peatonales donde las motos se tapan de la lluvia",
      "Un parqueadero de motos sobre la acera",
      "El espacio entre dos camiones en la vía"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 134,
    "question": "¿Qué indica una señal informativa con el símbolo de un hospital (una cruz roja o letra H azul)?",
    "options": [
      "Prohibición de tocar el pito y cercanía de un centro médico",
      "Obligación de detener la motocicleta para chequeo médico",
      "Entrada exclusiva a ambulancias en contravía",
      "Zona de venta de botiquines de primeros auxilios"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 135,
    "question": "¿Qué es un \"Carril de Aceleración\"?",
    "options": [
      "El carril destinado a aumentar la velocidad para incorporarse de forma segura a una vía rápida",
      "La pista donde se realizan pruebas de velocidad legal",
      "El carril derecho de todas las avenidas",
      "Una franja exclusiva para maniobras de acrobacia"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 136,
    "question": "¿Qué indica la señal vertical reglamentaria con el número \"50\" dentro de un círculo rojo?",
    "options": [
      "Distancia mínima entre vehículos de 50 metros",
      "Límite de velocidad máxima permitida de 50 km/h en ese tramo",
      "Peso máximo del vehículo en 50 toneladas",
      "Tarifa del peaje en pesos"
    ],
    "correctAnswer": 1,
    "category": "Infraestructura"
  },
  {
    "id": 137,
    "question": "¿Qué es una \"Glorieta\" o \"Rotonda\"?",
    "options": [
      "Una intersección canalizada donde el tráfico circula de forma giratoria alrededor de un anillo central",
      "Una vía en recta sin cruces durante más de 10 kilómetros",
      "El espacio de parqueo debajo de los puentes",
      "Un cruce regulado exclusivamente por agentes de tránsito humanos"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 138,
    "question": "¿Qué indica una señal preventiva que muestra dos flechas verticales en sentidos opuestos?",
    "options": [
      "Proximidad de vía de doble sentido de circulación",
      "Prohibición de transitar en ambos sentidos",
      "Obligación de retornar inmediatamente",
      "Fin de la calzada pavimentada"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 139,
    "question": "¿Qué es la \"Distancia de Visibilidad de Parada\" en el diseño de una vía?",
    "options": [
      "La distancia requerida para que un conductor vea un objeto en la vía y logre detenerse antes de impactarlo",
      "El alcance máximo de las luces altas de una moto",
      "La longitud total del espejo retrovisor izquierdo",
      "La distancia entre dos peajes consecutivos"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 140,
    "question": "¿Qué indica la señal con el gráfico de un camión dentro de un círculo rojo con barra diagonal?",
    "options": [
      "Carril exclusivo para vehículos pesados",
      "Prohibida la circulación de vehículos de carga/camiones",
      "Estación de pesaje para camiones cercana",
      "Peligro por adelantamiento de camiones"
    ],
    "correctAnswer": 1,
    "category": "Infraestructura"
  },
  {
    "id": 141,
    "question": "¿Qué función cumple la barrera metálica de seguridad o \"Guardarraíl\" en los bordes de la vía?",
    "options": [
      "Contener y redireccionar vehículos fuera de control para evitar caídas a abismos o volcamientos",
      "Permitir el amarre de las motocicletas varadas",
      "Delimitar la velocidad máxima de la carretera",
      "Proteger la vegetación de la zona media"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 142,
    "question": "¿Qué significa una flecha blanca pintada en el suelo apuntando hacia adelante y a la derecha?",
    "options": [
      "Carril que permite continuar de frente o girar a la derecha",
      "Prohibido girar a la derecha en esa intersección",
      "Obligatoriedad de detenerse antes de girar",
      "Vía cerrada a 500 metros"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 143,
    "question": "¿Qué es un \"Intercambiador Vial\"?",
    "options": [
      "Un sistema de rampas y puentes que permite el paso entre dos o más vías a diferente nivel sin cruces directos",
      "El lugar donde se cambia de moto por otro vehículo",
      "Una estación de transferencia de transporte masivo únicamente",
      "El punto de cambio de aceite para vehículos"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 144,
    "question": "¿Qué indica la presencia de una línea continua amarilla junto a una línea discontinua amarilla?",
    "options": [
      "Que solo puede adelantar el conductor que tiene la línea discontinua a su lado inmediato",
      "Que ninguno de los dos sentidos puede adelantar bajo ninguna circunstancia",
      "Que ambos sentidos pueden adelantar libremente",
      "Que es un carril exclusivo de bicicletas de 6 am a 6 pm"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 145,
    "question": "¿Qué es un \"Paso Elevado Peatonal\"?",
    "options": [
      "Una estructura puente construida sobre la calzada para que los peatones crucen de forma segura",
      "Un resalto de madera instalado en la calle",
      "El carril superior de una glorieta",
      "El andén que pasa por encima de un canal de agua"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 146,
    "question": "¿Qué indica la señal reglamentaria con el gráfico de una motocicleta dentro de un círculo rojo tachado?",
    "options": [
      "Prohibida la circulación de motocicletas en esa vía o zona",
      "Taller de motocicletas cerrado",
      "Estacionamiento exclusivo para motocicletas",
      "Precaución por alto flujo de motocicletas"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 147,
    "question": "¿Qué es una \"Vía de Arteria\" o \"Vía Arterial\"?",
    "options": [
      "Una vía de alta intensidad vehicular que conecta diferentes zonas de una ciudad o región",
      "Un pasaje residencial de un solo sentido y velocidad máxima de 10 km/h",
      "Una trocha sin pavimentar para camperos",
      "La franja destinada exclusivamente a ciclistas"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 148,
    "question": "¿Qué representa la señal de \"Ceda el Paso\"?",
    "options": [
      "Que el conductor debe reducir la velocidad o detenerse si es necesario para dar prelación a otros vehículos",
      "Que el conductor tiene la prioridad absoluta para avanzar",
      "Que se debe aparcar a la derecha inmediatamente",
      "Que la vía adelante está totalmente bloqueada"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 149,
    "question": "¿Qué es un \"Punto de Retorno\" en una avenida con separador?",
    "options": [
      "Una infraestructura o apertura en el separador diseñada para cambiar de sentido de marcha legalmente",
      "El lugar donde la policía realiza pruebas de alcoholemia",
      "El fin de la jurisdicción municipal",
      "Una rotonda subterránea de un solo carril"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 150,
    "question": "¿Qué significa la indicación de luz roja intermitente en un semáforo?",
    "options": [
      "Equivale a una señal de PARE: detenerse totalmente y avanzar solo cuando sea seguro",
      "Continuar a alta velocidad sin detenerse",
      "Semáforo fuera de servicio, avanzar sin mirar",
      "Cambio inminente a luz verde en 1 segundo"
    ],
    "correctAnswer": 0,
    "category": "Infraestructura"
  },
  {
    "id": 151,
    "question": "¿Cuál es el marco legal principal que regula el tránsito en Colombia?",
    "options": [
      "La Ley 769 de 2002 (Código Nacional de Tránsito Terrestre) y sus modificaciones",
      "El Código de Comercio de Colombia",
      "La Ley de Infraestructura Turística",
      "El Estatuto Orgánico del Sistema Financiero"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 152,
    "question": "Según la normativa colombiana, ¿es obligatorio el uso de luz delantera para las motocicletas durante el día?",
    "options": [
      "No, solo se debe encender entre las 6:00 p.m. y las 6:00 a.m.",
      "Sí, la luz principal debe permanecer encendida las 24 horas del día mientras se transite",
      "Solo cuando se transite por carreteras nacionales",
      "Solo si la motocicleta es superior a 250 cc"
    ],
    "correctAnswer": 1,
    "category": "Normativa vial"
  },
  {
    "id": 153,
    "question": "¿A partir de qué hora es obligatorio el uso del chaleco o prenda reflectiva para conductores de motocicleta en Colombia?",
    "options": [
      "Desde las 8:00 p.m. hasta las 5:00 a.m.",
      "Desde las 18:00 horas (6:00 p.m.) hasta las 06:00 horas (6:00 a.m.) del día siguiente y cuando la visibilidad sea escasa",
      "Únicamente los domingos y festivos",
      "Solo durante tormentas de lluvia intensa"
    ],
    "correctAnswer": 1,
    "category": "Normativa vial"
  },
  {
    "id": 154,
    "question": "¿Cuál es el límite máximo de velocidad permitido para vehículos de servicio particular (incluidas motos) en vías urbanas en Colombia (Ley 2251 de 2022)?",
    "options": [
      "80 km/h",
      "60 km/h",
      "50 km/h (salvo señalización que indique un límite menor)",
      "30 km/h en todas las avenidas sin excepción"
    ],
    "correctAnswer": 2,
    "category": "Normativa vial"
  },
  {
    "id": 155,
    "question": "¿Cuál es el límite de velocidad en zonas escolares, residenciales y de hospitales en Colombia?",
    "options": [
      "50 km/h",
      "30 km/h",
      "20 km/h",
      "10 km/h"
    ],
    "correctAnswer": 1,
    "category": "Normativa vial"
  },
  {
    "id": 156,
    "question": "¿Qué documento obligatorio cubre los daños corporales causados a las personas en accidentes de tránsito en Colombia?",
    "options": [
      "El Seguro Obligatorio de Accidentes de Tránsito (SOAT)",
      "La Póliza Todo Riesgo Comercial",
      "La Revisión Técnico-Mecánica",
      "La Licencia de Conducción A2"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 157,
    "question": "¿A los cuántos años de matriculada debe realizar una motocicleta particular su primera Revisión Técnico-Mecánica (según normatividad vigente modificada)?",
    "options": [
      "Al primer año contado a partir de su fecha de matrícula",
      "A los dos (2) años a partir de la fecha de su matrícula",
      "A los cinco años",
      "Las motocicletas están exentas de la Técnico-Mecánica"
    ],
    "correctAnswer": 1,
    "category": "Normativa vial"
  },
  {
    "id": 158,
    "question": "¿Cuál es la categoría de licencia de conducción requerida en Colombia para manejar motocicletas de más de 125 cc?",
    "options": [
      "Categoría A1",
      "Categoría A2",
      "Categoría B1",
      "Categoría C2"
    ],
    "correctAnswer": 1,
    "category": "Normativa vial"
  },
  {
    "id": 159,
    "question": "¿Cuál es la sanción por transitar en una motocicleta sin portar el SOAT vigente?",
    "options": [
      "Multa equivalente a 30 salarios mínimos diarios legales vigentes (SMDLV) e inmovilización del vehículo",
      "Solo una amonestación verbal del agente de tránsito",
      "Cancelación definitiva de la licencia de conducción sin multa económica",
      "Pago de un peaje doble en la siguiente estación"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 160,
    "question": "Según la Resolución 23385 de 2020, ¿cuál es un requisito obligatorio respecto al uso del casco protector?",
    "options": [
      "La cabeza debe estar totalmente abrochada dentro del casco sin correas rotas ni broches partidos",
      "El casco debe ser del mismo color de la motocicleta",
      "El casco solo debe usarse en carreteras fuera de la ciudad",
      "Es permitido llevar el casco apoyado en el codo mientras se conduce a baja velocidad"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 161,
    "question": "¿Qué norma legal prohíbe el tránsito de motocicletas sobre aceras, andenes y zonas destinadas a peatones?",
    "options": [
      "El Código Nacional de Tránsito (Ley 769 de 2002)",
      "La Ley de Medio Ambiente",
      "La Constitución Política de 1991 (Artículo 1)",
      "El Código Penal Militar"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 162,
    "question": "¿Está permitido el transporte de niños menores de 10 años en motocicleta según la regulación colombiana general?",
    "options": [
      "Sí, si llevan casco y chaleco reflectivo",
      "No, está expresamente prohibido transportar niños menores de 10 años en motocicleta",
      "Sí, siempre que vayan ubicados entre el conductor y el tanque",
      "Únicamente en trayectos urbanos menores a 2 kilómetros"
    ],
    "correctAnswer": 1,
    "category": "Normativa vial"
  },
  {
    "id": 163,
    "question": "¿Qué autoridad expide las licencias de conducción en Colombia a través de los organismos de tránsito?",
    "options": [
      "El Ministerio de Transporte (registrado en el sistema RUNT)",
      "La Policía Nacional directamente",
      "La Superintendencia de Industria y Comercio",
      "Las alcaldías locales sin registro nacional"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 164,
    "question": "¿Cuál es el grado de alcoholimetría permitido para conductores de cualquier vehículo (incluidas motos) en Colombia según la Ley 1696 de 2013?",
    "options": [
      "Tolerancia cero (Grado 0 con sanción desde 20 mg de etanol/100 ml de sangre)",
      "Hasta 0.5 grados sin sanción",
      "1.0 grado de alcohol",
      "Tres cervezas o su equivalente"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 165,
    "question": "¿Qué sanción genera conducir una motocicleta realizando maniobras peligrosas o \"piruetas\" en la vía pública?",
    "options": [
      "Imposición de comparendo (multa de 30 SMDLV) e inmovilización de la motocicleta",
      "Descuento del 50% en el impuesto de vehículo",
      "Obligación de realizar un curso de acrobacia",
      "Amonestación escrita enviada al correo en 30 días"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 166,
    "question": "¿Cuál es la distancia máxima a la que se debe estacionar una moto del borde del andén cuando está permitido?",
    "options": [
      "Paralelo al andén a no más de 30 centímetros",
      "A 2 metros de distancia del andén",
      "Sobre la acera tapando el paso peatonal",
      "En diagonal ocupando dos carriles enteros"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 167,
    "question": "¿Qué es el RUNT en Colombia?",
    "options": [
      "Registro Único Nacional de Tránsito",
      "Red Urbana de Transporte Terrestre",
      "Reglamento Único de Taxis y Motos",
      "Real Unión de Transportadores de Carga"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 168,
    "question": "¿Qué trámite es obligatorio realizar ante el organismo de tránsito cuando se vende una motocicleta a otra persona?",
    "options": [
      "El traspaso de propiedad de la motocicleta",
      "El cambio de color del chasis",
      "La renovación de la tarjeta de propiedad del comprador únicamente",
      "El pago de la póliza de responsabilidad extracontractual"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 169,
    "question": "¿Está permitido adelantar a otro vehículo en una intersección o cruce de vías según la ley de tránsito?",
    "options": [
      "No, está prohibido adelantar en intersecciones, curvas y pasos a nivel",
      "Sí, siempre que se toque el pito con fuerza",
      "Sí, pero solo si se adelanta por el lado derecho",
      "Solamente si el vehículo de adelante es un bus"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 170,
    "question": "¿Qué luz de tránsito le prohíbe al motociclista girar a la derecha cuando hay una señal explícita de \"Prohibido giro a la derecha con luz roja\"?",
    "options": [
      "La luz roja del semáforo",
      "La luz verde",
      "La luz amarilla parpadeante",
      "Ninguna luz lo prohíbe"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 171,
    "question": "¿Cuál es la penalización por no realizar la Revisión Técnico-Mecánica en el plazo estipulado por la ley?",
    "options": [
      "Multa económica de 15 SMDLV e inmovilización del vehículo",
      "Pérdida de 50 puntos en el pase",
      "Incautación definitiva y chatarrización de la moto",
      "Cierre de la estación de servicio más cercana"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 172,
    "question": "¿Qué documento identifica las características técnicas de la moto (cilindraje, número de motor, chasis) y a su propietario legal?",
    "options": [
      "La Licencia de Tránsito (Tarjeta de Propiedad)",
      "El certificado de matrícula escolar",
      "El recibo de pago del SOAT",
      "La Licencia de Conducción A1"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 173,
    "question": "¿Cuál es el valor tope de emisión de ruido permitido para tubos de escape de motocicletas regulado por el Ministerio de Ambiente?",
    "options": [
      "Los límites establecidos en decibeles (d",
      "por la normatividad ambiental vigente (prohibido el uso de escapes libres o modificados que superen la norma) B) No existe ningún límite para motocicletas",
      "200 decibeles en todo momento",
      "Solo aplica para motocicletas eléctricas"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 174,
    "question": "¿Qué obligación tienen los motociclistas respecto al uso de las direccionales?",
    "options": [
      "Encenderlas con suficiente anticipación (mínimo 30 metros) antes de realizar giros o cambios de carril",
      "Usarlas solo durante la noche",
      "Las direccionales son opcionales en las motos",
      "Encenderlas únicamente al momento de frenar de emergencia"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 175,
    "question": "¿En qué lado del casco debe estar visible el número de placa de la motocicleta según las regulaciones locales cuando aplique?",
    "options": [
      "En la parte trasera exterior del casco, con letras y números reflectivos según especificaciones legales",
      "En el visor transparente por el lado de adentro",
      "En la correa de ajuste debajo de la barbilla",
      "No se permite llevar la placa en el casco bajo ninguna circunstancia"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 176,
    "question": "¿Qué ocurre si un conductor es sorprendido manejando con la licencia de conducción suspendida?",
    "options": [
      "Cancelación definitiva de la licencia de conducción e inmovilización del vehículo",
      "Un llamado de atención verbal",
      "Reducción del valor de los impuestos vehiculares",
      "Obligación de presentar nuevamente el examen médico únicamente"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 177,
    "question": "¿Cuál es el comportamiento legal correcto al encontrarse con un retén de control de tránsito oficial?",
    "options": [
      "Detener la marcha atender las indicaciones de la autoridad y presentar la documentación requerida",
      "Dar la vuelta en U y huir a alta velocidad",
      "Acelerar para pasar sin detenerse",
      "Exigir que la autoridad le pague el combustible invertido"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 178,
    "question": "¿Qué regla aplica para la circulación de motocicletas en los peajes de carreteras nacionales administrados por el INVIAS/ANI en Colombia?",
    "options": [
      "Las motocicletas están exentas del pago de la tarifa de peaje, pero deben transitar por el carril exclusivo asignado a velocidad reducida",
      "Pagan la misma tarifa que un automóvil particular",
      "Tienen prohibido el paso por las estaciones de peaje",
      "Pagan el doble de tarifa los fines de semana"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 179,
    "question": "¿Qué debe hacer un motociclista en caso de verse involucrado en un accidente de tránsito con solo daños materiales (sin heridos) según la Ley 2251 de 2022?",
    "options": [
      "Recabar pruebas (fotos/videos) y retirar inmediatamente los vehículos para no obstruir la vía",
      "Dejar la moto tirada en la mitad de la vía durante horas hasta que llegue un juez",
      "Huir del lugar antes de que lleguen los agentes",
      "Ocultar las placas del vehículo"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 180,
    "question": "¿Qué sanción aplica si un conductor se niega a realizarse la prueba de alcoholemia solicitada por la autoridad competente?",
    "options": [
      "Sanción máxima: multa más alta, inmovilización del vehículo por 20 días y cancelación o suspensión de la licencia de 5 a 10 años",
      "Amonestación de 5 minutos y libertad de continuar",
      "Un comparendo pedagogico sin costo",
      "Descuento especial en el trámite de la Revisión Técnico-Mecánica"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 181,
    "question": "¿Está permitido llevar carga que sobresalga lateralmente del manubrio de la motocicleta?",
    "options": [
      "No, está prohibido transportar objetos que sobresalgan de los extremos del vehículo o dificulten la maniobrabilidad",
      "Sí, hasta 1 metro a cada lado del manubrio",
      "Sí, siempre que la carga vaya amarrada con lazos de color rojo",
      "Únicamente si la carga pesa menos de 5 kg"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 182,
    "question": "¿Cuál es la autoridad máxima de tránsito en una vía en el momento en que se encuentra dirigiendo el tráfico?",
    "options": [
      "Las señales impartidas por los agentes o policías de tránsito (predominan sobre semáforos y señales fijas)",
      "El semáforo en color verde",
      "La señal vertical de PARE",
      "La velocidad del vehículo de adelante"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 183,
    "question": "¿Qué vigencia tiene la licencia de conducción para vehículos particulares (Categoría A2) para personas menores de 60 años en Colombia?",
    "options": [
      "10 años",
      "5 años",
      "1 año",
      "Vigencia vitalicia sin renovación"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 184,
    "question": "¿Qué establece la ley sobre el tránsito de motocicletas por las ciclorrutas?",
    "options": [
      "Está totalmente prohibido para las motocicletas circular por infraestructura ciclística",
      "Está permitido si la motocicleta no supera los 20 km/h",
      "Permitido únicamente en horas pico",
      "Permitido solo para motocicletas de mensajería o domicilios"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 185,
    "question": "¿Qué elemento de protección es obligatorio tanto para el conductor como para el acompañante en motocicleta?",
    "options": [
      "Casco reglamentario debidamente abrochado",
      "Chaqueta de cuero con protecciones de titanio",
      "Botas de caña alta con punta de acero",
      "Gafas oscuras de protección solar"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 186,
    "question": "¿Cuál es la multa en SMDLV por pasar un semáforo en luz roja o señal de PARE (Infracción D04)?",
    "options": [
      "30 Salarios Mínimos Diarios Legales Vigentes (SMDLV)",
      "5 Salarios Mínimos Diarios Legales Vigentes",
      "100 Salarios Mínimos Diarios Legales Vigentes",
      "Un Salario Mínimo Mensual completo"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 187,
    "question": "¿Qué documento demuestra que la motocicleta está al día en sus impuestos territoriales?",
    "options": [
      "El comprobante o paz y salvo de pago del Impuesto Sobre Vehículos Automotores",
      "La cédula de ciudadanía del conductor",
      "El certificado de gases de la Técnico-Mecánica",
      "La factura de compra del casco"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 188,
    "question": "¿Qué sucede si la placa física de la motocicleta no es legible por desgaste o barro acumulado?",
    "options": [
      "El conductor puede ser sancionado por transitar con placas ilegibles o alteradas",
      "No ocurre nada, es completamente legal",
      "Se le otorga un permiso especial de un año para limpiarla",
      "La moto queda exenta de fotodetecciones"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 189,
    "question": "¿Cuál es la conducta requerida al transitar por una zona escolar en el horario de entrada o salida de estudiantes?",
    "options": [
      "Reducir la velocidad a un máximo de 30 km/h y extremar la atención ante el cruce de peatones",
      "Acelerar y tocar el pito continuamente para que los niños no crucen",
      "Mantener una velocidad de 60 km/h si no se ven profesores",
      "Detenerse a tomar fotos"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 190,
    "question": "¿Qué se entiende por \"Inmovilización\" de un vehículo como medida cautelar de tránsito?",
    "options": [
      "La suspensión temporal de la circulación del vehículo en patios oficiales hasta que se subsane la causa de la infracción",
      "La destrucción inmediata del motor en la vía pública",
      "La venta en subasta pública al día siguiente de la multa",
      "El bloqueo manual del manubrio por 5 minutos"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 191,
    "question": "Según el CNT, ¿por qué carril deben transitar habitualmente los vehículos de menor velocidad o motocicletas en vías de varios carriles?",
    "options": [
      "Por los carriles derechos destinados a la circulación normal",
      "Por el carril izquierdo exclusivo de alta velocidad",
      "Por la acera peatonal",
      "Por el carril exclusivo de Transmilenio / Metroplús"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 192,
    "question": "¿Qué requisito exige la ley respecto a los espejos retrovisores de una motocicleta?",
    "options": [
      "Debe contar con ambos espejos retrovisores funcionales y en buen estado de visibilidad",
      "Solamente es obligatorio el espejo del lado izquierdo",
      "No se requieren espejos si el casco es transparente",
      "Se permite reemplazar los espejos por cámaras de celular desenfocadas"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 193,
    "question": "¿Cuál es el límite máximo de velocidad permitido en carreteras nacionales/departamentales para motocicletas en Colombia (salvo señalización contraria)?",
    "options": [
      "90 km/h",
      "120 km/h",
      "140 km/h",
      "50 km/h en todas las autopistas"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 194,
    "question": "¿Está permitido realizar modificaciones al tubo de escape que generen ruido excesivo (resonadores/reparos sin silenciador)?",
    "options": [
      "No, está prohibido por las normas de emisión de ruido y tránsito",
      "Sí, siempre y cuando la moto sea de color negro",
      "Sí, si el conductor paga un impuesto adicional",
      "Solamente si transita en autopistas de noche"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 195,
    "question": "¿Qué sanción aplica por conducir en estado de embriaguez o bajo el efecto de sustancias psicoactivas?",
    "options": [
      "Multas severas (escalonadas según el grado), suspensión o cancelación de la licencia, inmovilización del vehículo y horas de trabajo comunitario",
      "Pago de una tarifa fija de 50.000 pesos colombianos",
      "Prisión domiciliaria de 24 horas únicamente",
      "Ninguna sanción si es la primera vez en el año"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 196,
    "question": "¿Qué debe hacer si el semáforo cambia a luz amarilla cuando usted está muy cerca de la línea de parada y no puede detenerse con seguridad?",
    "options": [
      "Completar el paso con precaución para despejar la intersección sin amarrar los frenos",
      "Frenar en seco sobre la cebra peatonal",
      "Apagar la moto en la mitad del cruce",
      "Girar en U inmediatamente"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 197,
    "question": "¿Cuál es el número de pasajeros máximo permitido en una motocicleta convencional de dos ruedas?",
    "options": [
      "Dos (2) personas: el conductor y un acompañante (pato)",
      "Tres personas si una es un niño",
      "Cuatro personas si van bien sujetas",
      "Sin límite mientras la potencia del motor lo permita"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 198,
    "question": "¿Qué entidad regula la homologación de los cascos de protección que se venden en Colombia?",
    "options": [
      "El Ministerio de Transporte a través de normas técnicas (NTC 4533, ECE 22.05 / 22.06, DOT)",
      "La Secretaría de Salud Municipal",
      "El Ministerio de Tecnologías de la Información",
      "Las empresas ensambadoras de bicicletas"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 199,
    "question": "¿Qué maniobra está prohibida respecto al uso de teléfonos celulares mientras se conduce motocicleta?",
    "options": [
      "Manipular o sostener el celular con la mano o hablar sin dispositivos de manos libres mientras se conduce",
      "Llevar el teléfono guardado en la chaqueta",
      "Utilizar sistemas de navegación GPS fijados al manubrio sin manipularlos en marcha",
      "Escuchar las indicaciones del mapa mediante interconectores con voz sin distracción visual"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  },
  {
    "id": 200,
    "question": "¿Qué plazo tiene un ciudadano para impugnar una orden de comparendo si no está de acuerdo con la infracción atribuida?",
    "options": [
      "Dentro de los cinco (5) días hábiles siguientes a la notificación (o 11 días hábiles si es por fotodetección) ante el organismo de tránsito",
      "Un año después de la multa",
      "Solamente el mismo día en que se elaboró el comparendo",
      "No existe el derecho a la impugnación de comparendos en Colombia"
    ],
    "correctAnswer": 0,
    "category": "Normativa vial"
  }
];

/**
 * Utility function to get 40 randomly selected questions distributed proportionally across categories:
 * - 20% Mecánica (8 for 40)
 * - 30% Situaciones de conducción (12 for 40)
 * - 25% Infraestructura (10 for 40)
 * - 25% Normativa vial (10 for 40)
 */
export function getRandomQuestions(
  param1?: number | any[],
  param2?: any[] | number
): any[] {
  let allQuestions: Question[] = QUESTION_BANK;
  let count = 40;

  if (typeof param1 === "number") {
    count = param1;
    if (Array.isArray(param2)) {
      allQuestions = param2;
    }
  } else if (Array.isArray(param1)) {
    allQuestions = param1;
    if (typeof param2 === "number") {
      count = param2;
    }
  }

  const shuffle = <T>(arr: T[]): T[] => [...arr].sort(() => 0.5 - Math.random());

  const mecanica = allQuestions.filter(q => q.category === "Mecánica");
  const situaciones = allQuestions.filter(q => q.category === "Situaciones de conducción");
  const infraestructura = allQuestions.filter(q => q.category === "Infraestructura");
  const normativa = allQuestions.filter(q => q.category === "Normativa vial");

  const ratioMec = Math.round(count * 0.20);
  const ratioSit = Math.round(count * 0.30);
  const ratioInf = Math.round(count * 0.25);
  const ratioNor = count - ratioMec - ratioSit - ratioInf;

  let selectedMec = shuffle(mecanica).slice(0, ratioMec);
  let selectedSit = shuffle(situaciones).slice(0, ratioSit);
  let selectedInf = shuffle(infraestructura).slice(0, ratioInf);
  let selectedNor = shuffle(normativa).slice(0, ratioNor);

  let combined = [...selectedMec, ...selectedSit, ...selectedInf, ...selectedNor];

  // Fallback if provided list doesn't have enough in specific categories
  if (combined.length < count) {
    const selectedIds = new Set(combined.map(q => q.id));
    const remaining = shuffle(allQuestions.filter(q => !selectedIds.has(q.id)));
    combined = [...combined, ...remaining.slice(0, count - combined.length)];
  }

  return shuffle(combined);
}
