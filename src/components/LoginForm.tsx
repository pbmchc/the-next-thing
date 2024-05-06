export const LoginForm = () => {
  return (
    <form className="flex max-w-4xl flex-col">
      <label>Email</label>
      <input className="border-2 border-solid border-gray-100 p-2" />
      <label>Password</label>
      <input className="border-2 border-solid border-gray-100 p-2" />
      <button
        className="mt-4 border-2 border-solid border-gray-300 bg-gray-100 py-4"
        type="submit"
      >
        Log in
      </button>
    </form>
  );
};
