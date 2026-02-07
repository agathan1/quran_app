import { DETAIL_SURAH, HOME_PAGE } from "@/routes/route";
import { NavLink } from "react-router";

const menuNavbar = [
  {
    name: "Home",
    path: HOME_PAGE,
  },
  {
    name: "Surah",
    path: DETAIL_SURAH,
  },
];

export default function Botnav() {
  return (
    <nav className="bg-main border-t-4 border-t-black font-poppins fixed bottom-0 w-full p-6 rounded-t-3xl">
      <ul className="flex justify-around p-2">
        {menuNavbar.map((item, index) => (
          <NavLink
            key={index}
            className={({ isActive }) =>
              isActive ? "font-bold text-zinc-950 underline underline-offset-8 decoration-2" : "hover:cursor-pointer font-medium"
            }
            to={`${item.path}`}
          >
            {item.name}
          </NavLink>
          //   <li key={index} className="hover:cursor-pointer">{item}</li>
        ))}
      </ul>
    </nav>
  );
}
