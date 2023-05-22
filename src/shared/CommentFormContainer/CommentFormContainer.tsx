import React, {ChangeEvent, FormEvent, useRef, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStoreActions, useStoreState } from '../../easyStore';
import { RootState, updateComment } from '../../store/reducer';
import { CommentForm } from '../CommentForm/CommentForm';

interface IValues {
  comment: string;
}

export function CommentFormContainer() {
  const valueState = useStoreState((state) => state.commentText);

  const textRef = useRef<HTMLTextAreaElement>(null);

  const updateComment = useStoreActions((actions) => actions.updateComment);

  const handleChange = (values: IValues) => {
    updateComment(values.comment);
  }

  // const handleSubmit = (e: FormEvent) => {
  //   console.log(valueState);
  // }

  return (
    <CommentForm
      value={valueState}
      onChange={handleChange}
    />
  );
}
