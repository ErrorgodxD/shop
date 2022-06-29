import AppStateContext from "../contexts/AppStateContext";
import { useContext } from "react";

export default function useOrders() {
  const { orders } = useContext(AppStateContext);

  return orders;
}
