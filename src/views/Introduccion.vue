<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno(subTitulo="Introducción")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-7
          .bg-1.p-4
            p.mb-0 En esta unidad, se profundiza en el tema de los modelos macroeconómicos, herramientas que permiten la comprensión de la dinámica de las economías a nivel global y nacional. Estos modelos proporcionan representaciones simplificadas de la realidad económica, que permiten analizar las interacciones entre los principales actores de la economía: los hogares, las empresas y el gobierno. 
        .col-lg-5.d-none.d-lg-block
            img(src="@/assets/curso/intro/1.png")
      p.mb-3 Además, se examinan los efectos de factores externos, como la globalización, en el desempeño económico de los países. 
      p.mb-4 Al finalizar esta unidad, los estudiantes estarán en capacidad de analizar los modelos macroeconómicos y aplicar sus conceptos para interpretar fenómenos económicos reales, demostrando una capacidad analítica que les permitirá entender mejor, cómo las decisiones macroeconómicas afectan la vida cotidiana y las dinámicas globales.
      p.mb-5 La unidad se organiza en tres subtemas principales: 

      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-5
          img(src="@/assets/curso/intro/2.png")
        .col-sm-12.col-lg-7
          AcordionA(tipo="b")
            div(titulo="Primero")
              p.mb-0 El modelo de flujo circular, en el que se profundiza en las interacciones entre los actores principales de la economía: los hogares, las empresas y el gobierno. Se analiza el flujo de dinero y bienes dentro de la economía, así como la influencia de la globalización en estas relaciones.
            div(titulo="Segundo")
              p.mb-0 El modelo de oferta y demanda agregada, en el cual se aborda cómo se determinan la producción y los precios a nivel macroeconómico. Se examinan los factores que pueden desplazar las curvas de oferta y demanda agregada y se estudian sus aplicaciones.
            div(titulo="Tercero")
              p.mb-0 El modelo de crecimiento económico, se analizan las teorías que explican el crecimiento a largo plazo, tanto desde enfoques exógenos como desde los endógenos. Se estudian los factores que impulsan el crecimiento, como la inversión, el capital humano y la innovación tecnológica, y se analiza el impacto de los ciclos económicos en la estabilidad económica.
      p.mb-5 Durante el transcurso de esta unidad, se busca que los estudiantes comprendan las bases teóricas de los modelos macroeconómicos y su aplicación. 
      .p-4.bg-4.mb-5
        .row.align-items-center
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/intro/3.svg', style='max-width: 90px').mx-auto
          .col-lg
            p.mb-0 Para sacar el mayor provecho de esta unidad, se recomienda tener conocimientos previos sobre conceptos básicos de microeconomía, como la #[b oferta], la #[b demanda], el #[b mercado] y los #[b precios]; estar familiarizados con términos como el #[b Producto Interno Bruto] (PIB), la #[b inflación] y el #[b desempleo], teniendo en cuenta que estos conceptos se utilizarán durante los temas tratados.










</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>
