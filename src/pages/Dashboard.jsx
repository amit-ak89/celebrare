import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";
import SkeletonCard from "../components/SkeletonCard";

function Dashboard() {
  const navigate = useNavigate();

  const {
    user,
    logout,
    isLoading,
  } = useAuth();

  const [events, setEvents] = useState([]);
  const [loadingEvents, setLoadingEvents] =
    useState(true);

  const [search, setSearch] = useState("");

  const [selectedEvent, setSelectedEvent] =
    useState(
      localStorage.getItem("selectedEvent")
    );

  useEffect(() => {
    const fetchEvents = async () => {
      const snapshot = await getDocs(
        collection(db, "events")
      );

      const data = snapshot.docs.map(
        (doc) => ({
          id: doc.id,
          ...doc.data(),
        })
      );

      setEvents(data);
      setLoadingEvents(false);
    };

    fetchEvents();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const filteredEvents = events.filter(
    (event) =>
      (event.name || "")
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-5">
        Dashboard
      </h1>

      <img
        src={user?.photo}
        alt=""
        className="w-20 h-20 rounded-full"
      />

      <h2 className="mt-3 text-xl">
        {user?.name}
      </h2>

      <p>{user?.email}</p>

      <button
        onClick={() => {
          logout();
          navigate("/");
        }}
        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
      >
        Logout
      </button>

      <hr className="my-6" />

      <input
        type="text"
        placeholder="Search Event"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="border p-2 w-full mb-5"
      />

      {loadingEvents ? (
        <div className="grid md:grid-cols-3 gap-4">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">

          {filteredEvents.map((event) => (
            <div
              key={event.id}
              onClick={() => {
                localStorage.setItem(
                  "selectedEvent",
                  event.id
                );

                setSelectedEvent(
                  event.id
                );
              }}
              className={`border p-4 rounded shadow cursor-pointer ${
                selectedEvent ===
                event.id
                  ? "border-blue-500 border-4"
                  : ""
              }`}
            >
              <h2 className="font-bold">
                {event.name}
              </h2>

              <p>
                {event.location}
              </p>

              <p>
                {event.date}
              </p>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Dashboard;