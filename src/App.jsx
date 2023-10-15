import { Routers } from "./Routers";
import { useUser } from "./auth";

function App() {
  const { isLoading, user } = useUser();

  return (
    <div>
      <Routers isLoading={isLoading} user={user} />
    </div>
  );
}

export default App;
