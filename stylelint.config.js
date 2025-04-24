module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-order': [
      [
        {
          groupName: 'custom-properties',
          properties: ['/^--/'],
        },
        {
          groupName: 'positioning',
          properties: ['position', 'top', 'right', 'bottom', 'left', 'z-index'],
        },
        {
          groupName: 'display',
          properties: ['display', 'flex', 'grid', 'align-items', 'justify-content'],
        },
        // Add more groups if needed
      ],
      {
        unspecified: 'bottomAlphabetical', // fallback sort
      },
    ],
  },
};
