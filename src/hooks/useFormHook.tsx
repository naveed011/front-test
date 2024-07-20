import * as Yup from 'yup';
import { useFormik, FormikHelpers } from 'formik';
import { PlayerProperties, UseFormHookReturn } from '../types/Player';

interface UseFormHookProps {
  createPlayer: (values: PlayerProperties, formikHelpers: FormikHelpers<PlayerProperties>) => Promise<void>;
}

export const useFormHook = ({ createPlayer }: UseFormHookProps): UseFormHookReturn => {
  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .required('First name is required')
      .min(2, 'First name is too short')
      .max(20, 'First name is too long'),
    lastname: Yup.string()
      .required('Last name is required')
      .min(2, 'Last name is too short')
      .max(20, 'Last name is too long'),
    birthday: Yup.string()
      .required('Birthday is required')
      .min(2, 'Birthday is too short')
      .max(20, 'Birthday is too long'),
    image: Yup.string()
      .required('Image URL is required')
      .min(2, 'Image URL is too short')
      .max(200, 'Image URL is too long')
  });

  const formik = useFormik<PlayerProperties>({
    initialValues: {
      firstname: '',
      lastname: '',
      birthday: '',
      image: '',
    },
    validationSchema,
    onSubmit: createPlayer,
  });

  return { ...formik };
};
