import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "../types/User";

const Profile = () => {
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/1`)
      .then((u) => setUser(u.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <div className="skeleton h-full v-full"></div>}
      {error && <p className="text-secondary font-bold">{error}</p>}
      {user ? (
        <>
          <h1 className="text-xl font-bold">{user.username}</h1>
          <div>{user.name}</div>
          <div>{user.email}</div>
          <div>{user.phone}</div>
        </>
      ) : null}
    </>
  );
};

export default Profile;
