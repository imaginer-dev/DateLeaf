import { FC } from 'react';
import PolicyPageLayout from '../../layouts/PolicyPageLayout';
import PolicyUseCondition from '../../components/Policy/PolicyUseCondition';

const UseConditionPage: FC = () => {
  return (
    <PolicyPageLayout title="전자상거래 표준약관">
      <PolicyUseCondition />
    </PolicyPageLayout>
  );
};

export default UseConditionPage;
