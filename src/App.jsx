
import './App.css'
import Navbar from './component/Navbar'
import Section from './component/Section'
import Footer from './component/Footer'
import ProjectCard from './component/ProjectCard'
import FloatingSocials from './component/FloatingSocials';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
      offset: 550, 
      easing: 'ease-in-out',
    });
  }, []);;

  return (
    <>
      <section data-aos="fade-down">
      <Navbar/>
      </section>
      
      <main>

      <section data-aos="zoom-in">
      <FloatingSocials/>
      <Section id="inicio" imgSrc="/public/fotoperfilR.png" data-aos="fade-up">
          
          <h1>Martínez Romina Natalia</h1>
          <h3>Desarrollador</h3>
        </Section>
      </section>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          <div>
            <img src="src/public/image/scroollabajo.gif" alt="HTML" style={{ width: '30px', height: 'auto' }} />
          </div>
      </div>
      
        

      <section data-aos="zoom-in">

        <Section id="sobre-mi" title="Sobre mí" imgSrc="src/public/image/img1.png" imagePosition="right" data-aos="fade-right">
          <ul>Hola!Me alegra tenerles hoy en mi portafolio!, me presento, mi nombre es Romina, soy estudiante de la carrera de Ingeniería en Sistemas de la Información, soy una persona dinámica y muy comprometida con mi trabajo. Soy adaptativa, con experiencia en trabajo en equipo, de rápido aprendizaje y altas capacidades de autogestión. Espero que disfruten su visita, y ante cualquier sugerencia o consulta pueden contactarme. Saludos!</ul>
        </Section>

      </section>

      <section data-aos="zoom-in">
        <Section id="educacion" title="Educación" imgSrc="src/public/image/imgeducacion.png" imagePosition="left" data-aos="fade-left">
          <ul>
            <li>Ingeniería en Sistemas de la Información - Universidad Tecnológica Nacional - Regional Tucumán - En curso</li>
            <li>Programador .NET - Digitelers Grupo Telecom - 2022</li>
            <li>Programación JAVA - UBA - Gobierno de Buenos Aires - 2021</li>
          </ul>
        </Section>
      </section>

      <div data-aos="fade-up">
          <h2>Lenguajes</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            <div>
            <img src="src/public/image/icons8-html-5-48.png" alt="HTML" style={{ width: '60px', height: 'auto' }} />
            <p>HTML</p>
            </div>
 
            <div>
            <img src="src/public/image/icons8-css3-48.png" alt="CSS" style={{ width: '60px', height: 'auto' }} />
              <p>CSS</p>
            </div>

            <div>
            <img src="src/public/image/icons8-javascript-48.png" alt="JavaScript" style={{ width: '60px', height: 'auto' }} />
              <p>JavaScript</p>
            </div>

            <div>
            <img src="src/public/image/java.png" alt="Java" style={{ width: '60px', height: 'auto' }} />
              <p>Java</p>
            </div>

            <div>
            <img src="src/public/image/phyton.png" alt="Python" style={{ width: '60px', height: 'auto' }} />
              <p>Python</p>
            </div>

            <div>
            <img src="src/public/image/icons8-c-sharp-logo-48.png" alt="C#" style={{ width: '60px', height: 'auto' }} />
              <p>C#</p>
            </div>

            <div>
            <img src="src/public/image/icons8-c++-48.png" alt="C++" style={{ width: '60px', height: 'auto' }} />
              <p>C++</p>
            </div>

          </div>

          <h2>Base de datos</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            
          <div>
            <img src="src/public/image/icons8-mysql-logo-48.png" alt="My SQL" style={{ width: '60px', height: 'auto' }} />
            <p>My SQL</p>
          </div>

          <div>
            <img src="src/public/image/mongo db.png" alt="MongoDB" style={{ width: '60px', height: 'auto' }} />
            <p>MongoDB</p>
          </div>

          </div>

          <h2>Framework y Herramientas</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            
          <div>
            <img src="src/public/image/icons8-bootstrap-48.png" alt="Bootstrap" style={{ width: '60px', height: 'auto' }} />
            <p>Bootstrap</p>
            </div>

            <div>
              <img src="src/public/image/icons8-react-40.png" alt="React" style={{ width: '60px', height: 'auto' }} />
              <p>React</p>
            </div>

            <div>
              <img src="src/public/image/icons8-vite-48.png" alt="React" style={{ width: '60px', height: 'auto' }} />
              <p>Vite</p>
            </div>

            <div>
              <img src="src/public/image/icons8-github-48.png" alt="GitHub" style={{ width: '60px', height: 'auto' }} />
              <p>GitHub</p>
            </div>

            <div>
              <img src="src/public/image/git.png" alt="Git" style={{ width: '60px', height: 'auto' }} />
              <p>Git</p>
            </div>


          </div>

          <h2>Entornos</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            
          <div>
            <img src="src/public/image/icons8-visual-studio-48.png" alt="Visual studio" style={{ width: '60px', height: 'auto' }} />
            <p>Visual studio</p>
            </div>

            <div>
              <img src="src/public/image/icons8-visual-studio-code-2019-48.png" alt="Visual studio Code" style={{ width: '60px', height: 'auto' }} />
              <p>Visual studio Code</p>
            </div>

            <div>
              <img src="src/public/image/icons8-node-js-48.png" alt="NodeJS" style={{ width: '60px', height: 'auto' }} />
              <p>NodeJS</p>
            </div>

            
          </div>

          <h2>Diseño</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            
          <div>
            <img src="src/public/image/icons8-figma-48.png" alt="Figma" style={{ width: '60px', height: 'auto' }} />
            <p>Figma</p>
          </div>

          <div>
            <img src="src/public/image/icons8-gimp-48.png" alt="Gimp" style={{ width: '60px', height: 'auto' }} />
            <p>Gimp</p>
          </div>

          </div>
      </div>

      <section data-aos="zoom-in">
        <Section id="proyectos" title="Proyectos" imgSrc="src/public/image/img proyectos.png" imagePosition="left" data-aos="fade-up">
          <p>Aquí encontraras los proyectos realizados, tanto de la universidad como pedidos, están ordenados desde los más nuevos a los más viejos. Espero los disfrutes!😊</p>
        </Section>
      </section>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }} data-aos="zoom-in">

          <ProjectCard
            imgSrc="src/public/image/appstock.png"
            title="Principesa"
            description="Pagina realizada para clientes, e-commerce dedicado a la venta de productos de pastelería."
            demoLink="https://github.com/mart1020/aplicacion-consultorio-medico"
            codeLink="https://github.com/mart1020/aplicacion-consultorio-medico"
          />

          <ProjectCard
            imgSrc="src/public/image/appstock.png"
            title="Aplicacion escritorio Aplicacion de turnos"
            description="Aplicación de escritorio realizada en concepto de trabajo final integrador para la promoción de la materia Algoritmos y Estructura de Datos."
            demoLink="https://github.com/mart1020/aplicacion-consultorio-medico"
            codeLink="https://github.com/mart1020/aplicacion-consultorio-medico"
          />
          <ProjectCard
            imgSrc="src/public/image/digiapi.png"
            title="Digiapi"
            description="Proyecto realizado para poner en práctica técnicas de Front End y consumo de apis."
            demoLink="https://mart1020.github.io/digiapi/"
            codeLink="https://github.com/mart1020/digiapi/tree/master"
          />
          <ProjectCard
            imgSrc="src/public/image/calculadora.png"
            title="Calculadora"
            description="Proyecto realizado para la practica de manejo de Jacascript."
            demoLink="https://mart1020.github.io/proyectocalculadora/"
            codeLink="https://github.com/mart1020/proyectocalculadora"
          />
        </div>

        <section data-aos="fade-up">
          <Section id="contacto" imgSrc="src/public/image/imgContactame.png" imagePosition="right" data-aos="fade-left">
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
              <div id="icono" style={{ textAlign: 'center' }}>
                <a href="https://github.com/mart1020" target='_blank'><img src="src/public/image/githubContacto.gif" alt="Github" style={{ width: '60px', height: 'auto' }} /></a>
              </div>
              <div id="icono" style={{ textAlign: 'center' }}>
                <a href="https://www.linkedin.com/in/romartarg/" target='_blank'><img src="src/public/image/linkedincontacto.gif" alt="Linkedin" style={{ width: '60px', height: 'auto' }} /></a>
              </div>
              <div id="icono" style={{ textAlign: 'center' }}>
                <a href="mailto:martinezromina@outlook.com.ar"><img src="src/public/image/icons8-correo (2).gif" alt="Correo" style={{ width: '60px', height: 'auto' }} /></a>
              </div>
            </div>
          </Section>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App;
