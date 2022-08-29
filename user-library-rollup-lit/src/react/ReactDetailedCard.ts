import React from 'react';
import { createComponent } from '@lit-labs/react';
import {DetailedCard} from '../components/DetailedCard';

console.log('react');
console.log(React);
console.log(createComponent);
console.log(DetailedCard);
export const ReactDetailedCard = createComponent(React, 'voith-detailed-card', DetailedCard, {});
