export default function Download({
  width,
  height,
  fill = 'white',
}: {
  width: number;
  height: number;
  fill?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M4 15.7044L4 19.3925C4 19.9514 4.21071 20.4875 4.58579 20.8827C4.96086 21.278 5.46957 21.5 6 21.5H18C18.5304 21.5 19.0391 21.278 19.4142 20.8827C19.7893 20.4875 20 19.9514 20 19.3925V15.7044M12.0011 3.5V15.4425M12.0011 15.4425L16.5725 10.8793M12.0011 15.4425L7.42969 10.8793"
        stroke={fill}
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
