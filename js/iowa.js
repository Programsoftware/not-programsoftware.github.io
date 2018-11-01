$(document).ready(function(){
var test = $('#1')
var alea;
var convertindexval;
var rndnumbers = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
var finish = false;
var grid = [
    ["1","2","3","4"],
    ["5","6","7","8"],
    ["9","10","11","12"],
    ["13","14","15","16"]
];
var vgrid =[
    ["1","2","3","4"],
    ["1","2","3","4"],
    ["1","2","3","4"],
    ["1","2","3","4"]
];
const width = 150;
var i;
var k;

for (i =0; i<4; i++){
    for (k =0; k<4; k++){
alea=Math.floor(Math.random()*16);
while(rndnumbers[alea]){
    alea=Math.floor(Math.random()*16);
}
rndnumbers[alea]=true;
vgrid[i][k]=alea;
convertindexval=(i+1)*4-(4-(k+1));    
$('#'+convertindexval).text(vgrid[i][k]);
}
}
for (i =0; i<4; i++){
    for (k =0; k<4; k++){
        var l;
    if(vgrid[i][k]==0){
        l=(i+1)*4-(4-(k+1)); 
        $('#'+l).addClass('hide');
        grid[i][k]='-1'
     }
        
}
}

$('.btn').on('click', function(){
    var currentid =parseInt($(this).attr('id'));
    var x=1;
    var y=1;
    var i;    
    switch(currentid) {
        case 1:
        x=0;
        y=0;
        break;
        case 2:
        x=0;
        y=1;
        break;
        case 3:
        x=0;
        y=2;
        break;
        case 4:
        x=0;
        y=3;
        break;
        case 5:
        x=1;
        y=0;
        break;
        case 6:
        x=1;
        y=1;
        break;
        case 7:
        x=1;
        y=2;
        break;
        case 8:
        x=1;
        y=3;
        break;
        case 9:
        x=2;
        y=0;
        break;
        case 10:
        x=2;
        y=1;
        break;
        case 11:
        x=2;
        y=2;
        break;
        case 12:
        x=2;
        y=3;
        break;
        case 13:
        x=3;
        y=0;
        break;
        case 14:
        x=3;
        y=1;
        break;
        case 15:
        x=3;
        y=2;
        break;
        case 16:
        x=3;
        y=3;
        break;
    }
    
    

if(x>0 && grid[x-1][y]==-1){
    convertindexval=(x-1+1)*4-(4-(y+1));
    $('#'+convertindexval).removeClass('hide');
    
    $('#'+convertindexval).text(vgrid[x][y]);
    $(this).addClass('hide');
    grid[x-1][y]=grid[x][y];
    grid[x][y]=-1;
    vgrid[x-1][y]=vgrid[x][y];
    vgrid[x][y]=-1;
    testgagnant();
    
}else if(x<3 && grid[x+1][y]==-1){    
    convertindexval=(x+1+1)*4-(4-(y+1));
    $('#'+convertindexval).removeClass('hide');

    $('#'+convertindexval).text(vgrid[x][y]);    
    $(this).addClass('hide');
    grid[x+1][y]=grid[x][y];
    grid[x][y]=-1;
    vgrid[x+1][y]=vgrid[x][y];
    vgrid[x][y]=-1;
    testgagnant();
}else if(y<3 && grid[x][y+1]==-1){    
    convertindexval=(x+1)*4-(4-(y+1+1));
    $('#'+convertindexval).removeClass('hide');
    $('#'+convertindexval).text(vgrid[x][y]);
    $(this).addClass('hide');
    grid[x][y+1]=grid[x][y];
    grid[x][y]=-1;
    vgrid[x][y+1]=vgrid[x][y];
    vgrid[x][y]=-1;
    testgagnant();

}else if(y>0 && grid[x][y-1]==-1){
    convertindexval=(x+1)*4-(4-(y));
    $('#'+convertindexval).removeClass('hide');
    $('#'+convertindexval).text(vgrid[x][y]);    
    $(this).addClass('hide');
    grid[x][y-1]=grid[x][y];
    grid[x][y]=-1;
    vgrid[x][y-1]=vgrid[x][y];
    vgrid[x][y]=-1;
    testgagnant();
}
function testgagnant(){
    var i;
    var k;
    var a;
    var score=0;
    for (i =0; i<4; i++){
        for (k =0; k<4; k++){
            a++;
    if(vgrid[k][i]==a){
        score++;
    }

        }
        }
        if (score>=15){
            alert('u win, press f5 to play again.');
        } 
}



});

});
