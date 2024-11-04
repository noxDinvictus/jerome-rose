'use client';

import { NextPage, NextPageContext } from 'next';

interface ErrorProps {
  statusCode?: number;
}

export const ErrorHandler: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  );
};

ErrorHandler.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
  let code: number;

  if (res) code = res.statusCode;
  else if (err) code = Number(err.statusCode);
  else code = 404;

  return { statusCode: code };
};

export default ErrorHandler;
