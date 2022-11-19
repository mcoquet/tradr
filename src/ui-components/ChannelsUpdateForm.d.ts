/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Channels } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ChannelsUpdateFormInputValues = {
    name?: string;
};
export declare type ChannelsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChannelsUpdateFormOverridesProps = {
    ChannelsUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ChannelsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ChannelsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    channels?: Channels;
    onSubmit?: (fields: ChannelsUpdateFormInputValues) => ChannelsUpdateFormInputValues;
    onSuccess?: (fields: ChannelsUpdateFormInputValues) => void;
    onError?: (fields: ChannelsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ChannelsUpdateFormInputValues) => ChannelsUpdateFormInputValues;
    onValidate?: ChannelsUpdateFormValidationValues;
}>;
export default function ChannelsUpdateForm(props: ChannelsUpdateFormProps): React.ReactElement;
