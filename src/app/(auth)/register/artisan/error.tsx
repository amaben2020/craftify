'use client';

const ErrorPage = ({ error, retry }: { error: Error; retry: () => void }) => {
  return <div>{error.message}</div>;
};

export default ErrorPage;
