import React from 'react';
import { createComponent } from '@lit-labs/react';
import {Card} from '../components/Card';

console.log('react');
console.log(React);
console.log(createComponent);
console.log(Card);
export const ReactCard = createComponent(React, 'voith-card', Card, {});
