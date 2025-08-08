// Tools.jsx
function Tools({ title = "Tools", icons = [] }) {
  return (
    <div className="tools">
      {title && <p>{title}</p>}

      <div className="tools-container">
        {icons.map((icon, index) => (
          icon.link ? (
            <a
              key={index}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              title={icon.name}
            >
              <img
                src={icon.icon}
                alt={icon.name}
                loading="lazy"
                style={{ width: "40px", height: "40px" }}
                
              />
            </a>
          ) : (
            <button key={index} title={icon.name}>
              <img
                src={icon.icon}
                alt={icon.name}
                loading="lazy"
                style={{ width: "40px", height: "40px" }}
              />
            </button>
          )
        ))}
      </div>
    </div>
  );
}

export default Tools;
