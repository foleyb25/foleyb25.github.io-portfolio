
export async function generateTailwindCSS() {
    const res = await fetch('/assets/index.css')
    const cssContent = await res.text()
    return cssContent
}
