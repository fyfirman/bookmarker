import { format } from "date-fns";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import { Bookmark } from "~/interfaces/bookmark";
import { useScrapperQuery } from "~/hooks/use-scrapper-query";

interface BookmarkCardProps extends Bookmark {}

const BookmarkCard = ({ title, url, dateAdded }: BookmarkCardProps) => {
  if (!url) {
    throw new Error("Url is empty");
  }

  const query = useScrapperQuery(url ?? "");

  return (
    <Card
      className="hover:cursor-pointer"
      onClick={() => {
        window.open(url, "_blank");
      }}
      sx={{
        borderWidth: 0,
        boxShadow:
          "0px 20px 25px rgba(0, 0, 0, 0.03), 0px 10px 10px rgba(0, 0, 0, 0.04);",
      }}
      variant="outlined"
    >
      <CardOverflow>
        <AspectRatio ratio="1.91">
          <img
            alt=""
            loading="lazy"
            src={
              !query.isLoading && query.data?.ogImage
                ? query.data.ogImage
                : "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
            }
          />
        </AspectRatio>
      </CardOverflow>
      <div className="flex flex-col gap-2">
        <span className="mt-2 flex items-start gap-2 ">
          {query.data?.icoUrl ? (
            <img
              alt=""
              className="mt-1"
              height={20}
              loading="lazy"
              src={query.data.icoUrl}
              width={20}
            />
          ) : null}
          <h2 className="text-base tracking-tighter text-zinc-900 line-clamp-2">
            {title}
          </h2>
        </span>
        <span className="text-sm font-light tracking-tighter text-zinc-800 line-clamp-1">
          {url}
        </span>
        {!query.isLoading ? (
          <span className="text-sm font-light tracking-tighter text-zinc-800 line-clamp-1">
            {query.data?.description}
          </span>
        ) : null}
      </div>
    </Card>
  );
};

export default BookmarkCard;
