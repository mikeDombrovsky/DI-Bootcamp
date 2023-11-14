import { useAuth } from "../hooks/AuthProvider";

const Login = () => {
  const { setToken } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https//localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.name.value,
        password: e.target.password.value,
      }),
    });

    const data = await response.json();

    console.log(data);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor=""></label>
      <input name="username" />
      <input type="password" name="password" />
      <input type="submit" value="login" />
    </form>
  );
};

export default Login;
