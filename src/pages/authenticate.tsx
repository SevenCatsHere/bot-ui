import React, { useEffect, useState, FC } from 'react';
import { CircularProgress, Backdrop } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import redoseClient from '../redose-client';

const AuthenticatePage: FC = function AuthenticatePage() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { sessionId } = useParams<{ sessionId: string }>();

  useEffect(() => {
    const ctrl = new AbortController();
    redoseClient.post(`/session/${sessionId}`, {
      signal: ctrl.signal,
    })
      .then(() => {
        navigate('/');
      })
      .catch(() => {
        enqueueSnackbar('Invalid session credentials.', {
          variant: 'error',
        });
        navigate('/unauthenticated');
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      ctrl.abort();
    };
  }, [sessionId]);

  return (
    <Backdrop
      open={isLoading}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default AuthenticatePage;
