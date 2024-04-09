export default function Satisfaction({
  width,
  height,
  fill = '#FFCC00',
}: {
  width: number;
  height: number;
  fill?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 29 28"
      fill="none"
    >
      <path
        d="M11.14 10.64V9.64005C10.5877 9.64005 10.14 10.0878 10.14 10.64H11.14ZM11.2515 10.64H12.2515C12.2515 10.0878 11.8038 9.64005 11.2515 9.64005V10.64ZM17.86 10.64V9.64005C17.3077 9.64005 16.86 10.0878 16.86 10.64H17.86ZM17.9592 10.64H18.9592C18.9592 10.0878 18.5114 9.64005 17.9592 9.64005V10.64ZM11.2515 10.7297V11.7297C11.8038 11.7297 12.2515 11.282 12.2515 10.7297H11.2515ZM11.14 10.7297H10.14C10.14 11.282 10.5877 11.7297 11.14 11.7297V10.7297ZM17.9592 10.7297V11.7297C18.5114 11.7297 18.9592 11.282 18.9592 10.7297H17.9592ZM17.86 10.7297H16.86C16.86 11.282 17.3077 11.7297 17.86 11.7297V10.7297ZM11.4675 16.8794C11.1769 16.4098 10.5605 16.2648 10.0909 16.5554C9.62134 16.8461 9.4763 17.4625 9.76698 17.9321L11.4675 16.8794ZM19.233 17.9321C19.5237 17.4625 19.3786 16.8461 18.909 16.5554C18.4394 16.2648 17.8231 16.4098 17.5324 16.8794L19.233 17.9321ZM24.7 14C24.7 19.6334 20.1333 24.2 14.5 24.2V26.2C21.2379 26.2 26.7 20.7379 26.7 14H24.7ZM14.5 24.2C8.86668 24.2 4.29999 19.6334 4.29999 14H2.29999C2.29999 20.7379 7.76211 26.2 14.5 26.2V24.2ZM4.29999 14C4.29999 8.36674 8.86668 3.80005 14.5 3.80005V1.80005C7.76211 1.80005 2.29999 7.26217 2.29999 14H4.29999ZM14.5 3.80005C20.1333 3.80005 24.7 8.36674 24.7 14H26.7C26.7 7.26217 21.2379 1.80005 14.5 1.80005V3.80005ZM11.14 11.64H11.2515V9.64005H11.14V11.64ZM17.86 11.64H17.9592V9.64005H17.86V11.64ZM10.2515 10.64V10.7297H12.2515V10.64H10.2515ZM11.2515 9.72974H11.14V11.7297H11.2515V9.72974ZM12.14 10.7297V10.64H10.14V10.7297H12.14ZM16.9592 10.64V10.7297H18.9592V10.64H16.9592ZM17.9592 9.72974H17.86V11.7297H17.9592V9.72974ZM18.86 10.7297V10.64H16.86V10.7297H18.86ZM14.5 18.6C13.237 18.6 12.1143 17.9243 11.4675 16.8794L9.76698 17.9321C10.7534 19.5256 12.4983 20.6 14.5 20.6V18.6ZM17.5324 16.8794C16.8856 17.9243 15.763 18.6 14.5 18.6V20.6C16.5017 20.6 18.2466 19.5256 19.233 17.9321L17.5324 16.8794Z"
        fill={fill}
      />
    </svg>
  );
}