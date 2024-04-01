
const AuthNavbar = () => {
  return (
    <div className="flex justify-center items-center bg-indigo-600 h-16 px-5">
      <h1 className="tracking-wide font-bold font-sans text-white text-1xl">TODO CARDS</h1>
      <div className="md:hidden">
        <button className="btn">Register</button>
        <button className="btn ms-3">Login</button>
      </div>
    </div>
  );
};

export default AuthNavbar;