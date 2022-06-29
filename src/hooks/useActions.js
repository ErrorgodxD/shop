import AppStateContext from "../contexts/AppStateContext";
import { useContext } from "react";

export default function useActions() {
  const { addToOrder, remove, removeAll } = useContext(AppStateContext);

  return { addToOrder, remove, removeAll };
}
