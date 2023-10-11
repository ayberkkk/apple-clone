import Link from "next/link";

export default function Links() {
  return (
    <>
      <ul className="flex items-center justify-center text-[21px] mt-3 gap-7">
        <li>
          <Link href="/" className="text-[10px] lg:text-xl flex items-center justify-center gap-3 text-[#2997ff] cursor-pointer hover:underline">
            Daha fazla bilgi
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
        </li>
        <li>
          <Link href="/" className="text-[10px] lg:text-xl flex items-center justify-center gap-3 text-[#2997ff] cursor-pointer hover:underline">
            Satın alın
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
        </li>
      </ul>
    </>
  );
}
