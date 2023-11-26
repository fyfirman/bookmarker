import React from "react";
import { Link } from "react-router-dom";
import { Bookmark } from "~/interfaces/bookmark";

interface BookmarkFolderProps {
  folder: Bookmark;
}

const BookmarkFolder: React.FC<BookmarkFolderProps> = ({ folder }) => (
  <div className="bookmark-folder">
    <Link to={`/folder/${folder.id}`}>{folder.title}</Link>
  </div>
);

export default BookmarkFolder;
