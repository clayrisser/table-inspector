import { useContext } from 'react';
import AlternateContext from '../contexts/Alternate';

export default function useTheme() {
  return useContext(AlternateContext);
}
