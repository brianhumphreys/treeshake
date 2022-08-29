import React from 'react';
import { createComponent } from '@lit-labs/react';
import {Card} from '../components/Card';

console.log('sheeeiiit')

export const ReactCard = createComponent(React, 'voith-card', Card, {});
