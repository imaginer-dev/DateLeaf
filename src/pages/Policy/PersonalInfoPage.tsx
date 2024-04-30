import { FC } from 'react';
import PolicyPageLayout from '../../layouts/PolicyPageLayout';
import PolicyPersonalInfo from '../../components/Policy/PolicyPersonalInfo';

const PersonalInfoPage: FC = () => {
  return (
    <PolicyPageLayout title="개인정보 처리방침">
      <PolicyPersonalInfo />
    </PolicyPageLayout>
  );
};

export default PersonalInfoPage;
