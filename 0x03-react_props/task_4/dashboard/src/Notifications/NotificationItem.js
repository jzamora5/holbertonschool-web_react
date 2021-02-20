import React from "react";
import PropTypes from "prop-types";

function NotificationItem({ type, value, html }) {
  let listItem;

  if (value) {
    listItem = <li data-notification-type={type}>{value}</li>;
  } else {
    listItem = (
      <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
    );
  }

  return listItem;
}

NotificationItem.defaultProps = {
  type: "default",
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

export default NotificationItem;
