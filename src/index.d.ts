import { IRootState } from "./redux";

declare module "react-redux" {
  interface DefaultRootState extends IRootState {}
}
