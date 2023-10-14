import Link from "next/link";
export default function Breadline() {
  return (
    <div>
      <div className=" bg-white ribbon-drop lg:p-3 p-5">
        <p className="text-black text-center text-sm  leading-[1.42859] font-normal flex flex-wrap items-center justify-center">
          Get $200–$650 in credit toward iPhone 15 or iPhone 15 Pro when you
          trade in an iPhone 11 or higher.<sup>3</sup>
          <Link href="/" className="text-blue-500 ml-1 flex items-center hover:underline">
            Shop iPhone
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </Link>
        </p>
      </div>
    </div>
  );
}
