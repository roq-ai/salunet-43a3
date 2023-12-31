import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
  Center,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState, useRef } from 'react';
import * as yup from 'yup';
import useSWR from 'swr';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { getPrescriptionById, updatePrescriptionById } from 'apiSdk/prescriptions';
import { prescriptionValidationSchema } from 'validationSchema/prescriptions';
import { PrescriptionInterface } from 'interfaces/prescription';
import { PatientInterface } from 'interfaces/patient';
import { UserInterface } from 'interfaces/user';
import { getPatients } from 'apiSdk/patients';
import { getUsers } from 'apiSdk/users';

function PrescriptionEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const { data, error, isLoading, mutate } = useSWR<PrescriptionInterface>(
    () => (id ? `/prescriptions/${id}` : null),
    () => getPrescriptionById(id),
  );
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: PrescriptionInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await updatePrescriptionById(id, values);
      mutate(updated);
      resetForm();
      router.push('/prescriptions');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<PrescriptionInterface>({
    initialValues: data,
    validationSchema: prescriptionValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Prescriptions',
              link: '/prescriptions',
            },
            {
              label: 'Update Prescription',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Prescription
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <FormControl id="date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.date ? new Date(formik.values?.date) : null}
              onChange={(value: Date) => formik.setFieldValue('date', value)}
            />
          </FormControl>

          <TextInput
            error={formik.errors.medicine}
            label={'Medicine'}
            props={{
              name: 'medicine',
              placeholder: 'Medicine',
              value: formik.values?.medicine,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.dosage}
            label={'Dosage'}
            props={{
              name: 'dosage',
              placeholder: 'Dosage',
              value: formik.values?.dosage,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.duration}
            label={'Duration'}
            props={{
              name: 'duration',
              placeholder: 'Duration',
              value: formik.values?.duration,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<PatientInterface>
            formik={formik}
            name={'patient_id'}
            label={'Select Patient'}
            placeholder={'Select Patient'}
            fetcher={getPatients}
            labelField={'gender'}
          />
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'doctor_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/prescriptions')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'prescription',
    operation: AccessOperationEnum.UPDATE,
  }),
)(PrescriptionEditPage);
