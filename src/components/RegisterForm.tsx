export const RegisterForm = () => {
  return (
    <form className="flex max-w-4xl flex-col">
      <label>Email</label>
      <input className="border-2 border-solid border-gray-100 p-2" />
      <label>Password</label>
      <input className="border-2 border-solid border-gray-100 p-2" />
      <label>Repeat password</label>
      <input className="border-2 border-solid border-gray-100 p-2" />
      <button
        className="mt-4 border-2 border-solid border-gray-300 bg-gray-100 py-4"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};
