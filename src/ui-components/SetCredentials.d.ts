/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SetCredentialsInputValues = {
    apikey?: string;
    apisecret?: string;
    exchange?: string;
};
export declare type SetCredentialsValidationValues = {
    apikey?: ValidationFunction<string>;
    apisecret?: ValidationFunction<string>;
    exchange?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SetCredentialsOverridesProps = {
    SetCredentialsGrid?: FormProps<GridProps>;
    apikey?: FormProps<TextFieldProps>;
    apisecret?: FormProps<TextFieldProps>;
    exchange?: FormProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type SetCredentialsProps = React.PropsWithChildren<{
    overrides?: SetCredentialsOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SetCredentialsInputValues) => SetCredentialsInputValues;
    onSuccess?: (fields: SetCredentialsInputValues) => void;
    onError?: (fields: SetCredentialsInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SetCredentialsInputValues) => SetCredentialsInputValues;
    onValidate?: SetCredentialsValidationValues;
} & React.CSSProperties>;
export default function SetCredentials(props: SetCredentialsProps): React.ReactElement;
