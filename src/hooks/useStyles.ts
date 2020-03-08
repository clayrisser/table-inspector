import useTheme from './useTheme';
import { Styles } from '../types';

export default function(style: string): Styles {
  return useTheme()[style];
}
