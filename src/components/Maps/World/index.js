import { memo } from 'react';

import withErrorHandling from 'errorHandling';
import { WrongData } from 'errorHandling/Fallbacks';

import Component from './Component';

export default memo(withErrorHandling(Component, WrongData));
