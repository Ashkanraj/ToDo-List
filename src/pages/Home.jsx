import HomeFooter from "../components/HomeFooter";
import AppContext from "../AppContext";
import ToDoList from "../components/ToDoList";

const Home = () => {
  return (
    <AppContext>
      <main className="p-6">
        <h1 className="text-center font-bold text-3xl">Add ToDo</h1>
        <ToDoList />
      </main>
      <HomeFooter />
    </AppContext>
  );
};

export default Home;
