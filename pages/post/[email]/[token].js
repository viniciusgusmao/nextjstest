import React from 'react';
import { useRouter } from 'next/router';

function PostToken() {
  const router = useRouter();
  const { email, token } = router.query;
  return <h1>Post - {email} - {token}</h1>;
}

export default PostToken;