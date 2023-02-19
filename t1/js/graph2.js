//consider spaces between nodes

fetch('dataSet/myDataSet.json').then(res => res.json()).then(data => {
    console.log(data);
    const Graph = ForceGraph()
    (document.getElementById('graph'))
        .graphData(data)
        .d3Force("charge", d3.forceManyBody().strength(-150))

       .linkWidth(5)
        .nodeCanvasObject((data, ctx,globalScale) => nodePaint(data, '#443433', ctx))
        .nodeRelSize(20)

        .linkDirectionalArrowLength(3)
        .linkDirectionalArrowRelPos(1)
        .linkCurvature('curvature')
        .linkCurveRotation('rotation');



});


function nodePaint({id, name, x, y}, color, ctx) {
    let textSize = name.length * 4;
     console.log({id,name,x,y})


    ctx.fillStyle = 'CadetBlue';
    [
        () => {
            ctx.strokeRect(x - name.length, y - 6, (2 + textSize), 16);
           // ctx.distance(50);


        },
        // rectangle
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
