<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Modelo de crecimiento económico'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/1.png', alt='')
      .col-sm-12.col-lg-8
        .bg-10.p-4
          p.mb-0 El crecimiento económico es necesario para el desarrollo de cualquier país, puesto que permite mejorar el bienestar social, reducir la pobreza, y fortalecer las instituciones democráticas. La ausencia de crecimiento económico puede generar desigualdad, desempleo y estancamiento, mientras que su existencia permite un avance en la calidad de vida de los ciudadanos. Comprender las razones detrás del crecimiento económico, es clave para formular políticas que fomenten su sostenibilidad. A través de diversos modelos económicos, los economistas han intentado explicar qué factores impulsan el crecimiento y cómo las economías pueden mantenerlo a lo largo del tiempo. Estos modelos, aunque simplificados, ofrecen herramientas para entender las relaciones claves entre variables económicas, como el capital, el trabajo, y la tecnología.
    
    #t_3_1.titulo-segundo(data-aos='fade-up')
      h2 #[span 3.1] Definición del modelo de crecimiento económico
    p.mb-4(data-aos='fade-up') El modelo de crecimiento económico se refiere a las teorías y representaciones matemáticas que buscan explicar cómo y por qué, las economías crecen a lo largo del tiempo. Estos modelos analizan la relación entre los principales factores de producción (trabajo, capital y tecnología) y su influencia en la producción total de bienes y servicios de un país. En términos generales, el objetivo es comprender cómo se acumulan estos factores, cómo se distribuyen y cómo se pueden mejorar para fomentar el crecimiento sostenido.
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-8
        .bg-9.p-4
          p.mb-4 Uno de los enfoques más influyentes, es el modelo neoclásico de crecimiento, desarrollado por Robert Solow y Trevor Swan. Este modelo postula que el crecimiento económico depende, principalmente, de tres factores:
          p.mb-4.ml-cus-1 El trabajo #[b (L)]   El capital #[b (K)]    La tecnología #[b (A)]
          p.mb-0 Según este enfoque, los aumentos en la acumulación de capital y trabajo, combinados con mejoras tecnológicas, conducen a un aumento en la producción total de una economía. Sin embargo, a medida que estos factores se incrementan, los rendimientos marginales tienden a disminuir, lo que implica que la acumulación de más factores no necesariamente resultará en un crecimiento infinito.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/2.png', alt='')

    p.mb-5(data-aos='fade-up') A lo largo de los años, los modelos de crecimiento se han dividido en modelos exógenos y modelos endógenos, los cuales abordan de manera diferente la cuestión de la causa del crecimiento.
    #t_3_2.titulo-segundo(data-aos='fade-up')
      h2 #[span 3.2] Tipos de crecimiento económico 
    p.mb-4.fw-bold Los tipos de crecimiento económico son:
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t3/3.png')
      .col-sm-12.col-lg-7
        AcordionA(tipo='b')
          div(titulo='Modelos exógenos')
            p.mb-0 Estos modelos, como el de Solow, postulan que el crecimiento es impulsado por factores externos a la economía, como el progreso tecnológico, que se considera una variable exógena. En este tipo de modelos, el crecimiento económico depende en gran medida, de factores fuera del control directo de las políticas económicas.
          div(titulo='Modelos endógenos')
            p.mb-0 Los modelos endógenos, como el modelo de Romero y Lucas, sugieren que el crecimiento puede ser impulsado por factores internos de la economía, tales como el capital humano, la innovación, y las inversiones en tecnología. En este enfoque, las decisiones de política económica y las inversiones internas, tienen un impacto directo sobre la tasa de crecimiento, lo que implica que el crecimiento puede ser autoalimentado y sostenido por las características de la economía misma.
    .bg-10.p-4.mb-5
      p.mb-0 Los modelos exógenos y modelos endógenos, también permiten comprender cómo se da el crecimiento a lo largo del tiempo. Mientras que los modelos exógenos atribuyen el crecimiento a factores externos (como el progreso tecnológico), los modelos endógenos sugieren que la economía puede generar su propio crecimiento, a través de la innovación, el desarrollo del capital humano, y las políticas económicas internas.

    #t_3_3.titulo-segundo(data-aos='fade-up')
      h2 #[span 3.3] Factores que impulsan el crecimiento económico
    p.mb-4(data-aos='fade-up') El crecimiento económico está impulsado por diversos factores que actúan de manera conjunta, para mejorar la capacidad productiva de una economía. Entre los principales factores que impulsan el crecimiento económico, se incluyen:
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-8
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/t3/4.svg')
             
          .tarjeta.bg-10.p-3(x="17%" y="75%" numero="+")
            p.mb-0 La inversión en infraestructura y tecnología, es necesaria para mejorar la productividad y permitir que la economía se expanda. El ahorro interno también representa un punto importante, debido a que los recursos que se ahorran son destinados a la inversión en proyectos productivos. Una tasa de inversión elevada, facilita la creación de nuevos activos productivos y, por ende, el crecimiento.

          .tarjeta.bg-10.p-3(x="50%" y="75%" numero="+")
            p.mb-0 La innovación es uno de los principales motores del crecimiento económico. El desarrollo de nuevas tecnologías, aumenta la productividad de los factores de producción, permite la creación de nuevos productos y servicios, y mejora la competitividad de una economía. La tecnología incrementa la eficiencia y, a su vez, puede abrir nuevas oportunidades de negocio y sectores de crecimiento.
          
          .tarjeta.bg-10.p-3(x="83%" y="75%" numero="+")
            p.mb-0 La estabilidad política y social, hace parte del crecimiento económico. Un entorno seguro y predecible fomenta la inversión, reduce los riesgos y aumenta la confianza de los inversores. La democracia, el respeto a los derechos de propiedad y la ausencia de corrupción, son factores que favorecen un clima de negocios adecuado para el crecimiento.

    #t_3_4.titulo-segundo(data-aos='fade-up')
      h2 #[span 3.4] Ciclos económicos
    p.mb-4(data-aos='fade-up') El crecimiento económico no es un proceso constante, sino que experimenta fluctuaciones a corto y largo plazo, conocidas como ciclos económicos. Estos ciclos incluyen:
    TabsC.color-terciario.mb-5(data-aos='fade-up')
      .py-4.py-md-5.bg-11.p-5(titulo="Ciclos a corto plazo")
        .row
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/t3/5.png')
          .col-sm-12.col-lg-8
            h4 Ciclos a corto plazo
            p.mb-0 Los ciclos económicos a corto plazo, se caracterizan por fluctuaciones periódicas en la producción, el empleo y los precios. Estos ciclos incluyen períodos de expansión, donde la economía crece a un ritmo acelerado, y períodos de recesión, cuando la economía se contrae. Los ciclos económicos a corto plazo, suelen ser influenciados por factores como cambios en la demanda agregada, políticas monetarias y fiscales, y choques externos.

      .py-4.py-md-5.bg-11.p-5(titulo="Ciclos a largo plazo")
        .row
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/t3/6.png')
          .col-sm-12.col-lg-8
            h4 Ciclos a largo plazo
            p.mb-0 A largo plazo, el crecimiento económico tiende a ser más estable y está influido por factores estructurales, como la educación, la infraestructura, y las políticas económicas. La mejora de la calidad del capital humano, la construcción de infraestructura moderna, y el fortalecimiento de las instituciones, son factores que, a largo plazo, sostienen el crecimiento económico y permiten que una economía se recupere de las fluctuaciones a corto plazo. El progreso tecnológico y las reformas estructurales, representan importancia en el crecimiento sostenido a largo plazo.

    h2.mb-3(data-aos='fade-up') Fases del ciclo económico
    p.mb-5(data-aos='fade-up') Los ciclos económicos suelen estructurarse en cuatro fases principales, aunque la duración de cada una es variable y difícil de predecir. Generalmente, estas fases son las siguientes:
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t3/7.png')
      .col-sm-12.col-lg-7
        AcordionA(tipo='b')
        AcordionA(tipo='b')
          div(titulo='Expansión o recuperación')
            p.mb-0 En esta fase, la economía se encuentra en su periodo ascendente. La actividad económica aumenta, los indicadores de crecimiento como el producto interno bruto (PIB), el consumo, y la inversión, muestran signos positivos. La recuperación de la crisis anterior comienza a consolidarse, y los recursos disponibles en la economía, empiezan a incrementarse.
          
          div(titulo='Auge')
            p.mb-0 El auge es el punto más alto del ciclo económico, donde la economía alcanza su máximo nivel de actividad. En esta fase, la utilización de los factores de producción es casi plena, lo que se traduce en una tasa de empleo elevada. Sin embargo, este crecimiento sostenido puede llevar a un sobrecalentamiento de la economía, dado que la sobreproducción de bienes y servicios, puede saturar el mercado, comenzando a generar presiones inflacionarias (Sánchez Campillo, 2015).
          
          div(titulo='Recesión o contracción')
            p.mb-0 La recesión es la fase descendente del ciclo, en la que la actividad económica empieza a disminuir. Esto se refleja en la caída de la producción, el consumo y el empleo. Las recesiones pueden variar en intensidad y duración, y se asocian comúnmente con períodos de crisis económica (Sánchez Campillo, 2015). Este momento es crucial, dado que la caída de la demanda y la inversión, puede llevar a una desaceleración prolongada.
          
          div(titulo='Depresión')
            p.mb-0 En esta fase, la economía se encuentra en su punto más bajo. La actividad económica está en su mínimo, el desempleo alcanza niveles elevados, y la demanda agregada se reduce significativamente. Los precios suelen estabilizarse o disminuir debido a la caída de la demanda. Las depresiones son períodos de largo alcance que pueden generar graves consecuencias sociales y económicas para una nación (Sánchez Campillo, 2015).



    p.mb-4(data-aos='fade-up') Es así como el crecimiento económico enfrenta desafíos como la sostenibilidad ambiental, la desigualdad y la inestabilidad económica. A medida que las economías crecen, la explotación de los recursos naturales y el cambio climático, ponen en riesgo su continuidad. Sin embargo, también surgen oportunidades al adoptar modelos de crecimiento más sostenibles, como la economía verde y circular, y al aprovechar innovaciones tecnológicas como la energía renovable y la digitalización. 
    .p-4.bg-1.mb-5
      .row.align-items-center
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t3/8.svg', style='max-width: 90px').mx-auto
        .col-lg
          p.mb-0 La creación de políticas inclusivas y equitativas, junto con instituciones fuertes y estabilidad política, puede garantizar un crecimiento duradero. El reto está en redefinir el crecimiento económico para que sea no solo más eficiente, sino también más inclusivo y ambientalmente responsable, asegurando un futuro sostenible para las generaciones venideras.

    .bg-full-width.border-top.color-primario.mt-5
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complem
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style='{"max-width":"16px"}')
              a(:href='obtenerLink("/downloads/art14.pdf")' target='_blank' rel='noopener noreferrer') Álvarez Herranz, A., E Barraza, J. S. & Legato, A. M. (2009). Inversión extranjera directa y crecimiento económico en Latinoamérica. Información Tecnológica, 20(6), pp. 115-124.
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://datos.bancomundial.org/indicador' target='_blank' rel='noopener noreferrer') Banco Mundial
           
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.perplexity.ai/' target='_blank' rel='noopener noreferrer') Perplexity
            
            
            
          .col-12.col-md-6.col-lg-3.offset-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
    .bg-full-width.border-top.actividad.ctn-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario='cuestionario'/>





</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Macroeconomía',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el principal objetivo de la macroeconomía?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Estudiar el comportamiento individual de los consumidores',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Analizar el funcionamiento de la economía en su conjunto',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Examinar los precios de productos específicos',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Investigar las decisiones de empresas individuales',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La macroeconomía estudia la economía a gran escala, considerando factores como el PIB, el desempleo y la inflación.',
          mensaje_incorrecto:
            'Lo sentimos, esa no es la respuesta correcta. La macroeconomía se enfoca en el estudio de la economía en su conjunto.',
        },
        {
          id: 2,
          texto: 'La balanza de pagos se divide principalmente en:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Importaciones y exportaciones únicamente',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuenta corriente y cuenta de capital y financiera',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Bienes y servicios solamente',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Deuda externa e interna',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La balanza de pagos se divide en estos dos componentes fundamentales.',
          mensaje_incorrecto:
            'Lo sentimos, esa no es la respuesta correcta. La balanza de pagos tiene dos componentes principales.',
        },
        {
          id: 3,
          texto:
            '¿Qué tipo de desempleo refleja el tiempo de transición entre empleos o cambios en las condiciones laborales?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desempleo estructural',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desempleo friccional',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Desempleo cíclico',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Desempleo voluntario',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El desempleo friccional ocurre durante los períodos de transición entre empleos.',
          mensaje_incorrecto:
            'Lo sentimos, esa no es la respuesta correcta. El tipo de desempleo que refleja transiciones laborales es el friccional.',
        },
        {
          id: 4,
          texto:
            'El PIB se puede calcular mediante los siguientes enfoques, EXCEPTO:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Enfoque de producción',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Enfoque de ingreso',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Enfoque del gasto',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Enfoque de la inflación',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Muy bien, el PIB no se calcula con el enfoque de la inflación, sino a través de los enfoques de producción, ingreso y gasto. La inflación es un fenómeno relacionado, pero no es una forma de medir el PIB directamente.',
          mensaje_incorrecto:
            'Lo sentimos, esa no es la respuesta correcta. Recuerda que buscamos el enfoque que NO se usa para calcular el PIB.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de los siguientes NO es un factor de producción en economía?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tierra',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Capital',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Trabajo',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Inflación',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Es correcto. La inflación no es un factor de producción. Los factores de producción son la tierra, el capital y el trabajo, que son esenciales para la producción de bienes y servicios.',
          mensaje_incorrecto:
            'Lo sentimos, esa no es la respuesta correcta. Recuerda que los factores de producción son los elementos necesarios para producir bienes y servicios.',
        },
      ],
      mensaje_final_aprobado:
        '¡Felicitaciones! Has demostrado un buen entendimiento de los conceptos macroeconómicos.',
      mensaje_final_reprobado:
        'Te recomendamos repasar los conceptos de macroeconomía para mejorar tu comprensión del tema.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
