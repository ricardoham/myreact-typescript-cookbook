import Button from 'components/Button';
import React from 'react';
import { useAppDispatch } from 'hooks/redux-hooks/useRedux';
import { transitionStart } from '../../slices/transitionPageSlice';
import { TRANSITION_PAGE_ID } from 'constants/transition-page';

const StateManagementPage = () => {
  const dispatch = useAppDispatch();

  return (
    <section>
      <h3>In this section you can find an example of Redux use</h3>
      <Button
        text="Click Here to Navigate to Example"
        onClick={() =>
          dispatch(transitionStart(TRANSITION_PAGE_ID.SUPERMARKET_REDUX))
        }
      />
    </section>
  );
};

export default StateManagementPage;
