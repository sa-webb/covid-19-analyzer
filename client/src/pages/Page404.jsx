import React from 'react';
import Link from '@material-ui/core/Link';

const page404 = () => {
    return (
        <>
            <h1>Page Not Found</h1>
            <Link href='/'>Home</Link>
            <p>Check the route..</p>
        </>
    );
};

export default page404;
