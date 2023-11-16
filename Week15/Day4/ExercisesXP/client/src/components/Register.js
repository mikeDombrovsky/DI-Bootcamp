import { useAuth } from "../hooks/AuthProvider";

const Register = () => {
  const { handleLogin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:3000/register", {
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
    handleLogin(data.token);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="username">Username</label>
      <br />
      <input name="username" />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input type="password" name="password" />
      <input type="submit" value="register" />
      <hr />
    </form>
  );
};

export default Register;
