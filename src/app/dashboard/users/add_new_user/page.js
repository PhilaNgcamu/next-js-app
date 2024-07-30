export default function AddNewUser() {
  return (
    <div className="flex flex-col mt-4">
      <form className="flex flex-col p-4 bg-[#182237] rounded-lg">
        <div className="flex gap-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="p-4 bg-[#2e3742] rounded-lg pr-72"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-4 bg-[#2e3742] rounded-lg pr-72"
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="text-white">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="p-4 bg-[#2e3742] rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="role" className="text-white">
            Role
          </label>
          <select
            id="role"
            name="role"
            className="text-white p-4 bg-[#2e3742] rounded-lg"
          >
            <option value="admin" className="text-white">
              Admin
            </option>
            <option value="user" className="text-white">
              User
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="status" className="text-white">
            Status
          </label>
          <select
            id="status"
            name="status"
            className="p-4 bg-[#2e3742] rounded-lg text-white"
          >
            <option value="active" className="text-white">
              Active
            </option>
            <option value="inactive" className="text-white">
              Inactive
            </option>
          </select>
        </div>
        <button
          type="submit"
          className="p-4 bg-[#5d57c9] rounded-lg text-white"
        >
          Add User
        </button>
      </form>
    </div>
  );
}
