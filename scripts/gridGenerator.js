export function gridHtml (width, height) {
    let html = '<div class="grid" style="display:flex; flex-direction:column; gap:10px; margin-bottom:10px; justify-content:center; align-items:center; padding:10px; background-color:blue ">'
    for (let i = 0; i < height; i++) {
        let row = '<div class="row" style="display:flex; flex-direction:row; gap:10px;">'
        for (let j = 0; j < width; j++) {
            const id = `${i},${j}`
            row += `<div class="cell" id=${id} style="background-color:red; width:60px; height:60px"></div>`
        }
        row += '</div>'
        html += row
    }
    return html
}