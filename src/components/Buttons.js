import { Button, styled } from "@mui/material";

function Buttons() {
  const GreenButton = styled(Button)({
    backgroundColor: 'lightgreen',
    color: 'lighred',
    margin: 4,
    "&:hover":{
      backgroundColor: 'green',
      color: 'red'
    },
    "&:disabled": {
      backgroundColor: 'gray',
      color: 'white'
    }
  })
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained" color="otherColor">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <GreenButton>Green Button</GreenButton>
    </div>
  );
}

export default Buttons;