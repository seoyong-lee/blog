export const multilineToSingleline = (text?: string) => {
  if (!text) {
    return;
  }
  return text.replace(/\n/g, "#NEWLINE#");
};

export const singlelineToMultiline = (text?: string) => {
  if (!text) {
    return;
  }
  return text.replace(/#NEWLINE#/g, "\n");
};
