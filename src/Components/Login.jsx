import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TaskForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log({ username, password });
    if (username !== "adrian" || password !== "123456") {
      setHasError(true);
    } else {
      setHasError(false);
      setUsername("");
      setPassword("");
      navigate(`/main`);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSumbit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2x1 font-bold text-white mb-3">Iniciar sesion</h1>
        <input
          placeholder="Usuario"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <input
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        {hasError && (
          <div style={{ color: "red" }}>Usuario o contraseña incorrectos</div>
        )}
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
