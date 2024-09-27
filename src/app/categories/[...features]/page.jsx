export default function CategoriesDetailesPage({ params }) {
  if (params.features.length === 2)
    return <div className="pt-24">{params.features[1]}</div>;
  if (params.features.length === 3)
    return <div className="pt-24">{params.features[2]}</div>;
  return <div className="pt-24">Categories Detailes Page</div>;
}
