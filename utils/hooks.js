import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export const useMessageAndErrorUser = (
  navigation,
  dispatch,
  naviateTo = "login"
) => {
  const { loading, message, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: error,
      });
      dispatch({
        type: "clearError",
      });
    }
    if (message) {
      navigation.reset({
        index: 0,
        routes: [{ name: naviateTo }],
      });
      Toast.show({
        type: "success",
        text1: message,
      });
      dispatch({
        type: "clearMessage",
      });
    }
  }, [error, message, dispatch]);

  return loading;
};
