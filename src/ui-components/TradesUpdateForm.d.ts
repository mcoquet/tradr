/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Trades } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TradesUpdateFormInputValues = {
    token?: string;
    sls?: string[];
    tps?: string[];
    createdAt?: number;
    updatedAt?: number;
};
export declare type TradesUpdateFormValidationValues = {
    token?: ValidationFunction<string>;
    sls?: ValidationFunction<string>;
    tps?: ValidationFunction<string>;
    createdAt?: ValidationFunction<number>;
    updatedAt?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TradesUpdateFormOverridesProps = {
    TradesUpdateFormGrid?: FormProps<GridProps>;
    token?: FormProps<TextFieldProps>;
    sls?: FormProps<TextFieldProps>;
    tps?: FormProps<TextFieldProps>;
    createdAt?: FormProps<TextFieldProps>;
    updatedAt?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TradesUpdateFormProps = React.PropsWithChildren<{
    overrides?: TradesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    trades?: Trades;
    onSubmit?: (fields: TradesUpdateFormInputValues) => TradesUpdateFormInputValues;
    onSuccess?: (fields: TradesUpdateFormInputValues) => void;
    onError?: (fields: TradesUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TradesUpdateFormInputValues) => TradesUpdateFormInputValues;
    onValidate?: TradesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TradesUpdateForm(props: TradesUpdateFormProps): React.ReactElement;
