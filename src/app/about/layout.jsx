import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <div className="">
        {/* Your content here */}
      <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;

