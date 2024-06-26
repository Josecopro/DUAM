import { useNavigate } from 'react-router-dom';

function useAppNavigate() {
  const navigate = useNavigate();

  const goToRoute = (route) => {
    navigate(route);
  };

  return goToRoute;
}

export  {useAppNavigate};