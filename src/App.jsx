import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1e3799] to-[#0c2461] px-10 py-20">
      <Header />
      <div className="flex flex-col">
        <div>
          <TodoForm />
        </div>
        <div>
          <div>
            <TodoList />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
