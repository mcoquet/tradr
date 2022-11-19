/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Trades } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
}) {
  const { tokens } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      (currentFieldValue !== undefined ||
        currentFieldValue !== null ||
        currentFieldValue !== "") &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  return (
    <React.Fragment>
      {isEditing && children}
      {!isEditing ? (
        <>
          <Text>{label}</Text>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            color={tokens.colors.brand.primary[80]}
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
}
export default function TradesCreateForm(props) {
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
    token: undefined,
    sls: [],
    tps: [],
    createdAt: undefined,
    updatedAt: undefined,
  };
  const [token, setToken] = React.useState(initialValues.token);
  const [sls, setSls] = React.useState(initialValues.sls);
  const [tps, setTps] = React.useState(initialValues.tps);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setToken(initialValues.token);
    setSls(initialValues.sls);
    setCurrentSlsValue(undefined);
    setTps(initialValues.tps);
    setCurrentTpsValue(undefined);
    setCreatedAt(initialValues.createdAt);
    setUpdatedAt(initialValues.updatedAt);
    setErrors({});
  };
  const [currentSlsValue, setCurrentSlsValue] = React.useState(undefined);
  const slsRef = React.createRef();
  const [currentTpsValue, setCurrentTpsValue] = React.useState(undefined);
  const tpsRef = React.createRef();
  const validations = {
    token: [],
    sls: [],
    tps: [{ type: "Required" }],
    createdAt: [{ type: "Required" }],
    updatedAt: [],
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
          token,
          sls,
          tps,
          createdAt,
          updatedAt,
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
          await DataStore.save(new Trades(modelFields));
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
      {...getOverrideProps(overrides, "TradesCreateForm")}
    >
      <TextField
        label="Token"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              token: value,
              sls,
              tps,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.token ?? value;
          }
          if (errors.token?.hasError) {
            runValidationTasks("token", value);
          }
          setToken(value);
        }}
        onBlur={() => runValidationTasks("token", token)}
        errorMessage={errors.token?.errorMessage}
        hasError={errors.token?.hasError}
        {...getOverrideProps(overrides, "token")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              token,
              sls: values,
              tps,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            values = result?.sls ?? values;
          }
          setSls(values);
          setCurrentSlsValue(undefined);
        }}
        currentFieldValue={currentSlsValue}
        label={"Sls"}
        items={sls}
        hasError={errors.sls?.hasError}
        setFieldValue={setCurrentSlsValue}
        inputFieldRef={slsRef}
        defaultFieldValue={undefined}
      >
        <TextField
          label="Sls"
          isRequired={false}
          isReadOnly={false}
          value={currentSlsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.sls?.hasError) {
              runValidationTasks("sls", value);
            }
            setCurrentSlsValue(value);
          }}
          onBlur={() => runValidationTasks("sls", currentSlsValue)}
          errorMessage={errors.sls?.errorMessage}
          hasError={errors.sls?.hasError}
          ref={slsRef}
          {...getOverrideProps(overrides, "sls")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              token,
              sls,
              tps: values,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            values = result?.tps ?? values;
          }
          setTps(values);
          setCurrentTpsValue(undefined);
        }}
        currentFieldValue={currentTpsValue}
        label={"Tps"}
        items={tps}
        hasError={errors.tps?.hasError}
        setFieldValue={setCurrentTpsValue}
        inputFieldRef={tpsRef}
        defaultFieldValue={undefined}
      >
        <TextField
          label="Tps"
          isRequired={true}
          isReadOnly={false}
          value={currentTpsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.tps?.hasError) {
              runValidationTasks("tps", value);
            }
            setCurrentTpsValue(value);
          }}
          onBlur={() => runValidationTasks("tps", currentTpsValue)}
          errorMessage={errors.tps?.errorMessage}
          hasError={errors.tps?.hasError}
          ref={tpsRef}
          {...getOverrideProps(overrides, "tps")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Created at"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        onChange={(e) => {
          const date = new Date(e.target.value);
          if (!(date instanceof Date && !isNaN(date))) {
            setErrors((errors) => ({
              ...errors,
              createdAt: "The value must be a valid date",
            }));
            return;
          }
          let value = Number(date);
          if (onChange) {
            const modelFields = {
              token,
              sls,
              tps,
              createdAt: value,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <TextField
        label="Updated at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        onChange={(e) => {
          const date = new Date(e.target.value);
          if (!(date instanceof Date && !isNaN(date))) {
            setErrors((errors) => ({
              ...errors,
              updatedAt: "The value must be a valid date",
            }));
            return;
          }
          let value = Number(date);
          if (onChange) {
            const modelFields = {
              token,
              sls,
              tps,
              createdAt,
              updatedAt: value,
            };
            const result = onChange(modelFields);
            value = result?.updatedAt ?? value;
          }
          if (errors.updatedAt?.hasError) {
            runValidationTasks("updatedAt", value);
          }
          setUpdatedAt(value);
        }}
        onBlur={() => runValidationTasks("updatedAt", updatedAt)}
        errorMessage={errors.updatedAt?.errorMessage}
        hasError={errors.updatedAt?.hasError}
        {...getOverrideProps(overrides, "updatedAt")}
      ></TextField>
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
