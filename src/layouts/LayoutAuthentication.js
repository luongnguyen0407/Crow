import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorBoundary from "../components/shung/ErrorBoundary";
const LayoutAuthentication = ({ children, heading }) => {
  return (
    <div className="relative min-h-screen p-6 lg:p-10 ">
      <img
        src="/ellipse.png"
        className="pointer-events-none z-[-1] bottom-0 left-0 right-0 absolute isolate"
        alt=""
      />
      <Link to={"/"} className="inline-block mb-8 lg:mb-12">
        <img srcSet="./logo.png 2x" alt="" />
      </Link>
      <div className="mx-auto max-w-[556px] w-full px-5 py-8 lg:px-12 lg:py-14 bg-white rounded-lg">
        <h2 className="mb-3 text-lg font-semibold text-center lg:text-xl">
          {heading}
        </h2>
        {children}
      </div>
    </div>
  );
};

LayoutAuthentication.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorBoundary,
});
