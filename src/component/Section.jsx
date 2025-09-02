
import './Section.css';

export default function Section({ id, title, imgSrc, imagePosition = 'left', children }) {
  return (
    <section id={id} className={`section ${imagePosition === 'right' ? 'row-reverse' : ''}`}>
      <div className="section-content">
        <h2>{title}</h2>
        <div className="section-body">
          <img src={imgSrc} alt={title} />
          <div className="section-text">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
