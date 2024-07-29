export default function SingleUserPage({ searchParams }) {
  console.log(searchParams);
  return (
    <div>
      <h1 className="text-3xl text-white">
        Single User Page: {searchParams.name}
      </h1>
    </div>
  );
}
