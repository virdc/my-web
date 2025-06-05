import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="experiencia">
      <div className="items-container">
        <h1>Experiencias</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2020 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Desarrolladora Web Freelance</h3>
            <h4 className="vertical-timeline-element-subtitle">Rosario, AR</h4>
            <p>
             - Desarrollo y Mantenimiento de Tiendas Web: Creación, diseño y mantenimiento de tiendas online para diversos clientes. 
             
             - Gestión de Redes Sociales: Mantenimiento y actualización de perfiles en redes sociales.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Analista de sistemas Remoto</h3>
            <h4 className="vertical-timeline-element-subtitle">eiYs Consultora de Energía</h4>
            <p>
              - Automatización y Migración de Datos: Implementación de soluciones para la automatización de procesos, transformación y migración de datos. 
              - Desarrollo de CRM: Diseño y desarrollo de un nuevo sistema CRM que optimiza la comunicación con el cliente.
              - Automatización y Migración de Datos: Implementación de soluciones para la automatización de procesos, transformación y migración de datos. - Desarrollo de CRM: Diseño y desarrollo de un nuevo sistema CRM que optimiza la comunicación con el cliente.
                Aptitudes: Análisis de datos estadísticos · Infraestructura de tecnologías de la información · Sistemas informáticos · Análisis de sistemas de software · Conectividad
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Tecnica Administrativa</h3>
            <h4 className="vertical-timeline-element-subtitle">Gobierno de la Provincia de Santa Fe</h4>
            <p>
              - Despacho de Móviles y Monitoreo de Cámaras: Experiencia en la coordinación y despacho de unidades móviles, así como en el monitoreo de sistemas de videovigilancia. 
              - Atención de llamadas y Control de Actas: Gestión de comunicaciones telefónicas y manejo de documentación legal (actas). 
              - Ingreso de Datos Operacionales: Registro y procesamiento de datos relevantes para las operaciones de seguridad.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2017"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Call Center Telemarker</h3>
            <h4 className="vertical-timeline-element-subtitle">Rosario, AR</h4>
            <p>
             - Back Office – Soporte Administrativo: Análisis y clarificación de facturas para garantizar la transparencia informativa.
             - Asesor Comercial – Banco Galicia: 
                   * Impulso de ventas de productos y servicios bancarios mediante asesoramiento especializado.
                   * Logró objetivos comerciales a través de una atención personalizada y orientada a la satisfacción.
                   * Experiencia en la gestión de relaciones con usuarios utilizando sistemas CMR (Neotel) y herramientas de comunicación (X-lite).
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;