/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreateSettingsInputValues = {
    credentials?: string;
};
export declare type CreateSettingsValidationValues = {
    credentials?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateSettingsOverridesProps = {
    CreateSettingsGrid?: FormProps<GridProps>;
    credentials?: FormProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type CreateSettingsProps = React.PropsWithChildren<{
    overrides?: CreateSettingsOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateSettingsInputValues) => CreateSettingsInputValues;
    onSuccess?: (fields: CreateSettingsInputValues) => void;
    onError?: (fields: CreateSettingsInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CreateSettingsInputValues) => CreateSettingsInputValues;
    onValidate?: CreateSettingsValidationValues;
}>;
export default function CreateSettings(props: CreateSettingsProps): React.ReactElement;
