document.oncontextmenu=function(){return false};
// Banco de 100 preguntas de Cultura General Historia Universal y Nacional para la ESFM
const questionBank = [
  {
    "question": "¿Qué civilización precolombina construyó Tiwanaku, uno de los monumentos arqueológicos más importantes de Bolivia?",
    "options": ["Incas", "Mochicas", "Tiwanaku", "Chavín"],
    "correct": 2,
    "explanation": "La civilización Tiwanaku (1500 a.C. - 1200 d.C.) se desarrolló cerca del lago Titicaca y es considerada precursora del Imperio Inca. Destacó por sus avances en agricultura y astronomía."
  },
  {
    "question": "¿Quién lideró la Revolución de Chuquisaca en 1809, considerada el primer grito libertario de Hispanoamérica?",
    "options": ["Simón Bolívar", "Bernardo de Monteagudo y Jaime Zudáñez", "Antonio José de Sucre", "José Miguel Lanza"],
    "correct": 1,
    "explanation": "La Revolución de Chuquisaca (25 de mayo de 1809) fue liderada por Bernardo de Monteagudo y Jaime Zudáñez en Sucre, inspirando movimientos independentistas en toda América."
  },
  {
    "question": "¿Cuándo se fundó la República de Bolivia y qué nombre recibió inicialmente?",
    "options": ["6 de agosto de 1825; República de Bolívar", "15 de abril de 1825; Estado Alto Peruano", "10 de enero de 1826; Confederación Boliviana", "12 de octubre de 1824; República Sucre"],
    "correct": 0,
    "explanation": "Bolivia se fundó el 6 de agosto de 1825 con el nombre de República de Bolívar en honor a Simón Bolívar, cambiando a 'Bolivia' el 3 de octubre de ese mismo año."
  },
  {
    "question": "¿Por qué Bolivia perdió su acceso al mar en la Guerra del Pacífico?",
    "options": ["Por un tratado de libre comercio con Chile", "Por una invasión peruana", "Tras perder la Guerra del Pacífico (1879-1884) contra Chile", "Por una cesión voluntaria en 1890"],
    "correct": 2,
    "explanation": "Bolivia perdió su litoral tras la Guerra del Pacífico (1879-1884) contra Chile. El Tratado de 1904 ratificó la pérdida de 400 km de costa y 120,000 km² de territorio rico en salitre."
  },
  {
    "question": "¿Cuál fue el principal objetivo de la Revolución Nacional de 1952 en Bolivia?",
    "options": ["Crear una monarquía constitucional", "Establecer una dictadura militar", "Nacionalizar minas, reforma agraria y voto universal", "Unirse al Mercado Común Europeo"],
    "correct": 2,
    "explanation": "La Revolución de 1952 tuvo tres pilares: nacionalización de las minas de estaño, reforma agraria para eliminar el latifundio, y establecimiento del voto universal (incluyendo indígenas y mujeres)."
  },
  {
    "question": "¿Quiénes fueron los líderes de la guerrilla de Ñancahuazú en 1967?",
    "options": ["Pablo Zárate Willka", "Luis Arce Catacora", "Ernesto 'Che' Guevara y el Ejército de Liberación Nacional", "Juan José Torres"],
    "correct": 2,
    "explanation": "La guerrilla de Ñancahuazú (1967) fue liderada por Ernesto 'Che' Guevara y el Ejército de Liberación Nacional de Bolivia. Fue capturado y ejecutado en La Higuera, Santa Cruz."
  },
  {
    "question": "¿Dónde se libró la Batalla de Ingavi en 1841 y qué consecuencias tuvo?",
    "options": ["Cochabamba; derrota de Bolivia ante Argentina", "Ingavi, La Paz; derrota a Perú y consolidación de la independencia", "Tarija; victoria sobre Paraguay", "Potosí; rebelión minera"],
    "correct": 1,
    "explanation": "La Batalla de Ingavi (1841) ocurrió en La Paz. El general José Ballivián derrotó al ejército peruano, consolidando la independencia boliviana y frenando intentos de anexión."
  },
  {
    "question": "¿Cómo surgió el Estado Plurinacional de Bolivia?",
    "options": ["Por decreto militar en 1971", "Tras la aprobación de la Constitución de 2009", "Durante la Guerra del Chaco", "Por acuerdo con la ONU en 2005"],
    "correct": 1,
    "explanation": "El Estado Plurinacional de Bolivia surgió con la aprobación de la Nueva Constitución Política en 2009, bajo el gobierno de Evo Morales, reconociendo 36 naciones indígenas y derechos colectivos."
  },
  {
    "question": "¿Qué presidente implementó el 'Dekretazo' en 1985 para frenar la hiperinflación?",
    "options": ["Hugo Banzer", "Hernán Siles Zuazo", "Víctor Paz Estenssoro", "Gonzalo Sánchez de Lozada"],
    "correct": 2,
    "explanation": "Víctor Paz Estenssoro implementó el Decreto Supremo 21060 en 1985, que liberalizó la economía y redujo la hiperinflación del 24,000% anual a un 15% en pocos meses."
  },
  {
    "question": "¿Cuántas constituciones ha tenido Bolivia hasta 2024?",
    "options": ["12", "15", "17", "20"],
    "correct": 2,
    "explanation": "Bolivia ha tenido 17 constituciones entre 1826 y 2009, reflejando transformaciones desde un sistema unitario hasta el modelo plurinacional actual."
  },
  {
    "question": "¿Qué civilización europea conquistó el Imperio Inca, que incluía el occidente boliviano?",
    "options": ["Portugueses", "Franceses", "Ingleses", "Españoles"],
    "correct": 3,
    "explanation": "Los españoles, liderados por Francisco Pizarro, conquistaron el Imperio Inca entre 1532 y 1533. La conquista de Bolivia comenzó en 1538 con la fundación de Sucre."
  },
  {
    "question": "¿Quién fue Bartolina Sisa y por qué es emblemática?",
    "options": ["Reina inca ejecutada por los españoles", "Líder aymara que comandó rebeliones contra los españoles en 1781-1782", "Primera mujer ministra de Bolivia", "Escritora aymara del siglo XIX"],
    "correct": 1,
    "explanation": "Bartolina Sisa fue una líder aymara que comandó rebeliones anticoloniales en 1781-1782. Fue ejecutada en La Paz y es símbolo de resistencia. El 5 de septiembre se celebra el Día de la Mujer Indígena en su honor."
  },
  {
    "question": "¿Cuándo se descubrió el Cerro Rico de Potosí y qué impacto tuvo?",
    "options": ["1532; financió la conquista del Perú", "1545; produjo el 60% de la plata mundial en el siglo XVI", "1560; fue base del ejército inca", "1520; descubierto por Pizarro"],
    "correct": 1,
    "explanation": "El Cerro Rico fue descubierto en 1545 por el indígena Diego Huallpa. En el siglo XVI produjo el 60% de la plata mundial, financiando al Imperio Español y atrayendo migración masiva."
  },
  {
    "question": "¿Por qué Bolivia participó en la Guerra del Chaco (1932-1935)?",
    "options": ["Para recuperar el litoral marítimo", "Por disputas territoriales con Paraguay sobre supuestos yacimientos petroleros", "Para apoyar a Argentina", "Por una invasión paraguaya a Tarija"],
    "correct": 1,
    "explanation": "Bolivia participó en la Guerra del Chaco por disputas sobre el Chaco Boreal, creyendo que tenía petróleo. Fue el conflicto más sangriento de Sudamérica en el siglo XX; Bolivia perdió 234,000 km²."
  },
  {
    "question": "¿Cuál fue el rol de Bolivia en la Segunda Guerra Mundial?",
    "options": ["Se mantuvo neutral durante todo el conflicto", "Suministró estaño a los Aliados y declaró guerra al Eje en 1943", "Apoyó militarmente a Alemania", "No tuvo participación significativa"],
    "correct": 1,
    "explanation": "Bolivia declaró guerra al Eje en 1943, suministró estaño clave para armamento aliado, rompió relaciones con Alemania y Japón en 1942, y recibió refugiados judíos."
  },
  {
    "question": "¿Quiénes fueron los 'Barones del Estaño' en Bolivia?",
    "options": ["Simón Bolívar, Sucre y Ballivián", "Patiño, Aramayo y Hochschild", "Guevara, Debray y Cabezón", "Villarroel, Paz Estenssoro y Siles"],
    "correct": 1,
    "explanation": "Los 'Barones del Estaño' fueron Simón I. Patiño, Carlos Víctor Aramayo y Mauricio Hochschild, que controlaban el 80% de la minería estañífera hasta su nacionalización en 1952."
  },
  {
    "question": "¿Dónde se firmó el Acta de Independencia de Bolivia?",
    "options": ["Palacio Quemado, La Paz", "Casa de la Libertad, Sucre", "Catedral de Potosí", "Plaza Murillo, La Paz"],
    "correct": 1,
    "explanation": "El Acta de Independencia se firmó en la Casa de la Libertad en Sucre el 6 de agosto de 1825. Hoy alberga documentos históricos fundamentales de la fundación de Bolivia."
  },
  {
    "question": "¿Cómo influyó la Rebelión de Túpac Katari en 1781 en las luchas independentistas?",
    "options": ["Fue una revuelta religiosa sin impacto político", "Su asedio a La Paz con 40,000 indígenas evidenció resistencia anticolonial", "Apoyó a los españoles contra los criollos", "Derrocó al virrey del Perú"],
    "correct": 1,
    "explanation": "Túpac Katari lideró un asedio a La Paz con 40,000 indígenas en 1781. Su frase 'Volveré y seré millones' inspiró movimientos independentistas y de resistencia indígena posteriores."
  },
  {
    "question": "¿Qué presidente boliviano fue asesinado durante la 'Masacre de la Calle Harrington' en 1946?",
    "options": ["Víctor Paz Estenssoro", "Gualberto Villarroel", "Hugo Banzer", "René Barrientos"],
    "correct": 1,
    "explanation": "Gualberto Villarroel fue linchado en La Paz en 1946. Acusado de represión, su muerte marcó el fin de gobiernos nacionalistas hasta la Revolución de 1952."
  },
  {
    "question": "¿Cuántas veces ha sido Bolivia sede de la Asamblea General de la OEA hasta 2024?",
    "options": ["1 vez", "2 veces", "3 veces", "4 veces"],
    "correct": 2,
    "explanation": "Bolivia ha sido sede de la OEA en tres ocasiones: 1979 (La Paz), 2007 (Cochabamba) y 2024 (Cochabamba), abordando temas como migración y seguridad alimentaria."
  },
  {
    "question": "¿Qué civilización desarrolló el primer sistema de escritura conocido?",
    "options": ["Egipcios", "Chinos", "Sumerios", "Mayas"],
    "correct": 2,
    "explanation": "Los sumerios en Mesopotamia (actual Irak) crearon la escritura cuneiforme alrededor del 3200 a.C., grabada en tablillas de arcilla."
  },
  {
    "question": "¿Quién fue el faraón egipcio que construyó la Gran Pirámide de Guiza?",
    "options": ["Ramsés II", "Tutankamón", "Keops", "Cleopatra"],
    "correct": 2,
    "explanation": "Keops (Jufu), de la IV Dinastía (2589-2566 a.C.), ordenó construir la Gran Pirámide. Con 146 metros, fue la estructura más alta del mundo durante 3,800 años."
  },
  {
    "question": "¿Cuándo comenzó la democracia ateniense y cómo funcionaba?",
    "options": ["Siglo III a.C.; con voto secreto", "Siglo V a.C.; voto directo de ciudadanos varones", "Siglo I d.C.; con senado", "Siglo VI d.C.; teocrática"],
    "correct": 1,
    "explanation": "La democracia ateniense comenzó en el siglo V a.C. bajo Clístenes. Solo los ciudadanos varones votaban en la Asamblea (Ekklesía); excluía a mujeres, esclavos y extranjeros."
  },
  {
    "question": "¿Por qué cayó el Imperio Romano de Occidente?",
    "options": ["Por invasiones bárbaras, crisis económica y división interna", "Por una plaga que mató a todos los emperadores", "Por la conversión masiva al cristianismo", "Por una guerra con China"],
    "correct": 0,
    "explanation": "El Imperio Romano de Occidente cayó en 476 d.C. por invasiones bárbaras, crisis económica, corrupción y división. Odoacro depuso al último emperador, Rómulo Augústulo."
  },
  {
    "question": "¿Cuál fue el objetivo principal de las Cruzadas?",
    "options": ["Conquistar China", "Expandir el islam", "Recuperar Jerusalén para el cristianismo", "Establecer rutas comerciales con África"],
    "correct": 2,
    "explanation": "Las Cruzadas (1095-1291) buscaban recuperar Jerusalén para el cristianismo. Ocho cruzadas movilizaron a reyes como Ricardo Corazón de León, pero no lograron mantener el control."
  },
  {
    "question": "¿Quiénes lideraron la Revolución Francesa entre 1789 y 1799?",
    "options": ["Napoleón Bonaparte", "Robespierre, Danton y Marat", "Luis XIV y María Antonieta", "Voltaire y Rousseau"],
    "correct": 1,
    "explanation": "Figuras clave fueron Robespierre, Danton y Marat. La toma de la Bastilla el 14 de julio de 1789 simbolizó el fin del absolutismo monárquico en Francia."
  },
  {
    "question": "¿Dónde se desarrolló la civilización del Valle del Indo?",
    "options": ["Egipto", "Mesopotamia", "Actual Pakistán y noroeste de India", "Península Arábiga"],
    "correct": 2,
    "explanation": "La civilización del Valle del Indo (2600-1900 a.C.) floreció en el actual Pakistán y noroeste de India, con ciudades como Mohenjo-Daro, que tenían alcantarillado avanzado."
  },
  {
    "question": "¿Cómo influyó la imprenta de Gutenberg en el Renacimiento?",
    "options": ["Permitió difundir ideas humanistas por Europa", "Destruyó los manuscritos medievales", "Fue usada solo por la Iglesia", "No tuvo impacto significativo"],
    "correct": 0,
    "explanation": "La imprenta de Gutenberg (1450) democratizó el conocimiento. La Biblia de 1455 y otros textos difundieron ideas humanistas, científicas y reformistas por toda Europa."
  },
  {
    "question": "¿Qué desencadenó la Primera Guerra Mundial en 1914?",
    "options": ["La invasión de Polonia", "El asesinato del archiduque Francisco Fernando en Sarajevo", "La caída del Imperio Otomano", "Una crisis económica global"],
    "correct": 1,
    "explanation": "El asesinato del archiduque Francisco Fernando el 28 de junio de 1914 en Sarajevo desató una cadena de alianzas que llevó a la guerra. Murieron 20 millones de personas."
  },
  {
    "question": "¿Cuántos viajes realizó Cristóbal Colón a América y qué descubrió?",
    "options": ["1 viaje; descubrió el Pacífico", "2 viajes; solo llegó a las Bahamas", "3 viajes; descubrió Brasil", "4 viajes; descubrió Bahamas, Cuba, La Española y Venezuela"],
    "correct": 3,
    "explanation": "Colón realizó 4 viajes (1492-1504). Descubrió las Bahamas, Cuba, La Española, Venezuela y Centroamérica, pensando siempre que había llegado a las Indias."
  },
  {
    "question": "¿Qué fue el 'Día D' en la Segunda Guerra Mundial?",
    "options": ["La rendición de Japón", "El lanzamiento de la bomba atómica", "El desembarco de Normandía el 6 de junio de 1944", "La invasión de Polonia"],
    "correct": 2,
    "explanation": "El 'Día D' fue el desembarco aliado en Normandía el 6 de junio de 1944. 156,000 soldados invadieron Francia ocupada, cambiando el curso de la guerra en Europa."
  },
  {
    "question": "¿Por qué se dividió la India en 1947?",
    "options": ["Por una guerra con China", "Para crear Pakistán como estado musulmán", "Por invasión británica", "Para unirse a la Unión Soviética"],
    "correct": 1,
    "explanation": "La India se dividió en 1947 para crear Pakistán como estado musulmán, tras tensiones religiosas entre hindúes y musulmanes. Gandhi se opuso a la partición, que causó millones de desplazados."
  },
  {
    "question": "¿Quién fue Cleopatra y con qué líderes romanos se alió?",
    "options": ["Reina de Persia; aliada con Darío", "Última faraona de Egipto; aliada con Julio César y Marco Antonio", "General cartaginesa; aliada con Aníbal", "Emperatriz romana; aliada con Octavio"],
    "correct": 1,
    "explanation": "Cleopatra (69-30 a.C.) fue la última faraona de Egipto. Se alió con Julio César y luego con Marco Antonio. Su suicidio marcó el fin del Egipto ptolemaico y su anexión a Roma."
  },
  {
    "question": "¿Cuándo cayó el Muro de Berlín y qué simbolizó?",
    "options": ["1975; inicio de la Guerra Fría", "1989; fin de la Guerra Fría y reunificación alemana", "1995; creación de la UE", "1961; inicio de la división de Alemania"],
    "correct": 1,
    "explanation": "El Muro de Berlín cayó el 9 de noviembre de 1989. Simbolizó el fin de la Guerra Fría y llevó a la reunificación alemana en 1990 tras 28 años de división."
  },
  {
    "question": "¿Cuál fue la primera civilización de América?",
    "options": ["Olmeca", "Maya", "Caral-Supe", "Inca"],
    "correct": 2,
    "explanation": "La civilización Caral-Supe en Perú (3000-1800 a.C.) es la más antigua de América. Construyó pirámides y anfiteatros antes que Egipto o Mesopotamia."
  },
  {
    "question": "¿Cómo surgió el Imperio Mongol?",
    "options": ["Por comercio marítimo", "Unificado por Gengis Kan en 1206", "Por conquista religiosa islámica", "Como federación de tribus europeas"],
    "correct": 1,
    "explanation": "El Imperio Mongol fue unificado por Gengis Kan en 1206. Se convirtió en el mayor imperio contiguo de la historia, extendiéndose desde China hasta Europa oriental."
  },
  {
    "question": "¿Dónde nació la filosofía occidental?",
    "options": ["Egipto", "Roma", "Grecia antigua", "Mesopotamia"],
    "correct": 2,
    "explanation": "La filosofía occidental nació en la Grecia antigua del siglo VI a.C. Sócrates, Platón y Aristóteles sentaron las bases del pensamiento racional y la lógica."
  },
  {
    "question": "¿Qué provocó la Peste Negra en el siglo XIV?",
    "options": ["Una guerra mundial", "La bacteria Yersinia pestis transmitida por pulgas de ratas", "Una hambruna generalizada", "La invasión mongola"],
    "correct": 1,
    "explanation": "La Peste Negra (1347-1351) fue causada por la bacteria Yersinia pestis. Mató a 200 millones en Eurasia, reduciendo la población europea a la mitad."
  },
  {
    "question": "¿Quiénes fueron los principales líderes de la independencia latinoamericana?",
    "options": ["Washington, Jefferson, Franklin", "Bolívar, San Martín, Hidalgo, O'Higgins", "Napoleón, Wellington, Nelson", "Lenin, Trotsky, Stalin"],
    "correct": 1,
    "explanation": "Simón Bolívar, José de San Martín, Miguel Hidalgo y Bernardo O'Higgins lideraron las luchas independentistas en Latinoamérica entre 1810 y 1825, liberando territorios del dominio español."
  },
  {
    "question": "¿Por qué se llamó 'Guerra Fría' al conflicto entre EE.UU. y la URSS?",
    "options": ["Porque ocurrió en Siberia", "Porque no hubo confrontación militar directa entre las superpotencias", "Por el clima de Europa del Este", "Por que fue una guerra por recursos helados"],
    "correct": 1,
    "explanation": "Se llamó 'Guerra Fría' porque, a pesar de la tensión extrema, no hubo guerra directa entre EE.UU. y la URSS. El conflicto se libró mediante guerras proxy, espionaje y competencia ideológica."
  },
  {
    "question": "¿Cuál fue el legado de la Revolución Industrial?",
    "options": ["El regreso al feudalismo", "Masificación de fábricas, urbanización y explotación laboral", "La abolición de la monarquía en Europa", "La invención de la democracia directa"],
    "correct": 1,
    "explanation": "La Revolución Industrial (siglo XVIII) trajo fábricas, urbanización y avances tecnológicos, pero también explotación laboral infantil y contaminación, transformando sociedades agrarias en industriales."
  },
  {
    "question": "¿Quién fue Juana de Arco y cómo murió?",
    "options": ["Reina de Inglaterra; murió en combate", "Heroína francesa; quemada viva por herejía", "Espía napoleónica; envenenada", "Científica medieval; ahogada"],
    "correct": 1,
    "explanation": "Juana de Arco (1412-1431) lideró ejércitos franceses contra Inglaterra en la Guerra de los Cien Años. Fue quemada viva por herejía en 1431 y canonizada en 1920."
  },
  {
    "question": "¿Cuándo se abolió la esclavitud en Estados Unidos?",
    "options": ["1804", "1865", "1888", "1900"],
    "correct": 1,
    "explanation": "La esclavitud se abolió oficialmente en EE.UU. en 1865 con la 13ª Enmienda, tras la Guerra Civil. Lincoln emitió la Proclamación de Emancipación en 1863, pero solo en estados rebeldes."
  },
  {
    "question": "¿Dónde se originó el budismo?",
    "options": ["Tíbet", "China", "India", "Japón"],
    "correct": 2,
    "explanation": "El budismo surgió en la India del siglo V a.C. con Siddhartha Gautama (Buda). Sus enseñanzas sobre el Nirvana y las Cuatro Nobles Verdades se expandieron por Asia."
  },
  {
    "question": "¿Cómo afectó la Conferencia de Berlín de 1884 a África?",
    "options": ["Le dio independencia inmediata", "Repartió África entre potencias europeas sin considerar etnias", "Unificó a todos los países africanos", "Fomentó la industrialización africana"],
    "correct": 1,
    "explanation": "La Conferencia de Berlín (1884) permitió a potencias europeas repartirse África sin consultar a sus pueblos. Las fronteras artificiales generan conflictos étnicos hasta hoy."
  },
  {
    "question": "¿Qué desencadenó la Revolución Rusa de 1917?",
    "options": ["Una invasión alemana", "Crisis económica, hambrunas y fracaso en la Primera Guerra Mundial", "Una sequía de 10 años", "El descubrimiento del petróleo"],
    "correct": 1,
    "explanation": "La Revolución Rusa fue provocada por crisis económica, hambrunas y el desastre bélico en la Primera Guerra Mundial. Lenin y los bolcheviques derrocaron al zar y crearon el primer estado comunista."
  },
  {
    "question": "¿Cuál fue el impacto de la caída de Constantinopla en 1453?",
    "options": ["Inició la Edad Moderna en Europa", "Acabó con el Imperio Bizantino e impulsó la búsqueda de nuevas rutas a Asia", "Unificó a los estados europeos contra los otomanos", "Provocó la invención de la imprenta"],
    "correct": 1,
    "explanation": "La caída de Constantinopla en 1453 ante los otomanos acabó con el Imperio Bizantino. Este evento impulsó a Europa a buscar nuevas rutas marítimas a Asia, iniciando la era de los descubrimientos."
  },
  {
    "question": "¿Cómo logró Gandhi la independencia de la India?",
    "options": ["Con una guerra militar", "Mediante la no violencia y desobediencia civil", "Aliándose con Japón", "Con una revolución comunista"],
    "correct": 1,
    "explanation": "Gandhi usó la no violencia y desobediencia civil, como la Marcha de la Sal (1930). Tras décadas de protestas, India se independizó del Reino Unido en 1947."
  },
  {
    "question": "¿Qué aportó la cultura olmeca a Mesoamérica?",
    "options": ["La escritura alfabética", "El calendario, escritura jeroglífica y cabezas colosales", "La pólvora", "El sistema decimal"],
    "correct": 1,
    "explanation": "Los olmecas (1500-400 a.C.) fueron la 'cultura madre' de Mesoamérica. Desarrollaron calendarios, escritura jeroglífica y las famosas cabezas colosales en el sur de México."
  },
  {
    "question": "¿Por qué Estados Unidos intervino en Vietnam?",
    "options": ["Para colonizar el país", "Para contener el comunismo según la Doctrina Truman", "Por petróleo", "Para apoyar a China"],
    "correct": 1,
    "explanation": "EE.UU. intervino en Vietnam para contener el comunismo (Doctrina Truman). Tras la derrota francesa en 1954, envió tropas hasta 1975, con 58,000 soldados muertos."
  },
  {
    "question": "¿Quiénes destacaron en el Siglo de Oro español?",
    "options": ["Dante, Petrarca, Boccaccio", "Shakespeare, Newton, Cromwell", "Cervantes, Velázquez, Lope de Vega", "Goethe, Kant, Beethoven"],
    "correct": 2,
    "explanation": "En el Siglo de Oro español (1492-1659) destacaron Cervantes (Don Quijote), Velázquez (Las Meninas) y Lope de Vega (1,800 obras teatrales), coincidiendo con el imperio global español."
  },
  {
    "question": "¿Qué hizo única a la Revolución Haitiana (1791-1804)?",
    "options": ["Fue la primera rebelión indígena en América", "Fue la primera rebelión esclava exitosa que creó una república negra", "Derrocó a Napoleón en Europa", "Unificó el Caribe"],
    "correct": 1,
    "explanation": "La Revolución Haitiana fue la primera rebelión esclava exitosa. Liderada por Toussaint Louverture, creó en 1804 la primera república negra independiente, inspirando movimientos abolicionistas."
  },
  {
    "question": "¿Cuál fue el mayor logro de la dinastía Ming?",
    "options": ["La invención de la brújula", "Las expediciones marítimas de Zheng He y la Gran Muralla", "La conquista de Europa", "La alianza con los mongoles"],
    "correct": 1,
    "explanation": "La dinastía Ming (1368-1644) reforzó la Gran Muralla y envió flotas de Zheng He (1405-1433) que llegaron a África. Luego, China se aisló del mundo."
  },
  {
    "question": "¿Qué métodos usó Martin Luther King en la lucha por los derechos civiles?",
    "options": ["Guerra armada", "Protestas pacíficas y discursos inspiradores", "Boicots económicos a Europa", "Alianza con la URSS"],
    "correct": 1,
    "explanation": "Martin Luther King usó protestas pacíficas, boicots (como el de autobuses de Montgomery) y discursos como 'I Have a Dream'. Logró la Ley de Derechos Civiles de 1964 en EE.UU."
  },
  {
    "question": "¿Por qué se creó la ONU en 1945?",
    "options": ["Para promover el comunismo", "Para evitar nuevas guerras mundiales tras el fracaso de la Liga de Naciones", "Para colonizar África", "Para regular Internet"],
    "correct": 1,
    "explanation": "La ONU se creó en 1945 para evitar nuevas guerras mundiales. 51 países firmaron su Carta en San Francisco, estableciendo un sistema de seguridad colectiva y cooperación internacional."
  },
  {
    "question": "¿Cómo surgió el Imperio Azteca?",
    "options": ["Por invasión española", "Los mexicas fundaron Tenochtitlán en 1325 y expandieron su dominio", "Por alianza con los mayas", "Como colonia romana"],
    "correct": 1,
    "explanation": "Los mexicas fundaron Tenochtitlán en 1325. Mediante alianzas y guerras, dominaron Mesoamérica hasta 1521, cuando Hernán Cortés los conquistó."
  },
  {
    "question": "¿Quién fue Hammurabi y por qué es importante?",
    "options": ["Faraón egipcio; construyó pirámides", "Rey babilonio; creó el primer código legal escrito", "Emperador romano; legalizó el cristianismo", "Profeta hebreo; escribió la Torá"],
    "correct": 1,
    "explanation": "Hammurabi, rey de Babilonia (1792-1750 a.C.), creó el primer código legal escrito con 282 leyes, incluyendo el principio de 'ojo por ojo', base del derecho posterior."
  },
  {
    "question": "¿Cuándo se descubrió América y por qué se llama así?",
    "options": ["1492; en honor a Cristóbal Colón", "1500; por América Latina", "1492; en honor a Américo Vespucio", "1519; por Fernando de Magallanes"],
    "correct": 2,
    "explanation": "Colón llegó a América el 12 de octubre de 1492. El nombre 'América' proviene de Américo Vespucio, quien demostró en 1507 que era un nuevo continente, no las Indias."
  },
  {
    "question": "¿Dónde nació el Renacimiento y qué lo caracterizó?",
    "options": ["En Roma; por la caída del Imperio", "En Florencia; por el humanismo y el arte clásico", "En París; por la revolución científica", "En Londres; por la industrialización"],
    "correct": 1,
    "explanation": "El Renacimiento nació en Florencia (siglo XIV). Revivió el arte y pensamiento clásico con figuras como Da Vinci y Miguel Ángel, priorizando el humanismo sobre el teocentrismo medieval."
  },
  {
    "question": "¿Qué provocó la Guerra de los Treinta Años (1618-1648)?",
    "options": ["Una disputa por el petróleo", "Conflictos religiosos entre protestantes y católicos en Europa", "Una invasión turca", "La lucha por el trono inglés"],
    "correct": 1,
    "explanation": "La Guerra de los Treinta Años fue un conflicto religioso y político en el Sacro Imperio Romano Germánico. Terminó con la Paz de Westfalia (1648), que estableció la soberanía de los estados-nación."
  },
  {
    "question": "¿Quiénes fueron los vikingos y hasta dónde llegaron?",
    "options": ["Mercaderes italianos; llegaron a África", "Guerreros nórdicos; llegaron a Terranova (Canadá), Bagdad y Constantinopla", "Mongoles; conquistaron Europa", "Exploradores chinos; descubrieron Australia"],
    "correct": 1,
    "explanation": "Los vikingos (793-1066 d.C.) fueron guerreros nórdicos que invadieron Europa con barcos veloces. Llegaron a Terranova (Canadá), Bagdad y Constantinopla, fundando asentamientos como Normandía."
  },
  {
    "question": "¿Cómo afectó la Peste Negra a la economía medieval?",
    "options": ["Aumentó la producción agrícola", "Redució la población y aumentó los salarios por escasez de mano de obra", "Eliminó el comercio por completo", "Fortaleció el poder de la Iglesia"],
    "correct": 1,
    "explanation": "La muerte de un tercio de la población europea aumentó los salarios por escasez de trabajadores, debilitó el feudalismo y aceleró el surgimiento del capitalismo."
  },
  {
    "question": "¿Por qué fracasó la Liga de las Naciones?",
    "options": ["Porque EE.UU. no se unió y carecía de poder coercitivo", "Porque fue reemplazada por la ONU en 1920", "Porque logró evitar todas las guerras", "Porque era demasiado popular"],
    "correct": 0,
    "explanation": "La Liga de las Naciones fracasó porque EE.UU. no se unió y carecía de poder para imponer sanciones. No pudo detener la invasión japonesa de Manchuria (1931) ni el rearme alemán."
  },
  {
    "question": "¿Cuál fue el primer imperio de la historia?",
    "options": ["Imperio Romano", "Imperio Egipcio", "Imperio Acadio", "Imperio Persa"],
    "correct": 2,
    "explanation": "El Imperio Acadio (2334-2154 a.C.) en Mesopotamia, fundado por Sargón I, fue el primer imperio de la historia, unificando ciudades sumerias bajo un gobierno centralizado."
  },
  {
    "question": "¿Qué papel jugó Einstein en la Segunda Guerra Mundial?",
    "options": ["Fue general del ejército aliado", "Alertó a Roosevelt sobre la bomba atómica nazi", "Inventó el avión a reacción", "Dirigió el Holocausto"],
    "correct": 1,
    "explanation": "Einstein alertó al presidente Roosevelt en 1939 sobre el riesgo de una bomba atómica nazi. Aunque no participó en el Proyecto Manhattan, su ecuación E=mc² fue clave para su desarrollo."
  },
  {
    "question": "¿Dónde se originó la agricultura?",
    "options": ["América del Sur", "Creciente Fértil (Medio Oriente)", "Norte de Europa", "Asia Oriental"],
    "correct": 1,
    "explanation": "La agricultura surgió hace 12,000 años en el Creciente Fértil (actual Medio Oriente). Cultivos como trigo y cebada permitieron el sedentarismo y el surgimiento de civilizaciones."
  },
  {
    "question": "¿Quién fue Marco Polo y qué descubrió?",
    "options": ["Conquistó América", "Mercader veneciano que viajó a China por la Ruta de la Seda", "Descubrió Australia", "Inventó la brújula"],
    "correct": 1,
    "explanation": "Marco Polo (1254-1324) fue un mercader veneciano que viajó a China por la Ruta de la Seda. Su libro sobre la corte de Kublai Kan inspiró futuras exploraciones europeas."
  },
  {
    "question": "¿Cuándo se abolió el apartheid en Sudáfrica?",
    "options": ["1948", "1960", "1991", "2000"],
    "correct": 2,
    "explanation": "El apartheid se abolió oficialmente en 1991. Nelson Mandela fue liberado en 1990 y elegido presidente en 1994 en las primeras elecciones multirraciales de Sudáfrica."
  },
  {
    "question": "¿Qué fue la Guerra Fría Cultural?",
    "options": ["Una guerra de religiones", "Competencia en ciencia, deportes y arte entre EE.UU. y URSS", "Una invasión cultural de África", "Un movimiento artístico en París"],
    "correct": 1,
    "explanation": "La Guerra Fría Cultural fue la competencia entre EE.UU. y URSS en ciencia, deportes y arte: Carrera Espacial, Olimpiadas boicoteadas (1980/1984) y debates ideológicos."
  },
  {
    "question": "¿Cómo surgió el islam?",
    "options": ["En la India por Siddhartha Gautama", "En Arabia por el profeta Mahoma en el siglo VII", "En Roma por Constantino", "En Grecia por Aristóteles"],
    "correct": 1,
    "explanation": "El islam surgió en La Meca en 610 d.C. cuando Mahoma recibió revelaciones. Tras la Hégira (622), unificó tribus árabes bajo el Corán, expandiéndose desde España hasta la India en 100 años."
  },
  {
    "question": "¿Por qué se construyó el Muro de Berlín?",
    "options": ["Para proteger a Occidente del comunismo", "Para detener la fuga de población desde la RDA comunista a Occidente", "Como monumento a Stalin", "Para dividir a las dos Alemanias tras la Segunda Guerra"],
    "correct": 1,
    "explanation": "El Muro de Berlín se construyó en 1961 para detener la fuga de ciudadanos de la República Democrática Alemana (comunista) hacia Berlín Occidental. Murieron 140 personas intentando cruzarlo."
  },
  {
    "question": "¿Quién fue Alejandro Magno?",
    "options": ["Emperador romano; construyó el Coliseo", "Rey de Macedonia; conquistó el Imperio Persa y fundó Alejandría", "Faraón egipcio; construyó pirámides", "General chino; unificó Asia"],
    "correct": 1,
    "explanation": "Alejandro Magno (356-323 a.C.) fue rey de Macedonia. Conquistó el Imperio Persa en 10 años y fundó 70 ciudades, incluyendo Alejandría en Egipto, fusionando culturas griegas y orientales."
  },
  {
    "question": "¿Cuál fue el rol de la mujer en la Revolución Industrial?",
    "options": ["Solo se dedicaban al hogar", "Trabajaron en fábricas con salarios menores, impulsando movimientos sufragistas", "Fueron generales en guerras", "Dirigieron gobiernos europeos"],
    "correct": 1,
    "explanation": "Las mujeres trabajaron en fábricas textiles con salarios 50% menores que los de los hombres. Esto impulsó movimientos sufragistas, como el liderado por Emmeline Pankhurst en Reino Unido."
  },
  {
    "question": "¿Dónde se libró la Batalla de las Termópilas?",
    "options": ["Atenas", "Termópilas, Grecia", "Roma", "Cartago"],
    "correct": 1,
    "explanation": "La Batalla de las Termópilas ocurrió en 480 a.C. en el desfiladero griego de Termópilas. 300 espartanos de Leónidas resistieron a 200,000 persas de Jerjes I, simbolizando el sacrificio heroico."
  },
  {
    "question": "¿Qué causó la Gran Depresión de 1929?",
    "options": ["Una plaga mundial", "El crash bursátil en Wall Street y políticas económicas erróneas", "La invasión de EE.UU. a Europa", "La caída del Imperio Británico"],
    "correct": 1,
    "explanation": "La Gran Depresión comenzó con el colapso de Wall Street en 1929. El desempleo llegó al 25% en EE.UU., afectando a millones hasta el inicio de la Segunda Guerra Mundial."
  },
  {
    "question": "¿Cómo terminó la Guerra Fría?",
    "options": ["Con una guerra nuclear", "Con la caída del Muro de Berlín (1989) y la disolución de la URSS (1991)", "Con la invasión de EE.UU. a Moscú", "Por un tratado de paz en 1975"],
    "correct": 1,
    "explanation": "La Guerra Fría terminó con la caída del Muro de Berlín en 1989 y la disolución de la URSS en 1991, tras las reformas de Gorbachov (Perestroika y Glásnost) y la presión económica occidental."
  },
  {
    "question": "¿Quiénes fueron los samuráis?",
    "options": ["Mercaderes chinos", "Guerreros japoneses que seguían el código bushidō", "Sacerdotes egipcios", "Exploradores vikingos"],
    "correct": 1,
    "explanation": "Los samuráis fueron guerreros japoneses (siglo X-XIX) que seguían el bushidō (código de honor). Perdieron poder tras la Restauración Meiji (1868), que modernizó Japón."
  },
  {
    "question": "¿Por qué es importante la Piedra Rosetta?",
    "options": ["Contiene la primera constitución del mundo", "Permitió descifrar los jeroglíficos egipcios", "Es la primera moneda acuñada", "Describe la invención de la rueda"],
    "correct": 1,
    "explanation": "La Piedra Rosetta (descubierta en 1799) tiene un decreto en jeroglíficos, demótico y griego. Champollion la usó en 1822 para descifrar la escritura egipcia, revolucionando la egiptología."
  },
  {
    "question": "¿Cuándo se inventó la rueda?",
    "options": ["5000 a.C. en Egipto", "3500 a.C. en Mesopotamia", "2000 a.C. en China", "1000 a.C. en Grecia"],
    "correct": 1,
    "explanation": "La rueda se inventó hacia el 3500 a.C. en Mesopotamia (actual Irak). Inicialmente para alfarería, su uso en carros (2000 a.C.) revolucionó el transporte y el comercio."
  },
  {
    "question": "¿Qué fue el Plan Marshall?",
    "options": ["Un plan militar para invadir la URSS", "Programa estadounidense para reconstruir Europa tras la Segunda Guerra Mundial", "Una alianza comercial con China", "Un tratado de desarme nuclear"],
    "correct": 1,
    "explanation": "El Plan Marshall (1948-1952) fue un programa de EE.UU. que donó $13 mil millones para reconstruir Europa Occidental, conteniendo la influencia soviética durante la Guerra Fría."
  },
  {
    "question": "¿Dónde se originó la filosofía estoica?",
    "options": ["Roma", "Egipto", "Grecia helenística con Zenón de Citio", "Persia"],
    "correct": 2,
    "explanation": "La filosofía estoica surgió en la Grecia helenística del siglo III a.C. con Zenón de Citio. Enseñaba autocontrol y virtud, influyendo en emperadores romanos como Marco Aurelio."
  },
  {
    "question": "¿Quién fue Carlomagno?",
    "options": ["Rey de Inglaterra; firmó la Carta Magna", "Rey franco; unificó Europa Occidental y promovió el Renacimiento carolingio", "Emperador chino; construyó la Gran Muralla", "Papa medieval; lanzó las Cruzadas"],
    "correct": 1,
    "explanation": "Carlomagno (742-814) fue rey franco que unificó Europa Occidental como emperador del Sacro Imperio Romano Germánico. Promovió el Renacimiento carolingio con escuelas y arte."
  },
  {
    "question": "¿Cuál fue la primera democracia moderna?",
    "options": ["Francia en 1789", "Estados Unidos tras su independencia en 1776", "Bolivia en 1825", "Reino Unido en 1215"],
    "correct": 1,
    "explanation": "Estados Unidos fue la primera democracia moderna tras su independencia en 1776, aunque inicialmente solo votaban hombres blancos propietarios. Su Constitución de 1787 estableció separación de poderes."
  },
  {
    "question": "¿Por qué se disolvió Yugoslavia?",
    "options": ["Por invasión soviética", "Por tensiones étnicas tras la muerte de Tito, llevando a guerras", "Por una unión con la UE", "Por descubrimiento de petróleo"],
    "correct": 1,
    "explanation": "Yugoslavia se disolvió por tensiones étnicas tras la muerte de Tito en 1980. Guerras como la de Bosnia (1992-1995) fragmentaron el país en siete naciones independientes."
  },
  {
    "question": "¿Cómo influyó la imprenta en la Reforma Protestante?",
    "options": ["La imprenta no tuvo impacto", "Permitió difundir masivamente las 95 Tesis de Lutero", "Destruyó todas las biblias", "Fortaleció el poder del Papa"],
    "correct": 1,
    "explanation": "La imprenta permitió difundir las 95 Tesis de Lutero en 1517. En 50 años se imprimieron 500,000 biblias en lenguas vernáculas, debilitando el control de la Iglesia Católica."
  },
  {
    "question": "¿Quiénes construyeron Machu Picchu?",
    "options": ["Mayas", "Aztecas", "Incas", "Olmecas"],
    "correct": 2,
    "explanation": "Machu Picchu fue construida por los incas bajo el emperador Pachacútec en el siglo XV. Fue un centro religioso y astronómico en los Andes peruanos, abandonado tras la conquista española."
  },
  {
    "question": "¿Qué fue el 'Descubrimiento del Pacífico'?",
    "options": ["Llegada de Colón a América", "Avistamiento del océano por Vasco Núñez de Balboa desde Panamá en 1513", "Navegación de Magallanes alrededor del mundo", "Conquista de Perú por Pizarro"],
    "correct": 1,
    "explanation": "El 'Descubrimiento del Pacífico' fue la expedición de Vasco Núñez de Balboa, que avistó el océano desde Panamá en 1513. Lo llamó 'Mar del Sur', abriendo rutas para futuras exploraciones."
  },
  {
    "question": "¿Cuándo se fundó la Iglesia Anglicana?",
    "options": ["1054", "1517", "1534", "1648"],
    "correct": 2,
    "explanation": "La Iglesia Anglicana se fundó en 1534 cuando Enrique VIII rompió con el Papa para divorciarse de Catalina de Aragón. El Acta de Supremacía lo nombró 'Cabeza de la Iglesia de Inglaterra'."
  },
  {
    "question": "¿Dónde surgió la civilización fenicia?",
    "options": ["Grecia", "Líbano actual", "Egipto", "España"],
    "correct": 1,
    "explanation": "La civilización fenicia surgió en el actual Líbano (1200-500 a.C.). Fueron expertos navegantes que crearon el primer alfabeto fonético (22 letras) y fundaron Cartago."
  },
  {
    "question": "¿Qué provocó la Revolución Cubana?",
    "options": ["Una invasión estadounidense", "La dictadura de Batista y la desigualdad social", "Una guerra con México", "La caída del Muro de Berlín"],
    "correct": 1,
    "explanation": "La Revolución Cubana fue provocada por la dictadura de Batista y la desigualdad social. Fidel Castro y el Che Guevara tomaron La Habana en 1959, estableciendo el primer estado comunista en América."
  },
  {
    "question": "¿Quién fue Julio César?",
    "options": ["Emperador romano que construyó el Coliseo", "Militar romano que conquistó la Galia y fue asesinado en 44 a.C.", "Filósofo griego; alumno de Sócrates", "Rey de Macedonia; conquistó Persia"],
    "correct": 1,
    "explanation": "Julio César (100-44 a.C.) fue un militar romano que conquistó la Galia. Su cruce del Rubicón desencadenó una guerra civil. Fue dictador hasta su asesinato en los Idus de Marzo."
  },
  {
    "question": "¿Por qué se extinguieron los dinosaurios?",
    "options": ["Por una plaga viral", "Por el impacto de un asteroide en Chicxulub (México) hace 66 millones de años", "Por la evolución humana", "Por una erupción volcánica en Islandia"],
    "correct": 1,
    "explanation": "Los dinosaurios se extinguieron por el impacto de un asteroide en Chicxulub (México) hace 66 millones de años. Causó incendios, tsunamis y un 'invierno nuclear' que eliminó el 75% de las especies."
  },
  {
    "question": "¿Cuál fue el primer país en industrializarse?",
    "options": ["Francia", "Alemania", "Estados Unidos", "Reino Unido"],
    "correct": 3,
    "explanation": "El Reino Unido fue el primer país en industrializarse en el siglo XVIII. Inventos como la máquina de vapor de Watt y fábricas textiles en Manchester impulsaron su economía global."
  },
  {
    "question": "¿Cómo afectó la peste a la Atenas de Pericles?",
    "options": ["La hizo más poderosa", "Mató a un tercio de su población, incluido Pericles, debilitándola en la guerra", "La unió a Esparta", "Provocó la invención de la democracia"],
    "correct": 1,
    "explanation": "La peste ateniense (430-426 a.C.) mató a un tercio de la población, incluido Pericles. Esto debilitó a Atenas en la Guerra del Peloponeso, facilitando la victoria espartana."
  },
  {
    "question": "¿Quiénes fueron los padres fundadores de EE.UU.?",
    "options": ["Napoleón, Robespierre, Danton", "Washington, Jefferson y Franklin", "Bolívar, San Martín, O'Higgins", "Lenin, Trotsky, Stalin"],
    "correct": 1,
    "explanation": "Los padres fundadores de EE.UU. fueron Washington, Jefferson y Franklin. Redactaron la Declaración de Independencia (1776) y la Constitución (1787), estableciendo un sistema republicano."
  },
  {
    "question": "¿Qué fue la Comuna de París?",
    "options": ["Un festival cultural anual", "Un gobierno socialista que gobernó París en 1871 tras la derrota ante Prusia", "Una revuelta religiosa en la Edad Media", "Una colonia francesa en África"],
    "correct": 1,
    "explanation": "La Comuna de París fue un gobierno socialista que gobernó París en 1871 tras la derrota francesa ante Prusia. Duró 72 días antes de ser aplastada, inspirando movimientos obreros posteriores."
  },
  {
    "question": "¿Dónde se originó la escritura jeroglífica?",
    "options": ["Mesopotamia", "China", "Antiguo Egipto", "India"],
    "correct": 2,
    "explanation": "La escritura jeroglífica surgió en el Antiguo Egipto alrededor del 3300 a.C. Combinaba símbolos fonéticos e ideográficos, usados en templos y tumbas hasta el siglo IV d.C."
  },
  {
    "question": "¿Por qué se llamó 'Siglo de las Luces' al XVIII?",
    "options": ["Por el descubrimiento de la electricidad", "Por la Ilustración, que priorizó la razón sobre la superstición", "Por la invención del faro", "Por la moda de las velas en palacios"],
    "correct": 1,
    "explanation": "El siglo XVIII se llamó 'Siglo de las Luces' por la Ilustración, movimiento que promovía la razón, la ciencia y los derechos humanos. Filósofos como Voltaire y Rousseau inspiraron revoluciones."
  },
  {
    "question": "¿Cuál fue el imperio más extenso de la historia?",
    "options": ["Imperio Mongol", "Imperio Romano", "Imperio Otomano", "Imperio Británico"],
    "correct": 3,
    "explanation": "El Imperio Británico fue el más extenso: en 1920 abarcaba 35 millones de km² y 500 millones de habitantes, incluyendo India, Canadá, Australia y partes de África."
  },
  {
    "question": "¿Qué consecuencias tuvo la Revolución Digital?",
    "options": ["El regreso a la agricultura", "La invención de Internet e informática personal, transformando la comunicación y la economía", "La desaparición de los libros", "La unificación de todos los países"],
    "correct": 1,
    "explanation": "La Revolución Digital, con la invención de Internet (1983) y la computadora personal, transformó la comunicación, la economía y la sociedad, generando desafíos como la brecha digital y la desinformación."
  }
];

        // Variables del juego
        let currentQuestionIndex = 0;
        let score = 0;
        let timer;
        let timeLeft = 60;
        let selectedQuestions = [];
        let userAnswers = Array(20).fill(null);
        let gameActive = false;

        // Elementos del DOM
        const startScreen = document.getElementById('start-screen');
        const gameScreen = document.getElementById('game-screen');
        const resultsScreen = document.getElementById('results-screen');
        const startBtn = document.getElementById('start-btn');
        const endBtn = document.getElementById('end-btn');
        const nextBtn = document.getElementById('next-btn');
        const restartBtn = document.getElementById('restart-btn');
        const questionText = document.getElementById('question-text');
        const optionsContainer = document.getElementById('options-container');
        const feedback = document.getElementById('feedback');
        const timerDisplay = document.getElementById('timer');
        const currentQuestionDisplay = document.getElementById('current-question');
        const currentScoreDisplay = document.getElementById('current-score');
        const progressFill = document.getElementById('progress-fill');
        const finalScoreDisplay = document.getElementById('final-score');
        const totalAnsweredDisplay = document.getElementById('total-answered');
        const correctAnswersDisplay = document.getElementById('correct-answers');
        const incorrectAnswersDisplay = document.getElementById('incorrect-answers');
        const unansweredDisplay = document.getElementById('unanswered');
        const percentageDisplay = document.getElementById('percentage');

        // Inicializar eventos
        startBtn.addEventListener('click', startGame);
        endBtn.addEventListener('click', endGame);
        nextBtn.addEventListener('click', nextQuestion);
        restartBtn.addEventListener('click', restartGame);

        // Función para iniciar el juego
        function startGame() {
            // Seleccionar 20 preguntas aleatorias del banco
            selectedQuestions = [...questionBank]
                .sort(() => Math.random() - 0.5)
                .slice(0, 20);
            
            // Reiniciar variables
            currentQuestionIndex = 0;
            score = 0;
            userAnswers = Array(20).fill(null);
            
            // Cambiar pantallas
            startScreen.classList.remove('active-screen');
            gameScreen.classList.add('active-screen');
            resultsScreen.classList.remove('active-screen');
            
            // Iniciar primera pregunta
            loadQuestion();
            gameActive = true;
        }

        // Función para cargar una pregunta
        function loadQuestion() {
            // Reiniciar temporizador
            timeLeft = 60;
            updateTimerDisplay();
            
            // Detener temporizador anterior si existe
            if (timer) clearInterval(timer);
            
            // Iniciar nuevo temporizador
            timer = setInterval(updateTimer, 1000);
            
            // Actualizar indicadores
            currentQuestionDisplay.textContent = currentQuestionIndex + 1;
            currentScoreDisplay.textContent = score;
            progressFill.style.width = `${(currentQuestionIndex / 20) * 100}%`;
            
            // Cargar pregunta actual
            const currentQuestion = selectedQuestions[currentQuestionIndex];
            questionText.innerHTML = currentQuestion.question;
            
            // Limpiar opciones anteriores
            optionsContainer.innerHTML = '';
            
            // Crear nuevas opciones
            const optionLetters = ['A', 'B', 'C', 'D'];
            currentQuestion.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.classList.add('option');
                optionElement.innerHTML = `
                    <div class="option-letter">${optionLetters[index]}</div>
                    <div class="option-text">${option}</div>
                `;
                
                optionElement.addEventListener('click', () => selectOption(index));
                
                // Si ya había una respuesta seleccionada para esta pregunta
                if (userAnswers[currentQuestionIndex] === index) {
                    optionElement.classList.add('selected');
                    
                    // Si ya se mostró la respuesta correcta
                    if (userAnswers[currentQuestionIndex] !== null && !gameActive) {
                        if (index === currentQuestion.correct) {
                            optionElement.classList.add('correct');
                        } else {
                            optionElement.classList.add('incorrect');
                        }
                    }
                }
                
                optionsContainer.appendChild(optionElement);
            });
            
            // Limpiar retroalimentación
            feedback.classList.remove('correct', 'incorrect');
            feedback.textContent = '';
            feedback.style.display = 'none';
            
            // Deshabilitar siguiente pregunta hasta que se responda
            nextBtn.disabled = true;
            
            // Si ya había una respuesta para esta pregunta
            if (userAnswers[currentQuestionIndex] !== null) {
                showFeedback();
                nextBtn.disabled = false;
            }
        }

        // Función para seleccionar una opción
        function selectOption(optionIndex) {
            if (!gameActive) return;
            
            // Desmarcar todas las opciones
            document.querySelectorAll('.option').forEach(option => {
                option.classList.remove('selected');
            });
            
            // Marcar la opción seleccionada
            const selectedOption = document.querySelectorAll('.option')[optionIndex];
            selectedOption.classList.add('selected');
            
            // Guardar respuesta del usuario
            userAnswers[currentQuestionIndex] = optionIndex;
            
            // Mostrar retroalimentación
            showFeedback();
            
            // Habilitar siguiente pregunta
            nextBtn.disabled = false;
        }

        // Función para mostrar retroalimentación
        function showFeedback() {
            const currentQuestion = selectedQuestions[currentQuestionIndex];
            const userAnswer = userAnswers[currentQuestionIndex];
            
            // Marcar respuesta correcta e incorrecta
            document.querySelectorAll('.option').forEach((option, index) => {
                if (index === currentQuestion.correct) {
                    option.classList.add('correct');
                } else if (index === userAnswer && index !== currentQuestion.correct) {
                    option.classList.add('incorrect');
                }
            });
            
            // Mostrar mensaje de retroalimentación
            if (userAnswer === currentQuestion.correct) {
                feedback.textContent = `¡Correcto! ${currentQuestion.explanation}`;
                feedback.classList.remove('incorrect');
                feedback.classList.add('correct');
                
                // Incrementar puntuación si es la primera vez que responde correctamente
                if (gameActive) {
                    score += 5;
                    currentScoreDisplay.textContent = score;
                }
            } else {
                feedback.textContent = `Incorrecto. La respuesta correcta es: ${currentQuestion.options[currentQuestion.correct]}. ${currentQuestion.explanation}`;
                feedback.classList.remove('correct');
                feedback.classList.add('incorrect');
            }
            
            feedback.style.display = 'block';
            
            // Detener el juego para esta pregunta
            gameActive = false;
            clearInterval(timer);
        }

        // Función para actualizar el temporizador
        function updateTimer() {
            timeLeft--;
            updateTimerDisplay();
            
            if (timeLeft <= 0) {
                clearInterval(timer);
                
                // Si no se ha respondido, marcar como no respondida
                if (userAnswers[currentQuestionIndex] === null) {
                    userAnswers[currentQuestionIndex] = -1; // -1 significa no respondida
                    showFeedback();
                    nextBtn.disabled = false;
                }
            }
        }

        // Función para actualizar la visualización del temporizador
        function updateTimerDisplay() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            // Cambiar color cuando quede poco tiempo
            if (timeLeft <= 10) {
                timerDisplay.style.color = '#e53935';
            } else {
                timerDisplay.style.color = '#283593';
            }
        }

        // Función para ir a la siguiente pregunta
        function nextQuestion() {
            currentQuestionIndex++;
            
            if (currentQuestionIndex < 20) {
                gameActive = true;
                loadQuestion();
            } else {
                endGame();
            }
        }

        // Función para terminar el juego
        function endGame() {
            clearInterval(timer);
            
            // Cambiar a pantalla de resultados
            gameScreen.classList.remove('active-screen');
            resultsScreen.classList.add('active-screen');
            
            // Calcular resultados
            let correctCount = 0;
            let incorrectCount = 0;
            let unansweredCount = 0;
            
            for (let i = 0; i < 20; i++) {
                if (userAnswers[i] === null || userAnswers[i] === -1) {
                    unansweredCount++;
                } else if (userAnswers[i] === selectedQuestions[i].correct) {
                    correctCount++;
                } else {
                    incorrectCount++;
                }
            }
            
            // Actualizar puntuación final (5 puntos por respuesta correcta)
            const finalScore = correctCount * 5;
            
            // Actualizar elementos de resultados
            finalScoreDisplay.textContent = finalScore;
            totalAnsweredDisplay.textContent = `${20 - unansweredCount}/20`;
            correctAnswersDisplay.textContent = correctCount;
            incorrectAnswersDisplay.textContent = incorrectCount;
            unansweredDisplay.textContent = unansweredCount;
            
            const percentage = ((correctCount / 20) * 100).toFixed(1);
            percentageDisplay.textContent = `${percentage}%`;
        }

        // Función para reiniciar el juego
        function restartGame() {
            startScreen.classList.add('active-screen');
            resultsScreen.classList.remove('active-screen');
            gameScreen.classList.remove('active-screen');
        }

        // Inicializar MathJax para renderizar LaTeX
        MathJax = {
            tex: {
                inlineMath: [['$', '$'], ['\\(', '\\)']]
            },
            startup: {
                pageReady: () => {
                    return MathJax.startup.defaultPageReady();
                }
            }
        };
    