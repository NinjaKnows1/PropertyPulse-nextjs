export default async function PropertyPage({ params }) {
  const { id } = await params;
  return <div>PropertyPage {id}</div>;
}
