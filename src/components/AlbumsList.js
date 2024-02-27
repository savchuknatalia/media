import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import AlbumsListItem from "./AlbumsListItem";
import Skeleton from "./Sceleton";
import Button from "./shared/Button";

function AlbumsList({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;

  if (isFetching) {
    content = <Skeleton times={3} className="h-10 w-full" />;
  } else if (error) {
    content = <div>Error loading albums...</div>;
  } else {
    content = data.map((album) => {
      return <AlbumsListItem key={album.id} album={album} user={user} />
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h2 className="m-2 text-lg font-bold">Albums for {user.name}</h2>
        <Button onClick={handleAddAlbum} loading={isFetching}>+ Add Album</Button>
        { error && 'Error creating user...' }
      </div>
      { content }
    </div>
  );
}

export default AlbumsList;
