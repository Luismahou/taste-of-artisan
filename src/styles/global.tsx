import React from 'react';

export const Global = () => (
  <style jsx global>{`
    .unstyle-button {
      padding: 0;
      margin: 0;
      border: none;
      outline: none;
      background: transparent;
    }
    .unstyle-button:hover,
    .unstyle-button:focus,
    .unstyle-button:active {
      outline: none;
    }

    .unstyle-a {
      outline: none;
      text-decoration: none;
    }
    .unstyle-a:hover,
    .unstyle-a:focus,
    .unstyle-a:active {
      text-decoration: none;
      outline: none;
    }

    .unstyle-ul,
    .unstyle-ol,
    .unstyle-li {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    .d-none {
      display: none;
    }
    .d-block {
      display: block;
    }
    @media (min-width: 600px) {
      .d-sm-none {
        display: none;
      }
      .d-sm-block {
        display: block;
      }
    }
    @media (min-width: 900px) {
      .d-md-none {
        display: none;
      }
      .d-md-block {
        display: block;
      }
    }
  `}</style>
);
