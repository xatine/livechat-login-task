import React from "react";
import styled from "styled-components";

const NotificationContainer = styled.div`
  background: ${props => props.theme.danger};
  color: ${props => props.theme.white};
  font-size: 14px;
  line-height: 24px;
  padding: 10px 15px;
  margin: 0;
  margin-bottom: 10px;
  border-radius: 4px;
`;

const Notification = ({ children }) => (
  <NotificationContainer>{children}</NotificationContainer>
);

export default Notification;
