var currentOp, op;

function fadein()
{
    op = document.getElementById('fadein');
    op.style.opacity = 1.0;

    currentOp = getComputedStyle(op).getPropertyValue("opacity");
    console.log(currentOp);
}


Window.onload = fadein();
