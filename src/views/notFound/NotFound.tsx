import React from "react";

import { Button, Result } from "../../utils/Desing";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button
          onClick={() => {
            navigate(localStorage.getItem("user") ? "/home" : "/");
          }}
          type="primary"
        >
          Back Home
        </Button>
      }
    />
  );
}

export default NotFound;
