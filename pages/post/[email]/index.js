import React from 'react';
import { useRouter } from 'next/router';

// import { Container } from './styles';

function PostEmail() {
  const router = useRouter();
  const { email } = router.query;
  return <h1>Post - {email}</h1>;
}

export default PostEmail;