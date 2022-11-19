/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Credentials } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function SetCredentials(props) {
  const {
    clearOnSuccess = true,
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
    apikey: undefined,
    apisecret: undefined,
    exchange: undefined,
  };
  const [apikey, setApikey] = React.useState(initialValues.apikey);
  const [apisecret, setApisecret] = React.useState(initialValues.apisecret);
  const [exchange, setExchange] = React.useState(initialValues.exchange);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setApikey(initialValues.apikey);
    setApisecret(initialValues.apisecret);
    setExchange(initialValues.exchange);
    setErrors({});
  };
  const validations = {
    apikey: [],
    apisecret: [],
    exchange: [],
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
          apikey,
          apisecret,
          exchange,
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
          await DataStore.save(new Credentials(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "SetCredentials")}
    >
      <TextField
        label="Apikey"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              apikey: value,
              apisecret,
              exchange,
            };
            const result = onChange(modelFields);
            value = result?.apikey ?? value;
          }
          if (errors.apikey?.hasError) {
            runValidationTasks("apikey", value);
          }
          setApikey(value);
        }}
        onBlur={() => runValidationTasks("apikey", apikey)}
        errorMessage={errors.apikey?.errorMessage}
        hasError={errors.apikey?.hasError}
        {...getOverrideProps(overrides, "apikey")}
      ></TextField>
      <TextField
        label="Apisecret"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              apikey,
              apisecret: value,
              exchange,
            };
            const result = onChange(modelFields);
            value = result?.apisecret ?? value;
          }
          if (errors.apisecret?.hasError) {
            runValidationTasks("apisecret", value);
          }
          setApisecret(value);
        }}
        onBlur={() => runValidationTasks("apisecret", apisecret)}
        errorMessage={errors.apisecret?.errorMessage}
        hasError={errors.apisecret?.hasError}
        {...getOverrideProps(overrides, "apisecret")}
      ></TextField>
      <SelectField
        label="Exchange"
        placeholder="Please select an option"
        isDisabled={false}
        value={exchange}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              apikey,
              apisecret,
              exchange: value,
            };
            const result = onChange(modelFields);
            value = result?.exchange ?? value;
          }
          if (errors.exchange?.hasError) {
            runValidationTasks("exchange", value);
          }
          setExchange(value);
        }}
        onBlur={() => runValidationTasks("exchange", exchange)}
        errorMessage={errors.exchange?.errorMessage}
        hasError={errors.exchange?.hasError}
        {...getOverrideProps(overrides, "exchange")}
      >
        <option
          children="Kucoin"
          value="KUCOIN"
          {...getOverrideProps(overrides, "exchangeoption0")}
        ></option>
        <option
          children="Binance"
          value="BINANCE"
          {...getOverrideProps(overrides, "exchangeoption1")}
        ></option>
        <option
          children="Bitget"
          value="BITGET"
          {...getOverrideProps(overrides, "exchangeoption2")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
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
