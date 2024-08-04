import { useState } from "react";
import { useAppApi } from "../AppContext";
let number = 0;

const HomeFooter = () => {
  const { setList } = useAppApi();
  const [isOpenForm, setIsOpenForm] = useState(false);

  const handleAddBtn = (e) => {
    e.preventDefault();
    setList((previousState) => {
      const newList = {
        title: e.target.title.value,
        description: e.target.desc.value,
        id: `#id${number}`,
      };
      number += 1;
      e.target.title.value = "";
      e.target.desc.value = "";
      e.target.title.value = "";
      return [...previousState, newList];
    });
    toggle();
  };
  const toggle = () => {
    setIsOpenForm(!isOpenForm);
  };

  return (
    <section className="w-full fixed bottom-0 left-0">
      <div className=" w-full h-16 rounded-t-[32px] bg-gray-200 flex justify-center items-center">
        <span
          className="w-12 h-12 bg-purple text-white text-4xl rounded-full flex justify-center cursor-pointer hover:scale-125 hover:brightness-75 focus:scale-125 focus:brightness-75 transition-all"
          onClick={() => toggle()}
        >
          +
        </span>
        <span></span>
      </div>
      <div
        style={{
          transform: isOpenForm ? "translateX(0)" : "translateX(-100%)",
        }}
        className="w-full h-[100vh] fixed top-0 left-0 z-10 backdrop-blur-md flex items-center justify-center transition-transform"
      >
        <form onSubmit={handleAddBtn} className="bg-white form-container">
          <h1 className="text-2xl font-bold text-purple">Add ToDo</h1>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            maxLength={15}
            className="input"
            required
          />
          <input
            type="text"
            name="desc"
            id="desc"
            placeholder="Description"
            maxLength={60}
            className="input h-32"
            required
          />
          <div className="flex gap-6 mt-4">
            <button type="submit" className="btn btn-primary w-32">
              Add
            </button>
            <button
              onClick={() => {
                toggle();
              }}
              className="btn btn-secondary w-32"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HomeFooter;
