function FloatingSocials() {
    return (
      <div style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        zIndex: 1000,
      }}>
        <a href="https://github.com/mart1020" target="_blank">
          <img src="src/public/image/icons8-github-48.png" alt="GitHub" style={{ width: '50px' }} />
        </a>
        <a href="https://www.linkedin.com/in/romartarg/" target="_blank">
          <img src="src/public/image/icons8-linkedin-circled-48.png" alt="LinkedIn" style={{ width: '50px' }} />
        </a>
        <a href="mailto:martinezromina@outlook.com.ar">
          <img src="src/public/image/communication_11509318.png" alt="Correo" style={{ width: '50px' }} />
        </a>
      </div>
    );
  }
  
  export default FloatingSocials;
  