import Header from "./Header";
import DateHeader from "./DateHeader";
import Item from "./Item";
import Form from "./Form";
import Footer from "./Footer";
import useTodos from "./useTodos";

export default function App() {
  const {deleteTask, handleInput, handleSubmit, list, input, isTaskError, isTimeError} = useTodos()

  return (
    <>
      <Header />
      <div className='todo-display'>
        <DateHeader />
        {list.length ? (
          list.map((task, index) => {
            return (
              <Item
                time={task.time}
                task={task.task}
                key={index}
                id={index}
                deleteTask={deleteTask}
              />
            );
          })
        ) : (
          <Item
            time='now'
            task='Add new task down below!'
            deleteTask={() => {}}
          />
        )}
        <Form
          handleSubmit={handleSubmit}
          handleInput={handleInput}
          values={input}
          isTaskError={isTaskError}
          isTimeError={isTimeError}
        />
      </div>
      <Footer />
    </>
  );
}
