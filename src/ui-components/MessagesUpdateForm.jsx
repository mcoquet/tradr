/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Messages } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextAreaField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function MessagesUpdateForm(props) {
  const {
    id,
    messages,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    rawMessage: undefined,
  };
  const [rawMessage, setRawMessage] = React.useState(
    initialValues.rawMessage
      ? JSON.stringify(initialValues.rawMessage)
      : undefined
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...messagesRecord };
    setRawMessage(cleanValues.rawMessage);
    setErrors({});
  };
  const [messagesRecord, setMessagesRecord] = React.useState(messages);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Messages, id) : messages;
      setMessagesRecord(record);
    };
    queryData();
  }, [id, messages]);
  React.useEffect(resetStateValues, [messagesRecord]);
  const validations = {
    rawMessage: [{ type: "JSON" }],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          rawMessage,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(
            Messages.copyOf(messagesRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "MessagesUpdateForm")}
    >
      <TextAreaField
        label="Raw message"
        isRequired={false}
        isReadOnly={false}
        defaultValue={rawMessage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              rawMessage: value,
            };
            const result = onChange(modelFields);
            value = result?.rawMessage ?? value;
          }
          if (errors.rawMessage?.hasError) {
            runValidationTasks("rawMessage", value);
          }
          setRawMessage(value);
        }}
        onBlur={() => runValidationTasks("rawMessage", rawMessage)}
        errorMessage={errors.rawMessage?.errorMessage}
        hasError={errors.rawMessage?.hasError}
        {...getOverrideProps(overrides, "rawMessage")}
      ></TextAreaField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex {...getOverrideProps(overrides, "RightAlignCTASubFlex")}>
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
