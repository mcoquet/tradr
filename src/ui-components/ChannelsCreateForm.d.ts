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
export declare type ChannelsCreateFormInputValues = {
    name?: string;
};
export declare type ChannelsCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChannelsCreateFormOverridesProps = {
    ChannelsCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ChannelsCreateFormProps = React.PropsWithChildren<{
    overrides?: ChannelsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ChannelsCreateFormInputValues) => ChannelsCreateFormInputValues;
    onSuccess?: (fields: ChannelsCreateFormInputValues) => void;
    onError?: (fields: ChannelsCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ChannelsCreateFormInputValues) => ChannelsCreateFormInputValues;
    onValidate?: ChannelsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ChannelsCreateForm(props: ChannelsCreateFormProps): React.ReactElement;
