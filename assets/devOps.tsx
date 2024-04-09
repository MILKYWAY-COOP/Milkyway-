export default function DevOps({
  fill = '#FFCC00',
  width,
  height,
}: {
  fill?: string;
  width: number;
  height: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        d="M27.6569 20.3431C24.5327 17.219 19.4673 17.219 16.3431 20.3431L8.34315 28.3431C5.21895 31.4673 5.21895 36.5327 8.34315 39.6569C11.4673 42.781 16.5327 42.781 19.6569 39.6569L21.86 37.4537M20.3431 27.6569C23.4673 30.781 28.5327 30.781 31.6569 27.6569L39.6569 19.6569C42.781 16.5327 42.781 11.4673 39.6569 8.34315C36.5327 5.21895 31.4673 5.21895 28.3431 8.34315L26.1439 10.5424"
        stroke={fill}
        stroke-width="2.22857"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
