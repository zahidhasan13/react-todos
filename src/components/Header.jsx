import { FaClipboardList } from "react-icons/fa6";
const Header = () => {
  return (
    <header className="header bg-white p-5 rounded-tl-xl rounded-tr-xl border-b-2">
      <div className="flex items-center gap-2 text-xl">
        <span>
          <FaClipboardList className="text-[#1e3799]" />
        </span>
        <h2 className="uppercase tracking-wider font-semibold text-[#1e3799]">
          todo app
        </h2>
      </div>
    </header>
  );
};

export default Header;
