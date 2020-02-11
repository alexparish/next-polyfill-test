export default function Index() {
  const someArray = ["a", "b", "c"];
  if (someArray.includes("foobar")) {
    return (
      <div>
        <p>foobar found</p>
      </div>
    );
  }

  return (
    <div>
      <p>Hello Next.js</p>
    </div>
  );
}
