import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import PhotosListItem from "./PhotosListItem";
import Skeleton from "./Sceleton";
import Button from "./shared/Button";

function PhotosList({ album }) {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton times={4} className="h-8 w-8" />;
  } else if (error) {
    content = <div>Error fetching data...</div>;
  } else {
    content = data.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo} />
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-2">
        <h3 className="m-2 text-lg font-bold">Photos In {album.title}</h3>
        <Button onClick={handleAddPhoto} loading={addPhotoResults.isLoading}>+ Add Photo</Button>
        { error && 'Error creating photo...' }
      </div>
      <div  className="flex flex-row flex-wrap justify-center mx-8">
        { content }
      </div>
    </div>
  );
}

export default PhotosList;
