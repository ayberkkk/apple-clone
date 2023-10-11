import Link from "next/link";
import { mainMenu } from "./menu";
import { useState } from "react";

export default function Header() {
  const [subMenuOpen, setSubMenuOpen] = useState(Array(mainMenu.length).fill(false));

  const handleMouseEnter = (index) => {
    const updatedSubMenuOpen = [...subMenuOpen];
    updatedSubMenuOpen[index] = true;
    setSubMenuOpen(updatedSubMenuOpen);
  };

  const handleMouseLeave = (index) => {
    const updatedSubMenuOpen = [...subMenuOpen];
    updatedSubMenuOpen[index] = false;
    setSubMenuOpen(updatedSubMenuOpen);
  };

  const [showMenu, setShowMenu] = useState(false);

  const [pathD, setPathD] = useState(
    "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
  );
  const handleSecondSvgClick = () => {
    setShowMenu(!showMenu);
    setPathD(
      "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
    );
  };

  return (
    <header className="sticky top-0 left-0 bg-[#121212] z-50">
      <div className="container mx-auto max-w-[1024px]">
        <ul className="hidden lg:flex items-center justify-center gap-10">
          <Link href="/">
            <svg viewBox="0 0 14 44" className="w-4 h-11 text-white">
              <path
                fill="currentColor"
                d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"
              ></path>
            </svg>
          </Link>
          {mainMenu.map((m, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="relative group"
            >
              <Link href={m.path} className="text-[12px] font-normal text-[#ffffffcc] cursor-pointer hover:text-white group transition-all">
                {m.title}
              </Link>
              {m.submenu && subMenuOpen[index] && (
                <div className="container mx-auto max-w-[1024px]">
                  <ul className="absolute bg-[#121212] w-full overflow-hidden left-0 pt-4 pb-16 opacity-0 transform scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transition-opacity duration-300 ease-in-out">
                    {m.submenu.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="text-base container mx-auto max-w-[1024px] px-10 max-h-[300px]"
                      >
                        <h2 className="text-[11px] text-[#e4e4e4cc] font-semibold mt-3 mb-3">
                          {subItem.subTitle}
                        </h2>
                        <span className="text-2xl font-semibold text-[#ffffffcc] hover:text-white transition-all">
                          {subItem.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 15 44"
              className="w-4 h-11 text-white"
            >
              <path
                fill="currentColor"
                d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"
              ></path>
            </svg>
          </Link>
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 15 44"
              className="w-4 h-11 text-white"
            >
              <path
                fill="currentColor"
                d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"
              ></path>
            </svg>
          </Link>
        </ul>
        <ul className="lg:hidden flex items-center justify-between px-2">
          <li>
            <svg
              height="44"
              viewBox="0 0 14 44"
              width="14"
              style={{ color: "white" }}
            >
              <path
                fill="currentColor"
                d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"
              ></path>
            </svg>
          </li>
          <li>
            <ul className="flex items center gap-3">
              <li className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="44"
                  viewBox="0 0 15 44"
                  style={{ color: "white" }}
                >
                  <path
                    fill="currentColor"
                    d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"
                  ></path>
                </svg>
              </li>
              <li className="cursor-pointer">
                <svg
                  height="44"
                  viewBox="0 0 14 44"
                  width="30"
                  style={{ color: "white" }}
                >
                  <path
                    fill="currentColor"
                    d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"
                  ></path>
                </svg>
              </li>
              <li className="cursor-pointer relative z-20">
                <svg
                  height="44"
                  width="25"
                  viewBox="0 0 16 16"
                  style={{ color: "white" }}
                  onClick={handleSecondSvgClick}
                >
                  <path fill="currentColor" d={pathD} />
                </svg>
              </li>
            </ul>
          </li>
        </ul>
        {showMenu && (
          <ul
            className={`transition-transform duration-300 ease-in-out ${
              showMenu
                ? "transform translate-y-0"
                : "transform -translate-y-full"
            } bg-[#121212] text-white fixed top-0 left-0 w-full h-screen overflow-y-auto`}
          >
            {mainMenu.map((m, index) => (
              <li
                key={index}
                className="text-[40px] font-normal text-[#ffffffcc] cursor-pointer hover:text-white transition-colors group px-5"
              >
                {m.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
