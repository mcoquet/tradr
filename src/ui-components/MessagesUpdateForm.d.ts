/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Messages } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MessagesUpdateFormInputValues = {
    rawMessage?: string;
};
export declare type MessagesUpdateFormValidationValues = {
    rawMessage?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MessagesUpdateFormOverridesProps = {
    MessagesUpdateFormGrid?: FormProps<GridProps>;
    rawMessage?: FormProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type MessagesUpdateFormProps = React.PropsWithChildren<{
    overrides?: MessagesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    messages?: Messages;
    onSubmit?: (fields: MessagesUpdateFormInputValues) => MessagesUpdateFormInputValues;
    onSuccess?: (fields: MessagesUpdateFormInputValues) => void;
    onError?: (fields: MessagesUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: MessagesUpdateFormInputValues) => MessagesUpdateFormInputValues;
    onValidate?: MessagesUpdateFormValidationValues;
}>;
export default function MessagesUpdateForm(props: MessagesUpdateFormProps): React.ReactElement;
