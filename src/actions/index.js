export const changeLanguage = (newLanguage) => {
  return {
    type: "CHANGE_LANGUAGE",
    payload: newLanguage,
  };
};

export const changeTheme = (newTheme) => {
  return {
    type: "CHANGE_THEME",
    payload: newTheme,
  };
};

export const changeFontSize = (newFontSize) => {
  return {
    type: "CHANGE_FONT_SIZE",
    payload: newFontSize,
  };
};

export const changeCodeStatus = (newCodeStatus) => {
  return {
    type: "CHANGE_CODE_STATUS",
    payload: newCodeStatus,
  };
};
