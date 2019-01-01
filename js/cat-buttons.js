function subCat(x)
{
    if (x==1)
    document.getElementById('hoodies').style.display="block";
    else
    document.getElementById('hoodies').style.display="none";
    if (x==2)
    document.getElementById('t-shirts').style.display="block";
    else
    document.getElementById('t-shirts').style.display="none";
    if (x==3)
    document.getElementById('albums').style.display="block";
    else
    document.getElementById('albums').style.display="none";
    if (x==4)
    document.getElementById('posters').style.display="block";
    else
    document.getElementById('posters').style.display="none";
    return;
}
function reload() {
    location.reload();
  }