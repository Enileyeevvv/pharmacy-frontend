export const isLinkActive = (pathname: string, href: string) => {
  return pathname.includes(href) ? "" : "gray"
}
