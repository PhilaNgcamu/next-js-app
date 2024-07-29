import Link from "next/link";

export default function SingleUserPage({ searchParams }) {
  console.log(searchParams);
  return (
    <div className="p-10 bg-[#182237] flex flex-col gap-10 items-center">
      <h1 className="text-2xl font-bold">{searchParams.name}</h1>
      <p className="text-lg">Email: {searchParams.email}</p>
      <p>Created At: {searchParams.createdAt}</p>
      <p>Role: {searchParams.role}</p>
      <p>Status: {searchParams.status}</p>
      <img
        src={searchParams.avatar}
        alt={searchParams.name}
        width={100}
        height={100}
        className="rounded-full"
      />

      <div>
        <Link href="/dashboard/users">Back</Link>
      </div>

      <div>
        <Link href={`/dashboard/users/${searchParams.id}/posts`}>Posts</Link>
      </div>

      <div>
        <Link href={`/dashboard/users/${searchParams.id}/comments`}>
          Comments
        </Link>
      </div>
    </div>
  );
}
