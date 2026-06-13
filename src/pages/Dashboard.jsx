import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">
        Dashboard
      </h1>

      <img
        src={user.photo}
        alt=""
        className="w-20 h-20 rounded-full"
      />

      <h2 className="mt-4 text-xl">
        {user.name}
      </h2>

      <p>{user.email}</p>

      <button
        onClick={logout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;