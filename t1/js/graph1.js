fetch('dataSet/myDataSet.json').then(res => res.json()).then(data => {
    const Graph = ForceGraph()
    (document.getElementById('graph'))
        .graphData(data)
        .nodeCanvasObject((data, ctx) => nodePaint(data, '#443433', ctx))


});


function nodePaint({id, name, x, y}, color, ctx) {
    let textSize = name.length * 4;


    ctx.fillStyle = 'CadetBlue';
    [
        () => {
            ctx.strokeRect(x - name.length, y - 6, (2 + textSize), 16);

        }, // rectangle
    ][0]();

    ctx.fillStyle = 'MidnightBlue';
    [
        () => {

            ctx.font = '10px arial bold';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';
            ctx.fillText(name, x - name.length, y);
        }, // rectangle
    ][0]();


}
