import React from 'react'
import { content } from '../../config/content'
import Layout from '../../components/Layout'
import { useLanguage } from '../../context/LanguageContext'
import PageHeader from '../../components/PageHeader/PageHeader'
import { dataNoticiaPage } from './data'
import styles from './Noticia-Page.module.scss'

const NoticiaPage: React.FC = () => {
    const { currentLanguage } = useLanguage();
    return (
        <Layout
            title={content.meta.title}
            description={content.meta.description}
            keywords={content.meta.keywords}
            image={content.meta.image}
        >
            <>
                <PageHeader
                    bg={dataNoticiaPage[currentLanguage].pageHeader.bg}
                    text={dataNoticiaPage[currentLanguage].pageHeader.text}
                    noOverlay
                />
                <div className={styles.wysiwygContainer}>

                    <h1>Facilitación del Comercio en el Perú 2025</h1>

                    <div></div>

                    <p>Dr. Eduardo García-Godos</p>
                    <p>Lic. Ana Sofía Del Solar</p>

                    <h3>Introducción</h3>

                    <p>
                        El año 2024 trajo <b>noticias alentadoras</b> para el comercio internacional sobre todo por la puesta en marcha del Puerto de Chancay y el próximo inicio de operaciones del nuevo aeropuerto internacional Jorge Chávez. Aun cuando la brecha en infraestructura todavía es significativa, como lo declaró recientemente el Ministro de Economía, estos eventos tuvieron una notoria visibilidad con ocasión de las reuniones del Apec.
                    </p>

                    <p>
                        Sin embargo, una cadena de suministro eficiente requiere además de servicios y controles (a la carga y medios de transporte) optimizados que se sustenten en <b>legislaciones modernas y recursos humanos entrenados</b>.
                    </p>

                    <p>
                        En este artículo hacemos una breve descripción de los <b>principales avances y retos en facilitación del comercio del Perú para este 2025</b>.
                    </p>

                    <div>
                        <img src="http://ipfcom.org/img/events/public_1/public_1.png" alt="Wide Image" />
                    </div>
                    <h3>Panorama del comercio exterior en Perú</h3>

                    <div>
                        <img src="http://ipfcom.org/img/events/public_1/public_2.png" style={{ maxWidth: '1000px' }} alt="Wide Image" />
                    </div>

                    <p>
                        Tras una <b>contracción del PBI</b> del 0.55% en 2023 (INEI, 2024) que marcó el cierre de una década de bajo crecimiento en comparación con los resultados obtenidos entre 2004 y 2013 (Banco Mundial, 2024), se espera que el año cierre con un <b>crecimiento económico del PBI</b> de 3.2% (BCRP, 2024).
                    </p>

                    <p>
                        Las <b>exportaciones</b> en el 2024 fueron de USD 74,000 millones, registrando un <b>crecimiento del 14.6%</b> con respecto al año anterior, propiciado por el alza de precio del café, productos siderometalúrgicos y los commodities, así como el aumento de las ventas de aceite de pescado. Por su parte, a octubre del año pasado, las <b>importaciones aumentaron un 2.6%</b> en el mismo período por una mayor adquisición de bienes de consumo y de capital (BCRP, 2024).
                    </p>

                    <h3>Posición regional en facilitación del comercio</h3>

                    <p>
                        Según la <b>Encuesta Global sobre Facilitación del Comercio Digital y Sostenible 2023</b>, que realiza la ONU cada dos años, y que se basa principalmente en las normas del Acuerdo de Facilitación del Comercio de la OMC, el <b>Perú alcanzó el segundo lugar en la región</b>, con un puntaje del 87.1%. Este resultado supera tanto el promedio regional (71%) como el promedio global (69%), y representó un avance respecto a la posición alcanzada en la encuesta del 2021 (80.65%).
                    </p>

                    <h4>Puntaje promedio de implementación de medidas de facilitación del comercio a nivel mundial</h4>

                    <div>
                        <img src="http://ipfcom.org/img/events/public_1/public_3.png" style={{ maxWidth: '600px' }} alt="Puntaje promedio de implementación de medidas de facilitación del comercio a nivel mundial" />
                        <p><b>Fuente:</b> Encuesta Global sobre Facilitación del Comercio Digital y Sostenible, 2023.</p>
                    </div>

                    <p>
                        Dentro de los <b>indicadores evaluados</b> en esta encuesta —transparencia, formalidades, cooperación y acuerdos institucionales, comercio sin papel, y comercio sin papel transfronterizo—, el país destacó por los <b>avances en las medidas relacionadas con el comercio sin papel</b>. Entre estas se incluyen el desempeño de la Ventanilla Única de Comercio Exterior (VUCE), la presentación electrónica de documentos de comercio exterior y el pago electrónico de aranceles e impuestos.
                    </p>

                    <h4>Nivel de implementación de medidas de comercio sin papel en el Perú</h4>

                    <div>
                        <img src="http://ipfcom.org/img/events/public_1/public_4.png" style={{ maxWidth: '600px' }} alt="Puntaje promedio de implementación de medidas de facilitación del comercio a nivel mundial" />
                        <p><b>Fuente:</b> Encuesta Global sobre Facilitación del Comercio Digital y Sostenible, 2023.</p>
                    </div>

                    <p>
                        Sin embargo, <b>los objetivos y la medición de la facilitación del comercio deben ir más allá de lo previsto en Acuerdo de la OMC</b> y si bien la encuesta referida adopta esta visión, los vertiginosos avances en tecnología y los acuerdos y estándares internacionales que han adquirido tracción, demandan <b>refinar dichos objetivos</b>. Para esto se requiere sincerar el impacto de las medidas logradas con indicadores de tiempos, costos y predictibilidad y, por otro lado, plantearnos nuevas metas que aprovechen esta coyuntura de mayor exposición internacional.
                    </p>

                    <h3>Estado de los planes de Facilitación del Comercio</h3>

                    <p>
                        Los principales instrumentos de política pública relacionados a la facilitación del comercio son el <b>Plan Estratégico Nacional Exportador 2025-PENX, el Plan Nacional de Competitividad y Productividad 2019-2030-PNCP, y el Plan Nacional de Desarrollo Portuario-PNDP</b>.
                    </p>

                    <p>
                        Hasta la fecha la “agenda” de facilitación del comercio se lleva de manera pragmática a través de la Comisión Multisectorial para la Facilitación del Comercio- Comufal que conduce el Mincetur.
                    </p>

                    <p>
                        El Plan Estratégico Nacional Exportador caducará este año. La facilitación del comercio constituye un Pilar y se programaron una serie de objetivos, que en su mayoría han sido abordados en los 10 años de vigencia del instrumento, pero sus resultados no han sido examinados con profundidad.
                    </p>

                    <p>
                        Estimamos urgente la revisión y actualización del pilar de facilitación del comercio y atar su ejecución con las actividades de la Comufal. Esta continuidad será además una señal de estabilidad de las políticas de comercio exterior.
                    </p>

                    <p>
                        El <b>Plan Nacional de Competitividad y Productividad, actualizado en octubre del 2024</b>, articula iniciativas como el modelo <b>Fronteras SMART</b> – que comprende la implementación de un sistema integrado de información y control no intrusivo-, el <b>antepuerto Callao y Piura, y red de truck center a nivel nacional</b>, así como la continuación del <b>modelo del Inspector Único Sanitario</b>, que si bien constituye una propuesta de vanguardia, enfrenta retos para su implementación por la heterogeneidad operativa de las distintas agencias de control que participan.
                    </p>

                    <div>
                        <img src="http://ipfcom.org/img/events/public_1/public_7.png" style={{ maxWidth: '600px' }} alt="Wide Image" />
                    </div>

                    <p>
                        El PNCP también se ensambla con los objetivos del <b>Proyecto VUCE 2.0</b> del Mincetur, incluyendo el desarrollo del Sistema de Comunidad Portuaria y la mejora de los módulos de Componente Portuario y del Observatorio Logístico de Comercio Exterior <span title="" ><sup><b>(*)</b></sup></span>. Sobre el componente portuario y en armonía con la obligatoriedad de adoptar la Ventanilla Única Marítima (OMI, 2024), se viene desarrollando la optimización del sistema, el cual estará listo el primer semestre de este año.
                    </p>

                    <p>
                        El mes pasado se publicó la actualización del <b>Plan Nacional de Desarrollo Portuario</b>. Este instrumento profundiza los proyectos contemplados en el PNCP 2019-2030, tales como la creación del antepuerto del Callao, el Componente Portuario 2.0 y el Sistema de Comunidad Portuaria, entre otros. Adicionalmente, anticipa el desarrollo del Sistema Portuario Fluvial y el Programa de Puertos Inteligentes.
                    </p>

                    <p>
                        Sin embargo, es importante <b>integrar la operatividad portuaria con la función aduanera</b>; por tanto, las líneas estratégicas sobre competitividad y eficiencia portuaria y el desarrollo de tecnología portuaria deben tomar como referencia las directrices sobre cooperación entre Autoridades Aduaneras y Portuaria elaborado por la OMA y la Asociación Internacional de Puertos (IAPH).
                    </p>

                    <div>
                        <img src="http://ipfcom.org/img/events/public_1/public_8.png" style={{ maxWidth: '872px' }} alt="Wide Image" />
                    </div>

                    <h3>Cabotaje, Sistema de Comunidad de Comercio Exterior y Zonas Económica</h3>

                    <p>
                        En junio del año pasado se promulgó la Ley 32049, que modifica el Decreto Legislativo 1413, la cual <b>amplía los sujetos autorizados</b> para realizar el tráfico de cabotaje marítimo de pasajeros y carga, permitiendo la <b>participación de navieras extranjeras</b>. Su reglamento, modificado en diciembre, estableció que se deberá reportar las obligaciones de cabotaje en la VUCE.
                    </p>

                    <div>
                        <img src="http://ipfcom.org/img/events/public_1/public_9.png" style={{ maxWidth: '952px' }} alt="Wide Image" />
                    </div>

                    <p>
                        Asimismo, en septiembre se promulgó la Ley 32129, que busca modificar la Ley 30860, Ley de Fortalecimiento de la VUCE, la cual <b>amplía el alcance de los sistemas de comunidad del comercio exterior</b> – que anteriormente se limitaban al ámbito marítimo (Sistema de Comunidad Portuaria) – para incluir los <b>ecosistemas terrestre y aéreo</b>, con el objetivo de facilitar la transmisión de información entre sus operadores.
                    </p>

                    <p>
                        Esta norma constituye un <b>avance en la expansión del ámbito de la facilitación del comercio</b> en beneficio de las transacciones B2B y el transporte multimodal. El reglamento en elaboración precisará el alcance de dichos sistemas.
                    </p>

                    <div>
                        <img src="http://ipfcom.org/img/events/public_1/public_10.png" style={{ maxWidth: '600px' }} alt="Wide Image" />
                    </div>

                    <p>
                        Por otro lado, el régimen de <b>Zonas Económicas Especiales</b> puede tener su reforma más profunda si se aprueba el <b>Proyecto de Ley</b> que permite la iniciativa privada en la operación de estas.
                    </p>

                    <div>
                        <img src="http://ipfcom.org/img/events/public_1/public_11.png" style={{ maxWidth: '520px' }} alt="Wide Image" />
                    </div>

                    <p>
                        El proyecto favorecería de manera particular al <b>Puerto de Chancay</b>, que cuenta con un extenso espacio adyacente dispuesto para albergar empresas que pueden beneficiarse de dicho régimen. Aunque el modelo contemplado por el proyecto no es el ideal puesto que cada iniciativa deberá aprobarse mediante Ley, debe apostarse por medidas pragmáticas de atracción de capital privado que nos permita competir con socios comerciales que cuentan con modelos similares.
                    </p>

                    <h3>Legado del Apec</h3>

                    <p>
                        La <b>digitalización de documentos y datos</b> está ejerciendo una influencia notable en el comercio transfronterizo y la logística. Las tecnologías disruptivas y la IA generativa están reconfigurando los modelos de negocio y, desde luego, los controles en frontera.
                    </p>

                    <div>
                        <img src="http://ipfcom.org/img/events/public_1/public_12.png" style={{ maxWidth: '957px' }} alt="Wide Image" />
                    </div>

                    <p>
                        En el marco de las actividades del Subcomité de procedimientos aduaneros del Apec se realizó un <b>taller sobre el Conocimiento de Embarque Electrónico</b> (Agosto 2024), en el que se destacó las condiciones necesarias para la implementación del E-BL y los incentivos para implementar la Ley Modelo sobre Registros Electrónicos Transferibles (MLETR en inglés).
                    </p>

                    <p>
                        Posteriormente, en la <b>Declaración de los líderes de Apec 2024</b>, se acordó fomentar la facilitación del comercio mediante la digitalización de los procesos y documentos relacionados al comercio. Estos acuerdos contienen lineamientos para promoción de sistemas de comercio sin papel, la autenticación electrónica y el reconocimiento de documentos de comercio electrónico – como el E-BL y la factura electrónica.
                    </p>

                    <h3>Acuerdo de Comercio Electrónico de la OMC</h3>

                    <p>
                        Coincidentemente, en julio del 2024, la OMC anunció que, tras cinco años de negociaciones, se había logrado llegar a un <b>texto estabilizado del Acuerdo de Comercio Electrónico</b>. A pesar de no ser vinculante, su publicación refleja el consenso de un número importante de países.
                    </p>

                    <div>
                        <img src="http://ipfcom.org/img/events/public_1/public_13.png" alt="OMC" style={{ maxWidth: '600px' }} />
                    </div>

                    <p>
                        El texto estabilizado incluye <b>disposiciones clave</b> como el reconocimiento de la validez de documentos digitales, la autenticación y firma electrónica, el intercambio de datos e la interoperabilidad de ventanillas únicas, la protección del consumidor y de datos en el entorno digital, así como medidas de ciberseguridad, entre otros. Este acuerdo puede ser el <b>precursor del primer marco global para el comercio digital transfronterizo</b>.
                    </p>

                    <h3>Acuerdo de Asociación de Economía Digital (DEPA)</h3>

                    <p>
                        Un importante hito ha sido la <b>solicitud del Perú para integrar el Acuerdo de Asociación de Economía Digital</b> (más conocido como DEPA por sus siglas en inglés). El DEPA, suscrito inicialmente por Singapur, Chile y Nueva Zelanda, y ampliado con Corea del Sur en 2024, impulsa la <b>transformación digital</b> y la publicación de los formularios y documentos de comercio en formatos electrónicos, reconociendo su validez legal.
                    </p>

                    <p>
                        Asimismo, fomenta la interoperabilidad de las ventanillas únicas, los sistemas de facturación electrónica y la IA en un entorno confiable, seguro y responsable.
                    </p>

                    <p>
                        Este Acuerdo complementa y profundiza las disposiciones existentes sobre interoperabilidad y digitalización previstas en la Alianza del Pacífico.
                    </p>

                    <p>
                        Pero aún más, a través del DEPA sus integrantes se comprometen a <b>adoptar marcos legales alineados con estándares internacionales</b>, como el Modelo de Ley de Comercio Electrónico de UNCITRAL y la Convención de las Naciones Unidas sobre Comunicaciones Electrónicas, e incentivan la adopción del MLETR, para proveer seguridad jurídica respecto a la validez legal de documentos transferibles digitales como, por ejemplo, el Conocimiento de Embarque.
                    </p>

                    <h3>Estándares y digitalización de la información de comercio exterior</h3>

                    <p>
                        También el año pasado, el ICC a través de la Iniciativa de Estándares Digitales (DSI en inglés) difundió una publicación de especial importancia para la facilitación del comercio.
                    </p>

                    <p>
                        En efecto, el <b>"Key Trade Documents and Data Elements" (KTDDE)</b> amplía el análisis realizado en sus dos informes anteriores y en el documento <b>"Kit de Herramientas para el Comercio Transfronterizo sin Papel"</b>, desarrollado en colaboración con la OMC, UNCITRAL y ESCAP.
                    </p>

                    <p>
                        El KTDDE señala que el 58% de los documentos analizados cuenta con una versión electrónica estandarizada, el 16% presenta múltiples estándares de digitalización, y el 25% se encuentra aún en las etapas iniciales de desarrollo de estándares.
                    </p>

                    <div>
                        <img src="http://ipfcom.org/img/events/public_1/public_16.png" alt="OMC" style={{ maxWidth: '200px' }} />
                    </div>

                    <p>
                        Este informe <b>analiza 36 de los principales documentos utilizados en el comercio transfronterizo de bienes</b>, así como los <b>estándares de datos</b> utilizados en las cadenas de suministro, a fin de establecer un marco para digitalizar el comercio transfronterizo de bienes.
                    </p>

                    <p>
                        Así, brinda <b>recomendaciones para estandarizar y digitalizar las cadenas de suministro</b>, enfatizando el uso de estándares existentes para las transacciones privadas sobre el contenido y características de la carga, así como los servicios de transporte internacional.
                    </p>

                    <p>
                        El KTDDE es una importante contribución que refuerza el enfoque “whole-of-the- government” de la facilitación del comercio, por tanto, sus recomendaciones deben ser incorporadas en la agenda nacional ya sea a través de un nuevo PENX o en las tareas de la Comufal
                    </p>

                    <h3>Referencias Biliográficas</h3>

                    <ul>
                        <li>
                            Banco Mundial (2024). Perú Panorama general. Recuperado de:<br />
                            <a href="https://www.bancomundial.org/es/country/peru/overview" target="_blank">
                                https://www.bancomundial.org/es/country/peru/overview
                            </a>
                        </li>
                        <li>
                            BCRP. (2024). Reporte de Inflación. Diciembre 2024. Recuperado de:<br />
                            <a href="https://www.bcrp.gob.pe/docs/Publicaciones/Reporte-Inflacion/2024/diciembre/reporte-de-inflacion-diciembre-2024.pdf" target="_blank">
                                https://www.bcrp.gob.pe/docs/Publicaciones/Reporte-Inflacion/2024/diciembre/reporte-de-inflacion-diciembre-2024.pdf
                            </a>
                        </li>
                        <li>
                            BCRP. (2024). Resumen Informativo Semanal 12 de diciembre de 2024. Recuperado de:<br />
                            <a href="https://www.bcrp.gob.pe/docs/Publicaciones/Nota-Semanal/2024/resumen-informativo-2024-12-12.pdf" target="_blank">
                                https://www.bcrp.gob.pe/docs/Publicaciones/Nota-Semanal/2024/resumen-informativo-2024-12-12.pdf
                            </a>
                        </li>
                        <li>
                            Declaración de Machu Picchu de los líderes de APEC 2024. Recuperado de:<br />
                            <a href="https://www.gob.pe/institucion/rree/informes-publicaciones/6197019-declaracion-de-machu-picchu-de-los-lideres-de-apec-2024" target="_blank">
                                https://www.gob.pe/institucion/rree/informes-publicaciones/6197019-declaracion-de-machu-picchu-de-los-lideres-de-apec-2024
                            </a>
                        </li>
                        <li>
                            INEI (2024). Producción nacional Diciembre 2023. Recuperado de:<br />
                            <a href="https://m.inei.gob.pe/media/MenuRecursivo/boletines/02-informe-tecnico-produccion-nacional-diciembre-2023.pdf" target="_blank">
                                https://m.inei.gob.pe/media/MenuRecursivo/boletines/02-informe-tecnico-produccion-nacional-diciembre-2023.pdf
                            </a>
                        </li>
                        <li>
                            Mincetur (2024). APEC Perú 2024: Mincetur impulsa iniciativa para facilitar el comercio entre economías de APEC. Recuperado de:<br />
                            <a href="https://www.gob.pe/institucion/mincetur/noticias/1004153-apec-peru-2024-mincetur-impulsa-iniciativa-para-facilitar-el-comercio-entre-economias-de-apec" target="_blank">
                                https://www.gob.pe/institucion/mincetur/noticias/1004153-apec-peru-2024-mincetur-impulsa-iniciativa-para-facilitar-el-comercio-entre-economias-de-apec
                            </a>
                        </li>
                        <li>
                            Mincetur. (2024). Se inicia proceso de adhesión del Perú al Acuerdo de Asociación de Economía Digital. Recuperado de:<br />
                            <a href="https://www.gob.pe/institucion/mincetur/noticias/1058677-se-inicia-proceso-de-adhesion-del-peru-al-acuerdo-de-asociacion-de-economia-digital" target="_blank">
                                https://www.gob.pe/institucion/mincetur/noticias/1058677-se-inicia-proceso-de-adhesion-del-peru-al-acuerdo-de-asociacion-de-economia-digital
                            </a>
                        </li>
                        <li>
                            OMC. (2024). Information on the Agreement on Electronic Commerce. Recuperado de:<br />
                            <a href="https://www.wto.org/english/tratop_e/ecom_e/information_on_agreement_ecom.pdf" target="_blank">
                                https://www.wto.org/english/tratop_e/ecom_e/information_on_agreement_ecom.pdf
                            </a>
                        </li>
                        <li>
                            OMC. (2024). Iniciativa relativa a la Declaración Conjunta sobre el Comercio Electrónico. Recuperado de:<br />
                            <a href="https://docs.wto.org/dol2fe/Pages/SS/directdoc.aspx?filename=s:/INF/ECOM/87.pdf&amp;Open=True" target="_blank">
                                https://docs.wto.org/dol2fe/Pages/SS/directdoc.aspx?filename=s:/INF/ECOM/87.pdf&amp;Open=True
                            </a>
                        </li>
                        <li>
                            OMI. (2024). Ventanilla única marítima: avanzar en la digitalización del transporte marítimo. Recuperado de:<br />
                            <a href="https://www.imo.org/es/MediaCentre/PressBriefings/pages/Maritime-Single-Window-advancing-digitalization-in-shipping.aspx" target="_blank">
                                https://www.imo.org/es/MediaCentre/PressBriefings/pages/Maritime-Single-Window-advancing-digitalization-in-shipping.aspx
                            </a>
                        </li>
                    </ul>
                </div>

            </>
        </Layout >
    )
}

export default NoticiaPage
