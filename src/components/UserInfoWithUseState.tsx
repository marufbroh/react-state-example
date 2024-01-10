import { useState } from "react";

const UserInfoWithUseState = () => {
  const exampleUser = {
    name: "",
    age: "0",
    hobbies: [],
  };

  const [user, setUser] = useState(exampleUser);

  console.log(user);

  return (
    <form>
      <input
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        type="text"
        name="name"
        id="name"
        placeholder="name"
      />
      <input
        onChange={(e) => setUser({ ...user, age: e.target.value })}
        type="number"
        name="age"
        id="age"
        placeholder="age"
      />
      <input
        onBlur={(e) =>
          setUser({ ...user, hobbies: [...user.hobbies, e.target.value] })
        }
        type="text"
        name="hobbies"
        id="hobbies"
        placeholder="hobby"
      />
      <input type="submit" value="Submit" className="btn btn-primary" />
    </form>
  );
};

export default UserInfoWithUseState;
