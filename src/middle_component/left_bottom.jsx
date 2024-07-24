const Leftbottom = () => {
  return (
    <div className="mt-2 w-30 bg-gray-800 text-white p-5 mr-10 rounded h-30 h-screen-fi ">
      <h3 className="text-yellow-500 text-xl pr-16">Find member</h3>
      <div className="mt-2">
        <input
          type="search"
          className="input rounded border border-gray-300 w-full p-2"
          name="username"
          maxLength="50"
          placeholder="Name…"
        />
      </div>
    </div>
  );
};

export default Leftbottom;
