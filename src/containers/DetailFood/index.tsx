import {
  Box,
  Card,
  CardMedia,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Rating } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { bannerFake, fake } from 'utils/helper';
export const DetailFood = () => {
  const { foodId } = useParams<{ foodId: string }>();
  const classes = useStyles();
  const data = fake[+foodId - 1];
  return (
    <Box className={classes.container}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <CardMedia
          image={data.image}
          style={{
            width: 400,
            height: 280,
            borderRadius: 30,
          }}
        />
      </Box>
      <Box className={classes.content}>
        <Box className={classes.item}>
          <Typography>名前: </Typography>
          <Typography>{data.name}</Typography>
        </Box>
        <Box className={classes.item}>
          <Typography>レストラン: </Typography>
          <Typography>{data.res_name}</Typography>
        </Box>
        <Box className={classes.item}>
          <Typography>評価: </Typography>
          <Rating
            name="read-only"
            value={data.ratingStar}
            precision={0.5}
            readOnly
          />
        </Box>
        <Box className={classes.item}>
          <Typography>レーティング: </Typography>
          <Typography>{data.description}</Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="flex-end" width="100%" mt={5}>
        <CardMedia
          image="/images/Chat_plus.png"
          style={{
            width: 52,
            height: 52,
            padding: 10,
            border: '1px solid black',
            borderRadius: 10,
            cursor: 'pointer',
          }}
        />
      </Box>
      <Box mt={5} width={'100%'}>
        <Box display="flex" justifyContent="space-between" width={'100%'}>
          <Box
            width="calc(100% - 140px)"
            style={{
              display: 'flex',
            }}
          >
            <CardMedia
              image="/images/default-avatar.jpeg"
              style={{
                width: 120,
                height: 100,
                marginRight: 20,
                borderRadius: '50%',
              }}
            />
            <Box display='flex' flexDirection='column' justifyContent='space-evenly' width='100%'>
              <Box display="flex" alignItems="center">
                <Box
                  style={{
                    border: '1px solid red',
                    background: 'white',
                    padding: '5px 20px',
                    marginRight: 20,
                    borderRadius: 20,
                  }}
                >
                  <Typography>ユーザーネーム</Typography>
                </Box>
                <Rating name="read-only" value={4} precision={0.5} readOnly />
              </Box>
              <Box
                style={{
                  border: '1px solid red',
                  background: 'white',
                  padding: '5px 20px',
                  borderRadius: 20,
                }}
              >
                <Typography>本人のユーザーがコメントを除きたいか</Typography>
              </Box>
            </Box>
          </Box>
          <Box width={120} display="flex" justifyContent="space-between">
            <Box>
              <CardMedia
                image="/images/chat.png"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                }}
              />
            </Box>
            <Box
              style={{
                borderRadius: 25,
              }}
            >
              <CardMedia
                image="/images/close.png"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    flexDirection: 'column',
  },
  content: {
    marginTop: '40px',
    width: 700,
    background: 'white',
    borderRadius: 40,
    border: '1px solid black',
    padding: 20,
  },
  item: {
    display: 'flex',
    margin: '10px 0px',
    '&>p': {
      fontSize: 20,
    },
    '&>p:first-child': {
      marginRight: 20,
      fontWeight: 600,
      minWidth: 140,
    },
  },
}));