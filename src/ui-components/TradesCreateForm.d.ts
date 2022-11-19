/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TradesCreateFormInputValues = {
    token?: string;
    sls?: string[];
    tps?: string[];
    createdAt?: number;
    updatedAt?: number;
};
export declare type TradesCreateFormValidationValues = {
    token?: ValidationFunction<string>;
    sls?: ValidationFunction<string>;
    tps?: ValidationFunction<string>;
    createdAt?: ValidationFunction<number>;
    updatedAt?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TradesCreateFormOverridesProps = {
    TradesCreateFormGrid?: FormProps<GridProps>;
    token?: FormProps<TextFieldProps>;
    sls?: FormProps<TextFieldProps>;
    tps?: FormProps<TextFieldProps>;
    createdAt?: FormProps<TextFieldProps>;
    updatedAt?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TradesCreateFormProps = React.PropsWithChildren<{
    overrides?: TradesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TradesCreateFormInputValues) => TradesCreateFormInputValues;
    onSuccess?: (fields: TradesCreateFormInputValues) => void;
    onError?: (fields: TradesCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TradesCreateFormInputValues) => TradesCreateFormInputValues;
    onValidate?: TradesCreateFormValidationValues;
}>;
export default function TradesCreateForm(props: TradesCreateFormProps): React.ReactElement;
