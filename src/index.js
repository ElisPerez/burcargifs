import React from 'react';
import { createRoot } from 'react-dom/client';

import { GifExpertApp } from './GifExpertApp';
import './index.css';

const container = document.getElementById('app');

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>);
