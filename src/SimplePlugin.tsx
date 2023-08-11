import React from 'react';

export const SimplePlugin = ({ data }: { data: any }) => (
  <div>
    <p>A plugin component</p>
    <button onClick={() => alert(`hello ${data.id}`)}>Click me</button>
  </div>
);
