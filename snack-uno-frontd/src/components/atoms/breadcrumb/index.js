import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';

type Props = {
  breadcrumb?: Array,
};
export default function Breadcrumb({ breadcrumb }: Props) {
  return (
    <div style={{ padding: '25px 45px 0' }}>
      <Stack spacing={2}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumb.map((mock, index) => (
            <Link underline="hover" key={index} color={mock.color} href={mock.href} sx={{ display: 'flex', alignItems: 'center' }}>
              {mock.text === 'Inicial' ? <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" /> : ''}
              {mock.text}
            </Link>
          ))}
        </Breadcrumbs>
      </Stack>
    </div >
  );
}

