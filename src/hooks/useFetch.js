import { useState, useEffect } from "react";

export const useFetch = (serverService) => {
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    serverService().then((res) => {
      setState({
        data: res,
        loading: false,
      });
    });
  }, []);
  return state;
};
