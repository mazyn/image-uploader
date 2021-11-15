export const validateFile = (file: File) => {
  const validTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'image/x-icon',
  ];

  return validTypes.indexOf(file.type) != -1;
};
