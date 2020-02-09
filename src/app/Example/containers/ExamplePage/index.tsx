import React from 'react';
import IntlTranslate from '@/common/utils/IntlTranslate';
import { connect } from 'react-redux';
import { add, remove } from '@/app/Example/actions';
import { Button, Value } from '@/app/Example/components';
import ButtonCancelIcon from '@/common/images/button-cancel-icon.png';
import ButtonOkIcon from '@/common/images/button-ok-icon.png';

type PropTypes = {
  addValue: (event: React.MouseEvent) => void;
  removeValue: (event: React.MouseEvent) => void;
  value: number;
};

const Page: React.FC<PropTypes> = ({ value, addValue, removeValue }) => (
  <div>
    <Button onClick={addValue} image={ButtonOkIcon}>
      <IntlTranslate id="button.add" />
    </Button>
    <Value>{value}</Value>
    <Button onClick={removeValue} image={ButtonCancelIcon}>
      <IntlTranslate id="button.remove" />
    </Button>
  </div>
);

const mapStateToProps = ({ example }: any) => {
  const { value } = example;
  return { value };
};

export default connect(mapStateToProps, {
  addValue: add,
  removeValue: remove,
})(Page);
