import Link from "next/link";
import React from "react";

function layout({children}) {
  return (
    <div className="mt-44">
      <div className="flex justify-center mt-5">
        <div>
          {/* <ForntEndMain></ForntEndMain> */}
          <Link
            className="btn bg-pink-400"
            href="/questions/Cms"
          >
            Cms
          </Link>
        </div>
        <div>
          <Link
            className="btn bg-pink-400"
            href="/questions/FrontEnd"
          >
            FrontEnd
          </Link>
        </div>
        <div>
          <Link
            className="btn bg-pink-400"
            href="/questions/Backend"
          >
            Backend
          </Link>
        </div>
        <div>
          <Link
            className="btn bg-pink-400"
            href="/questions/DjangoDeveloper"
          >
            DJango
          </Link>
        </div>
      </div>
      <main className="flex-1 mt-14 md:mt-0 w-full">
        <div className="max-w-4xl p-4 sm:p-6 lg:p-20">{children}</div>
      </main>
    </div>
  );
}

export default layout;
