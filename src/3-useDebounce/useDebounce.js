import useTimeout from "../2-useTimeout/useTimeout";
import { useEffect } from "react";

export default function useDebounce(callback, delay, dependencies) {
  const { clear, reset } = useTimeout(callback, delay);

  useEffect(reset, [...dependencies, reset]);
  //eslint-disable-next-line
  useEffect(clear, []);
}
