export const theme = {
  true: {
    backgroundColor: '#3A3B3C',
    color: '#FFF'
  },
  false: {
    backgroundColor:'#FFF',
    color: '#3A3B3C'
  }
};

const themeSelector = (state) => {
  return theme[state.theme.darkMode];
};

export default themeSelector; 