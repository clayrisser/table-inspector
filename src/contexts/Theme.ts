import { createContext } from 'react';
import base from '../theme/base';
import themes from '../theme';
import { Theme } from '../types';

export default createContext<Theme>(base(themes['chromeLight']));
