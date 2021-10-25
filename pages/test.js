function getTitle() {
  return { __html: "<h1>Test Page</h1>" };
}
// work component
const json = {
  title: { __html: "<h1>Test Page from JSON</h1>" },
};
export default function TestPage() {
  return (
    <>
      <div dangerouslySetInnerHTML={getTitle()}></div>
      <div dangerouslySetInnerHTML={json.title}></div>
    </>
  );
}
