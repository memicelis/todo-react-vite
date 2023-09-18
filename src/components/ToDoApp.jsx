import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';
import Navbar from '@/components/Navbar';

const TodoApp = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="todos">
          <Header />
          <TodosLogic />
        </div>
      </div>
    </>
  );
};
export default TodoApp;
