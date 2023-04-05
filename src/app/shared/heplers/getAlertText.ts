import { errorsTransformer } from "../constants/errorsTransfromer";

export const getAlertText = (error: string) => {
     //@ts-ignore
     return errorsTransformer[error];
};
