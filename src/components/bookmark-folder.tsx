import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Bookmark } from "~/interfaces/bookmark";

interface BookmarkFolderProps {
  folder: Bookmark;
}

const BookmarkFolder: React.FC<BookmarkFolderProps> = ({ folder }) => {
  const location = useLocation();

  let url = `${location.pathname}/${folder.id}`;

  if (location.pathname === "/") {
    url = `/${folder.id}`;
  }

  return (
    <div className="bookmark-folder">
      <Link to={url}>{folder.title}</Link>
    </div>
  );
};

export default BookmarkFolder;
