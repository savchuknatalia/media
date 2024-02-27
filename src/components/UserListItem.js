import { GoTrashcan } from "react-icons/go";
import { useThunk } from "../hooks/useThunk";
import { removeUser } from "../store";
import AlbumsList from "./AlbumsList";
import Button from "./shared/Button";
import ExpandablePanel from "./shared/ExpandablePanel";

function UserListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  const header = <>
    <Button className="mr-3" loading={isLoading} onClick={handleClick}>
      <GoTrashcan />
    </Button>
    {error && <div>Error deleting user.</div>}
    {user.name}
  </>;

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}

export default UserListItem;
