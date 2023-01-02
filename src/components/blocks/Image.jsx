import "./Image.css";

export default function Image({ attributes }) {
  const { src, alt, caption } = attributes;

  return (
    <div className="image-block-container">
      <img src={src} alt={alt} />
      {caption && <caption>{caption}</caption>}
    </div>
  );
}
