export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Modelos macroeconómicos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Modelo del flujo circular',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición del modelo de flujo circular económico ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Actores principales',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Factores adicionales: la globalización y otras variables influyentes',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Cálculo del PIB',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: '',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: '',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: '',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: '',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: '',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: '',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: '',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Zevallos Avilés, G. (2016). Macroeconomía fundamental I. Ediciones Pirámide.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/49174',
    },
    {
      referencia:
        'Tavera Camacho, I. (2020). Panorámica de la macroeconomía. Grupo Editorial Éxodo.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/130333',
    },
    {
      referencia:
        'Sánchez Campillo, J. (2015). Macroeconomía: cuestiones y ejercicios. Difusora Larousse - Ediciones Pirámide.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/49019?page=300',
    },
    {
      referencia:
        'Eggers, F. G. (2016). Elementos de micro y macroeconomía. Editorial Maipue.',
      link:
        'https://elibro.net/es/lc/tecnologicadeloriente/titulos/77331Sánchez',
    },
    {
      referencia:
        'Torres Chacón, J. (2016). Apuntes de macroeconomía avanzada. Servicio de Publicaciones y Divulgación Científica de la Universidad de Málaga.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/60697',
    },
    {
      referencia:
        'Sánchez Campillo, J. (2015). Macroeconomía: cuestiones y ejercicios. Difusora Larousse - Ediciones Pirámide.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/49019?page=300',
    },
    {
      referencia:
        'Rodríguez Galván, J. Y. (2023). Macroeconomía: teoría y ejercicios. Grupo Editorial Éxodo.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/234711',
    },
  ],
  glosario: [
    {
      termino: 'Ahorro',
      significado:
        'Parte del ingreso que no se destina al consumo. En macroeconomía, el ahorro es un factor necesario para el crecimiento económico, dado que permite financiar la inversión en capital físico y humano.',
    },
    {
      termino: 'Ciclos económicos',
      significado:
        'Son fluctuaciones recurrentes de la actividad económica a lo largo del tiempo, que se dividen en fases de expansión y recesión. Los ciclos pueden ser de corta, media o larga duración.',
    },
    {
      termino: 'Demanda Agregada (DA)',
      significado:
        'Es la suma total de la demanda de bienes y servicios en una economía a diferentes niveles de precios en un período determinado. La curva de demanda agregada tiene pendiente negativa, lo que refleja una relación inversa entre el precio y la cantidad demandada.',
    },
    {
      termino: 'Economía cerrada',
      significado:
        'Una economía que no interactúa con otras economías en términos de comercio internacional o movimientos de capital. Solo se produce y consume dentro de sus fronteras.',
    },
    {
      termino: 'Economía de mercado',
      significado:
        'Sistema económico donde las decisiones de producción y consumo, son dirigidas por el mercado, es decir, por la oferta y la demanda, sin intervención directa del gobierno.',
    },
    {
      termino: 'Oferta Agregada (OA)',
      significado:
        'Representa la cantidad total de bienes y servicios que las empresas están dispuestas a producir y vender con diferentes niveles de precios, en un período determinado.',
    },
    {
      termino: 'Política fiscal',
      significado:
        'Conjunto de decisiones que toma el gobierno respecto al gasto público y la recaudación de impuestos. La política fiscal tiene un impacto directo en la demanda agregada y en la actividad económica.',
    },
    {
      termino: 'Política monetaria',
      significado:
        'Conjunto de medidas adoptadas por el banco central de un país, para controlar la cantidad de dinero en circulación y las tasas de interés, con el fin de regular la inflación, el empleo y el crecimiento económico.',
    },
    {
      termino: 'Producto Bruto Interno (PIB)',
      significado:
        'Medición del valor total de los bienes y servicios producidos en una economía durante un periodo específico. El PIB puede medirse a través del enfoque del gasto, la renta o la producción.',
    },
    {
      termino: 'Producto Nacional Bruto (PNB)',
      significado:
        'Mide el valor total de la producción de bienes y servicios realizada por los residentes de un pa��s, tanto dentro como fuera de sus fronteras. Se diferencia del PIB en que incluye la producción de los residentes nacionales en el extranjero y excluye la de los extranjeros en el país.',
    },
  ],
  complementario: [],
  creditos: [],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
