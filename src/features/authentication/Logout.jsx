import Button from '../../ui/Button';
import { useLogout } from './useLogout';

function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <Button $variation='secondary' disabled={isLoading} onClick={logout}>
      Logout
    </Button>
  );
}

export default Logout;
