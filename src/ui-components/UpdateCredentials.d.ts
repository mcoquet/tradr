/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Settings } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UpdateCredentialsInputValues = {
    credentials?: string;
};
export declare type UpdateCredentialsValidationValues = {
    credentials?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UpdateCredentialsOverridesProps = {
    UpdateCredentialsGrid?: FormProps<GridProps>;
    credentials?: FormProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type UpdateCredentialsProps = React.PropsWithChildren<{
    overrides?: UpdateCredentialsOverridesProps | undefined | null;
} & {
    id?: string;
    settings?: Settings;
    onSubmit?: (fields: UpdateCredentialsInputValues) => UpdateCredentialsInputValues;
    onSuccess?: (fields: UpdateCredentialsInputValues) => void;
    onError?: (fields: UpdateCredentialsInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: UpdateCredentialsInputValues) => UpdateCredentialsInputValues;
    onValidate?: UpdateCredentialsValidationValues;
}>;
export default function UpdateCredentials(props: UpdateCredentialsProps): React.ReactElement;
