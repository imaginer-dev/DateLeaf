import { FC } from 'react';
import PolicyUseCondition from '../../components/Policy/PolicyUseCondition';
import UseTermsPageLayout from '@/layouts/UseTermsPageLayout';

const UseConditionPage: FC = () => {
  return (
    <UseTermsPageLayout title="전자상거래 표준약관">
      <PolicyUseCondition />
    </UseTermsPageLayout>
  );
};

export default UseConditionPage;
