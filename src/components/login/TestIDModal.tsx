interface TestIDModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TestIDModal = ({ isOpen, onClose }: TestIDModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed right-64 top-1/2 z-[1000] -translate-y-1/2">
      <div className="w-80 rounded-lg bg-white p-8 text-center shadow-lg">
        <h3 className="mb-5 text-xl font-semibold">테스트 계정 안내</h3>
        <p className="mb-3 text-lg">이메일: test@test.com</p>
        <p className="mb-6 text-lg">비밀번호: 123456</p>
        <button
          onClick={onClose}
          className="mt-2 rounded bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600"
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default TestIDModal;
