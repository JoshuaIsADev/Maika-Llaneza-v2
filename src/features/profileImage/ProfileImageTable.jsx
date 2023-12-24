import { useQuery } from '@tanstack/react-query';
import Table from '../../ui/Table';
import Spinner from '../../ui/Spinner';

import ProfileImageRow from './ProfileImageRow';
import { getProfileImage } from '../../services/apiProfileImage';

function ProfileImageTable() {
  const {
    isLoading,
    data: profileImage,
    // error,
  } = useQuery({
    queryKey: ['profileImage'],
    queryFn: getProfileImage,
  });
  // console.log(profileImage[0].image);

  if (isLoading) return <Spinner />;

  return (
    <Table role=''>
      <ProfileImageRow image={profileImage[0].image} key={profileImage[0].id} />
    </Table>
  );
}

export default ProfileImageTable;
