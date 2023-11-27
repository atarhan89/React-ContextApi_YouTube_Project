import { Link,useNavigate } from "react-router-dom";
import { AiFillBell, AiFillVideoCamera, AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    const text=e.target[0].value
    navigate(`/results?search_query=${text}`)
  }
  
  return (
    <header className="flex justify-between items-center p-4">
      <Link className="flex items-center gap-[10px]">
        <img width={50} src="/public/youtube_logo.png" alt="" />
        <h1 className="text-[23px]  max-md:hidden">YouTube</h1>
      </Link>

      <form
      onSubmit={handleSubmit}
        className="flex items-center border border-gray-400 rounded-[20px] "
        action=""
      >
        <input
          placeholder="örn:Komik videolar"
          className="bg-black outline-none rounded-[20px] px-3 py-1"
          type="text"
          name=""
          id=""
        />
        <button className="grid place-items-center border-l px-2 text-xl">
          <AiOutlineSearch />
        </button>
      </form>
      <div className="flex gap-3 text-xl cursor-pointer ">
        <div className="p-2 transition duration-500 hover:bg-gray-700 rounded-full">
          <AiFillBell />
        </div>{" "}
        <div className="p-2 transition duration-500 hover:bg-gray-700 rounded-full">
          <AiFillVideoCamera />
        </div>
      </div>
    </header>
  );
};

export default Header;
