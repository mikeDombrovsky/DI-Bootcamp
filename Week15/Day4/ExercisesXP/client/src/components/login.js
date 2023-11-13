import { useAuth } from "../hooks/AuthContext";

const Login = () => {
  const { setToken } = useAuth();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    fetch('https//localhost:3000/login', )
  } 
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor=""></label>
      <input name="username" />
      <input type="password" name="password" />
      <input type="submit" />
    </form>
  );
};
