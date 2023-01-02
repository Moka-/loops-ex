export default function HTML({ content }) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
