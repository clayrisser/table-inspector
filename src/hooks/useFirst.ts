import { useContext } from 'react';
import FirstContext from '../contexts/First';

export default function useTheme() {
  return useContext(FirstContext);
}
