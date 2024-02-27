import { GoTrashcan } from "react-icons/go";
import Button from "./shared/Button";
import ExpandablePanel from "./shared/ExpandablePanel";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

function AlbumsListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbom = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button className="mr-3" loading={results.isLoading} onClick={handleRemoveAlbom}>
        <GoTrashcan />
      </Button>
      {album.isError && <div>Error deleting album.</div>}
      {album.title}
    </>
    );

    return (
      <ExpandablePanel key={album.id} album={album} header={header}>
        <PhotosList album={album} />
      </ExpandablePanel>
    );
}

export default AlbumsListItem;
