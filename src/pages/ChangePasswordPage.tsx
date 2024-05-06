import ChangePasswordForm from '@/components/ChangePassword/ChangePasswordForm';
import HistoryBackButton from '@/components/common/HistoryBackButton';
import ChangePasswordPageLayout from '@/layouts/ChangePasswordPageLayout';

const ChangePasswordPage = () => {
  return (
    <ChangePasswordPageLayout>
      <nav className="px-5 py-2.5">
        <HistoryBackButton />
      </nav>
      <ChangePasswordForm />
    </ChangePasswordPageLayout>
  );
};

export default ChangePasswordPage;
