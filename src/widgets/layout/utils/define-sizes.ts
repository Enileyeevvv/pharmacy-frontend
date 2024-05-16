export const defineSizesByAspectRatio = (
  aspectRatio: number,
  maxCols: number
) => {
  const mainSize = maxCols * aspectRatio
  const asideSize = maxCols - mainSize
  return { mainSize, asideSize }
}
