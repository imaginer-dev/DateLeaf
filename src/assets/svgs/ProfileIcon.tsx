const ProfileIcon = ({
  imageUrl,
  width = "49", // 기본 가로 크기
  height = "49", // 기본 세로 크기
  fill = "white" // 기본 색상
}: {
  imageUrl: string | null,
  width?: string,
  height?: string,
  fill?: string
}) => {
  return imageUrl === null ? (
    <svg width={width} height={height} viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.9349 41.947C45.5732 37.5762 48.4688 31.3762 48.4688 24.5C48.4688 11.2624 37.7376 0.53125 24.5 0.53125C11.2624 0.53125 0.53125 11.2624 0.53125 24.5C0.53125 31.3762 3.42681 37.5762 8.06512 41.947C12.3561 45.9906 18.1387 48.4688 24.5 48.4688C30.8613 48.4688 36.6439 45.9906 40.9349 41.947ZM10.1068 38.7886C13.4857 34.5738 18.6777 31.875 24.5 31.875C30.3223 31.875 35.5143 34.5738 38.8932 38.7886C35.219 42.4896 30.1271 44.7812 24.5 44.7812C18.8729 44.7812 13.781 42.4896 10.1068 38.7886ZM33.7188 17.125C33.7188 22.2164 29.5914 26.3438 24.5 26.3438C19.4086 26.3438 15.2812 22.2164 15.2812 17.125C15.2812 12.0336 19.4086 7.90625 24.5 7.90625C29.5914 7.90625 33.7188 12.0336 33.7188 17.125Z"
        fill={fill} // 동적으로 색상 변경
      />
    </svg>
  ) : (
    <div className="avatar overflow-hidden rounded-full">
      <div className="w-full rounded">
        <img src={imageUrl} alt="Profile" />
      </div>
    </div>
  );
};

export default ProfileIcon;
