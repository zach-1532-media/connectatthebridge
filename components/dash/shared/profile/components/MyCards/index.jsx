/* eslint-disable no-useless-concat */
import { React, useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import { lighten, styled } from '@mui/material/styles';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

const AvatarAddWrapper = styled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        color: ${theme.colors.primary.main};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
`
);

const CardLogo = styled('img')(
  ({ theme }) => `
      border: 1px solid ${theme.colors.alpha.black[30]};
      border-radius: ${theme.general.borderRadius};
      padding: ${theme.spacing(1)};
      margin-right: ${theme.spacing(2)};
      background: ${theme.colors.alpha.white[100]};
`
);

const CardAddAction = styled(Card)(
  ({ theme }) => `
        border: ${theme.colors.primary.main} dashed 1px;
        height: 100%;
        color: ${theme.colors.primary.main};
        box-shadow: none;
        transition: ${theme.transitions.create(['all'])};
        
        .MuiCardActionArea-root {
          height: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
        }
        
        .MuiTouchRipple-root {
          opacity: .2;
        }
        
        &:hover {
          border-color: ${theme.colors.alpha.black[70]};
        }
`
);

const IconButtonError = styled(IconButton)(
  ({ theme }) => `
     background: ${theme.colors.error.lighter};
     color: ${theme.colors.error.main};
     padding: ${theme.spacing(0.5)};

     &:hover {
      background: ${lighten(theme.colors.error.lighter, 0.4)};
     }
`
);

const CardCc = styled(Card)(
  ({ theme }) => `
     border: 1px solid ${theme.colors.alpha.black[30]};
     background: ${theme.colors.alpha.black[5]};
     box-shadow: none;
`
);

function MyCards() {
  const data = {
    savedCards: 7,
  };

  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Card>
      <CardHeader
        subheader={`${data.savedCards} ` + `saved cards`}
        title="Cards"
      />
      <Divider />
      <Box p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <CardCc
              sx={{
                px: 2,
                pt: 2,
                pb: 1,
              }}
            >
              <Box display="flex" alignItems="center">
                <CardLogo
                  src="/static/images/placeholders/logo/visa.png"
                  alt="Visa"
                />
                <Box>
                  <Typography variant="h3" fontWeight="normal">
                    •••• 6879
                  </Typography>
                  <Typography variant="subtitle2">
                    Expires:{' '}
                    <Typography component="span" color="text.primary">
                      12/24
                    </Typography>
                  </Typography>
                </Box>
              </Box>
              <Box
                pt={3}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <FormControlLabel
                  value="a"
                  control={
                    <Radio
                      checked={selectedValue === 'a'}
                      value="a"
                      color="primary"
                      name="primary-card"
                    />
                  }
                  label="Primary"
                />
                <Tooltip arrow title="Remove this card">
                  <IconButtonError>
                    <DeleteTwoToneIcon fontSize="small" />
                  </IconButtonError>
                </Tooltip>
              </Box>
            </CardCc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardCc
              sx={{
                px: 2,
                pt: 2,
                pb: 1,
              }}
            >
              <Box display="flex" alignItems="center">
                <CardLogo
                  src="/static/images/placeholders/logo/mastercard.png"
                  alt="Visa"
                />
                <Box>
                  <Typography variant="h3" fontWeight="normal">
                    •••• 4634
                  </Typography>
                  <Typography variant="subtitle2">
                    Expires:{' '}
                    <Typography component="span" color="text.primary">
                      6/22
                    </Typography>
                  </Typography>
                </Box>
              </Box>
              <Box
                pt={3}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <FormControlLabel
                  value="b"
                  control={
                    <Radio
                      checked={selectedValue === 'b'}
                      onChange={handleChange}
                      value="b"
                      color="primary"
                      name="primary-card"
                    />
                  }
                  label="Primary"
                />
                <Tooltip arrow title="Remove this card">
                  <IconButtonError>
                    <DeleteTwoToneIcon fontSize="small" />
                  </IconButtonError>
                </Tooltip>
              </Box>
            </CardCc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Tooltip arrow title="Click to add a new card">
              <CardAddAction>
                <CardActionArea
                  sx={{
                    px: 1,
                  }}
                >
                  <CardContent>
                    <AvatarAddWrapper>
                      <AddTwoToneIcon fontSize="large" />
                    </AvatarAddWrapper>
                  </CardContent>
                </CardActionArea>
              </CardAddAction>
            </Tooltip>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

export default MyCards;
