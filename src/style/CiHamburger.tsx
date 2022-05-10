import { SVGProps } from "react";

export function CiHamburger(props: SVGProps<SVGSVGElement>) {
    return (
      <svg width="2em" height="2em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M21 18H3v-2h18v2Zm0-5H3v-2h18v2Zm0-5H3V6h18v2Z"></path></svg>
    )
  }