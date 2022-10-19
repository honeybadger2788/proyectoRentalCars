import { ThemeProvider } from 'styled-components';

import theme from './theme';

import { Typography } from './components/Typography';
import { Title } from './styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1 className="text-5xl font-bold underline text-indigo-600">
        Hello world!!!
      </h1>

      <Typography variant="h1" class="text-yellow-500">
        h1
      </Typography>
      <Typography variant="h2">h2</Typography>
      <Typography variant="h3">h3</Typography>
      <Typography variant="h4">h4</Typography>

      <button>
        <Typography variant="button1">Button 1</Typography>
      </button>
      <button>
        <Typography variant="button2">Button 2</Typography>
      </button>

      <Typography variant="body1">Text 1</Typography>
      <Typography variant="body2">Text 2</Typography>

      <Title>Styled title</Title>
    </ThemeProvider>
  );
}

export default App;
