import "./Quote.css";

export default function Quote({ content }) {
  return (
    <div className="quote-block-container">
      <blockquote>{content}</blockquote>
    </div>
  );
}
