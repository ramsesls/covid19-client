import withErrorHandling from 'errorHandling';
import { WrongData } from 'errorHandling/Fallbacks';

import Component from './Component';

export default withErrorHandling(Component, WrongData);
