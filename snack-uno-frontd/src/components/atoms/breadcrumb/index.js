import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

type Props = {
  mock?: Array,
};
export default function Breadcrumb({ mock }: Props) {
  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {mock.map((mock, index) => (
          <Link underline="hover" key={index} color={mock.color} href={mock.href} >
            {mock.text}
          </Link>
        ))}
      </Breadcrumbs>
    </Stack>
  );
}

