import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Collapse from '@mui/material/Collapse';
import ItemInfo from '../ItemInfo';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function ItemDetail() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      expand={expanded}
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label="show more"
    >
      <CardContent>
        <ItemInfo />
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>Ngày giờ bay</Typography>
          <Typography paragraph>Content info flight</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
