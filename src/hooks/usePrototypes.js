import AppStateContext from "../contexts/AppStateContext";
import { useContext } from "react";

export default function usePrototypes() {
  const { prototypes } = useContext(AppStateContext);

  return prototypes;
}
