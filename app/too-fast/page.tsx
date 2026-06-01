import React from "react";

const page = () => {
  return (
    <div className="root-container flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="font-bebas-neue text-5xl font-bold text-light-100">
        Whoa, Slow Down There, Speedy!
      </h1>
      <p className="mt-3 max-w-xl text-center">
        Looks like you're trying to access a page too quickly. Please slow down
        and try again later.
      </p>
    </div>
  );
};

export default page;
