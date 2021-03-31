import React from "react";
import { connect } from "react-redux";
import { getFullYear, getFooterCopy } from "../utils/utils";
import PropTypes from "prop-types";

function Footer({ user }) {
  return (
    <div className="footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {user && <a href="#">Contact us</a>}
    </div>
  );
}

Footer.defaultProps = {
  user: null,
};

Footer.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    user: state.get("user"),
  };
};

// export default Footer;
export default connect(mapStateToProps, null)(Footer);
