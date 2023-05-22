import React, { ChangeEvent, FormEvent, useRef, useEffect, useState } from 'react';
import { preventDefault } from '../../utils/react/preventDefault';
import styles from './commentform.css';

import { useFormik } from 'formik';

interface IAddressProps {
  value: string;
  onChange: (values: IValues) => void;
  onSubmit?: (e: FormEvent) => void;
}

interface IValues {
  comment: string;
}

interface IErrors {
  comment?: string | undefined;
}

export function CommentForm({ value, onChange }: IAddressProps) {
  // const [value, setValue] = useState('');
  // const [touched, setTouched] = useState(false);
  // const [valueError, setValueError] = useState('');

  const textRef = useRef<HTMLTextAreaElement>(null);

  const validate = (values: IValues) => {
    const errors: IErrors = {};
    if (values.comment.length <= 3) {
      errors.comment = 'Введите больше 3-х символов';
    }
    return errors;
  }

  const formik = useFormik({
    initialValues: {
      comment: value,
    },
    validateOnChange: false,
    validateOnBlur: false,
    validate,
    onSubmit: (values) => {
      // setTouched(true);
      console.log(JSON.stringify(values, null, 2));
      alert('Форма отправлена!');
      onChange(values);
    } 
  });

  return (
    <form className={styles.form} onSubmit={preventDefault(formik.handleSubmit)}>
      <textarea id="comment" name="comment" className={styles.input} value={formik.values.comment} onChange={formik.handleChange} ref={textRef} aria-invalid={formik.errors.comment ? 'true' : undefined} />
      {formik.errors.comment
        && (
          <div>
            {formik.errors.comment}
          </div>
        )
      }
      <button className={styles.button} type='submit'>Комментировать</button>
    </form>
  );
}
