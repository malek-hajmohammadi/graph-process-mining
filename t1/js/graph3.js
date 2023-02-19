//consider spaces between nodes

fetch('dataSet/myDataSet.json').then(res => res.json()).then(data => {
    const Graph = ForceGraph()
    (document.getElementById('graph'))
        .graphData(data)
        .nodeRelSize(500)

        .linkWidth(5)
        .nodeCanvasObject((data, ctx,globalScale) =>{
           // console.log(data.name);

            const label = data.name || '';
            const fontSize = 12 / globalScale;

            // Draw the node as a rectangle
            const width = ctx.measureText(label).width + 10;
            const height = fontSize + 10;
            const x = -width / 2;
            const y = -height / 2;

            ctx.fillStyle = data.color;
            ctx.fillRect(x, y, width, height);

            // Draw the node label
            ctx.font = `${fontSize}px Sans-Serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#FFF';
            ctx.fillText(label, 0, 0);
        } )
        .nodeRelSize(5)


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
