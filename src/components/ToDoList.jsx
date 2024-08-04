import { useAppApi } from "../AppContext";

const ToDoList = () => {
  const { list, setList } = useAppApi();
  const handleRemoveBtn = (id) => {
    setList((previousState) => {
      const currentState = previousState.filter((item) => item.id !== id);
      return currentState;
    });
  };
  const handleRemoveList = () => {
    setList([]);
  };

  return (
    <section className="my-8 flex flex-col items-center">
      <div className="w-11/12 min-w-72 max-w-[900px] min-h-80 p-6 shadow-2xl rounded-2xl flex flex-col gap-6 justify-evenly items-center">
        {list[0] ? (
          list.map((item) => {
            return (
              <div
                key={item.id}
                className="w-full flex flex-col gap-4 border border-purple p-4 rounded-2xl relative"
              >
                <h1 className="text-purple text-2xl font-bold">
                  Title : {item.title}
                </h1>
                <p className="text-md font-semibold w-full break-words">
                  description : {item.description}
                </p>
                <button
                  className="btn btn-secondary text-sm  p-0 w-6 h-6 rounded-full flex justify-center absolute top-2 right-2"
                  title="remove"
                  onClick={() => handleRemoveBtn(item.id)}
                >
                  X
                </button>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-xl font-semibold">Your List is Empty :)</h1>
            <p>Add items by the + button</p>
          </div>
        )}
        {list[0] ? (
          <button
            onClick={() => handleRemoveList()}
            className="btn btn-secondary"
          >
            Remove List
          </button>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default ToDoList;
