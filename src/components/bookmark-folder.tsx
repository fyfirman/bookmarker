import clsx from "clsx";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Bookmark } from "~/interfaces/bookmark";

interface BookmarkFolderProps {
  folder: Bookmark;
}

const gradients: { from: string; to: string }[] = [
  {
    from: "from-cyan-500",
    to: "to-blue-500",
  },
  {
    from: "from-purple-500",
    to: "to-pink-500",
  },
  {
    from: "from-indigo-500",
    to: "to-purple-500",
  },
  {
    from: "from-sky-500",
    to: "to-emerald-500",
  },
];

const BookmarkFolder: React.FC<BookmarkFolderProps> = ({ folder }) => {
  const location = useLocation();

  let url = `${location.pathname}/${folder.id}`;

  if (location.pathname === "/") {
    url = `/${folder.id}`;
  }

  const indexRandom = Math.floor(Math.random() * gradients.length);
  const gradient = gradients[indexRandom];

  return (
    <div
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className={clsx(
        `rounded-lg shadow-lg min-h-[250px] bg-gradient-to-br`,
        `${gradient.from}`,
        `${gradient.to}`
      )}
    >
      <Link
        className="text-white h-full w-full flex items-center justify-center text-xl font-extralight"
        to={url}
      >
        {folder.title}
      </Link>
    </div>
  );
};

export default BookmarkFolder;
